import url from "url"

const ub = new URL("https://www.ub.ac.id/id/")

ub.host = "www.KampusPunyaIndra.com"
ub.searchParams.append("status", "premium")

console.info(ub.hash)
console.info(ub.hostname)
console.info(ub.toString())
console.info(ub)
console.info(ub.port)
console.info(ub.host)
console.info(ub.protocol)
console.info(ub.searchParams)
console.info(ub.origin)
console.info(ub.search)
