// CARA 1

// function summation(num) {
//     let sum = 0
//     for (let i = 1; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }

//CARA 2
// function summation(num) {
//     let output = 0
//     if (num == 1) {
//         return output
//     } else {
//         return output + summation(num - 1)
//     }
// }

// CARA 3
function summation(num) {
    let output = 0
    return num == 1 ? output : output + summation(num - 1)
}

console.log(summation(1), 1)
console.log(summation(8), 36)

/*
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

/*
1. =====>
const summation = n => n * (n + 1) / 2;

2. =====>

*/