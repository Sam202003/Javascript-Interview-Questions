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

