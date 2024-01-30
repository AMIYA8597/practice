// https://www.geeksforgeeks.org/how-to-merge-flatten-an-array-of-arrays-in-javascript/?ref=ml_lbp

// https://www.linkedin.com/pulse/arrays-javascript-versatile-data-structures-dynamic-ankita-panpatil-/


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// for(let i=1;i<=10;i++){
//     console.log(i*7);
// }

// let arr = [1,2,3,4,5,6];
// let constant = arr.values();
// console.log(constant.next().value);
// console.log(constant.next().value);
// console.log(constant.next().value);
// console.log(constant.next().value);
// console.log(constant.next().value);
// console.log(constant.next().value);


// let firstName = prompt("enter your first name :");
// console.log(firstName);
// let lastName = prompt("enter your last name :");
// console.log(lastName);
// let fullname = `${firstName} ${lastName}`;
// console.log(`full name is :${fullname}`);
// let age = prompt("Enter your Age: ");
// console.log(age);
// age = parseInt(age)
// if (isNaN(age)) {
//     alert('please enter a valid number');
//     } else if (age < 0) {
//         alert('Age cannot be negative')
//         } else if (age > 120) {
//             alert ('You are too old!')
//             } else {
//                 document.write(`Your age is ${age}`);
//                 }
//                 function flattenArray(arr){
//                    return arr.reduce((accumulator , currentValue)=> accumulator.concat
//                    (currentValue instanceof Array ? flattenArray(currentValue) : currentValue),[]
//                    );
//                 };
//                 let multiDimArr = [[1,2], [3,[4,5]], 6];
//                 console.log(flattenArray(multiDimArr));
//                 function findMax(arr){
//                     let maxNum = arr[0] ;
//                     for(let i=1;i<arr.length;i++){
//                        if(maxNum<arr[i]){
//                         maxNum = arr[i];
//                         }
//                       }return maxNum;
//                 }
//                 console.log(findMax([9,8,7,6,5,4,3,2,1]));
//                 console.log(findMax(["a","b","c","d"]));
// function checkTypeOf(val){
//     switch(typeof val){
//         case 'string':
//             return `This value is string`;
//         case 'number':
//             return `This value is Number`;
//         case 'boolean':
//             return `This value is boolean`
//         default:
//             return `Unknown data type`;
//     }
// }
// console.log(checkTypeOf('Hello World'));
// console.log(checkTypeOf(123));
// console.log(checkTypeOf(true));




// let a = 4;
// let b = 6;
// let c;

// console.log (a);
// console.log(b)

// c =a;
// a=b;
// b=c;
// console.log(a);
// console.log(b);



// let doneOfWork = false;
// let deployment;

// if(doneOfWork==true) {
//     deployment="you can start the deployment";
//     console.log(deployment);
// } else {
//     deployment = "work is not done yet";
//     console.log(deployment);
// }



// let todaysTemp = 24;

// if(todaysTemp){
//     console.log("you can go outside without jacket")
// } 
// else  {
//     console.log("use jacket in your body , outside is codld")
// }



// let temp = 31;
// let humidity =91;

// if(temp>30 && humidity>90) {
//     console.log("you are in sea beach");
// } else if(temp<30 && humidity<90){
//     console.log("you are in city")
// } else {
//     console.log("you are in village")
// }

// let temp = 21;
// let humidity =88;

// if(temp>=30 ) {
//     if(humidity>90) {
//         console.log("you are in sea beach")
//     }  if (humidity <90) {
//         console.log("you are in city");
//     } 
// }
// else {
//         console.log("you are in village")
//     }
// } else if(temp<30 && humidity<90){
//     console.log("you are in city")
// } else {
//     console.log("you are in village")
// }

// let n = 10;
// let end=0;

// for(let i =1;i<=n;i++) {
// //   let _end = end +i
//     end = end +i
// }
// console.log(end)


// l




// let arr = [8,9,10,11,12]
// // console.log(arr[0])
// var accumolator =0;
// for ( let i = 0; i<=arr.length-1;i++) {
//     // console.log(arr[i]);
//     accumolator+=arr[i]
// }
// console.log(accumolator)

// let array = [3,867,67,95];
// let max = -1;
// for (let i =0; i<=array.length-1; i++) {
//     if (array[i] > max) {
//         max=array[i];
        
//     }
    
// }
// console.log(max)


// let array = [3,867,67,95];
// let min = 1000;
// for (let i =0; i<=array.length-1; i++) {
//     if (array[i] < min) {
//         min=array[i];
        
//     }
    
// }
// console.log(min)



// let array = [1 , 2 , 3 ,4,5,6,7,8 ]
// let even = 0;
// for(let i =0; i<=array.length-1; i+=2) {
//     // console.log(i)
//     even+=i
// }
// console.log(even)





//string

// let str = "amiya";

// if((str[0]==="a") && (str.length>3)) {
//     console.log("it is a good string")
// }
// else {
//     console.log("it is not a good string")
// }




// JavaScript Array Declared
// var a = ['messi' , 'neymar', 'suarez', 'inesta','xavi', 'mascherano'];

// a.push('Geeks');
// a.push('For');
// a.push('Geeks');

// // Obtaining the value
// console.log(a);


// // Array.splice 

// let array = ['barca', 'barc', 'bar ']

// array.splice(array.length, 0 , 'real', 'madrid');
// console.log(array);


// // string concation

// let a = "barce"
// let b = "lona"
// console.log(a  + b)



// trim method in string

// const num =prompt("enter your password");
// console.log(num);
// const pass=num.trim()
// console.log(pass)

// indexOf method in string

let febPerson = "i love messi ";
console.log(febPerson.indexOf("love"));

// // lastIndexOf method in string
// let junePerson ="I love to code javascript";
// console.log(junePerson.lastIndexOf("to"))

// // startsWith and endsWith methods

// const str = 'Hello World';

// console.log(str.startsWith('H'));
// console.log(str.endsWith('d'));
