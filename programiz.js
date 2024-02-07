
// let result = "";
// let i = 0;
// do {
//   i += 1;
//   result += `${i} `;
// } while (i > 0 && i < 5);
// // Despite i === 0 this will still loop as it starts off without the test

// console.log(result);


// let final = [];
// let start = 0;
// do {
//     start = start +1;
//     final = start
// }
// while (start >0 && start<=10);

// console.log(final)









// function maxSum (arr){
  
//   let max =-1;
//   let sum = 0;
//   for (let i=0; i<arr.length;i++) {
//     sum +=arr[i];
//     if(sum >max){
//       max = sum
//     }
    
//     if(sum < 0){
//       sum =0
//     }
    
//   }
//   return max;
// };

// console.log(maxSum([2,3,7,-5,8 ,-8]))



// const x = Number.MIN_SAFE_INTEGER - 1;

// console.log(x)





// let recursiveFunction = function (arr, x, start, end) {

// 	// Base Condition
// 	if (start > end) return false;

// 	// Find the middle index
// 	let mid = Math.floor((start + end) / 2);

// 	// Compare mid with given key x
// 	if (arr[mid] === x) return true;

// 	// If element at mid is greater than x,
// 	// search in the left half of mid
// 	if (arr[mid] > x)
// 		return recursiveFunction(arr, x, start, mid - 1);
// 	else

// 		// If element at mid is smaller than x,
// 		// search in the right half of mid
// 		return recursiveFunction(arr, x, mid + 1, end);
// }

// // Driver code
// let arr = [1, 3, 5, 7, 8, 9];
// let x = 5;

// if (recursiveFunction(arr, x, 0, arr.length - 1)) {
// 	console.log("Element found!");
// }
// else { console.log("Element not found!"); }

// x = 6;

// if (recursiveFunction(arr, x, 0, arr.length - 1)) {
// 	console.log("Element found!");
// }
// else { console.log("Element not found!"); }






// // let start = array[0];
// // let end = array.length -1;

// function isBinary( array, needValue, start , end){
    
// if(start >end) return false;

// let middleValue = Math.floor((start +end ) /2 );

// if(array[middleValue] == needValue) return true;

// if(array[middleValue] > needValue ) {
//     return isBinary(array , needValue, start , middleValue -1)
// }

// else {
//     return isBinary(array , needValue,  middleValue +1 , end)
// }


// // if(array[middleValue] <end) {
// //     return isBinary(array , needValue , )
// // }


// }

// let array = [ 5,6,7,9,11,20, 25,38,41,52,63,74,61];
// let needValue = 65;


// let result = isBinary(array , needValue , 0 , array.length -1);

// console.log(result)








// let arr = [ 1,3,5,6,3,7];

// let newArr = arr.push(8)
// console.log(arr);
// console.log("new array is",newArr)

// console.log(newArr)








// let array = [5,7,4,8,2,9,3,7,12,56,23,23,45,6,7];
// let evenArray = []
// let oddArray = []

// for (let i = 0; i<array.length; i++){
//     if(array[i] % 2 ==0){
//         evenArray.push(array[i])
//     }
//     else {
//         oddArray.push(array[i])
//     }
    
// }
// console.log("even array is",evenArray);
// console.log("odd array is",oddArray)








// let array = [5,7,4,8,2,9,3,7,12,56,23,23,45,6,7];
// let evenArray = []
// let oddArray = []

// for (let i = 0; i<array.length; i++){
//     if(array[i] % 2 ==0){
//         evenArray.push(array[i])
//     }
//     else {
//         oddArray.push(array[i])
//     }
    
// }
// console.log("even array is",evenArray);
// console.log("odd array is",oddArray)














// function checkEvenOdd(array) {
//     let evenNumbers = [];
//     let oddNumbers = [];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             evenNumbers.push(array[i]);
//         } else {
//             oddNumbers.push(array[i]);
//         }
//     }

//     return {
//         even: evenNumbers,
//         odd: oddNumbers
//     };
// }

// // Example usage
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = checkEvenOdd(numbers);
// console.log("Even numbers:", result.even);
// console.log("Odd numbers:", result.odd);







// function isPalindrome(str) {
//     // Convert the string to lowercase to ignore case sensitivity
//     str = str.toLowerCase();
    
//     // Initialize pointers for the start and end of the string
//     let start = 0;
//     let end = str.length - 1;

//     // Iterate until the pointers meet
//     while (start < end) {
//         // If characters at current pointers don't match, return false
//         if (str[start] !== str[end]) {
//             return false;
//         }
//         // Move pointers towards the center of the string
//         start++;
//         end--;
//     }
//     // If the loop completes, the string is a palindrome
//     return true;
// }

// // Example usage
// const inputString = "abba";
// console.log("Is the string a palindrome?", isPalindrome(inputString) ? "Yes" : "No");





    

// function isPalindrome(str) {
//     const len = str.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// // Example usage
// const S = "abba";
// const result = isPalindrome(S);
// console.log("Output:", result ? 1 : 0);







// let array = [3,6,9,5,7,1];

// let reverseArr = [];

// for (let i =array.length -1 ; i>=0 ; i--){
//     reverseArr.push(array[i]);
//     // reverseArr+=array[i];
// }

// console.log(reverseArr)


// array of sum ""


// let array = [3,5,6,8,9,5,0,6];

// let sum = 0;

// for (let i =0;i<array.length; i++){
//     sum +=array[i]
// }


// console.log(sum)

// let str = 'amiya';
// let newStr = str.reverse();
// console.log(newStr)








// using the + operator
const message1 = 'This is a long message ' +
    'that spans across multiple lines' + 
    'in the code.'
    
    console.log("message 1 is : ",message1.length)

// using the \ operator
const message2 = 'This is a long message \
that spans across multiple lines \
in the code.'

    console.log("message 2 is : ",message2.length)
    
    
    
    
    let a = 567;
    let stringConvert = String(a);
    console.log('string convert',stringConvert)
    
    let sum = "messi is best";
    console.log(sum)
    
    
    const name = 'My name is \'Peter\'.';
    console.log(name);
    
    
    
    let name1 = 'Amiya';
    let lowerCaseName = name1.toLowerCase();
    let upperCaseName = name1.toUpperCase()
    
    console.log("using lowercase here : ",lowerCaseName);
    
    console.log("using case here : ", upperCaseName)


