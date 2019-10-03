//CARA 1
// function makeNegative(num) {
//     if (num > 0) {
//         return -num
//     } else {
//         return num
//     }
// }

// console.log(makeNegative(42), -42);

// CARA 2
makeNegative = num => num > 0 ? -num : num

console.log(makeNegative(42), -42);

/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
Notes:

The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

/*
CARA ORANG LAIN
1.======>

function makeNegative(num) {
  return -Math.abs(num);
}

2. ======>
makeNegative = n => -Math.abs(n)
*/