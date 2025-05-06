import net from "net"

// client bentuknya eventEmitter
const client = net.createConnection({
    port:3000,
    host:"localhost"
})

// data bentuknya buffer
client.addListener("data", (data) => {
    console.info(`Receive data from Server ${data.toString()}`)

})

setInterval(() => {
    client.write(`${process.argv[2]}\r\n`)
}, 2000)

