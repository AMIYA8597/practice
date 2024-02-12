// let startArr = [4,55,68,92,101,124,245,456]

// let valueIndex = 92;

// function sum ( startArr , valueIndex , start , end) 
// {
//     while (start <= end) {
//         console.log("start is",start)
//         console.log("end is",end)

//         let middle = Math.floor(( start + end ) / 2);
//         console.log("middle is",middle)
    
//         if(startArr[middle] == valueIndex ){
//             return true;
//         }
//         else if(startArr[middle] < valueIndex){
//             start = middle + 1
//             // return true;
//         }
//         else {
//            end = middle -1 
//         }
//     }
//     return false
    
// }

// console.log( sum( startArr , valueIndex , 0 , startArr.length -1))








// Search element in array JS 


// setTimeout( () => {
//     console.log("tu nikal yaha se")
// }, 5000)


// setInterval( ()=> {
//     // console.log("tu vaag yaha se")
//     console.log( new Date());
// } , 2000)


// let arr = [3, 2, 1, 7, 5, 4];  

// let odd = [];
// let even = [];

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) { // even index
//         even.push(arr[i]);
//     } else { // odd index
//         odd.push(arr[i]);
//     }
// }

// console.log("Elements at even index positions:", even);
// console.log("Elements at odd index positions:", odd);











// let arr = [3, 2, 1, 7, 5, 4];  

// // Sort the array in descending order
// arr.sort((a, b) => b - a);

// // The second largest element will be at index 1
// let secondLargest = arr[1];

// console.log("Second largest element:", secondLargest);










// function isPalindrome(str) { 

//     return str === str.split(”).reverse().join(”); 
  
//   }

//   let str = "amma"
//   console.log( isPalindrome(str))







// function romanToInt(s) {
//     const romanValues = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     };

//     let result = 0;
//     let prevValue = 0;

//     for (let i = 0; i < s.length; i++) {
//         const currValue = romanValues[s[i]];
        
//         if (currValue > prevValue) {
//             // If current value is greater than the previous value,
//             // subtract the previous value twice because it was added once before
//             result += currValue - 2 * prevValue;
//         } else {
//             result += currValue;
//         }

//         prevValue = currValue;
//     }

//     return result;
// }

// // Test cases
// console.log(romanToInt("V")); // Output: 5
// console.log(romanToInt("III")); // Output: 3

































// if(add > sub) {
    //     return false
    // };
     
    //  while ( add <= sub) {

    //     let summation = Math.floor((add + sub) /2);

    //     if( startArr[summation] == valueIndex ) {
    //         return summation;
    //     } 
    //     else if(startArr[summation] < valueIndex ) 
    //     add = summation + 1
    //     }
    //     else {
    //         sub = summation - 1 
    //     }
    // }