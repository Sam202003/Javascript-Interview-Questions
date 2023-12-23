// Creating Polyfills:

// For Map

Array.map((num,i,arr)=>{})

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

// For filter
Array.filter((num)=>{});

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


// Polyfill for reduce 
// arr.reduce((acc,curr,i,arr)=>{},initialValue)

Array.prototype.myReduce = function (cb,initialValue){
 var accumulator = initialValue;
 for(let i=0;i<this.length;i++){
   accumulator = accumulator ? cb(accumulator,this[i],i,this):this[i];
 }
 return accumulator;
};

// const nums = [1, 2, 3, 4];

const sum = nums.myReduce((acc, curr, i, arr)=>{
return acc+curr
},0);

console.log(sum);

