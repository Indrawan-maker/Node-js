import util from "util"


const firstName = "Indrawan"
const lastName = "Ismail"
console.info(`Hello ${firstName} ${lastName}`)

console.info(util.format("Hello %s %s", firstName, lastName))

const person = {
    firstName: "Eko",
    lastName: "Khannedy"
}

console.info(`Person ${JSON.stringify(person)}`)

console.info(util.format("Person: %j", person))

util.promisify()