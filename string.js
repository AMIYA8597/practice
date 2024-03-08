// You are given a string s. You need to reverse the string.

// Example 1:

// Input:
// s = Geeks
// Output: skeeG
// Example 2:

// Input:
// s = for
// Output: rof


























// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.





// var strStr = function(haystack, needle) {
//     const haystackLength = haystack.length;
//     const needleLength = needle.length;

//     // Iterate through each possible starting position in the haystack
//     for (let i = 0; i <= haystackLength - needleLength; i++) {
//         let match = true;

//         // Check if the substring starting at the current position matches the needle
//         for (let j = 0; j < needleLength; j++) {
//             if (haystack[i + j] !== needle[j]) {
//                 match = false;
//                 break;
//             }
//         }

//         if (match) {
//             return i;
//         }
//     }

//     return -1;
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







// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.
// Note:

// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
 

// Example 1:

// Input: s = "42"
// Output: 42
// Explanation: The underlined characters are what is read in, the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// The parsed integer is 42.
// Since 42 is in the range [-231, 231 - 1], the final result is 42.
// Example 2:

// Input: s = "   -42"
// Output: -42
// Explanation:
// Step 1: "   -42" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -42" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -42" ("42" is read in)
//                ^
// The parsed integer is -42.
// Since -42 is in the range [-231, 231 - 1], the final result is -42.
// Example 3:

// Input: s = "4193 with words"
// Output: 4193
// Explanation:
// Step 1: "4193 with words" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
//              ^
// The parsed integer is 4193.
// Since 4193 is in the range [-231, 231 - 1], the final result is 4193.














// var myAtoi = function(s) {
//     let i = 0;
//     let sign = 1;
//     let result = 0;

//     // Step 1: Ignore leading whitespace
//     while (i < s.length && s[i] === ' ') {
//         i++;
//     }

//     // Step 2: Check for '+' or '-'
//     if (i < s.length && (s[i] === '+' || s[i] === '-')) {
//         sign = s[i] === '-' ? -1 : 1;
//         i++;
//     }

//     // Step 3: Read in digits until the next non-digit character or end of input
//     while (i < s.length && isDigit(s[i])) {
//         const digit = parseInt(s[i]);

//         // Step 4: Convert digits into an integer
//         if (result > Math.floor((2**31 - 1 - digit) / 10)) {
//             return sign === 1 ? Math.pow(2, 31) - 1 : Math.pow(-2, 31);
//         }

//         result = result * 10 + digit;
//         i++;
//     }

//     // Apply sign
//     return sign * result;
// };

// // Helper function to check if a character is a digit
// function isDigit(char) {
//     return char >= '0' && char <= '9';
// };









// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.







// var lengthOfLongestSubstring = function(s) {
//     let maxLength = 0;
//    let start = 0;
//    const charIndexMap = {};

//    for (let i = 0; i < s.length; i++) {
//        const currentChar = s[i];

//        if (charIndexMap.hasOwnProperty(currentChar) && charIndexMap[currentChar] >= start) {
//            // If the character is repeated and its last occurrence is within the current substring, update the start index
//            start = charIndexMap[currentChar] + 1;
//        }

//        // Update the character's last occurrence index
//        charIndexMap[currentChar] = i;

//        // Calculate the current substring length
//        const currentLength = i - start + 1;

//        // Update the maximum length if the current substring is longer
//        maxLength = Math.max(maxLength, currentLength);
//    }

//    return maxLength;
// };












// A word is a maximal 
// substring
//  consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.






// var lengthOfLastWord = function(s) {
//     // Remove trailing spaces
//     const trimmedString = s.trim();

//     // Find the last space in the trimmed string
//     const lastSpaceIndex = trimmedString.lastIndexOf(' ');

//     // If no space is found, the entire trimmed string is the last word
//     if (lastSpaceIndex === -1) {
//         return trimmedString.length;
//     }

//     // Return the length of the last word
//     return trimmedString.length - lastSpaceIndex - 1;
// };



// class Solution {
    
//     reverseWord(str){
//         //Your code here
//         let reverse = '';
//         for (let i=str.length-1; i>=0;i--){
//             // reverse.push(str[i])
//             reverse+= str[i]
//         }
//         return reverse;
//     }
// }







// Given a string S, check if it is palindrome or not.

// Example 1:

// Input: S = "abba"
// Output: 1
// Explanation: S is a palindrome



// class Solution {
    
    //     isPalindrome(S){
    //         //code here
            
            
            
    //         let divide = S.length 
            
    //         for (let i=0; i< divide /2 ; i++){
    //             if (S[i] !== S[divide -1-i]){
    //                 return 0;
    //             }
    //         }
            
    //         return 1;
            
            
    //         // let start = 0;
    //         // let end = str.length -1;
    //         // for (let i = end; i>=0; i--){
    //         //     if
    //         // }
    //     }
    // }


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





