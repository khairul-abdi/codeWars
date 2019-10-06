function positiveSum(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            count += arr[i]
        }
    }
    return count
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);

/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

//cara orang lain
function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

//cara orang lain ke 2
const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);