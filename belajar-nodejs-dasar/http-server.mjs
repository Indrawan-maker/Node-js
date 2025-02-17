import http from "http"

const server = http.createServer((request, response) => {
    console.info(request.method)
    console.info(request.url)



    if (request.method === "POST") {
        request.addListener("data", (data) => {
            response.setHeader("Content-type", "application/json")
            response.write(data)
            response.end()
        })
    } else {
        if (request.url === "/eko") {
            response.write("Ini bagian Eko")
        } else {
            response.write("Ini bagian web default")
        }

        response.end()
    }

})

server.listen(3000)

