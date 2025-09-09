// function --> first class citizen

// assign fuction as an argument
let greet1 =function(){
    console.log("Greeting");
}
greet1();

//pass function as an Argument
function greetMe(greet,fullname){
    console.log("hello",fullname);
    greet();
}
function greet(){
    console.log("greeting of the day");
}
greetMe(greet,"babber");

//Return function
function solve(number){
    return function(number){
        return number*number;
    }
}
let ans=solve(5);

//use function in data structure
const arr=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function (a,b){
        return a*b;
    },
    function(a,b){
        return a/b;
    }

];
let first =arr[0];
let ans1=first(5,10);
console.log(ans1);

let second=arr[1];
let ans2=second(5,10);
console.log(ans2);
