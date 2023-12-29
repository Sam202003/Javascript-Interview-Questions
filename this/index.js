//this keyword in Javascript

//Explain 'this' keyword
// In JS this keyword is used to give refrence something like an object.

//Functions are first class objects.

//Here this is like a global context

// this.a = 5;
// console.log(this.a); //5
// console.log(this); //{ a: 5 }

//
this.a = 5;
function getParams() {
console.log(this.a);
}
getParams();
