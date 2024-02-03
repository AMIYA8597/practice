//    create the polyfil fo map 
   
   // //Array.map( (num,i,arr)=> { } )

// Array.prototype.myMap=function(callBack){
//     let newArr=[];
//     for (let i = 0; i < this.length; i++) {
//         newArr.push(callBack(this[i],i,this))
//     }
//    return newArr;
// }


// // Array of Map

// let arr = [2,4,3,5,7,2,3];

// let numbersOfArray = arr.map( (number, index,array)=>{
//     // console.log(arr)
//     return number * 3 + index
//     ///////////// here index adding array index +1 from arr[0] to [arr.length-1] 
// })
// console.log(numbersOfArray)




 
// // create prototype for filter 
// Array.prototype.filter =function (numbersOfArray){
// let newArr=[];
// for (let i = 0; i < this.length; i++){
//     if(numbersOfArray(this[i],index,this)){
//         newArr.push(this[i])
//     }
//     }
//     return newArr; 
// }


// // // array of filter 

// let arr = [5,6,3,7,2,8];

// let numberMoreThanTwo= arr.filter((number)=> {
// //  return (number > 2 ) ? true : false;
// return (number > 2 ) 
// // }).filter((bool)=> bool);
// })

// console.log(numberMoreThanTwo)




// //  array reduce method takes two arguements , one is a callback function
// // and another one is initial value 

// //  // Array.reduce( (accumolator, current , index ,array) => { }, initialvalue)

//     Array.prototype.myReduce = function (callBack , initialvalue) {
//     let accumolator= initialvalue;
//     for (let i=0; i<arguments.length; i++) {
//         accumolator=accumolator ? callBack(accumolator,arguments[i], i, this) :  arguments[i] ;
//         };
//         return accumolator ;
//     }


// // array reduce 


// let arr = [4,5,3,7,8,5];

// let addUsingReduce = arr.myReduce( (accu,curr, i, arr) =>{
//     // here acc = accumolator is the result of previous computation in each iteration.
//     // curr = current value which we are processing at this moment.
//     // i   = ith element of the array.
//     // arr = whole array.
//     return accu + curr;
// },0)

// console.log(addUsingReduce) 




// // reduce method

// let sum = arr.reduce((accumulator , currentValue) =>{
//    return accumulator+currentValue
// })
// console.log("Sum is " +sum)
// // find and indexof

// let fruits = ['apple','banana', 'cherry', 'date'];

// let foundFruit = fruits.find((fruit)=> fruit === 'cherry');
// console.log('found fruit is ' +foundFruit)

// let indexFoundFruit = fruits.indexOf('cherry')
// console.log('index of cherry in the list is ' +indexFoundFruit)

// if(foundFruit && indexFoundFruit !== -1){
//     console.log(`${foundFruit} is at ${indexFoundFruit}`);
// }else{
//     console.log(`${foundFruit} not found`);
// }


// // for each loop

// fruits.forEach((value,index)=>{
//      console.log(`the value at ${index} is ${value}`);
// });







// const students = [
//     { name: 'Quincy', grade: 96 },
//     { name: 'Jason', grade: 84 },
//     { name: 'Alexis', grade: 100 },
//     { name: 'Sam', grade: 65 },
//     { name: 'Katie', grade: 90 }
//   ];
  
//   const studentGrades = students.filter(student => student.grade >= 90);
//   return studentGrades;








// // // map vs forEach 

// let arr= [2,3,6,4,5,8,9,2];

//    let arrayMap = arr.map((ar)=> {
//     return ar + 2;
//     // return arr[ar   +   1];
// });
// console.log("array of map is",arrayMap);


//    let arrayForeach= arr.forEach((ar)=> {
//     return ar + 2;
// });
// console.log("array of foreach is",arrayForeach);


//    let arrayForeachModify= arr.forEach((ar,i)=> {
//     arr[i]= ar + 5 ;
// });
// console.log("modify of array foreach is",arr);


// arr.forEach((num , index )=>{
//     if (index % 2 === 0){
//         arr[index] = num * 2 ;
//     }else{
//        arr[index]= num - 2;  
//     }
// })
// console.log("after loop ", arr);



const students = [
    { name: 'Quincy', grade: 76, rollNo:2 } ,
    { name: 'Jason', grade: 74, rollNo:3 },
    { name: 'Alexis', grade: 80, rollNo:4},
    { name: 'Sam', grade: 50, rollNo:5 },
    { name: 'Katie', grade: 76, rollNo:1 }
  ];

  
  // // here i am using for loop 

//   let result =[];
//   for(let i=0;i<students.length;i++){
//     result.push(` grade is : ${students[i].grade}`);
//     result.push(` name is ${students[i].name.toUpperCase()}`); 
//     result.push(`Roll No : ${students[i].rollNo}`);
//   }
//   console.log("result is",result);

// // and here i am using map function same things 

// let usingMap = students.map( (stud) => stud.name.toUpperCase());
// console.log("here use map function",usingMap);

// let result= students.map((stu) =>{
//     return `Name:${stu.name.toUpperCase()} 
//     Grade:${stu.grade} 
//     Roll no:${stu.rollNo}`;
// })
// console.log('Result is ',result );



// and now i only want to print student marks > 75 
//  let goodStudents = students.filter( ( student ) => student.grade >=75);
//  console.log("Good Students are \n",goodStudents);


  //   // Q: morethan 75 marks and roll number >2
//   let marksAndRoll= students.filter( ( student )=>student.grade >=75 && student.rollNo > 2)
//   console.log("marks and roll number filter",marksAndRoll);

  // // //Q: sum of marks of all students;

  //here i am using for loop below code will give us the total sum of grades of all students

//   let totalMarks = 0;
//   for(let i=0;i<students.length;i++){
//     totalMarks+=students[i].grade;
//   } 
//   console.log("sum of all marks ",totalMarks);

//here i am using reduce reduceing method

// let sumOfGrade= students.reduce((accumulator,current) => {
//     return accumulator+current.grade;
// },0)
// console.log("Sum of grade using reduce",sumOfGrade);



// // Q: Return only of students who scored more than 70 in their examination

//  let morethan70Names = students.filter( (student) => student.grade >70).map((student =>student.name));
//  console.log("only student who scores more than 70",morethan70Names);

// // Q : Return total marks with students with marks grater than 90
    // // after 20 marks have been added to those students whose score was less than 69

    let studentMarks = students.map( (student) =>{
        if(student.grade < 69){
            student.grade += 20;     
        }
        return student;
    }).filter( (student) =>student.grade > 69)
    .reduce((accumolator, currentValue) =>  accumolator + currentValue.grade ,0);

    console.log("now students marks " , studentMarks);