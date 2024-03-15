// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
















// var removeDuplicates = function(nums) {
//     if (nums.length === 0) {
//         return 0;
//     }

//     let uniqueCount = 1;

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1]) {
//             nums[uniqueCount] = nums[i];
//             uniqueCount++;
//         }
//     }

//     return uniqueCount; 
// };







    // var removeDuplicates = function(nums) {
    //     // Create a Set from the input array to automatically remove duplicates, then convert it back into an Array.
    //     // Create an empty set to store the numbers in.
    //     let seenNums = new Set();












    
// // follow up question  
 // // here i am printing maximum subarray and their sum

function maxSubnums(nums) {
    let maxSum =nums[0];
    let startIdx = 0;
    let endIdx = 0;

    for (let i = 0; i < nums.length; i++) {   // n
        let currentSum =0;

        for (let j =i; j <nums.length; j++) { // n / n-1 / n-2 / n-3 / n-4 ...
            currentSum= currentSum +nums[j];
            if (currentSum >maxSum){
                maxSum =currentSum;
                startIdx= i;
                endIdx = j;
            }
       }
        
    }
    return {sum :maxSum, subAray: nums.slice(startIdx , endIdx +1)};
}

// console.log( "max sub number is",maxSubnums( [-2,4,-3,3,-1,4,1,-4,-8,7]));
console.log( "max sub number is",maxSubnums( [5,-6,3,8,-12,9,4,-8]));


















// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]






// var nextPermutation = function(nums) {
//     let i = nums.length - 2;
//     while (i >= 0 && nums[i] >= nums[i + 1]) {
//         i--;
//     }
    
//     if (i >= 0) {
//         let j = nums.length - 1;
//         while (j >= 0 && nums[j] <= nums[i]) {
//             j--;
//         }
//         swap(nums, i, j);
//     }
    
//     reverse(nums, i + 1);
// };

// function swap(nums, i, j) {
//     let temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
// }

// function reverse(nums, start) {
//     let i = start;
//     let j = nums.length - 1;
//     while (i < j) {
//         swap(nums, i, j);
//         i++;
//         j--;
//     }
// }




























// # Function to find the pivot index using binary search
// def find_pivot(nums):
//     left, right = 0, len(nums) - 1

//     while left < right:
//         mid = left + (right - left) // 2

//         if nums[mid] > nums[right]:
//             left = mid + 1
//         else:
//             right = mid

//     return left

// # Function to perform binary search
// def binary_search(left, right):
//     while left <= right:
//         mid = left + (right - left) // 2
//         if nums[mid] == target:
//             return mid
//         elif nums[mid] < target:
//             left = mid + 1
//         else:
//             right = mid - 1
//     return -1








// var search = function(nums, target) {
//     let left = 0;
//  let right = nums.length - 1;

//  while (left <= right) {
//      let mid = Math.floor((left + right) / 2);

//      if (nums[mid] === target) {
//          return mid;
//      }

//      if (nums[left] <= nums[mid]) {
//          // Left half is sorted
//          if (nums[left] <= target && target < nums[mid]) {
//              // Target is in the left half
//              right = mid - 1;
//          } else {
//              // Target is in the right half
//              left = mid + 1;
//          }
//      } else {
//          // Right half is sorted
//          if (nums[mid] < target && target <= nums[right]) {
//              // Target is in the right half
//              left = mid + 1;
//          } else {
//              // Target is in the left half
//              right = mid - 1;
//          }
//      }
//  }

//  return -1; // Target not found 
// };












// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).








// var removeElement = function(nums, val) {
//     let k = 0; // Counter for elements not equal to val

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }

//     return k;
// };

































