kali = (bil1, bil2) => bil1 * bil2
bagi = (bil1, bil2) => bil1 / bil2
tambah = (bil1, bil2) => bil1 + bil2
kurang = (bil1, bil2) => bil1 - bil2

evaluate = string => {

    let output = []
    let temp = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] != ' ') {
            temp += string[i]
        } else {
            output.push(temp)
            temp = ''
        }
    }
    if (temp) {
        output.push(temp)
    }
    console.log(output)

    let higherPriority = []
    let lowerPriority = []
    for (let i = 1; i < output.length; i += 2) {
        if (output[i] == '*' && output[i + 2] == '/' || output[i] == '/' && output[i + 2] == '*') {
            higherPriority.push(output[i - 1], output[i])
        } else if (output[i] == '*' || output[i] == '/') {
            higherPriority.push(output[i - 1], output[i], output[i + 1])
        }

        // if ((output[i] == '+' && output[i - 2] != '*') || (output[i] == '+' && output[i - 2] != '/')) {
        //     lowerPriority.push(output[i])
        // }
        if ((output[i] == '+' && i == 1) || (output[i] == '-' && i == 1)) {
            lowerPriority.push(output[i - 1], output[i])
        } //else if ()

    }

    console.log('Prioritas : ', higherPriority)
    console.log('Lower : ', lowerPriority)

}

// console.log(evaluate('127'), 127);
console.log(evaluate('2 + 3 + 3'), 8);
console.log(evaluate('2 - 3 - 4'), -5);
console.log(evaluate('10 * 5 / 2'), 25);
console.log(evaluate('1 + 2 * 4 - 8'), 1)
console.log(evaluate('3 * 4 / 5 * 3 / 2')) //coba sendiri
console.log(evaluate('2 + 3 * 4 / 3 - 6 / 3 * 3 + 8'), 8)

/*

const Calculator = function() {
  this.evaluate = string => {
    // do code here
  }
};

*/