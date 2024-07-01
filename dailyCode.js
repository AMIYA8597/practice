// 153. Find Minimum in Rotated Sorted Array


// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

 

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:

// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 

// Constraints:

// n == nums.length
// 1 <= n <= 5000
// -5000 <= nums[i] <= 5000
// All the integers of nums are unique.
// nums is sorted and rotated between 1 and n times.








var findMin = function(nums) {
    let first = 0;
    let right = nums.length -1;
    
    while(first < right) {
        let middle = Math.floor( (first + right) / 2);

        if(nums[middle] > nums[right]) {
            first = middle +1;
        } else {
            right = middle 
        }
    }
   return nums[first];

};





















// 43. Multiply Strings
       

// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.


// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"






var multiply = function(num1, num2) {
    if(num1 =="0" || num2== "0") {
        return "0";
    }

    const n1 = num1.length;
    const n2 = num2.length;

    const result = Array(n1 +n2).fill(0);

    for(let i = n1 -1; i>= 0; i--) {
        for(let j = n2-1; j>=0; j--) {
            const multiply = (num1[i] - "0") * (num2[j] - "0")
            const sum = multiply + result[i+j+1];

            result[i+j+1] = sum % 10;
            result[i+j] += Math.floor(sum / 10);

        }
    }

    let index = 0;
    while(index<result.length && result[index] ===0) {
        index++;
    }

    return result.slice(index).join('')

};








// 36. Valid Sudoku


// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
 

// Example 1:


// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

















var isValidSudoku = function(board) {

    // Helper function to check if a given list contains duplicates
    
    const isValidList = (list) => {
        let seen = new Set();
        for (let num of list) {
            if (num !== '.') {
                if (seen.has(num)) {
                    return false;
                }
                seen.add(num);
            }
        }
        return true;
    };

    // Check rows
    for (let row of board) {
        if (!isValidList(row)) {
            return false;
        }
    }

    // Check columns
    for (let col = 0; col < 9; col++) {
        let column = [];
        for (let row = 0; row < 9; row++) {
            column.push(board[row][col]);
        }
        if (!isValidList(column)) {
            return false;
        }
    }

    // Check 3x3 sub-boxes
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            let box = [];
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    box.push(board[boxRow * 3 + row][boxCol * 3 + col]);
                }
            }
            if (!isValidList(box)) {
                return false;
            }
        }
    }

    return true;
};















// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]





var mergeTwoLists = function(list1, list2) {
    let dummy = { next: null };
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // If either list runs out, connect the remaining elements
    if (list1 !== null) {
        current.next = list1;
    } else if (list2 !== null) {
        current.next = list2;
    }

    return dummy.next;
}

// Helper function to convert an array to a linked list
function arrayToList(arr) {
    let dummy = { next: null };
    let current = dummy;
    for (let val of arr) {
        current.next = { val: val, next: null };
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array
function listToArray(head) {
    let arr = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
};


















//   REVERSE INTEGER 


// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21



var reverse = function(x) {
    let max = 2147483647;   // 2**31 -1
    let min = -2147483648;  // -2**31

    let result = 0;
    let sign = x < 0 ? -1: 1;
    x = Math.abs(x);
    while (x !=0) {
        let pop = x % 10;
        x = Math.floor(x / 10);

        if(result > (max - pop) /10) {
            return 0;
        }
        result = result * 10 + pop;

       
    }

     result *= sign;

    return result;
};














// Longest Palindromic Substring



// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"






function longestPalindrome(s) {
    // Edge case: if the string is less than 2 characters long, return it as it is.
    if (s.length < 2) {
        return s;
    }

    // Initialize variables to keep track of the starting index and maximum length of the longest palindrome found.
    let start = 0, maxLength = 1;

    // Helper function to expand around the center and check for palindromes.
    function expandAroundCenter(left, right) {
        // Expand as long as the characters on both sides are equal.
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // Calculate the current length of the palindrome.
            let currentLength = right - left + 1;
            // If this is the longest palindrome found so far, update the start index and maximum length.
            if (currentLength > maxLength) {
                maxLength = currentLength;
                start = left;
            }
            // Move outwards to continue checking for larger palindromes.
            left--;
            right++;
        }
    }

    // Loop through each character in the string, treating each one as the center of a palindrome.
    for (let i = 0; i < s.length - 1; i++) {
        expandAroundCenter(i, i);        // Check for odd-length palindromes (single character center)
        expandAroundCenter(i, i + 1);    // Check for even-length palindromes (two character center)
    }

    // Return the longest palindromic substring found.
    return s.substring(start, start + maxLength);
}

// Example usage:
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // Output: "bb"























// 1351. Count Negative Numbers in a Sorted Matrix
// Easy
// Topics
// Companies
// Hint
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0




var countNegatives = function(grid) {
    let count = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    
    // Start from the top-right corner of the grid
    let row = 0;
    let col = cols - 1;
    
    while (row < rows && col >= 0) {
        if (grid[row][col] < 0) {
            // If the current element is negative,
            // all elements below in the same column are also negative.
            count += (rows - row);
            // Move to the left column
            col--;
        } else {
            // Move to the next row
            row++;
        }
    }
    
    return count;
};















// 29. Divide Two Integers
// Medium
// Topics
// Companies
// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

 

// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.
// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = -2.33333.. which is truncated to -2.








var divide = function(dividend, divisor) {
    // Handle edge case for overflow
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647; // Math.pow(2, 31) - 1
    }

    // Determine the sign of the result
    let sign = (dividend > 0) === (divisor > 0) ? 1 : -1;

    // Work with positive values
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let result = 0;

    while (a >= b) {
        let temp = b, multiple = 1;
        while (a >= (temp << 1)) {
            temp <<= 1;
            multiple <<= 1;
        }
        a -= temp;
        result += multiple;
    }

    return sign === 1 ? result : -result;
};



















// longest common prefix


var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    // Sort the array of strings
    strs.sort();

    // Take the first and last string in the sorted array
    let first = strs[0];
    let last = strs[strs.length - 1];

    // Initialize the index for the common prefix
    let i = 0;

    // Use a for loop to find the common prefix
    for (i = 0; i < first.length && first[i] === last[i]; i++);

    return first.substring(0, i);
};

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: "" 









