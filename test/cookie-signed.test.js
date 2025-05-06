import express from "express"
import request from "supertest"
import cookieParser, { signedCookie } from "cookie-parser"


const app = express()
app.use(cookieParser("CONTOHRAHASIA"))
app.use(express.json())

app.get('/', (req, res) => {
    const name = req.signedCookies["Login"]
    res.send(`Hello ${name}`)
})

app.post('/login', (req, res) => {
    const name = req.body.name
    res.cookie("Login", name, {path: "/", signed: true})
    res.send(`Hello ${name}`)
})

test("Test cookie read", async () => {
    const response = await request(app).get("/")
    .set("Cookie", "Login=s%3AEko.2ksXFOvr5Huoc1uMy1MX1eN8QSHhzacOQV03RceZI88;author= programmer zaman now")
    expect(response.text).toBe("Hello Eko")
})

test("Test cookie write", async () => {
    const response = await request(app).post("/login")
        .send({name: "Eko"})
        console.info(response.get("Set-Cookie"))
        expect(response.get("Set-Cookie").toString()).toContain("Eko");
        expect(response.text).toBe("Hello Eko")
})