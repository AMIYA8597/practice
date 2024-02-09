// let arr = [7,9,5,4,9,13]

// let reverse = [];

// for (let i =arr.length-1; i>=0; i--){
//     reverse+=(arr[i]);
// }
// console.log(reverse)







// let array = [7,9,25,56,65,2,78]

// array.reverse()

// console.log(array)






// let array = [7,9,25,56,65,2,78, 8,5]

// let maxArr=[];
// for (let i=0; i<array.length; i++){
//     maxArr =array[i]
// }

// console.log(maxArr)





// let arr = [7,9,5,-4,8,-9,3,6,-13,3,2,-1,44];

// let negative = [];
// let posative = [];

// for (let i =0; i<=arr.length -1; i++){
//     if(arr[i]> 0){
//     posative.push(arr[i])
//     }
//     else {
//         negative.push(arr[i])
//     }
// }

// console.log("posative array is",posative);

// console.log("neagtive array is",negative)






// let arr = [9,67,80,54,83,72,55,74,36,85,23,41,62];

// let odd = []

// let even = [];

// for(let i=0; i<arr.length; i++){
    
//     if(arr[i] %2 ==0){
//         even.push(arr[i])
//     }
//     else {
//         odd.push(arr[i])
//     }
    
// }

// console.log("even array is",even);

// console.log("odd array is", odd)









// let inputString = "Hello World! 123";
// let lowercaseLetters = '';

// for (let i = 0; i < inputString.length; i++) {
//   if (inputString[i] >= 'a' && inputString[i] <= 'z') {
//     lowercaseLetters += inputString[i];
//   }
// }

// console.log(lowercaseLetters); // Output: "elloorld"







// function isPatternPresent(str, pat) {
//     // Iterate over the string
//     for (let i = 0; i <= str.length - pat.length; i++) {
//         let j;
//         // Check if pattern matches the substring starting at index i
//         for (j = 0; j < pat.length; j++) {
//             if (str[i + j] !== pat[j]) {
//                 break; // If characters don't match, break the inner loop
//             }
//         }
//         // If inner loop finished without breaking, pattern is found
//         if (j === pat.length) {
//             return true;
//         }
//     }
//     // If pattern is not found after checking all substrings, return false
//     return false;
// }

// // Test cases
// console.log(isPatternPresent("abcdefh", "bcd") ? "Present" : "Not present");
// console.log(isPatternPresent("axzy", "xy") ? "Present" : "Not present");









// function decimalToBinary(decimal) {
//     if (decimal === 0) {
//         return '0';
//     }

//     let binary = '';
//     while (decimal > 0) {
//         binary = (decimal % 2) + binary;
//         decimal = Math.floor(decimal / 2);
//     }

//     return binary;
// }

// console.log(decimalToBinary(22))
// Example usage:
// const decimalNumber = 25;
// const binaryNumber = decimalToBinary(decimalNumber);
// console.log(`Binary representation of ${decimalNumber} is: ${binaryNumber}`);





// while (decimal > 0) {
//     if (decimal & 1) {
//        binary = "1" + binary;
//     } else {
//        binary = "0" + binary;
//     }
//     decimal = decimal >> 1;
//  }



// let str = "helloWORld"

// let lowerCase = "";
// for (let i=0; i<str.length; i++){
//     // if(str[i] >= "a" && str[i] <="z"){
//     //     lowerCase+=str[i] 
//     // }
//     // console.log(str[i])
//     if (str[i]==str[i].toLowerCase()){
//         lowerCase +=str[i];
// }
// }

// console.log(lowerCase)








// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return -1; // If the target is not found
// }

// // Example usage:
// const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// const target = 11;
// const index = binarySearch(array, target);
// if (index !== -1) {
//     console.log(`Target ${target} found at index ${index}`);
// } else {
//     console.log(`Target ${target} not found in the array`);
// }





// function compareAndReturnLowercase(string1, string2) {
//     const minLength = Math.min(string1.length, string2.length);
//     let result = '';

//     for (let i = 0; i < minLength; i++) {
//         const char1 = string1[i];
//         const char2 = string2[i];

//         if (char1 === char2 && char1 === char1.toLowerCase()) {
//             result += char1;
//         }
//     }

//     return result;
// }

// // Example usage:
// const string1 = "HelloWorld";
// const string2 = "helloWorld";

// const lowercaseLetters = compareAndReturnLowercase(string1, string2);
// console.log(lowercaseLetters); // Output: "elloorld"










// kadane`s algo 

// function maxSum (arr){
  
//     let max =-1;
//     let sum = 0;
//     for (let i=0; i<arr.length;i++) {
//       sum +=arr[i];
//       if( sum > max ){
//         max = sum
//       }
      
//       if(sum < 0){
//         sum =0
//       }
      
//     }
//     return max;
//   };
  
//   console.log(maxSum([2,3,7,-5,8, -7,6]))






























