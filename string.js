// You are given a string s. You need to reverse the string.

// Example 1:

// Input:
// s = Geeks
// Output: skeeG
// Example 2:

// Input:
// s = for
// Output: rof





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



