// // reversed array

// let arr=[2,4,6,8,9,5,6]
//  let reversedArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArray+=(arr[i]);
//     }
    
//     console.log(reversedArray)






// 74. Search a 2D Matrix



// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

 

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104





 //  solution



var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    let n = matrix[0].length;
    let left = 0;
    let right = m * n -1;
    while(left <=right) {
        let mid = Math.floor((left + right) / 2);
        let midElement = matrix[Math.floor(mid / n)] [mid % n];
        if(midElement===target) {
            return true
        } else if(midElement<target){
            left = mid +1; 
        } else {
            right = mid -1;
        }
    }
    return false;

};












// function checkPalindrome(str) {  
//     // get the total length of the words  
//     const len = str.length;  
  
//     // Use for loop to divide the words into 2 half  
//     for (let i = 0; i < len / 2; i++) {  
//         // validate the first and last characters are the same  
//         if (str[i] !== str[len - 1 - i]) {  
//           alert( 'It is not palindrome'); 
//           return;
//         }  
//     }  
//   // If they are not the same, then it is not a palindrome
//     alert( 'It is a palindrome');  
// }  
  


// // take input of the string or number from the prompt  
// const string = prompt('Enter a string or number to check for Palindrome: ');  
  
// const value = checkPalindrome(string);  

// // log it's value in the console
// console.log(value);  


  //kth element


// function kthSmallest(arr, l, r, k) {
//     while (l <= r) {
//       const pivotIndex = partition(arr, l, r);
  
//       if (pivotIndex === k - 1) {
//         return arr[pivotIndex];
//       } else if (pivotIndex < k - 1) {
//         l = pivotIndex + 1;
//       } else {
//         r = pivotIndex - 1;
//       }
//     }
  
//     return -1; // Not found
//   }
  
//   function partition(arr, l, r) {
//     const pivot = arr[r];
//     let i = l - 1;
  
//     for (let j = l; j < r; j++) {
//       if (arr[j] <= pivot) {
//         i++;
//         [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
//       }
//     }
  
//     [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]]; // Place pivot in its correct position
//     return i + 1;
//   }
  
//   // Example usage:
//   const arr = [7, 10, 4, 3, 20, 15];
//   const k = 3;
//   const l = 0;
//   const r = arr.length - 1;
  
//   const result = kthSmallest(arr, l, r, k);
//   console.log(result); // Output: 7
  






// Given an unsorted array arr[] of size N having both negative and positive integers. The task is place all negative element at the end of array without changing the order of positive element and negative element.

// example 1: 

// Input : 
// N = 8
// arr[] = {1, -1, 3, 2, -7, -5, 11, 6 }
// Output : 
// 1  3  2  11  6  -1  -7  -5



// class Solution{
//     segregateElements(arr,n){
//         let posArr=[];
//         let negArr=[];
//         for (let i=0;i<=arr.length-1;i++){
//             if(arr[i]>0){
//                 posArr.push(arr[i])
         
//    } else if(arr[i]<0){
//                 negArr.push(arr[i])
//             }
            
//         }
//         console.log("pos ", posArr.toString())
//         console.log("neg ", negArr.toString())
//         for (let j=0;j<posArr.length;j++){
//            arr[j]=posArr[j];
//         }
//         console.log("arr1 ", arr.toString())
//         let count =0;

//         for (let k=posArr.length;k<=arr.length-1;k++){
//             arr[k]=negArr[count]
//             count++;
//         }
//         console.log("arr2 ", arr.toString())
//         // return arr;
        
//     //   totalArr = posArr.concat(negArr);
//         // console.log(totalArr.toString())
//         // return totalArr.toString();
//         // return arr
//         // let arr1 = posArr;
//         // let arr2 = negArr;
//         // let arr3;
        
     
//         // console.log( "negative is",totalArr)
//         // console.log("totalArray is ", totalArr.toString())
     
//         // return totalArr;
        
        
//         // return posArr;
//         // return negArr;
//         // console.log("posative",posArr);
//         // console.log("negative is",negArr)
        
      
 
     
//         // console.log("sorting is",sortArr)
//         // return newArr
        
//     }
    
// }





//   let posativeArr=arr.sort((a,b)=>(a-b));
//         console.log(posativeArr)
        
//         let negativeArr=arr.sort((a,b)=>(b-a));
//         console.log(negativeArr)
//         // for(let i=0;i>arr.length;i++){
//         //     if()
//         // }



// Given an array arr[] and an integer K where K is smaller than size of array, the task is to find the Kth smallest element in the given array. It is given that all array elements are distinct.

// Note :-  l and r denotes the starting and ending index of the array.



// class Solution {
//     kthSmallest(arr,l,r,k){
//       // code here
     
//      let sortArr= arr.sort((a,b) => a-b);
//      return sortArr[k-1]
//       //  console.log("hello")
//   //   return sortArr
      
//     }
//   }



// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.



// class Solution {
    
//     sort012(arr, N)
//     {
//         let assendArr= arr.sort();
//         // console.log(assendArr)
//         return assendArr
//     }
// }







// Given two arrays a[] and b[] of size n and m respectively. The task is to find the number of elements in the union between these two arrays.

// Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union.

// Note : Elements are not necessarily distinct.




// function findUnionCount(a, b) {
//     // Create a Set to store unique elements
//     let unionSet = new Set();

//     // Add elements from array a to the set
//     for (let i = 0; i < a.length; i++) {
//         unionSet.add(a[i]);
//     }

//     // Add elements from array b to the set
//     for (let i = 0; i < b.length; i++) {
//         unionSet.add(b[i]);
//     }

//     // Return the size of the set, which represents the number of elements in the union
//     return unionSet.size;
// }

// // Example usage:
// let a = [1, 2, 3, 4, 5];
// let b = [1, 2, 3];

// let result = findUnionCount(a, b);

// console.log("Number of elements in the union:", result);









// Given an array, rotate the array by one position in clock-wise direction.

// Input:
// N = 5
// A[] = {1, 2, 3, 4, 5}
// Output:
// 5 1 2 3 4




// function rotateArrayByOne(arr) {
//     // Get the last element of the array
//     let lastElement = arr[arr.length - 1];

