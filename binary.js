// let recursiveFunction = function (sorted_arr, target, start, end) {
//     // here is the base condition
//     if (start > end) return false;
 
//     // find the middle index
//     let mid = Math.floor((start + end) / 2);
 
//     // Compare the middle to the given key target.
//     if (sorted_arr[mid] == target) return true;
 
//     // If the element in the middle is greater than the target, look in the left half of the middle.
//     if (sorted_arr[mid] > target)
//        return recursiveFunction(sorted_arr, target, start, mid - 1);
//     // If the element in the middle is smaller than the target, look in the right half of the middle.
//     else return recursiveFunction(sorted_arr, target, mid + 1, end);
//  };
 
//  // Driver code
//  let sorted_arr = [2, 6, 8, 10, 12, 14];
//  let target = 9;
 
//  if (recursiveFunction(sorted_arr, target, 0, sorted_arr.length - 1))
//     document.write("Target found!<br>");
//  else document.write("Target not found!<br>");
 
//  target = 10;
 
//  if (recursiveFunction(sorted_arr, target, 0, sorted_arr.length - 1))
//     document.write("Target found!<br>");
//  else document.write("Target not found!<br>");
 










//  // Binary Search is implemented using an iterative function.
// let iterativeFunction = function (sorted_arr, target) {
//     let start = 0,
//        end = sorted_arr.length - 1;
 
//     // Iterate as long as the beginning does not encounter the end.
//     while (start <= end) {
//        // find out the middle index
//        let mid = Math.floor((start + end) / 2);
 
//        // Return True if the element is present in the middle.
//        if (sorted_arr[mid] == target) return true;
//        // Otherwise, look in the left or right half
//        else if (sorted_arr[mid] < target) start = mid + 1;
//        else end = mid - 1;
//     }
 
//     return false;
//  };
 
//  // Driver code
//  let sorted_arr = [2, 6, 8, 10, 12, 14];
//  let target = 9;
 
//  if (iterativeFunction(sorted_arr, target, 0, sorted_arr.length - 1))
//     document.write("Target found!<br>");
//  else document.write("Target not found!<br>");
 
//  target = 10;
 
//  if (iterativeFunction(sorted_arr, target, 0, sorted_arr.length - 1))
//     document.write("Target found!<br>");
//  else document.write("Target not found!<br>");














// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

 

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
// Example 3:

// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].






// var nextGreatestLetter = function(letters, target) {
//     let left = 0;
//      let right = letters.length;
 
//      while (left < right) {
//          const mid = Math.floor((left + right) / 2);
 
//          if (letters[mid] <= target) {
//              left = mid + 1;
//          } else {
//              right = mid;
//          }
//      }
 
//      return letters[left % letters.length];
//  };




















// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0





// var countNegatives = function(grid) {
//     const rows = grid.length;
//     const cols = grid[0].length;
//     let count = 0;
//     let row = rows - 1;
//     let col = 0;

//     while (row >= 0 && col < cols) {
//         if (grid[row][col] < 0) {
//             // If the current element is negative, add the remaining elements in the row to the count
//             count += cols - col;
//             row--; // Move up to the previous row
//         } else {
//             col++; // Move right to the next column
//         }
//     }

//     return count;
// };











// let array = [3, 4, 6, 7, 9, 10, 13, 24, 35, 46, 52, 66, 71, 82, 98];
// let needValue = 82;

// let binarySearch = function (array, needValue, start, end) {
//     if (start > end) return false;

//     let middle = Math.floor((start + end) / 2);

//     if (array[middle] === needValue) return true;

//     if (array[middle] > needValue) {
//         return binarySearch(array, needValue, start, middle - 1);
//     } else {
//         return binarySearch(array, needValue, middle + 1, end);
//     }
// }

// let result = binarySearch(array , needValue , 0 , array.length -1);

// console.log(result)












// function isBinary(arr , need , start , end) {
//     if( start > end ) return false;
    
//     let middle = Math.floor((start + end ) /2 );
    
//     if(arr[middle] == need) return true;
    
//     if(arr[middle] > need) {
//         return isBinary(arr, need , start , middle -1 )
//     }
    
//     else{
//         return isBinary(arr, need , middle+1, end)
//     }
//    else {
//        return false
//    }
    
// }

// let arr = [8,9,11,14,25,36,47,58,69,70]
// let need = 88;

// //   console.log(isBinary(  [2,4,6,8,11,15] , 8 , 0 , arr.length -1))

// let result = isBinary(arr , need , 0, arr.length-1);

// console.log(result);

 








// let array = [4,6,12,24,32,45,53,58];

// let needValue =82


//  function binary (array , needValue , start , end){
//     if(start > end) return false;

//     let middleValue = Math.floor( (start + end) / 2 );

//     if (array[middleValue] != needValue) return false;

//     if(array[middleValue] > needValue) {
//         return middleValue
//     };

//     else if(array[middleValue] < needValue) {

//     }

//  }