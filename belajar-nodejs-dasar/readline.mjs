import readline from "readline"
import process from "process"

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

input.question("please add your name here", (name) => {
    console.info(`Hello ${name} agen shopee here, what can i help?`)
    input.close()
})