//     // Shift the elements to the right
//     for (let i = arr.length - 1; i > 0; i--) {
//         arr[i] = arr[i - 1];
//     }

//     // Place the last element at the beginning
//     arr[0] = lastElement;
// }

// // Example usage:
// let N = 5;
// let A = [1, 2, 3, 4, 5];

// rotateArrayByOne(A);

// console.log("Rotated array:", A);









// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.


// example 1:

// Input:
// N = 5
// Arr[] = {1,2,3,-2,5}
// Output:
// 9
// Explanation:
// Max subarray sum is 9
// of elements (1, 2, 3, -2, 5) which 
// is a contiguous subarray.




// function maxSubarraySum(arr, N) {
//     let maxEndingHere = arr[0];
//     let maxSoFar = arr[0];

//     for (let i = 1; i < N; i++) {
//         // Calculate the maximum ending at the current index
//         maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

//         // Update the maximum sum so far
//         maxSoFar = Math.max(maxSoFar, maxEndingHere);
//     }

//     return maxSoFar;
// }

// // Example usage:
// let N = 5;
// let Arr = [1, 2, 3, -2, 5];

// let result = maxSubarraySum(Arr, N);

// console.log("Max subarray sum:", result);











// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.


// Example 1:

// Input:
// N = 5
// Arr[] = {1,2,3,-2,5}
// Output:
// 9
// Explanation:
// Max subarray sum is 9
// of elements (1, 2, 3, -2, 5) which 
// is a contiguous subarray.





// class Solution {
//     //Function to find the sum of contiguous subarray with maximum sum.
//     maxSubarraySum(arr, N){
//         // code here
//         let maxArray= 0;
//         for(let i =0; i<arr.length;i++){
//             maxArray+=arr[i]
//         }
//         // console.log( "max array is",maxArray)
//         return maxArray
        
//     } 
// }









// Given an array a of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array. Return the answer in ascending order. If no such element is found, return list containing [-1]. 

// Note: The extra space is only for the array to be returned. Try and perform all operations within the provided array. 

// Example 1:

// Input:
// N = 4
// a[] = {0,3,1,2}
// Output: 
// -1
// Explanation: 
// There is no repeating element in the array. Therefore output is -1.




// class Solution {
    
//     duplicates(a, n)
//     {
//         //your code here
        
//          let newArr = [];
//     //   let finalArr=[]
//       for(let i=0;i<a.length;i++){
//           for(let j=i+1;j<a.length;j++){
//              if(a[i]==a[j]){
                 
//                  newArr.push(a[j])
//              } 
//           }
      
//       }
//         //   console.log("newArray is",newArr)
//           return newArr
//     //   newArr=a;
//     //   console.log("newArray is", newArr);
//     //   return newArr;
    

//     }
// }





// // let elementCount = {};
// //     for(let i = 0; i < elements.length; i++) {
// //         if(!elementCount[elements[i]]) {
// //               elementCount[elements[i]] = 1;
// //         } else {
// //               elementCount[elements[i]] += 1;
// //         }
// //     }
// //     return elementCount;













// Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.


// Example 1:

// Input:
// N = 4, K = 6
// arr[] = {1, 5, 7, 1}
// Output: 2
// Explanation: 
// arr[0] + arr[1] = 1 + 5 = 6 
// and arr[1] + arr[3] = 5 + 1 = 6.


// function countPairsWithSum(arr, N, K) {
//     let count = 0;

//     // Iterate through each element in the array
//     for (let i = 0; i < N - 1; i++) {
//         for (let j = i + 1; j < N; j++) {
//             // Check if the sum of the current pair is equal to K
//             if (arr[i] + arr[j] === K) {
//                 count++;
//             }
//         }
//     }

//     return count;
// }

// // Example usage:
// const N = 4;
// const K = 6;
// const arr = [1, 5, 7, 1];

// const result = countPairsWithSum(arr, N, K);
// console.log("Output:", result);













// Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
// Note: can you take care of the duplicates without using any additional Data Structure?

// Example 1:

// Input:
// n1 = 6; A = {1, 5, 10, 20, 40, 80}
// n2 = 5; B = {6, 7, 20, 80, 100}
// n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}
// Output: 20 80
// Explanation: 20 and 80 are the only
// common elements in A, B and C.




// function findCommonElements(A, B, C, n1, n2, n3) {
//     let i = 0, j = 0, k = 0;

//     // Iterate until any of the arrays reaches its end
//     while (i < n1 && j < n2 && k < n3) {
//         // If the current elements in all three arrays are equal, it is a common element
//         if (A[i] === B[j] && B[j] === C[k]) {
//             console.log(A[i]);
//             i++;
//             j++;
//             k++;
//         } else {
//             // Move the pointer of the array with the smallest element
//             if (A[i] < B[j] || A[i] < C[k]) {
//                 i++;
//             } else if (B[j] < A[i] || B[j] < C[k]) {
//                 j++;
//             } else {
//                 k++;
//             }
//         }
//     }
// }

// // Example usage:
// const n1 = 6;
// const A = [1, 5, 10, 20, 40, 80];

// const n2 = 5;
// const B = [6, 7, 20, 80, 100];

// const n3 = 8;
// const C = [3, 4, 15, 20, 30, 70, 80, 120];

// console.log("Output:");
// findCommonElements(A, B, C, n1, n2, n3);




// let duplicates = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j] && duplicates.indexOf(arr[i]) === -1) {
//       // Add the duplicate element only once
//       duplicates.push(arr[i]);
//     }
//   }
// }

// console.log(duplicates); // Output: [2, 1, 3]








// let arr = [3, 1, 2, 2, 1, 2, 3, 3];

// const duplicates = arr.map((value, index) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value && i !== index) {
//       // Duplicate found
//       return value;
//     }
//   }
// });

// // Remove any undefined values (non-duplicates)
// const filteredDuplicates = duplicates.filter(value => value !== undefined);

// console.log(filteredDuplicates); // Output: [2, 1, 3, 3]











// let arr = [3, 1, 2, 2, 1, 2, 3, 3];

// const duplicates = arr.map((value, index) => {
//   if (arr.indexOf(value) !== index) {
//     // Element is not at its first occurrence, so it's a duplicate
//     return value;
//   }
// });

