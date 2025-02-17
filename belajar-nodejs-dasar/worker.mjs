import {threadId, parentPort} from "worker_threads"

parentPort.addListener("message", (message) => {
    for (let i = 0; i < message; i++){
        console.info(`thread id -${threadId} send to ${i}`)
        parentPort.postMessage(i)

    }
    parentPort.close()
})

