function remove(s) {
    // console.log(s)
    let str = ''
    let arr = []
    for (let i = 0; i <= s.length; i++) {
        if (s[i] == ' ' || i == s.length) arr.push(str), str = ''
        else str += s[i]
    }
    // console.log(arr)
    let output = []
    for (let i = 0; i < arr.length; i++) output.push(arr[i].split('').sort().join(''))

    // console.log(output)

    let result = []
    for (let i = 0; i < output.length; i++) {
        let found = false
        for (let j = 0; j < result.length; j++) {
            if (output[i] == result[j][0]) {
                result[0][1] += 1
                found = true
            }
        }
        if (found == false) {
            result.push([output[i], 1])
        }
    }
    // console.log(result)

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i][1] > result[j][1]) {
                let temp = result[j]
                result[j] = result[i]
                result[i] = temp
            }
        }
    }
    return result[0][0]
}

// console.log(remove("Hi!"), "")
// console.log(remove("Hi! Hi!"), "")
// console.log(remove("Hi! Hi! Hi!"), "")
// console.log(remove("Hi Hi! Hi!"), "Hi")
// console.log(remove("Hi! !Hi Hi!"), "")
// console.log(remove("Hi! Hi!! Hi!"), "Hi!!")
console.log(remove("Hi! !Hi! Hi!"), "!Hi!")