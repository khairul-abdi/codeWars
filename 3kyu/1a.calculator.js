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


    // let calculate = 0
    // if (output[1] == '*' || output[1] == '/') {
    //     calculate = 1
    // } else {
    //     calculate = 0
    // }
    let found = false
    let higherPriority = []
    let lowerPriority = []
    for (let i = 1; i < output.length - 1; i += 2) {
        if (output[i] == '*' || output[i] == '/') {
            found == true
            higherPriority.push(output[i - 1], output[i], output[i + 1])
            output.slice(output[i - 1], output[i], output[i + 1])
        }
        if (found == false) {
            lowerPriority.push(output[i - 1], output[i])
        }
    }


    // console.log(higherPriority)
    // console.log(lowerPriority)




    // if (output[i] == '+') {
    //     // console.log(output[i])
    //     return tambah(Number(output[i - 1]), Number(output[i + 1]))
    // } else if (output[i] == '-') {
    //     return kurang(Number(output[i - 1]), Number(output[i + 1]))
    // } else if (output[i] == '*') {
    //     return kali(Number(output[i - 1]), Number(output[i + 1]))
    // } else if (output[i] == '/') {
    //     return bagi(Number(output[i - 1]), Number(output[i + 1]))
    // }

}

// console.log(evaluate('127'), 127);
console.log(evaluate('2 + 3 + 3'), 8);
console.log(evaluate('2 - 3 - 4'), -5);
console.log(evaluate('10 * 5 / 2'), 25);
console.log(evaluate('1 + 2 * 4 - 8'), 1)