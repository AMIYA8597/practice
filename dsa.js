// function findDuplicates(N, a) {
//     const result = [];
    
//     // Iterate through the array
//     for (let i = 0; i < N; i++) {
//         const index = Math.abs(a[i]); // Get the index corresponding to the current element
//         // If the element at index is positive, make it negative to mark it as visited
//         if (a[index] >= 0) {
//             a[index] = -a[index];
//         } else { // If it's already negative, it means it's a duplicate
//             result.push(index);
//         }
//     }
    
//     // If no duplicates found, return [-1]
//     if (result.length === 0) {
//         return [-1];
//     }
    
//     // Sort and return the duplicates
//     result.sort((a, b) => a - b);
//     return result;
// }

// // Example usage:
// const N = 4;
// const a = [0, 3, 1, 2];
// console.log(findDuplicates(N, a)); // Output: [-1]






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



