import timers from "timers/promises"


// console.info(`halo ${new Date()}`)
// const name = await timers.setTimeout(5000, "INDRA")

// console.info(`halo indra ${new Date()}`)

// console.info(name)


for await (const startTime of timers.setInterval(4000)){
    console.info(`start new time setInterval ${new Date()}`)
}