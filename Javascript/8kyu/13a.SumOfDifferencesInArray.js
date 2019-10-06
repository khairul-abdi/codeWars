/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

For example: sumOfDifferences([1, 2, 10]) Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0.
*/

function sumOfDifferences(arr) {
    let output = []
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    // console.log(temp)

    for (let i = 0; i < arr.length - 1; i++) {
        output.push(arr[i] - arr[i + 1])
    }

    for (let i = 0; i < output.length; i++) {
        result += output[i]
    }
    // console.log(output)
    return result
}

console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);