// function solution(str, ending) {
//     let count = 0
//     // console.log('ending : ', ending.length)
//     // console.log('str : ', str.length)
//     for (let j = str.length - ending.length; j < str.length; j++) {
//         for (let i = 0; i < ending.length; i++) {
//             // console.log('STR ==> ', str[j])
//             // console.log('ENDING ==> ', ending[i])

//             if (str[j] == ending[i]) {
//                 count += 1
//                 break;
//             }
//         }
//     }

//     // console.log(count)
//     if (count == ending.length) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(solution('abcde', 'cde'), true)
// console.log(solution('abcde', 'abc'), false)
// console.log(solution('sumo', 'omo'), false)

//cara haidir

// function solution(str, ending) {
//     return str.endsWith(ending)
// }

function solution(str, ending) {
    let count = 0

    var indeksI = str.length - ending.length
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < ending.length; j++) {
            if (str[i + indeksI] == ending[j]) {
                count += 1
            }
        }
    }

    if (count == ending.length) {
        return true
    } else {
        return false
    }
}

console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)
console.log(solution('sumo', 'omo'), false)