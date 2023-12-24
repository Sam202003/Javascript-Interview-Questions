// Functions in Javascript

//Q1. What is function Decalrations ?

// function square(){
//     return num * num ;
// }

//2Q. What is function expression ?
// - when uh store a function inside a variable its a function expression

// const square = function(num){
//     return num * num ;
// };
// // square();
// console.log(square(5))


//3Q. What are first class functions ? 
//In a language where functions can be treated as variables those are called first class functions.

// function displaySquare(fn){
//     console.log("Square is "+fn(5))
// }

//Q.4 What is IIFE?
//IIFE means Immeadiately invoked function expressions. 

// (function square(num){
//    console.log(num * num);
// })(5);

// Output Based Question
// Solution: Here, first it will search for x in the local scope and if it doesnt finds it there then it will search for parent scope hence will get 1 as the output. This is possible becoz of Closures.
// (function (x){
//     return(function(y){
//         console.log(x); //1
//     })(2);  
//  })(1);


 //Closures : The ability of a fn to access variables and functions that are lexically out of its scope are called closures.

 //function Scope 
 //Q7 - Output based Question

//  for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     }, i*1000);
//  }


//function Hoisting 
// Samruddhi();
// function Samruddhi(){
//     console.log("SAmruddhi Chavan");
// }


// console.log(x);
// var x = 5;

//Q. Params Vs Arguments:

// function square(num){ //num is params here
//     console.log(num*num);
// }
// square(5);//Arguments

// function multiply(num1,num2) {
//     console.log(num1 * num2);
// }
// var arr = [5,6];
// multiply(...arr); // spread operator


// function multiply(...nums) { //here is rest operator
//     console.log(nums[0] * nums[1]);
// }
// var arr = [5,6];
// multiply(...arr);

// // output based question

// const fn = (a,x,y,...numbers)=>{
//     console.log(x,y,numbers);
// };
// fn(5,6,3,7,8,9);
//Output is 6,3,[7,8,9]

//Callback fn : A callback function is a function passed into t function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

//Arrow functions

// 1.Syntax 
// function square(num){
//     return num*num;
// };
// const square = (num)=>{
//     return num * num;
// }

// //2- Implicit "return" keyword
// const square = (num) => num*num;
//3- arguments
function fn(){
    console.log(arguments);
}
// fn(1,2,3);

const fnArr = ()=>{
    console.log(arguments);
}
// fn(1,2,3);

//4- this keyword
