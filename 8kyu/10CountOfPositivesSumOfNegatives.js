function countPositivesSumNegatives(input) {

    let result = []
    var countPositive = 0
    var negative = 0

    if (input.length == 0 || input == null) {
        return []
    }
    for (let i = 0; i < input.length; i++) {

        (input[i] > 0) ? countPositive += 1: (negative += input[i])
    }
    result.push(countPositive, negative)
    return result
}



// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) //[10, -65]
// console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) //[8, -50]


function countPositivesSumNegatives(input) {

    if (input.length == 0 || input == null) {
        return []
    }
    var result = [0, 0]

    for (var i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            result[0] += 1
        } else {
            result[1] += input[i]
        }
    }

    return result
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) //[10, -65]
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) //[8, -50]

//cara orang

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0)
        return [];

    var positive = 0;
    var negative = 0;

    for (var i = 0, l = input.length; i < l; ++i) {
        if (input[i] > 0)
            ++positive;
        else
            negative += input[i];
    }

    return [positive, negative];
}