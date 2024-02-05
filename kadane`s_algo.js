
// ques - 4 :  given an integer array number, find the subArray with the lalrgest sum;
// and return its sum.

// function maxSubnums(nums) {
//     let maxSum =nums[0];

//     for (let i = 0; i < nums.length; i++) {   // n
//         let currentSum =0;

//         for (let j =i; j <nums.length; j++) { // n / n-1 / n-2 / n-3 / n-4 ...
//             currentSum= currentSum +nums[j];
//             if (currentSum >maxSum){
//                 maxSum =currentSum;
//             }
//        }
        
//     }
//     return maxSum;
// }

// // console.log( "max sub number is",maxSubnums( [-2,4,-3,3,-1,4,1,-4,-8,7]));
// console.log( "max sub number is",maxSubnums( [5,-6,3,8,-12,9,4,-8]));

// // time complexity : here the time complexity is O(n*n)







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
