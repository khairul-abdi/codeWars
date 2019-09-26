function divisibleBy(numbers, divisor) {
    var result = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisor == 0) {
            result.push(numbers[i])
        }
    }
    return result
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2)); // [2, 4, 6]
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3)); // [3, 6]
console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4)); //[0, 4]
console.log(divisibleBy([0], 4)); //[0]
console.log(divisibleBy([1, 3, 5], 2)); //[]

/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
*/
//cara 1
return numbers.filter(n => n % divisor === 0)

//cara 2
const divisibleBy = (numbers, divisor) => numbers.filter(v => !(v % divisor));

//cara 3
var divisibleBy = (numbers, divisor) => numbers.filter((n) => !(n % divisor))