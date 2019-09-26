/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.
Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] % 2 != 0 < array[j] % 2 != 0) {
                let temp = array[j]
                array[j] = array[i]
                array[i] = temp
            }
        }
    }
    // console.log(array)
    return array
}

console.log(sortArray([5, 3, 2, 8, 1, 4])) //, [1, 3, 2, 8, 5, 4])
// console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
// console.log(sortArray([]), [])

/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.
Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/