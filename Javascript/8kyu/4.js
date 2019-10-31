function maxProduct(numbers, size) {
    //your code here

    var output = 1;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] < numbers[j]) {
                let temp = numbers[i]
                numbers[i] = numbers[j]
                numbers[j] = temp
            }
        }
    }

    for (let j = 0; j < numbers.length; j++) {
        for (let i = 0; i < size; i++) {
            output *= numbers[i]
        }
        return output
    }

}

console.log(maxProduct([4, 3, 5], 2), 20);
console.log(maxProduct([10, 8, 7, 9], 3), 720);
console.log(maxProduct([8, 6, 4, 6], 3), 288);
console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5), 9600);
console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5), 247895375);
console.log(maxProduct([-4, -27, -15, -6, -1], 2), 4);
console.log(maxProduct([-17, -8, -102, -309], 2), 136);
console.log(maxProduct([10, 3, -27, -1], 3), -30);
console.log(maxProduct([14, 29, -28, 39, -16, -48], 4), -253344);
console.log(maxProduct([1], 1), 1);


function maxProduct(numbers, size) {
    return numbers.sort((a, b) => b - a).slice(0, size).reduce((acc, n) => acc * n);
}