// // Filter out any undefined values (non-duplicates)
// const filteredDuplicates = duplicates.filter(value => value !== undefined);

// console.log(filteredDuplicates); // Output: [2, 1, 3, 3]


















// Given an array arr of size N and an element k. The task is to find the count of elements in the array that appear more than n/k times.

// Example 1:

// Input:
// N = 8
// arr = [3,1,2,2,1,2,3,3]
// k = 4
// Output: 
// 2
// Explanation: 
// In the given array, 3 and 2 are the only elements that appears more than n/k times.





// function countElementsGreaterThanNK(arr, k) {
//     const n = arr.length;
//     const hashMap = {};

//     // Count frequency of each element
//     for (let i = 0; i < n; i++) {
//         if (hashMap[arr[i]]) {
//             hashMap[arr[i]]++;
//         } else {
//             hashMap[arr[i]] = 1;
//         }
//     }

//     // Count elements appearing more than n/k times
//     let count = 0;
//     for (let key in hashMap) {
//         if (hashMap.hasOwnProperty(key)) {
//             if (hashMap[key] > n / k) {
//                 count++;
//             }
//         }
//     }

//     return count;
// }

// // Example usage:
// const arr = [3, 1, 2, 2, 1, 2, 3, 3];
// const k = 4;
// console.log(countElementsGreaterThanNK(arr, k)); // Output: 2





// function countOccurences(arr, n, k) {
//     // Create an empty object to store the count of each element
//     const countMap = {};
    
//     // Initialize a count to keep track of elements appearing more than n/k times
//     let count = 0;
    
//     // Loop through the input array
//     for (let i = 0; i < n; i++) {
//       const element = arr[i];
      
//       // Update the count of the current element in the map
//       countMap[element] = (countMap[element] || 0) + 1;
//     }
  
//     // Loop through the count map
//     for (const [element, frequency] of Object.entries(countMap)) {
//       // If the frequency of the current element is greater than n/k
//       if (frequency > Math.floor(n / k)) {
//         // Increment the count
//         count++;
//       }
//     }
  
//     // Return the count of elements appearing more than n/k times
//     return count;
//   }
  
//   // Example usage:
//   const N = 8;
//   const arr = [3, 1, 2, 2, 1, 2, 3, 3];
//   const k = 4;
//   const result = countOccurences(arr, N, k);
//   console.log(result); // Output: 2
  








// let arr = [3, 1, 2, 2, 1, 2, 3, 3];

// let count = {};

// arr.forEach(element => {
//   count[element] = (count[element] || 0) + 1;
// });

// console.log(count)





// let arr = [3, 1, 2, 2, 1, 2, 3, 3];

// let count = {};

// arr.forEach((element) => {
//   count[element] = (count[element] || 0) + 1;
// });

// console.log(count)



// This line increments the count of the current element in the count object. 
// It does this by using the current element as a key in the count object. 
// If the element doesn't exist in the count object yet, 
// it initializes its count to 0 using the logical OR operator (||), then adds 1 to it.






// const arr = [3, 1, 2, 2, 1, 2, 3, 3];

// const result = arr.map((element, index) => {
//     return `Element: ${ element },Index: ${ index } `;
// });
// console.log( "result  is",result)






// class Solution {
//     countOccurence(arr, n, k) {
//         let mp = new Map();
//         let a = Math.floor(n/k);

//         for(let i = 0; i < n; i++) {
//             if(mp.has(arr[i])) {
//                 mp.set(arr[i], mp.get(arr[i]) + 1);
//             } else {
//                 mp.set(arr[i], 1);
//             }
//         }

//         let count = 0;
//         for(let [key, value] of mp.entries()) {
//             if(value > a) {
//                 count++;
//             }
//         }

//         return count;
//     }
// }








// function countOccurence(arr, n, k) {
//     let result = {};
    
//     for (let i = 0; i < arr.length; i++) {
//         let newArr = arr[i];
//         if (!result[newArr]) {
//             result[newArr] = 1;
//         } else {
//             result[newArr] += 1;
//         }
//     }
    
//     let threshold = n / k;
//     let count = 0;
    
//     for (let key in result) {
//         if (result[key] > threshold) {
//             count++;
//         }
//     }
    
//     return count;
// }

// // Example usage:
// let arr = [3, 1, 2, 2, 1, 2, 3, 3];
// let n = 8;
// let k = 4;
// console.log(countOccurence(arr, n, k)); // Output: 2





// class Solution
// {
//     //Function to find all elements in array that appear more than n/k times.
//     countOccurence(arr, n, k)
//     {
//         //your code here
        
//         let result = {};
        
//         for (let i=0;i<arr.length; i++){
//             let newArr = arr[i];
//             if(!result[newArr]){
//                 result[newArr] = 1;
//             }
//             else {
//                 result[newArr]+=1
//             }
//         }
        
//         // return result
        
//         let divide = Math.floor(n/k);
        
//         let totalCount = 0;
        
//         // let newValue = arr.map((element)=> {
//         //     if(element > divide){
//         //         totalCount ++
//         //     };
//         // })
        
//         // return newValue
        
//             for (let key in result) {
//         if (result[key] > divide) {
//             totalCount++;
//         }
//     }
    
//     return totalCount;
//     }
// }





// function countOccurence(arr, n, k) {
//     // Use a Map to store element counts efficiently
//     const counts = new Map();
   
//     // Count occurrences using a loop
//     for (const element of arr) {
//       counts.set(element, (counts.get(element) || 0) + 1);
//     }
   
//     // Calculate the threshold for "more than n/k times"
//     const threshold = n / k;
   
//     // Use map to filter elements and count qualifying ones
//     const qualifyingCount = arr.map((element) => {
//       return counts.get(element) > threshold ? 1 : 0;
//     }).reduce((sum, count) => sum + count, 0);
   
//     return qualifyingCount;
//    }
   







// Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m. Task is to check whether a2[] is a subset of a1[] or not. Both the arrays can be sorted or unsorted. There can be duplicate elements.
 

// Example 1:

// Input:
// a1[] = {11, 7, 1, 13, 21, 3, 7, 3}
// a2[] = {11, 3, 7, 1, 7}
// Output:
// Yes
// Explanation:
// a2[] is a subset of a1[]










