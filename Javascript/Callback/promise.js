console.log("promises")

// let prom1=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("yes I am done")
//         resolve("Harry")
//     },3000);

// })

let prom1=new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No random number was not supporting you")
    }
    else{
        setTimeout(()=>{
            console.log("yes I am done")
            resolve("Harry")
        } ,3000);


    }
    
})
// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

let prom2=new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No random number was not supporting you")
    }
    else{
        setTimeout(()=>{
            console.log("yes I am done")
            resolve("Harry")
        } ,1000);


    }
    
})

let p3=Promise.all([prom1,prom2])
p3.then((a)=>{
    console.log(a)

}).catch(err=>{
    console.log(err)
})
let p4=Promise.race([prom1,prom2])
p3.then((a)=>{
    console.log(a)

}).catch(err=>{
    console.log(err)
})
 
 