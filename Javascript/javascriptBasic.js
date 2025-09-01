// var a=20;
// var a=10;
// console.log(a);

//fuctions in javavscript
function solve(){
    console.log("hello world");
}
// solve();
let a=solve();
console.log(typeof(a));

let b=2;
let c=(b<0)?true:false;
console.log(c);
console.log(false&&"baber");

let key=2

switch (key) {
    case 1:
        console.log("h")
        break;
    case 2:
        console.log("e");

    

    default:
        break;
}
let op ="english";
let op1="hindi";
let final=op+op1;
console.log(final);
let upper=final.toUpperCase();
console.log(upper);
let lower= final.toLowerCase();
console.log(lower);

let sub=final.substring(1,4);
console.log(sub);

//plain function
function getsum(a,b,c){
    let sum=a+b+c;
    return sum;
}
let s=getsum(1,2,3);
console.log(s);

let s1=getsum("he","ll","o");
console.log(s1);

//declared function
let getMultiplication=function(a,b){
    return a*b;
}

let ans=getMultiplication(2,5);
console.log(ans);

function squares(num){
    let sq=num**2;
    return sq;

}
console.log(squares(34));

let square=function(num){
    return num**2;
}
console.log(square(45));


//arrow function
function getExp(x,y){
    return x**y; //plain function
}

let getpow=(x,y)=>{//arrow function
    return x**y;
}
console.log(getpow(2,3));



