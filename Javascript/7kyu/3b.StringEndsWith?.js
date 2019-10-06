function solution(str, ending) {
    let start = str.length - ending.length
    let count = 0
    let indeks = 0
    for (let i = start; i < str.length; i++) {
        if (str[i] == ending[indeks]) {
            count += 1
        }
        indeks++
    }

    return (count == ending.length) ? true : false
}

console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)
console.log(solution('sumo', 'omo'), false)