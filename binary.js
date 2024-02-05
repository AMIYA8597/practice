// let recursiveFunction = function (sorted_arr, target, start, end) {
//     // here is the base condition
//     if (start > end) return false;
 
//     // find the middle index
//     let mid = Math.floor((start + end) / 2);
 
//     // Compare the middle to the given key target.
//     if (sorted_arr[mid] == target) return true;
 
//     // If the element in the middle is greater than the target, look in the left half of the middle.
//     if (sorted_arr[mid] > target)
//        return recursiveFunction(sorted_arr, target, start, mid - 1);
//     // If the element in the middle is smaller than the target, look in the right half of the middle.
//     else return recursiveFunction(sorted_arr, target, mid + 1, end);
//  };
 
//  // Driver code
//  let sorted_arr = [2, 6, 8, 10, 12, 14];
//  let target = 9;
 
//  if (recursiveFunction(sorted_arr, target, 0, sorted_arr.length - 1))
//     document.write("Target found!<br>");
//  else document.write("Target not found!<br>");
 
//  target = 10;
 
//  if (recursiveFunction(sorted_arr, target, 0, sorted_arr.length - 1))
//     document.write("Target found!<br>");
//  else document.write("Target not found!<br>");
 










//  // Binary Search is implemented using an iterative function.
// let iterativeFunction = function (sorted_arr, target) {
//     let start = 0,
//        end = sorted_arr.length - 1;
 
//     // Iterate as long as the beginning does not encounter the end.
//     while (start <= end) {
//        // find out the middle index
//        let mid = Math.floor((start + end) / 2);
 
//        // Return True if the element is present in the middle.
//        if (sorted_arr[mid] == target) return true;
//        // Otherwise, look in the left or right half
//        else if (sorted_arr[mid] < target) start = mid + 1;
//        else end = mid - 1;
//     }
 
//     return false;
//  };
 
//  // Driver code
//  let sorted_arr = [2, 6, 8, 10, 12, 14];
//  let target = 9;
 
//  if (iterativeFunction(sorted_arr, target, 0, sorted_arr.length - 1))
//     document.write("Target found!<br>");
//  else document.write("Target not found!<br>");
 
//  target = 10;
 
//  if (iterativeFunction(sorted_arr, target, 0, sorted_arr.length - 1))
//     document.write("Target found!<br>");
//  else document.write("Target not found!<br>");







// let array = [3, 4, 6, 7, 9, 10, 13, 24, 35, 46, 52, 66, 71, 82, 98];
// let needValue = 82;

// let binarySearch = function (array, needValue, start, end) {
//     if (start > end) return false;

//     let middle = Math.floor((start + end) / 2);

//     if (array[middle] === needValue) return true;

//     if (array[middle] > needValue) {
//         return binarySearch(array, needValue, start, middle - 1);
//     } else {
//         return binarySearch(array, needValue, middle + 1, end);
//     }
// }

// let result = binarySearch(array , needValue , 0 , array.length -1);

// console.log(result)
 