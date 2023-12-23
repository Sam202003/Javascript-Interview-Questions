//Question 1: map vs forEach
//Difference Here
// i. map returns an array , filter doesn't returns any array 
//ii. In map we can chain the methods and in forEach as it doesn't reeturns any array we can't chain any method.

// const arr = [2,5,3,4,7];

// const mapResult = arr.map((ar)=>{
//   return ar + 2;
// })

// console.log(mapResult);

// const forEachResult = arr.forEach((ar,i)=>{
//   return arr[i] = ar + 2;
// })
// console.log(forEachResult,arr);


let students = [
    {name:"piyush",rollNumber:31,marks:80},
    {name:"yush",rollNumber:12,marks:65},
    {name:"shush",rollNumber:55,marks:50},
    {name:"sam",rollNumber:11,marks:30}, 
  ]
  
  // let names = [];
  // for(let i =0;i<students.length;i++){
  //   names.push(students[i].name.toUpperCase());
  // }
  // const names = students.map((stu)=> stu.name.toUpperCase())
  // // console.log(names);
  
  // const marks = students.filter((stu)=>{
  //   return stu.marks > 60;
  // });
  // // console.log(marks)
  
  // const details = students.filter((stu)=>{
  //   return stu.marks > 60 && stu.rollNumber > 15;
  // });
  // console.log(details)
  
  // const sum = students.reduce((acc,curr)=>acc+curr.marks,0);
  // console.log(sum);
  
  
  
  const names = students.filter((stu)=>stu.marks > 60).map(stu=>stu.name)
  console.log(names);