// function isSubset(a1, a2, n, m) {
//     // Sort the arrays
//     let sortA1 = a1.sort((a, b) => a - b);
//     let sortA2 = a2.sort((a, b) => a - b);

//     // Count frequencies of elements in both arrays
//     let arrElement = {};
//     let arrElement2 = {};

//     for (let i = 0; i < sortA1.length; i++) {
//         let firstElement = sortA1[i];
//         if (!arrElement[firstElement]) {
//             arrElement[firstElement] = 1;
//         } else {
//             arrElement[firstElement]++;
//         }
//     }

//     for (let j = 0; j < sortA2.length; j++) {
//         let secondElement = sortA2[j];
//         if (!arrElement2[secondElement]) {
//             arrElement2[secondElement] = 1;
//         } else {
//             arrElement2[secondElement]++;
//         }
//     }

//     // Compare the frequency objects
//     for (let key in arrElement2) {
//         if (!(key in arrElement) || arrElement2[key] > arrElement[key]) {
//             return "No";
//         }
//     }

//     return "Yes";
// }

// // Example usage:
// let a1 = [11, 7, 1, 13, 21, 3, 7, 3];
// let a2 = [11, 3, 7, 1, 7];
// let n = a1.length;
// let m = a2.length;
// console.log(isSubset(a1, a2, n, m)); // Output: Yes






// function isSubset(a1, a2) {
//     // Create a frequency map for elements in a1
//     let frequencyMap = {};
//     for (let i = 0; i < a1.length; i++) {
//         let element = a1[i];
//         if (!frequencyMap[element]) {
//             frequencyMap[element] = 1;
//         } else {
//             frequencyMap[element]++;
//         }
//     }

//     // Check if all elements of a2 are present in a1
//     for (let i = 0; i < a2.length; i++) {
//         let element = a2[i];
//         // If the element is not present or its frequency in a1 is zero,
//         // a2 is not a subset of a1
//         if (!frequencyMap[element] || frequencyMap[element] === 0) {
//             return "No";
//         } else {
//             frequencyMap[element]--;
//         }
//     }

//     // If all elements of a2 are found in a1, a2 is a subset of a1
//     return "Yes";
// }

// // Example usage:
// let a1 = [11, 7, 1, 13, 21, 3, 7, 3];
// let a2 = [11, 3, 7, 1, 7];
// console.log(isSubset(a1, a2)); // Output: Yes









// isSubset(a1, a2, n, m){
//     //code here
//     let arrElement = {};
    
//     for(let i=0; i<a1.length; i++){
//         let firstElement = a1[i];
//         if(!arrElement[firstElement]){
//             arrElement[firstElement] =1;
//         } else {
//             arrElement[firstElement] +1;
//         }
//     }
//     // console.log("first array element is ",arrElement)
    
    
//     for(let j =0; j<a2.length; j++) {
//         let secondElement = a2[j]
        
//         if (!arrElement[secondElement] )
//         return "No"
//     }
//     // else {
//     //     return "yes"
//     // }
//     return "Yes"
// }







// Given an array A[ ] of positive integers of size N, where each value represents the number of chocolates in a packet. Each packet can have a variable number of chocolates. There are M students, the task is to distribute chocolate packets among M students such that :
// 1. Each student gets exactly one packet.
// 2. The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum.

// Example 1:

// Input:
// N = 8, M = 5
// A = {3, 4, 1, 9, 56, 7, 9, 12}
// Output: 6
// Explanation: The minimum difference between maximum chocolates and minimum chocolates is 9 - 3 = 6 by choosing following M packets :{3, 4, 9, 7, 9}.


// solve in javascript without using method



// function minDifferenceBetweenPackets(N, M, A) {
//     if (M > N) {
//         return -1; // Not enough packets to distribute to each student
//     }

//     // Sort the array in ascending order
//     A.sort((a, b) => a - b);

//     let minDifference = Infinity;

//     // Find the minimum difference by iterating through the array
//     for (let i = 0; i + M - 1 < N; i++) {
//         let difference = A[i + M - 1] - A[i];
//         if (difference < minDifference) {
//             minDifference = difference;
//         }
//     }

//     return minDifference;
// }

// // Example usage:
// const N = 8;
// const M = 5;
// const A = [3, 4, 1, 9, 56, 7, 9, 12];
// console.log(minDifferenceBetweenPackets(N, M, A)); // Output: 6







// class Solution{
//     isSubset(a1, a2, n, m){
//         //code here
//         let sortA1 = a1.sort( (a , b) => a - b);
//         let sortA2 = a2.sort( (a , b) => a - b);
//         // console.log("sortA1 is", sortA1);
//         // console.log("sortA2 is" ,sortA2)
//         let arrElement = {};
//         let arrElement2 = {};
        
//         for(let i=0; i<sortA1.length; i++){
//             let firstElement = sortA1[i];
//             if(!arrElement[firstElement]){
//                 arrElement[firstElement] = 1;
//             } else {
//                 arrElement[firstElement] ++;
//             }
//         }
        
//         // console.log("first array element is ",arrElement)
        
        
//         for(let j =0; j<sortA2.length; j++) {
//             let secondElement = sortA2[j]
            
//             if (!arrElement2[secondElement] ){
//                 arrElement2[secondElement] =1;
//             }
//             else {
//                 arrElement2[secondElement] ++;
//             }
        
//         } 
        
//                 // console.log("second array element is ",arrElement2)

        
        
//     for (let key in arrElement2) {
//         if (!(key in arrElement) ) {
//             return "No";
//         }
//     }

//     return "Yes"
        
        
//     }
// }











// Given an array of integers (A[])  and a number x, find the smallest subarray with sum greater than the given value. If such a subarray do not exist return 0 in that case.

// Example 1:

// Input:
// A[] = {1, 4, 45, 6, 0, 19}
// x  =  51
// Output: 3
// Explanation:
// Minimum length subarray is 
// {4, 45, 6}




// function smallestSubarrayWithSumGreaterThanX(arr, x) {
//     let minLen = arr.length + 1;

//     // Iterate through all possible starting points of the subarray
//     for (let start = 0; start < arr.length; start++) {
//         let currSum = arr[start];

