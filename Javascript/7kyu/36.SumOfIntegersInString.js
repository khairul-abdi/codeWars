// function sumOfIntegersInString(s) {
//     let str = ''
//     let arr = []

//     // for (let i = 0; i < s.length; i++) {
//     //     if (Number(Number(s[i])) == Number(s[i])) {
//     //         str += s[i]
//     //     } else {
//     //         arr.push(Number(str))
//     //         str = ''
//     //     }
//     // }
//     // if (str) {
//     //     arr.push(Number(str))
//     // }

//     // let result = 0
//     // for (let i = 0; i < arr.length; i++) {
//     //     result += arr[i]
//     // }

//     // console.log(Number(Number(s[0])) == Number(s[0]))
//     // console.log(result)
//     return result
// }

// console.log(sumOfIntegersInString("12.4", 16))
// console.log(sumOfIntegersInString("h3l l0w0rld", 3))
// console.log(sumOfIntegersInString("2 + 3 = ", 5))
// console.log(sumOfIntegersInString("Our company made approximately 1 million in gross revenue last quarter.", 1))
// console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 3635))
// console.log(sumOfIntegersInString("C4t5 are 4m4z1ng.", 18))
// console.log(sumOfIntegersInString("The Great Depression lasted from 1929 to 1939.", 3868))



function sumOfIntegersInString(s) {
    let str = ''
    let arr = 0
    // console.log(Number(Number(s[0])) == Number(s[0]))
    for (let i = 0; i < s.length; i++) {
        if (Number(Number(s[i])) === Number(s[i])) {
            str += s[i]
        } else {
            arr += Number(str)
            str = ''
        }
    }
    arr += Number(str)
    return arr
}

console.log(sumOfIntegersInString("12.gg74bv2", 88)) //[12, 74, 2]
// console.log(sumOfIntegersInString("h3l l0w0rld", 3))