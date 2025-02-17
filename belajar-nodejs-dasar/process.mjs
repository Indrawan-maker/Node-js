import process from "process"

process.addListener("exit" , (exitCode) => {
    console.info(`node JS Exit with code ${exitCode}`)
})

console.info(process.version)
console.table(process.argv)
console.table(process.env)
console.table(process.report)

process.exit(1)

console.info("Hello")
