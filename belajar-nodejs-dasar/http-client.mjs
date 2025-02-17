import https from 'https'

const endpoint = "https://eoejdv2qlv2w1vv.m.pipedream.net"
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "content-type" : "application/json",
        "accept" : "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`receive data : ${data.toString()}`)
    })
})
const body = JSON.stringify({
    firstName: "Indrawan",
    lastName: "Ismail"
    
})


request.write(body)
request.end()