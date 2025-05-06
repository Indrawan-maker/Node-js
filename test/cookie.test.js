import express from "express"
import request from "supertest"
import cookieParser from "cookie-parser"


const app = express()
app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => {
    const name = req.cookies["name"]
    res.send(`Hello ${name}`)
})

app.post('/login', (req, res) => {
    const name = req.body.name
    res.cookie("Login", name, {path: "/"})
    res.send(`Hello ${name}`)
})

test("Test cookie read", async () => {
    const response = await request(app).get("/")
    .set("Cookie", "name=Eko;author= programmer zaman now")
    expect(response.text).toBe("Hello Eko")
})

test("Test cookie write", async () => {
    const response = await request(app).post("/login")
        .send({name: "Eko"})
        expect(response.get("Set-Cookie").toString()).toBe("Login=Eko; Path=/");
        expect(response.text).toBe("Hello Eko")
})