// S = S.toLowerCase();
    
// // Initialize pointers for the start and end of the Sing
// let start = 0;
// let end = S.length - 1;

// // Iterate until the pointers meet
// while (start < end) {
//     // If characters at current pointers don't match, return false
//     if (S[start] !== S[end]) {
//         return false;
//     }
//     // Move pointers towards the center of the Sing
//     start++;
//     end--;
// }
// // If the loop completes, the Sing is a palindrome
// return true;






// some string methods 



// const text1 = 'hello';
// const text2 = 'world';
// const text3 = '     JavaScript    ';

// // concatenating two strings
// const result1 = text1.concat(' ', text2);
// console.log(result1); // "hello world"

// // converting the text to uppercase
// const result2 = text1.toUpperCase();
// console.log(result2); // HELLO

// // removing whitespace from the string
// const result3 = text3.trim();
// console.log(result3); // JavaScript

// // converting the string to an array
// const result4 = text1.split();
// console.log(result4); // ["hello"]

// // slicing the string
// const result5= text1.slice(1, 3);
// console.log(result5); // "el"



// You are given two strings of equal lengths, s1 and s2. The task is to check if s2 is a rotated version of the string s1.

// Note: The characters in the strings are in lowercase.

// Example 1:

// Input:
// geeksforgeeks
// forgeeksgeeks
// Output: 
// 1
// Explanation: s1 is geeksforgeeks, s2 is
// forgeeksgeeks. Clearly, s2 is a rotated
// version of s1 as s2 can be obtained by
// left-rotating s1 by 5 units.




// function isRotatedVersion(s1, s2) {
//     // Check if both strings have the same length
//     if (s1.length !== s2.length) {
//         return false;
//     }
    
//     // Concatenate s1 with itself to cover all possible rotations
//     const concatenated = s1 + s1;
    
//     // Iterate through the concatenated string to find if s2 is a rotation of s1
//     for (let i = 0; i < concatenated.length; i++) {
//         let isRotation = true;
//         for (let j = 0; j < s2.length; j++) {
//             // Check if characters at corresponding positions match
//             if (concatenated[i + j] !== s2[j]) {
//                 isRotation = false;
//                 break;
//             }
//         }
//         // If all characters match, return true
//         if (isRotation) {
//             return true;
//         }
//     }
    
//     // If no rotation matches, return false
//     return false;
// }

// // Example usage
// const s1 = "geeksforgeeks";
// const s2 = "forgeeksgeeks";
// console.log("Output:", isRotatedVersion(s1, s2) ? 1 : 0);


    //  //    not completed yet
// class Solution 
// {
//     //Function to check if two strings are rotations of each other or not.
//     areRotations(s1, s2)
//     {
//         // code here
//         let s1Lower= s1.toLowerCase();
//         let s2Lower = s2.toLowerCase()
        
//         if( s1Lower.length !== s2Lower.length ) {
//             return 0
//         }
        
//         return 1
        
//     }
// }












// You are given two strings of equal lengths, s1 and s2. The task is to check if s2 is a rotated version of the string s1.

// Note: The characters in the strings are in lowercase.

// Example 1:

// Input:
// geeksforgeeks
// forgeeksgeeks
// Output: 
// 1
// Explanation: s1 is geeksforgeeks, s2 is
// forgeeksgeeks. Clearly, s2 is a rotated
// version of s1 as s2 can be obtained by
// left-rotating s1 by 5 units.
// Example 2:

// Input:
// mightandmagic
// andmagicmigth
// Output: 
// 0
// Explanation: Here with any amount of
// rotation s2 can't be obtained by s1.




// class Solution 
// {
//     //Function to check if two strings are rotations of each other or not.
//     areRotations(s1, s2)
    
//     {
//         // code here
//         let s1Lower= s1.toLowerCase().split('');
//         let s2Lower = s2.toLowerCase().split('');
        
//         if( s1Lower.length !== s2Lower.length )  return false;
        
//         let totalLength = s1Lower + s1Lower;
        
//         let i =0;
//         let j =0;
//         let rotation = false
//         while (i<s2Lower.length && j<totalLength.length ){
//             rotation = true;
//             if( s2Lower[i] ==totalLength[j] ){
//                 i++;
//                 j++ ;
//             //  return  1;
//             }
//             else {
//                 rotation = false;
//                 j++;
//             //   return 0; 
//             } 
//         }
//         return rotation;
//     }
// }












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

























