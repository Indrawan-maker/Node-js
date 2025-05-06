function samplePromise(){
    return Promise.result("Eko")
}

async function run(){
    const name = await samplePromise()
    console.info(name)
}

run()
