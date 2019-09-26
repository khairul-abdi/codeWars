function squareDigits(num) {
    var str = String(num)

    var temp = ''

    for (let i = 0; i < str.length; i++) {
        // console.log(str[i])
        temp += Number(str[i]) * Number(str[i])
    }
    // console.log(typeof temp)

    var output = Number(temp)

    // console.log(typeof output)
    return output
}

console.log(squareDigits(81161)) //641136

/*
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/