//         // If the current element itself is greater than x, return 1
//         if (currSum > x) {
//             return 1;
//         }

//         // Try all subarrays starting from 'start'
//         for (let end = start + 1; end < arr.length; end++) {
//             // Add elements of the current subarray
//             currSum += arr[end];

//             // If the sum becomes greater than x and the length of this subarray is smaller
//             // than the current smallest subarray length, update minLen
//             if (currSum > x && (end - start + 1) < minLen) {
//                 minLen = (end - start + 1);
//             }
//         }
//     }

//     // If minLen is still the initial value, no subarray with sum greater than x was found
//     return minLen === arr.length + 1 ? 0 : minLen;
// }

// // Example usage:
// const arr = [1, 4, 45, 6, 0, 19];
// const x = 51;
// console.log(smallestSubarrayWithSumGreaterThanX(arr, x)); // Output: 3





// let employees = [

//     {
  
//       id: 111,
  
//       name: "Chelsea Foster",
  
//       years: 7,
  
//     },
  
//     {
  
//       id: 102,
  
//       name: "Aggie Sparling",
  
//       years: 13,
  
//     },
  
//     {
  
//       id: 123,
  
//       name: "Timmy Matthews",
  
//       years: 23,
  
//     },
  
//     {
  
//       id: 119,
  
//       name: "Emmet Foster",
  
//       years: 22,
  
//     }
  
//   ];
  
//   let employeesTotalYears = employees.reduce((accu , index) =>{
//     return accu + employees.years
//   }, 0)










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

// console.log(maxSum([2,3,7,-5,8]))





// maxSubarraySum(arr, N){
//     // code here
// let maximum = Number.MIN_SAFE_INTEGER - 1;
// let currentSum = 0;
// for(let i=0; i<arr.length; i++){
//     currentSum +=arr[i];
//     if(currentSum >maximum){
//         maximum = currentSum;
//     }
//     if(currentSum<0){
//         currentSum =0;
//     }
// }
// // console.log(maximum)
// return maximum
    
// } 














// Javascript Program For Stock Buy Sell To Maximize Profit




// // Javascript program to implement
// // the above approach

// // Function to return the maximum profit
// // that can be made after buying and
// // selling the given stocks
// function maxProfit(price, start, end)
// {
// 	// If the stocks can't be bought
// 	if (end <= start)
// 		return 0;

// 	// Initialise the profit
// 	let profit = 0;

// 	// The day at which the stock
// 	// must be bought
// 	for (let i = start; i < end; i++) 
// 	{
// 		// The day at which the
// 		// stock must be sold
// 		for (let j = i + 1; j <= end; j++) 
// 		{
// 			// If buying the stock at ith day and
// 			// selling it at jth day is profitable
// 			if (price[j] > price[i]) 
// 			{
// 				// Update the current profit
// 				let curr_profit = price[j] - price[i] + 
// 								maxProfit(price, 
// 											start, i - 1) + 
// 								maxProfit(price, 
// 											j + 1, end);

// 				// Update the maximum profit 
// 				// so far
// 				profit = Math.max(profit, 
// 								curr_profit);
// 			}
// 		}
// 	}
// 	return profit;
// }

// // Driver code
// let price = [100, 180, 260, 310,
// 			40, 535, 695];
// let n = price.length;
// document.write(maxProfit(
// 			price, 0, n - 1));














// let arr = [3,5,4,7,-3,7]


// function maxNeedSum(arr)
// {
//     let max = -1;
//     let min = 0;
//     for(let i=0; i<arr.length;i++) {
//         max+=arr[i];
//         if(max>arr[i]) {
//             max = arr[i]
//         };
//         // if()
        
//     }
//     console.log(max)
// }












// Given an array arr[] denoting heights of N towers and a positive integer K.

// For each tower, you must perform exactly one of the following operations exactly once.

// Increase the height of the tower by K
// Decrease the height of the tower by K
// Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

// You can find a slight modification of the problem here.
// Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.

// Example 1:

// Input:
// K = 2, N = 4
// Arr[] = {1, 5, 8, 10}
// Output:
// 5
// Explanation:
// The array can be modified as 
// {1+k, 5-k, 8-k, 10-k} = {3, 3, 6, 8}. 
// The difference between 
// the largest and the smallest is 8-3 = 5.



// solve in javascript without using method and use for loop




// function minPossibleDifference(K, N, Arr) {
//     // Sort the array in non-decreasing order
//     for (let i = 0; i < N; i++) {
//         for (let j = 0; j < N - i - 1; j++) {
//             if (Arr[j] > Arr[j + 1]) {
//                 let temp = Arr[j];
//                 Arr[j] = Arr[j + 1];
//                 Arr[j + 1] = temp;
//             }
//         }
//     }

//     // Initialize the minimum and maximum heights after modification
//     let minHeight = Arr[0] + K;
//     let maxHeight = Arr[N - 1] - K;

//     // Check if any tower's height can be made smaller or larger
//     for (let i = 0; i < N - 1; i++) {
//         let currentHeight = Arr[i];
//         let nextHeight = Arr[i + 1];

//         // Check if it's possible to decrease the current tower's height
//         let potentialMin = Math.min(minHeight, currentHeight - K);
//         // Check if it's possible to increase the next tower's height
//         let potentialMax = Math.max(maxHeight, nextHeight + K);

//         // Update the minimum and maximum heights accordingly
//         if (potentialMin < 0 || potentialMax < 0) continue; // Skip if negative heights are encountered
//         minHeight = potentialMin;
//         maxHeight = potentialMax;
//     }

//     // Return the minimum possible difference
//     return maxHeight - minHeight;
// }

// // Example usage
// const K = 2;
// const N = 4;
// const Arr = [1, 5, 8, 10];
// console.log(minPossibleDifference(K, N, Arr)); // Output: 5










// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.


// Example 1:

// Input:
// N = 5
// Arr[] = {1,2,3,-2,5}
// Output:
// 9
// Explanation:
// Max subarray sum is 9
// of elements (1, 2, 3, -2, 5) which 
// is a contiguous subarray.
// Example 2:

// Input:
// N = 4
// Arr[] = {-1,-2,-3,-4}
// Output:
// -1
// Explanation:
// Max subarray sum is -1 
// of element (-1)






