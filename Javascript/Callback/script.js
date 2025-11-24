// Asynchronus nature of javascript
console.log("harry is a hacker")
console.log("Rohan is hecker")

setTimeout(()=>{
    console.log("i am inside set timeout")
},0);

setTimeout(()=>{
    console.log("i am inside set timeout2")
},0);
console.log("The End")


const fn=()=>{
    console.log("Nothing")
}

const callback=(arg,fn)=>{
    console.log(arg)
    fn()
}
const loadScript=(src,callback)=>{
    let sc=document.createElement("script");
    sc.src = src;
    sc.onload=callback("Harry",fn);
    document.head.append(sc)
      
    }
    

    
