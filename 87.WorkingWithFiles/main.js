const fs=require('fs')

console.log(fs)

console.log("Starting")
// fs.writeFileSync("harry.txt","This is harry file,")

fs.writeFile("harry2.txt","This is harry2 file,", ()=>{ 
    console.log("done")
    fs.readFile("harry2.txt",(err,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("harry.txt","harryrobo",(e,d)=>{
    console.log(d)
})
console.log("ending")
