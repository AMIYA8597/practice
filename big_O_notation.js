 // // primitive types => 
//  Boolean, num, undefined, null  ==>// this are always constant;

//  String , arrays, objects;   ==> this are dynamic , that means might change the respect to the input size  




// // space complexity

// const numberBig = (array) =>{    // it takes 4 operation s here more time takes
//     for(let i=0;i<array.length;i++){
//         if(i===4)
//        return array[i];
    
//     }
// }

//  const numberBig = (array) =>{     //it takes 1 operation here so that takes less time than previous ones;
//     return array[4]
//  }

// const numberTime = [534,54,63,764,478,857,68];
// console.time("numberBig")
// console.log("i[4] element is ",numberBig(numberTime))
// console.timeEnd("numberBig");  //Muestra el tiempo que ha tardado en ejecutarse la función "numberBig"




// function someOperations(n) {  //  3 operations heppen here (* , +, /)
//     return (n * (n+5)) / 2;
// } 

// console.log("some operation is ",someOperations(2));




// function printBoth(n){

//     // here we print n * n operation

//     for (let i=0;i<n;i++){
//         for(let j=0;j<n;j++){
//             console.log(`${i} ${j}`);
//         }
//     }
// }

// console.log(printBoth(4))


// // space complexity ==> //  // this code is  O(1) space complexity
  
// const numberBig = (array) =>{    

//     let sum = 0;
//     for(let i=0;i<array.length;i++){
//     sum +=array[i]
    
//     }
//     return sum;
// }

// let score = [34,56,24,64,79,84];
// console.log(numberBig(score));





// // space complexity ==> //  // this code is  O(1) space complexity
  
// const numberBig = (array) =>{    

//     let sum = 0;
//     for(let i=0;i<array.length;i++){
//     sum +=array[i]
    
//     }
//     return sum;
// }

// let score = [34,56,24,64,79,84];
// console.log(numberBig(score));




// space complexity  //  // this code  O(1) space complexity

const numberBig = (n) =>{    

    let sum = [];
    for(let i=1;i<n;i++){
    sum.push(i * 20 );
    
    }
    return sum;
}

// let score = [34,56,24,64,79,84];
console.log(numberBig(10));