//Closures in JS 

//Lexical Scope: 
//Scope refers to the current context for your code, it can be either globally or locally defined.

// var name = "Samruddhi here";
// //global Scope : Variable defined outside the function will be accessibled inside the function.

// function local(){

// //local Scope : Variable defined inside the function will not be accessibled outside the function.
// console.log(name);
// }
// local();


// function subscribe(){
//     var name = "Samruddhi Chavan";
//     //inner Scope 2
//     function displayName(){ //Here DisplayName function was able to access the variable outside the scope these is nothing but the closure.
//         //inner scope 
//         alert(name);
//     }
//       displayName();

// }
// subscribe();

//Closure is the combination of a function bundled together (enclosed) with refrences to its surrounding state (the lexical environment). In other words, a closure gives you a access to an outer function's scope from an inner function.

//Closure Scope Chain

//Global Scope is here.
// function makeFunc(){
//     var name = "Samruddhi";// Outer function Scope
//     function displayName(num){
//         console.log(name,num); //local Scope
//     }
//     return displayName;
// }
// makeFunc()(5);


// var e = 10;  (global Scope)
// function sum(a){ //1
//     return function (b){ //2
//         return function (c){ //3
//             //outer function scope
//             return function (d){ //4
//                 //local scope
//                 return a + b + c + d + e; //e=10
//             };
//         };
//     };
// };

// console.log(sum(1)(2)(3)(4));


// Output based Question
// Ques 1. What will be logged to console?


// let count = 0;
// (function printCount(){
//     if(count === 0){
//         let count = 1;//this concept is called as shadowing.
//         console.log(count); //1
//     }
//     //count is zero here as its in the global scope.
//     console.log(count);//0
// })();


//Ques 2. Write a function that would allow you to do this 

// var addSix = createBase(6);
// addSix(10); //returns 16
// addSix(21); //returns 27

// function createBase(num){
//   return function(innerNum){
//     //   return innerNum + num;
//     console.log(innerNum+num);
//   }
// }

// Ques 3. Closures in Javascript

// function find(index){
//     let a =[];
//     for(let i=0;i<10000000;i++){
//         a[i]=i*i;
//     }
//     console.log(a[index]);
// }
// console.time("6");
// find(6);
// console.timeEnd("6");
// console.time("12");
// find(12);
// console.timeEnd("12");

//--Optimised Code//

// function find(){
//     let a = [];
// for(let i=0;i<1000000;i++){
//     a[i] = i *i;
// }
// return function (index){
//     console.log(a[index]);
// }
// }

// console.time("6");
// find(6);
// console.timeEnd("6");
// console.time("12");
// find(12);
// console.timeEnd("12");

//Ques 4. Block scope and setTimeout

// for(var i=0;i<3;i++){
//     setTimeout(function log() {
//     console.log(i);    
//     }, 1000);
// }

//Using let 

// for(let i=0;i<3;i++){
//         setTimeout(function log() {
//         console.log(i);    
//         }, 1000);
//     }
    

// Using Closures
    // for (var i = 0; i < 3; i++) {
    //     (function (index) {
    //         setTimeout(function log() {
    //             console.log(index);
    //         }, 1000 * index);
    //     })(i);
    // }


//ques 5. How would you use a closure to create a private counter ?


