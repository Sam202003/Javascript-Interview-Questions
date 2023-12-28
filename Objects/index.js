//Objects in Javascript

// const user = {
//     name:"Samruddhi Chavan",
//     age:20,
//     "like this vdo":true,
// };

// user.name ="Samruddhi" //To change the name

// delete user.age;
//To delete the age from the object
//delete user["like this vdo"];
//console.log(user);
// console.log(user["like this video"]); //adding this property

// const func = (function(a){
//     delete a;
//     return a;
// })(5);

// console.log(func)

//Accesing the properties dynamically

// const property = "firstName";
// const name = "Samruddhi Chavan"

// const user = {
//     [property]:name,
// }
// console.log(user);
// console.log(user.firstName);

//Looping through objects

// const user ={
//     name:"Samruddhi Chavan",
//     age:20,
//     isTotallyAwesome:true,
// }

// for(key in user){
//     console.log(user[key]);
// }

//Ques 1: Output based.
// const obj = {
//     a:"one",
//     b:"two",
//     a:"three"
// }
// console.log(obj); //O.P is { a: 'three', b: 'two' }
//Here if we have the duplicate values then first a is replaced with the latest one.

//Ques 2 :Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2.

// let nums = {
//     a:100,
//     b:200,
//     title:"My nums"
// }

// multiplyByTwo(nums);

// function multiplyByTwo(obj){
//   for(key in obj){
//     if(typeof obj[key] === "number"){
//         obj[key] = obj[key] * 2;
//     }
//   }
// }

// console.log(nums);

//Ques 3: Output of following code.

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// // a['[object Object]']=123;
// // a['[object Object]']=456;

// console.log(a[b]);

//Ques 4. What is JSON.stringify and JSON.parse ?

// const user = {
//     name:"Samu",
//     age:20
// }
// // const strObj = JSON.stringify(user)
// const strObj = JSON.stringify(user)

// console.log(JSON.parse(strObj));
// O.P{name: 'Samu', age: 20 }
// console.log(JSON.stringify(user));
// console.log(JSON.parse(user)); //To conert it again to objects

// Ques 5: What is Output

// console.log([..."Lydia"]);

// O.P : [ 'L', 'y', 'd', 'i', 'a' ]

//Ques 6 : What is O.P

// const user = {name:"Samruddhi",age:20};
// const admin = {admin:true,...user};

// console.log(admin);
// O.P  = { admin: true, name: 'Samruddhi', age: 20 }

// //Ques 7 : What is O.P

// const settings = {
//     username:"Samruddhi",
//     level:20,
//     health:99,
// }

// const data = JSON.stringify(settings,["level","health"]);
// console.log(data);

//Ques 8 :  What is O.P

// const shape = {
//     radius :10,
//     diameter(){
//         return this.radius * 2;
//     },
//     perimeter:()=>2*Math.PI *this.radius
// }

// console.log(shape.diameter()); //20
// console.log(shape.perimeter()); //NAN

//Ques 9: What is destructuring in objects ?

// let user = {
//     name:"Samruddhi",
//     age:20,
// }

// const {name:myName} = user;

// console.log(myName); //Samruddhi

// let user = {
//     name: "Samruddhi",
//     age: 20,
//     fullName: {
//       first: "Samruddhi",
//       last: "chavan",
//     },
//   };
  
//   const name = "SAMMY";
  
//   const {
//     fullName: { first }
//   } = user;
  
//   console.log(first); // Logs the value of 'first' from the fullName object
  

//Ques 10: What is O.P ?


// function getItems(fruitList,favouriteFruit,...args){
//     return [...fruitList,...args,favouriteFruit]
// }

// console.log(getItems(["banana","apple"],"peer","orange"))

//We can use spread operator in middle of any param value but we cannot use rest operator anywhere in middle it is required to be used only in the end of parameters. 

//Object refrencing"

// Ques 11 :What is O.P

// let c = {greetings:"Hey!"};
// let d;
// d=c;
// c.greetings = "Hello";
// console.log(d.greetings); //Here , Expected O.P is Hey! but in console we receive Hello
// Reason:But we are just providing the refrence for the object not the complete object

// Ques 12: What is O.P

// console.log({a:1} == {a:1});
// console.log({a:1} === {a:1}); //This condition will always return 'false' since JavaScript compares objects by reference, not value.


// Ques 13: What is O.P

// let person ={name:"Samruddhi"};
// const members = [person];
// person:null;
// console.log(members); Expected O.P is null but in console we receive [ { name: 'Samruddhi' } ]
// Reason: as it is in Oth index it wont affect the values inside


// // Ques 14: What is O.P

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply();//20
// multiply();//20
// multiply(value);//20
// multiply(value);//40


// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//       name: 'John',
//       age: 50
//     };

//     return person;
// }

// const personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1); 
// console.log(personObj2); 
// Output:
// { name: 'Alex', age: 25 }
// { name: 'John', age: 50 }


// Ques - Difference between shallow copy vs deep copy.

// A shallow copy means that certain (sub-)values are still connected to the original variable.
// A deep copy means that all of the values of the new variable are copied and disconnected from the original variable

// let user = {
//     name:"Samruddhi Chavan",
//     age:24,

// }
// //Ways to clone objects
// // const objClone = Object.assign({},user);
// // const objClone = JSON.parse(JSON.stringify(user));
// // const objClone = {...user}
// objClone.name="Samruddhi";
// console.log(user,objClone);









