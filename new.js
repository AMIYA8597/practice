// let startArr = [4,55,68,92,101,124,245,456]

// let valueIndex = 92;

// function sum ( startArr , valueIndex , start , end) 
// {
//     while (start <= end) {
//         console.log("start is",start)
//         console.log("end is",end)

//         let middle = Math.floor(( start + end ) / 2);
//         console.log("middle is",middle)
    
//         if(startArr[middle] == valueIndex ){
//             return true;
//         }
//         else if(startArr[middle] < valueIndex){
//             start = middle + 1
//             // return true;
//         }
//         else {
//            end = middle -1 
//         }
//     }
//     return false
    
// }

// console.log( sum( startArr , valueIndex , 0 , startArr.length -1))








// Search element in array JS 


// setTimeout( () => {
//     console.log("tu nikal yaha se")
// }, 5000)


// setInterval( ()=> {
//     // console.log("tu vaag yaha se")
//     console.log( new Date());
// } , 2000)


// let arr = [3, 2, 1, 7, 5, 4];  

// let odd = [];
// let even = [];

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) { // even index
//         even.push(arr[i]);
//     } else { // odd index
//         odd.push(arr[i]);
//     }
// }

// console.log("Elements at even index positions:", even);
// console.log("Elements at odd index positions:", odd);











// let arr = [3, 2, 1, 7, 5, 4];  

// // Sort the array in descending order
// arr.sort((a, b) => b - a);

// // The second largest element will be at index 1
// let secondLargest = arr[1];

// console.log("Second largest element:", secondLargest);










// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false





// var isValid = function(s) {
//     const stack = [];
//    const mapping = {
//        '(': ')',
//        '[': ']',
//        '{': '}'
//    };

//    for (let i = 0; i < s.length; i++) {
//        const currentChar = s[i];

//        if (mapping.hasOwnProperty(currentChar)) {
//            // If it's an open bracket, push it onto the stack
//            stack.push(currentChar);
//        } else {
//            // If it's a close bracket, check if it matches the top of the stack
//            if (stack.length === 0 || mapping[stack.pop()] !== currentChar) {
//                return false; // Mismatch, return false
//            }
//        }
//    }

//    return stack.length === 0;
// };














// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.






// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b); // Sort the array in ascending order
//     const result = [];

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
//             let left = i + 1;
//             let right = nums.length - 1;
//             const target = -nums[i];

//             while (left < right) {
//                 const sum = nums[left] + nums[right];

//                 if (sum === target) {
//                     result.push([nums[i], nums[left], nums[right]]);
//                     while (left < right && nums[left] === nums[left + 1]) left++;
//                     while (left < right && nums[right] === nums[right - 1]) right--;
//                     left++;
//                     right--;
//                 } else if (sum < target) {
//                     left++;
//                 } else {
//                     right--;
//                 }
//             }
//         }
//     }

//     return result;
// };









// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

 

// Example 1:

// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
// Example 2:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.



// var intToRoman = function(num) {
//     const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

// let result = '';

// for (let i = 0; i < values.length; i++) {
//     while (num >= values[i]) {
//         // Append the corresponding symbol while subtracting the value
//         result += symbols[i];
//         num -= values[i];
//     }
// }

// return result;
// };






















// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.








// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) {
//         return ""; 
//     }

//     for (let i = 0; i < strs[0].length; i++) {
//         const char = strs[0][i];

//         for (let j = 1; j < strs.length; j++) {
//             if (i >= strs[j].length || strs[j][i] !== char) {
//                 return strs[0].substring(0, i); 
//             }
//         }
//     }

//     return strs[0];
// };







// function isPalindrome(str) { 

//     return str === str.split(”).reverse().join(”); 
  
//   }

//   let str = "amma"
//   console.log( isPalindrome(str))







// function romanToInt(s) {
//     const romanValues = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     };

//     let result = 0;
//     let prevValue = 0;

//     for (let i = 0; i < s.length; i++) {
//         const currValue = romanValues[s[i]];
        
//         if (currValue > prevValue) {
//             // If current value is greater than the previous value,
//             // subtract the previous value twice because it was added once before
//             result += currValue - 2 * prevValue;
//         } else {
//             result += currValue;
//         }

//         prevValue = currValue;
//     }

//     return result;
// }

// // Test cases
// console.log(romanToInt("V")); // Output: 5
// console.log(romanToInt("III")); // Output: 3

































// if(add > sub) {
    //     return false
    // };
     
    //  while ( add <= sub) {

    //     let summation = Math.floor((add + sub) /2);

    //     if( startArr[summation] == valueIndex ) {
    //         return summation;
    //     } 
    //     else if(startArr[summation] < valueIndex ) 
    //     add = summation + 1
    //     }
    //     else {
    //         sub = summation - 1 
    //     }
    // }