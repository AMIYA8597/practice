// 43. Multiply Strings
       

// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"







var multiply = function(num1, num2) {
    if(num1 =="0" || num2== "0") {
        return "0";
    }

    const n1 = num1.length;
    const n2 = num2.length;

    const result = Array(n1 +n2).fill(0);

    for(let i = n1 -1; i>= 0; i--) {
        for(let j = n2-1; j>=0; j--) {
            const multiply = (num1[i] - "0") * (num2[j] - "0")
            const sum = multiply + result[i+j+1];

            result[i+j+1] = sum % 10;
            result[i+j] += Math.floor(sum / 10);

        }
    }

    let index = 0;
    while(index<result.length && result[index] ===0) {
        index++;
    }

    return result.slice(index).join('')

};