function solution(str, ending) {
    let count = 0
    strIndeks = str.length - ending.length

    for (let i = 0; i < ending.length; i++) {
        for (let j = i + strIndeks; j <= i + strIndeks; j++) {
            if (ending[i] == str[j]) {
                count++
            }
        }
    }

    return (count == ending.length) ? true : false

    // if (count == ending.length) {
    //     return true
    // } else {
    //     return false
    // }
}

console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)
console.log(solution('sumo', 'omo'), false)

// function solution(str, ending) {
//     return str.endsWith(ending)
// }