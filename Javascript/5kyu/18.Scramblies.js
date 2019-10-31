function scramble(str1, str2) {
    str1 = str1.split('')
    str2 = str2.split('')
    let arr = []

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] == str2[j]) {
                found = true
                str1[i] = -1
                str2[j] = -1
            }
        }
    }

    console.log(str1)
    console.log(str2)
    var countStr1 = 0
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] == '-1') {
            countStr1 += 1
        }
    }
    var countStr2 = 0
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] == '-1') {
            countStr2 += 1
        }
    }

    return countStr1 == str2.length ? true : false
}

// function scramble(str1, str2) {
//     let resStr = ''
//     let arr = []
//     for (let i = 0; i < str1.length; i++) {
//         let found = false
//         for (let j = 0; j < str2.length; j++) {
//             if (str1[i] == str2[j]) {
//                 found = true
//                 resStr += str2[j]
//                 arr.push(1)
//             }
//         }
//     }
//     console.log(resStr)
//     console.log(arr)
// }


console.log(scramble('rkqodlw', 'world'), true);
// console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
// console.log(scramble('katas', 'steak'), false);
// console.log(scramble('scriptjava', 'javascript'), true);
// console.log(scramble('scriptingjava', 'javascript'), true);
// console.log(scramble('scriptsjava', 'javascripts'), true);
console.log(scramble('jscripts', 'javascript'), false);
// console.log(scramble('aabbcamaomsccdd', 'commas'), true);