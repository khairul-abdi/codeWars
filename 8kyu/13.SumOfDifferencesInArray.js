/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

For example: sumOfDifferences([1, 2, 10]) Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0.
*/

function sumOfDifferences(arr) {
    var sum = 0

    if (arr.length == 0 || arr == null || arr.length == 1) {
        return 0
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }

    for (let k = 0; k < arr.length - 1; k++) {
        sum += (arr[k] - arr[k + 1])
    }
    return sum
}

console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);

//cara orang lain

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}