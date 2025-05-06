import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/indra', (req, res) => {
    res.send("Hello Indra")
})

app.listen(3000, () => {
    console.info(`app start running on port 3000 SUCCES!`)
})