// class Solution {
//     //Function to find the sum of contiguous subarray with maximum sum.
//     maxSubarraySum(arr, N){
//         // code here
//     let maximum = Number.MIN_SAFE_INTEGER - 1;
//     let currentSum = 0;
//     for(let i=0; i<arr.length; i++){
//         currentSum +=arr[i];
//         if(currentSum >maximum){
//             maximum = currentSum;
//         }
//         if(currentSum<0){
//             currentSum =0;
//         }
//     }
//     // console.log(maximum)
//     return maximum
        
//     } 
// }










// Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m, where both arrays may contain duplicate elements. The task is to determine whether array a2 is a subset of array a1. It's important to note that both arrays can be sorted or unsorted. Additionally, each occurrence of a duplicate element within an array is considered as a separate element of the set.

// Example 1:

// Input:
// a1[] = {11, 7, 1, 13, 21, 3, 7, 3}
// a2[] = {11, 3, 7, 1, 7}
// Output:
// Yes
// Explanation:
// a2[] is a subset of a1[]

// Example 2:

// Input:
// a1[] = {1, 2, 3, 4, 4, 5, 6}
// a2[] = {1, 2, 4}
// Output:
// Yes
// Explanation:
// a2[] is a subset of a1[]

// Example 3:

// Input:
// a1[] = {10, 5, 2, 23, 19}
// a2[] = {19, 5, 3}
// Output:
// No
// Explanation:
// a2[] is not a subset of a1[]





// class Solution{
//     isSubset(a1, a2, n, m){
//         //code here
//         let sortA1 = a1.sort( (a , b) => a - b);
//         let sortA2 = a2.sort( (a , b) => a - b);
//         // console.log("sortA1 is", sortA1);
//         // console.log("sortA2 is" ,sortA2)
//         let arrElement = {};
//         let arrElement2 = {};
        
//         for(let i=0; i<sortA1.length; i++){
//             let firstElement = sortA1[i];
//             if(!arrElement[firstElement]){
//                 arrElement[firstElement] = 1;
//             } else {
//                 arrElement[firstElement] ++;
//             }
//         }
        
//         // console.log("first array element is ",arrElement)
        
        
//         for(let j =0; j<sortA2.length; j++) {
//             let secondElement = sortA2[j]
            
//             if (!arrElement2[secondElement] ){
//                 arrElement2[secondElement] =1;
//             }
//             else {
//                 arrElement2[secondElement] ++;
//             }
        
//         } 
        
//                 // console.log("second array element is ",arrElement2)

        
        
//     for (let key in arrElement2) {
//         if (!(key in arrElement) ) {
//             return "No";
//         }
//     }

//     return "Yes"
        
        
//     }
// }






//         // if ( arrElement == arrElement2){
//         //     return "Yes"
//         // }
        
//         // else {
//         //     return "No"
//         // }





//         // else {
//         //     return "yes"
//         // }
//         // return "Yes"
        
        









// Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
// Note: can you take care of the duplicates without using any additional Data Structure?

// Example 1:

// Input:
// n1 = 6; A = {1, 5, 10, 20, 40, 80}
// n2 = 5; B = {6, 7, 20, 80, 100}
// n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}
// Output: 20 80
// Explanation: 20 and 80 are the only
// common elements in A, B and C.
 

// Your Task:  
// You don't need to read input or print anything. Your task is to complete the function commonElements() which take the 3 arrays A[], B[], C[] and their respective sizes n1, n2 and n3 as inputs and returns an array containing the common element present in all the 3 arrays in sorted order. 
// If there are no such elements return an empty array. In this case the output will be printed as -1.






// class Solution{
//     commonElements(arr1, arr2, arr3, n1, n2,n3){
//         // let first = 0;
//         // let second = 0;
//         // let third = 0;
//         let result =[]
    
//       for (let i =0; i<n1; i++) {

//            for (let j=0; j<n2;j++){
               
//                for (let k=0; k<n3; k++){
                   
//                  if (arr1[i]===arr2[j] && arr2[j]===arr3[k])  {
                     
//                     //  if (result != arr1[i]){
//                          result.push(arr1[i]);
//                     //  }
//                  }
//                }
//            }
//         //   first.push(n1[i])
//         //   result +=n1[i]
//       } 
//     //   console.log(result)
//     //   return first ;
//     return result
//     }
    
// }









// Binary Search In JavaScript





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







   //binary 



//    function isBinary( array, needValue, start , end){
    
//     if(start >end) return false;
    
//     let middleValue = Math.floor((start +end ) /2 );
    
//     if(array[middleValue] == needValue) return true;
    
//     if(array[middleValue] > needValue ) {
//         return isBinary(array , needValue, start , middleValue -1)
//     }
    
//     else {
//         return isBinary(array , needValue,  middleValue +1 , end)
//     }
    
    
//     // if(array[middleValue] <end) {
//     //     return isBinary(array , needValue , )
//     // }
    
    
//     }
    
//     let array = [ 5,6,7,9,11,20, 25,38,41,52,63,74,65];
//     let needValue = 65;
    
    
//     let result = isBinary(array , needValue , 0 , array.length -1);
    
//     console.log(result)







// check the array is odd or even 


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











// function isRotatedString(s1, s2) {
//   // Ensure strings have the same length
//   if (s1.length !== s2.length) {
//     return false;
//   }

//   // Find a potential rotation point in s1
//   for (let i = 1; i < s1.length; i++) {
//     if (s1[i] === s2[0]) {
//       // Check if characters match after rotation
//       let j = 0;
//       while (j < s1.length) {
//         if (s1[(i + j) % s1.length] !== s2[j]) {
//           break;
//         }
//         j++;
//       }
//       if (j === s1.length) {
//         return true;
//       }
//     }
//   }

//   // No rotation point found
//   return false;
// }






// function areRotations(s1, s2) {
//   // Convert strings to lowercase
//   let s1Lower = s1.toLowerCase();
//   let s2Lower = s2.toLowerCase();

//   // Check if lengths are equal
//   if (s1Lower.length !== s2Lower.length) return false;

//   // Concatenate s1 twice to cover all possible rotations
//   let totalLength = s1Lower + s1Lower;

