// function flattenAndSort(array) {
//     let output = []
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             output.push(array[i][j])
//         }
//     }

//     // return output;

//     for (let i = 0; i < output.length; i++) {
//         for (let j = i + 1; j < output.length; j++) {
//             if (output[i] > output[j]) {
//                 let temp = output[j]
//                 output[j] = output[i]
//                 output[i] = temp
//             }
//         }
//     }

//     // console.log(output)
//     return output
// }

console.log(flattenAndSort([]), []);
console.log(flattenAndSort([
    [],
    [1]
]), [1]);
console.log(flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5]
]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(flattenAndSort([
    [1, 3, 5],
    [100],
    [2, 4, 6]
]), [1, 2, 3, 4, 5, 6, 100]);

/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

/*
CARA ORANG LAIN

1.========>
function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}

2. =======>
function flattenAndSort(a) {
  "use strict";
  return JSON.parse(JSON.stringify([].concat(...a))).sort((a, b) => a - b);
}
*/