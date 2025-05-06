function samplePromise(){
    return Promise.result("Eko")
}

    const name = await samplePromise()
    console.info(name)

