// // reversed array

// let arr=[2,4,6,8,9,5,6]
//  let reversedArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArray+=(arr[i]);
//     }
    
//     console.log(reversedArray)


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



class Solution{
    segregateElements(arr,n){
        let posArr=[];
        let negArr=[];
        for (let i=0;i<=arr.length-1;i++){
            if(arr[i]>0){
                posArr.push(arr[i])
         
   } else if(arr[i]<0){
                negArr.push(arr[i])
            }
            
        }
        console.log("pos ", posArr.toString())
        console.log("neg ", negArr.toString())
        for (let j=0;j<posArr.length;j++){
           arr[j]=posArr[j];
        }
        console.log("arr1 ", arr.toString())
        let count =0
        for (let k=posArr.length;k<=arr.length-1;k++){
            arr[k]=negArr[count]
            count++;
        }
        console.log("arr2 ", arr.toString())
        // return arr;
        
    //   totalArr = posArr.concat(negArr);
        // console.log(totalArr.toString())
        // return totalArr.toString();
        // return arr
        // let arr1 = posArr;
        // let arr2 = negArr;
        // let arr3;
        
     
        // console.log( "negative is",totalArr)
        // console.log("totalArray is ", totalArr.toString())
     
        // return totalArr;
        
        
        // return posArr;
        // return negArr;
        // console.log("posative",posArr);
        // console.log("negative is",negArr)
        
      
 
     
        // console.log("sorting is",sortArr)
        // return newArr
        
    }
    
}





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


