import express from "express"
import request from "supertest"
import expressFileUpload from "express-fileupload"
import mustacheExpress  from "mustache-express"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(expressFileUpload())

app.post('/json', (req, res) => {
    const name = req.body.name
    res.json({
        hello: `Hello ${name}`
    })
})

app.post('/form', (req, res) => {
    const name = req.body.name
    res.json({
        hello: `Hello ${name}`
    })
})

app.post('/file', async (req,res) => {
    const textFile = req.files.article;
    await textFile.mv(__dirname + "/upload/" + textFile.name)

    res.send(`Hello ${req.body.name}, you uploaded ${textFile.name}`)
})

test("Test request file upload", async () => {
    const response = await request(app)
    .post("/file")
    .set("Content-Type" , "multipart/form-data")
    .field("name" , "eko")
    .attach("article", __dirname + "/contoh.txt")
    
    expect(response.text).toBe("Hello eko, you uploaded contoh.txt")
})

test("Test request JSON", async () => {
    const response = await request(app)
    .post("/json")
    .set("Content-Type", "application/json")
    .send({name: "World"})
    expect(response.body).toEqual({
        hello: "Hello World"
    })
})

test("Test request Form", async () => {
    const response = await request(app)
    .post("/form")
    .set("Content-Type", "application/x-www-form-urlencoded")
    .send({name : "World"})

    expect(response.body).toEqual({
        hello: 'Hello World'
    })
})