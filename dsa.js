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
