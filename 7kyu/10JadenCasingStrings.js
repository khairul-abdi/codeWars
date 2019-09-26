function str(str) {
    let temp = ''
    let tempArr = []
    let result = ''
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i])

        if (str[i] == ' ') {
            tempArr.push(temp)
            temp = ''
        } else {
            temp += str[i]
        }
    }
    tempArr.push(temp)
    // console.log(tempArr)

    for (let i = 0; i < tempArr.length; i++) {
        for (let j = 0; j < tempArr[i].length; j++) {
            if (tempArr[i][j] == tempArr[i][0]) {
                result += tempArr[i][0].toUpperCase()
            } else {
                result += tempArr[i][j]
            }
        }
        result += ' '
    }

    return result
};

console.log(str("How can mirrors be real if our eyes aren't real")) //, "How Can Mirrors Be Real If Our Eyes Aren't Real"