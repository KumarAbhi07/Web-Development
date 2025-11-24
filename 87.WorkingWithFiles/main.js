const fs=require('fs')

console.log(fs)

console.log("Starting")
// fs.writeFileSync("harry.txt","This is harry file,")

fs.writeFile("harry2.txt","This is harry2 file,", ()=>{ 
    console.log("done")
})
console.log("ending")
