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





