// let arr1 = [1,2,3];

// let arr2 = [4,5,6];

// let arr3 = arr1 + "," + arr2;

// console.log(arr3)



// after that i want to print their odd and even index  position



// let arr = [3,2,1,7,5,4,6,14,9,25,13];  

// let odd= [];

// let even = [];


// for (let i=0 ; i<arr.length ; i++){
//     if(i % 2 == 0){
//         even.push(arr[i])
//     }
//     if(i % 2 == 1){
//         odd.push(arr[i])
//     }
// }
// console.log("even is",even);
// console.log("odd is",odd);

// even.sort( (a , b) => (b-a));

// console.log("after sorting even element is" , even)

// let secondLargestEven = even[1];
// console.log("secondLargestEven element is" , secondLargestEven)


// odd.sort( (a , b) => (b-a));

// console.log("after sorting even element is" , odd)

// let secondLargestOdd = odd[1];

// console.log("secondLargestOdd element is" , secondLargestOdd);

// let oddAndEvenSum =  secondLargestEven + secondLargestOdd;

// console.log("oddAndEvenSum is", oddAndEvenSum);










// // // string - 3 

// let str1 = "amiya-chowdhury--";
// let str2 = str1.split("");
// let str3 = "";
// let str4 = "";
// // let str5 = "";

// for (let i =0 ; i<str1.length; i++){
//     if(str2[i] =="-"){
//         str3+=(str2[i])
//     }
//     // else if(str2 <= "a" && str2>= "z"){
//     //     str3+=(str2[i])
//     // }
// }


// console.log("str3 is", str3)


// for (let i =0 ; i<str1.length; i++){
//     if(str2[i] !=="-"){
//         str4+=(str2[i])
//     }
//     // else if(str2 <= "a" && str2>= "z"){
//     //     str3+=(str2[i])
//     // }
// }

// console.log("str4 is", str4);

// let str5 = str3 + str4;

// console.log("str5 is", str5);




// // string 4

// const number = 5;

 // // let n = 20;
// let m = 10;
// let totalSum = 0

// for (let i=1;i<=m; i++)
// {
//  let n= i * number;
//   console.log("n is ",n);

//   totalSum+= n;
 
// }

// console.log("totalSum after multiplication" , totalSum)




// let array = [-3,6,4,-8,2,9,-12,11];

// let maxSum = 0;

// for (let i=0; i<array.length; i++) {
//     let currentSum = 0;
//     for (let j =i; j<array.length; j++) {
//         currentSum= currentSum +array[j];
//         if(currentSum >= maxSum) {
//             maxSum = currentSum;
//         }
//     }
// }

// console.log(maxSum)





 function binarySearch (arr , needValue , start , end){

    while (start <=end) {
        let middle = Math.floor( (start + end ) /2);

        if(arr[middle] ==needValue) {
            return true;
        };
       else if(arr[middle] <= needValue ) {
            start = middle + 1
        }
        else {
            end = middle -1
        }

    }

    return false
 }

 let arr = [3,5,8,13,24,35,46,57];

 let needValue = 90;

 console.log(binarySearch ( arr , ))























































