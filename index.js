//map, filter and reduce

//what is map()?
// Ans: Map method is used to create a new array from existing one by applying a function to each element of the first array.

const nums = [1,2,3 ,4];
const multiplyThree = nums.map((num,i,arr)=>{
    return num*3;
});

console.log(multiplyThree);

//filter :
//This method takes each element in an array and applies a conditional statement against it.If the condition returns true then the elemnt get pushed in the output array if the condition return false then the element does not get pushed in the output array.

const nums = [1, 2, 3, 4];
const moreThanTwo = nums.filter((num)=>{
    return num > 2;
});
console.log(moreThanTwo);

//Reduce:
// It reduces the array of values down to just one value, just like map and filter reduce also executes the call back for each element of the array.

const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr, i, arr)=>{
return acc+curr
},0);

console.log(sum);

//Creating Polyfills:

// For Map

Array.map((num,i,arr)=>{})

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

//For filter
//Array.filter((num)=>{});

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if(cb(this[i],i,this))
    temp.push(this[i]);
  }
  return temp;
};

const nums = [1, 2, 3, 4];
const moreThanTwo = nums.myFilter((num)=>{
    return num > 2;
});
console.log(moreThanTwo);


//Polyfill for reduce 
//arr.reduce((acc,curr,i,arr)=>{},initialValue)

Array.prototype.myReduce = function (cb,initialValue){
 var accumulator = initialValue;
 for(let i=0;i<this.length;i++){
   accumulator = accumulator ? cb(accumulator,this[i],i,this):this[i];
 }
 return accumulator;
};

const nums = [1, 2, 3, 4];

const sum = nums.myReduce((acc, curr, i, arr)=>{
return acc+curr
},0);

console.log(sum);