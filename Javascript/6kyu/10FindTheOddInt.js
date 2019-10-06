// function findOdd(A) {
//     let arr = []
//     let output = []

//     for (let i = 0; i < A.length; i++) {
//         for (let j = i + 1; j < A.length; j++) {
//             if (A[i] > A[j]) {
//                 let temp = A[j]
//                 A[j] = A[i]
//                 A[i] = temp
//             }
//         }
//     }

//     for (let i = 0; i < A.length; i++) {
//         // console.log(A[i])
//         if (arr.length == 0) {
//             arr.push(A[i])
//         } else if (A[i] == A[i - 1]) {
//             arr.push(A[i])
//         } else if (A[i] != A[i - 1]) {
//             output.push(arr)
//             arr = []
//             arr.push(A[i])
//         }
//     }
//     output.push(arr)
//     // console.log(output)

//     for (let i = 0; i < output.length; i++) {
//         if (output[i].length % 2 != 0) {
//             return output[i][0]
//         }
//     }

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5));
console.log(findOdd([10], 10));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1));

/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

/*
CARA ORANG LAIN
1. ======>
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

2. ======>
function findOdd(arr) {
  var result, num = 0;

  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}
*/