// // object
// let obj={name:"babber",
//     age:25,
//      weight:85,
//      greet:function(){
//         console.log("hello")}
// //      };
// // console.log(obj);
// let arr=[1,2,3,4];
// console.log(arr);

let brr=new Array(1,2,3,4);
console.log(brr[2]);

// console.log(brr.slice(1,));
// brr.splice(1,1,"abhi");
// console.log(brr);

let crr=brr.map((number)=>{
    return number*number;
})
console.log(crr);