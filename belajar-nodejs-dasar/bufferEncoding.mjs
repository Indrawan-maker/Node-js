const buffer = Buffer.from("Muhammad Indrawan Ismail", "utf8")

console.info(buffer.toString())
console.info(buffer.toString("hex"))
console.info(buffer.toString("base64"))

const bufferBase64 = Buffer.from("TXVoYW1tYWQgSW5kcmF3YW4gSXNtYWls", "base64")

console.info(bufferBase64.toString("utf8"))
