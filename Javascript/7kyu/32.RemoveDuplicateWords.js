function removeDuplicateWords(s) {

    let arr = []
    let output = []
    let temp = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            arr.push(temp)
            temp = ''
        } else {
            temp += s[i]
        }
    }
    if (temp) arr.push(temp)
    // console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        let found = false
        for (let j = 0; j < output.length; j++) {
            if (arr[i] == output[j]) found = true
        }
        if (found == false) output.push(arr[i])

    }
    // console.log(output)

    let result = ''
    for (let i = 0; i < output.length; i++) {
        (i == output.length - 1) ? result += output[i]: result += output[i] + ' '
    }

    return result
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');

/*
=====SOAL======
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/
/*
CARA ORANG LAIN
1. ======>

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

2. ======>

const _ = require('lodash');
const removeDuplicateWords = s => _.uniq(s.split(' ')).join(' ');

3. ======>

function removeDuplicateWords(s) {
    // your perfect code...
    var sNew = s.split(' ')
    var output = []

    for(var i = 0; i < sNew.length; i++){
        if (output.indexOf(sNew[i]) == -1) {
            output.push(sNew[i])
        }
    }

    return output.join(' ')
}

*/