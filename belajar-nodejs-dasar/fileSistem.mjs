import fs from 'fs/promises'
const buffer = await fs.readFile("file-sistem.mjs")

console.info(buffer.toString())

await fs.writeFile("temp.txt" , "Hello NodeJS")

