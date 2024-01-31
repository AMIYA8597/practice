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

// let febPerson = "i love messi ";
// console.log(febPerson.indexOf("love"));

// // lastIndexOf method in string
// let junePerson ="I love to code javascript";
// console.log(junePerson.lastIndexOf("to"))

// // startsWith and endsWith methods

// const str = 'Hello World';

// console.log(str.startsWith('H'));
// console.log(str.endsWith('d'));









// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");

// let array = ["spy", 'super','honda','premier'];
// console.log(array)
// let newArr= array.reverse()
// console.log(newArr)

// let splitArr=array


// let array = [1 , 2 , 3 ,4,5,6,7,8 ]
// let even = 0;
// for(let i =0; i<=array.length-1; i+=2) {
//     console.log(i)
//     even+=i
// }
// console.log(even)



// let array = [1,2,3,10,15,6,7,8, ]
// let odd= 0;
// for(let i =1; i<=array.length-1; i+=2) {
//     console.log(array[i])
//     odd+=array[i]
// }
// console.log(odd)

// let array =[ 10,43,45,57,20];
// let even =0;
// let odd=0;
// for (let i=0;i<array.length; i++){
//     if(array[i]%2==0){
        
//         even+=array[i]
//     }
//     else {
//         odd+=array[i]
//     }
//     // console.log(array[i])
// }
// console.log(even)
// console.log(odd)



// let m =20;
// let n =4;
// let sum =0;
// let div =0;
// for (let i=1; i<=m; i++){
//     // console.log(i)
//     if(i%n!==0){
//         sum+=i
//     //   console.log("divided is",div)  
//     }
// }
// console.log(sum)

// console.log(sum-div)


// const myArr = [[1,2],[3,4],[5,6],[77,88]];
// const newArr = myArr.flat();
// console.log(newArr)

// multiplication

// const number =19;

// // const newNumber=1;

// for (let i=1;i<=10; i++)
// {
//   let umber=i * number
//   console.log(umber)
// }




// const number = parseInt(prompt('Enter an integer: '));
// const number = 19;

// //creating a multiplication table
// for(let i = 1; i <= 10; i++) {

//     // multiply i with number
//     const result = i * number;

//     // display the result
//     // console.log(`${number} * ${i} = ${result}`);
//     console.log(result)
// }
// // console.log(result)


// const number = 26;

// for (let i=1;i<=10;i++){
//     let multiplicationResult = number * i;
//     console.log(multiplicationResult)
// }


// const number = 260;

// for (let i=10;i>=1;i--){
//     let multiplicationResult = number / i;
//     console.log(multiplicationResult)
// }


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// console.log(fruit);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[1];
// console.log(fruit);


// let array = [68,78,88,62,45,74,37,9,39,74,51,96,101]
// let maxNeed = 1;

// for(let i=0;i<=array.length-1;i++){
//     if(array[i] >maxNeed){
//         maxNeed=array[i]
//     }
//     // console.log(maxNeed)
// }
// console.log(maxNeed)



// let array = [68, 78, 88, 62, 45, 74, 37, 9, 39, 74, 51, 96, 101];

// // Initialize max, secondMax, and thirdMax with smallest possible values
// let max = Number.MIN_SAFE_INTEGER;
// let secondMax = Number.MIN_SAFE_INTEGER;
// let thirdMax = Number.MIN_SAFE_INTEGER;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//         thirdMax = secondMax;
//         secondMax = max;
//         max = array[i];
//     } else if (array[i] > secondMax && array[i] < max) {
//         thirdMax = secondMax;
//         secondMax = array[i];
//     } else if (array[i] > thirdMax && array[i] < secondMax) {
//         thirdMax = array[i];
//     }
// }

// console.log("Third largest number is:", thirdMax);



// var array = [10, 5, 8, 20, 15];
// var max = -Infinity;
// var secondMax = -Infinity;

// for (var i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//         secondMax = max;
//         max = array[i];
//     } else if (array[i] > secondMax && array[i] < max) {
//         secondMax = array[i];
//     }
// }

// console.log("Second largest element:", secondMax);





// let arrayMin = [68,78,88,62,45,74,37,9,39,74,51,96,101]
// let minNeed = 100;

// for(let i=0;i<=arrayMin.length-1;i++){
//     if(arrayMin[i] <minNeed){
//         minNeed=arrayMin[i]
//     }
// }
// //  let secondLargest = maxNeed;
// //  console.log(secondLargest)
// console.log(minNeed)





// let array = [2, 4, 5,78,68,77,95,69,45,71]
// let total =0;
// for (let i=0;i<=array.length-1;i++) {
//     // console.log(array[i])
//     if(array[i]%2==1){
//         // console.log(array[i])
//         total+=array[i]
//     }
// }
// console.log(total)



// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// let newOne = fruits.toString();
// console.log(newOne)



// let arr = ['barcelona'];
// let newArr = arr.push('messi');
// console.log(newArr);

//  // !!!!!!@#$%^&*()

// let first=['home', 'house'];
// const middle =['building', 'temple']
// const last = ['hut', 'castle']

// const firstAndLast =middle.concat(last,first)
// console.log(firstAndLast);
// // console.log(first);
// // console.log(last)



// let a='digha'
// let b='jabo'
// console.log(a + " " + b)





// let x = 1235e-5
// console.log(x)


// let array = [45,85,79,83,75,72,124,245,324,83];
// let maximum = 10;
// for (let i=0;i<=array.length-1;i++){
//     if(array[i] >maximum){
//         maximum =array[i];
//     }
// }
// console.log(maximum)










// let array = [68,78,88,62,45,74,37,9,77,86,59,88,86,79,82,39,74,51,96,101]
// let needMax=10;
// for (let i=0; i<=array.length; i++){
//     // console.log(array[i]);
//     if(array[i] >needMax){
//         needMax=array[i]
//     }
//     // console.log(needMax);
// }
// console.log(needMax)





// string reverse 

let str = "loveBabbar";
let newString='';
for (let i = str.length - 1; i >= 0; i--){
    newString+=str[i]
}
console.log(newString);
// console.log("string is",str)





