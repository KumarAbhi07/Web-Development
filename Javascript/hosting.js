//fuction hosting--> while compiling fuction automatically shifted to  the top of the current block of code. 

sayMyname("Abhimanyu Kumar")
function sayMyname(name){
    console.log(name);
}

//variable hosting -->possible only in var keyword-> in this hosting only variable declaration moves to top of the block of code
//var age; -->only declaration part is move to top of code.

console.log(age);
var age =25;

//hosting in let,cons keyword is not possible

// console.log(a);
// let a=2;

//temporal dead zone
console.log(marks);
console.log("babber");
console.log("Love");
const marks=100;
// console.log(marks);



