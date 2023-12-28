// Currying in Javascript
//Example f(a,b) into f(a)(b)

//In Currying a functions takes one argument at a time and returns a new function expecting the new argument.
// function f(a) {
//  return function (b) {
//     return `${a} ${b}`;

//  }

// }
// console.log(f(5)(6));

//Ques 0: Why do we use currying?
//to pass argument again and again, to create the HOF,to make your function pure and less peone to errors.

//Ques 1: How do we implement the sum(2)(6)(1)
// function sum(a,b,c) {
//     return a+b+c ;
// }

// console.log(sum(2,6,1));

// function sum(a){
//     return function (b){
//         return function (c){
//             return a+b+c;
//         }

//     }
// }

// console.log(sum(2)(6)(1));

// Ques 2:
// evaluate("sum")(4)(2)=> 6
// evaluate("multiply")(4)(2)=> 8
// evaluate("divide")(4)(2)=> 2
// evaluate("substract")(4)(2)=> 2

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") return a + b;
//       else if (operation === "multiply") return a * b;
//       else if (operation === "divide") return a / b;
//       else if (operation === "substract") return a - b;
//       else return "Invalid Operation";
//     };
//   };
// }

// // console.log(evaluate("sum")(4)(2));

// const mult = evaluate("multiply");

// console.log(mult(3),(5));


//Currying in Javascript
// Ques 3- Infinite Currying -> sum(1)(2)(3).....(n)

// sum(1)(2) /// 3
// sum(1)(2)(4)(5)

// function add(a){
//     return function(b){
//        if(b) return add(a + b);
//        return a;
//     };
// }
// console.log(add(5)(3)(2)(6)(4)());

//Difference between currying and partfial application

// function sum(a){
//     return function(b,c){
//         return a+b+c;
//     }
// }

// const x = sum(10);
// console.log(x(5,6));
// console.log(x(3,2));


// console.log(sum(20)(1,4)); //Here the concept of currying is not applied.We have used partial application over here.

// for eg: when we have three arguments and when we return the same number of functions it is for curring but when we have three args and two functions it is partial Application

//Quest 5 - Manipulating Dom

// function updateElementText(id){
//     return function(content){
//         document.querySelector("#" + id).textContent = content;
//     };
// };

// const updateHeader = updateElementText("heading");
// updateHeader("Hello Sammy")

//Ques 6- curry() implementation
//convert f(a,b,c) into f(a)(b)(c)


function curry(func){
    return function curriedFunc(...args){
        if(args.length >= func.length  ){
            return func(...args)
        }else{
            return function (...next) {
                return curriedFunc(...args,...next);
                
            }
        }
    }
}

const sum = (a,b,c) => a+b+c;
const totalSum =curry(sum);

console.log(totalSum(1)(2)(3));