//   // Loop through concatenated string
//   for (let i = 0; i < totalLength.length; i++) {
//       // Check if the current substring matches s2
//       let isRotation = true;
//       for (let j = 0; j < s2Lower.length; j++) {
//           if (totalLength[i + j] !== s2Lower[j]) {
//               isRotation = false;
//               break;
//           }
//       }
//       // If all characters match, return true
//       if (isRotation) return true;
//   }

//   // If no rotation found, return false
//   return false;
// }

// // Test cases
// console.log(areRotations("geeksforgeeks", "forgeeksgeeks")); // Output: true
// console.log(areRotations("hello", "world")); // Output: false







// function areRotations(s1, s2) {
//   // Check if lengths are different
//   if (s1.length !== s2.length) {
//       return false;
//   }

//   // Concatenate s1 with itself to handle rotations
//   const concatenated = s1 + s1;

//   // Check if s2 is a substring of the concatenated string
//   for (let i = 0; i < concatenated.length - s2.length + 1; i++) {
//       let isRotation = true;
//       // Check if each character of s2 matches the corresponding character in the concatenated string
//       for (let j = 0; j < s2.length; j++) {
//           if (concatenated[i + j] !== s2[j]) {
//               isRotation = false;
//               break;
//           }
//       }






// function isRotatedString(s1, s2) {
//   // Ensure strings have the same length
//   if (s1.length !== s2.length) {
//     return false;
//   }

//   // Find a potential rotation point in s1
//   for (let i = 1; i < s1.length; i++) {
//     if (s1[i] === s2[0]) {
//       // Check if characters match after rotation
//       let j = 0;
//       while (j < s1.length) {
//         if (s1[(i + j) % s1.length] !== s2[j]) {
//           break;
//         }
//         j++;
//       }
//       if (j === s1.length) {
//         return true;
//       }
//     }
//   }

//   // No rotation point found
//   return false;
// }



//       // If all characters match, return true
//       if (isRotation) {
//           return true;
//       }
//   }

//   // If no match is found, return false
//   return false;
// }

// // Test cases
// console.log(areRotations("geeksforgeeks", "forgeeksgeeks")); // Output: true
// console.log(areRotations("hello", "world")); // Output: false




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





// areRotations(s1, s2)
    
//     {
          
//              // Check if lengths are different
//   if (s1.length !== s2.length) {
//       return false;
//   }

//   // Concatenate s1 with itself to handle rotations
// //   const concatenated = s1 + s1;

// let totalLength = s1 + s1;

//   // Check if s2 is a substring of the concatenated string
//   for (let i = 0; i < totalLength.length - s2.length + 1; i++) {
//       let isRotation = true;
//       // Check if each character of s2 matches the corresponding character in the concatenated string
//       for (let j = 0; j < s2.length; j++) {
//           if (totalLength[i + j] !== s2[j]) {
//               isRotation = false;
//               break;
//             }
//       }




//       // If all characters match, return true
//       if (isRotation) {
//           return 1;
//       }
//   }

//   // If no match is found, return false
//   return 0;
//     }












// array map function


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





// erverse a array 


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











// Given an array of size n and a range [a, b]. The task is to partition the array around the range such that array is divided into three parts.
// 1) All elements smaller than a come first.
// 2) All elements in range a to b come next.
// 3) All elements greater than b appear in the end.
// The individual elements of three sets can appear in any order. You are required to return the modified array.

// Note: The generated output is 1 if you modify the given array successfully.


// Example 1:

// Input: 
// n = 5
// A[] = {1, 2, 3, 3, 4}
// [a, b] = [1, 2]
// Output: 1
// Explanation: One possible arrangement is:
// {1, 2, 3, 3, 4}. If you return a valid
// arrangement, output will be 1.




// function partitionArray(arr, n, a, b) {
//   // Ensure a <= b
//   if (a > b) {
//     return -1; // Error: invalid range
//   }

//   // Initialize start and end indices
//   let start = 0;
//   let end = n - 1;

//   // Partition the array
//   while (start <= end) {
//     if (arr[start] < a) {
//       // Element belongs to the first part, swap and move start
//       swap(arr, start, end);
//       end--;
//     } else if (arr[start] > b) {
//       // Element belongs to the third part, swap and move end
//       swap(arr, start, end);
//       start++;
//     } else {
//       // Element belongs to the second part, move start
//       start++;
//     }
//   }

//   // Array is now partitioned, return 1 for success
//   return 1;
// }

// // Swap function for efficiency
// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// // Example usage
// const arr = [1, 2, 3, 3, 4];
// const n = arr.length;
// const a = 1;
// const b = 2;

// const result = partitionArray(arr, n, a, b);

// console.log(arr); // Output: [1, 2, 3, 3, 4] (or any valid partitioned array)
// console.log(result); // Output: 1

// // Example with invalid range
// const result2 = partitionArray(arr, n, 3, 1);
// console.log(result2); // Output: -1 (error message)









// function decimalToBinary(decimal) {
//   if (decimal === 0) {
//       return '0';
//   }

//   let binary = '';
//   while (decimal > 0) {
//       binary = (decimal % 2) + binary;
//       decimal = Math.floor(decimal / 2);
//   }

//   return binary;
// }

// //  console.log(decimalToBinary(22))
// //  Example usage:
// const decimalNumber = 25;
// const binaryNumber = decimalToBinary(decimalNumber);
// console.log(`Binary representation of ${decimalNumber} is: ${binaryNumber}`);



// function partitionArray(arr, a, b) {
//   let low = 0;
//   let high = arr.length - 1;

//   for (let i = 0; i <= high; i++) {
//     if (arr[i] < a) {
//       // Swap with element at low index
//       [arr[i], arr[low]] = [arr[low], arr[i]];
//       low++;
//     } else if (arr[i] > b) {
//       // Swap with element at high index
//       [arr[i], arr[high]] = [arr[high], arr[i]];
//       high--;
//       i--; // Decrement i to recheck the swapped element
//     }
//   }

//   return 1; // Indicate successful modification
// }

// // Example usage
// const arr = [1, 2, 3, 3, 4];
// const a = 1;
// const b = 2;

// partitionArray(arr, a, b);
// console.log(arr); // Output: [1, 2, 3, 3, 4] (partitioned successfully)









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
   















