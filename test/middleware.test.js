import express from "express"
import request from "supertest"

const logger = (req, res, next) => {
    console.info(`receive request: ${req.method} ${req.originalUrl}`)
    next();
}

const addPoweredHeader = (req, res, next) => {
    res.set("X-Powered-By", "Muhammad Indrawan Ismail")
    next()
}

const apiKeyMiddleware = (req, res, next) => {
    if(req.query.apiKey){
        next();
    } else {
        res.status(401).end()
    }
}

const requestTimeMiddleware = (req, res, next) => {
    req.requestTime = Date.now();
    next();
}

const app = express()

app.use(logger)
app.use(apiKeyMiddleware)
app.use(addPoweredHeader)
app.use(requestTimeMiddleware)


app.get('/', (req, res) => {
    res.send(`Hello Response`)
})

app.get('/indra', (req, res) => {
    res.send(`Hello indra`)
})

app.get("/time", (req, res) => {
    res.send(`Hello, today is ${req.requestTime}`)
})

test("test response middleware", async () => {
    const response = await request(app).get("/").query({apiKey: "123"})
    expect(response.get("X-Powered-By")).toBe("Muhammad Indrawan Ismail")
    expect(response.text).toBe("Hello Response")
})
test("test response middleware name", async () => {
    const response = await request(app).get("/indra").query({apiKey: "123"})
    expect(response.get("X-Powered-By")).toBe("Muhammad Indrawan Ismail")
    expect(response.text).toBe("Hello indra")
})
test("test response middleware unauthorize", async () => {
    const response = await request(app).get("/indra")
    expect(response.status).toBe(401)
})
test("test response middleware Time", async () => {
    const response = await request(app).get("/time").query({apikey: "123"});
    expect(response.get("X-Powered-By")).toBe("Muhammad Indrawan Ismail")
    expect(response.text).toContain("Hello, today is")
})