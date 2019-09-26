/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7
*/

function basicOp(operation, value1, value2) {
    // Code
    var output;

    if (operation == '+') {
        output = value1 + value2
    } else if (operation == '-') {
        output = value1 - value2
    } else if (operation == '*') {
        output = value1 * value2
    } else if (operation == '/') {
        output = value1 / value2
    }

    return output
}

console.log("Basic tests\n");
console.log(basicOp('+', 4, 7), 11);
console.log(basicOp('-', 15, 18), -3);
console.log(basicOp('*', 5, 5), 25);
console.log(basicOp('/', 49, 7), 7);


//code one
function basicOp(o, a, b) {
    return eval(a + o + b);
}

//code two
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 'Operation must be one of + - * /';
    }
}

basicOp = (operation, value1, value2) => eval(`${value1} ${operation} ${value2}`)