import fs from "fs/promises"

let a= await fs.readFile("harry.txt")
 
let b = await fs.writeFile("harry.txt","\n\n\n\n\ this is amazing promise")
console.log(a.toString(),b)