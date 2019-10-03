// function countPositivesSumNegatives(input) {

//     if (input.length == 0 || input == null) {
//         return []
//     }
//     var result = [0, 0]

//     for (var i = 0; i < input.length; i++) {
//         if (input[i] > 0) {
//             result[0] += 1
//         } else {
//             result[1] += input[i]
//         }
//     }

//     return result
// }


// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) //[10, -65]
// console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) //[8, -50]

function countPositivesSumNegatives(input) {

    let countPos = []
    let negative = []
    let countNegative = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= 0) {
            countPos.push(input[i])
        } else {
            negative.push(input[i])
        }
    }

    // console.log('POSITIVE: ', countPos)
    // console.log('NEGATIVE: ', negative)

    for (let i = 0; i < negative.length; i++) {
        countNegative += negative[i]
    }
    // console.log(countNegative)
    return [(countPos.length), countNegative]

}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) //[10, -65]
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) //[8, -50]