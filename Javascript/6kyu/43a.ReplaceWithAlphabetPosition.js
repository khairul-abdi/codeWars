function alphabetPosition(text) {
    text = text.toLowerCase()
    let kamus = 'abcdefghijklmnopqrstuvwxyz'
    let arr = []

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < kamus.length; j++) {
            if (text[i] == kamus[j]) {
                arr.push(j + 1)
            }
        }
    }
    // console.log(arr)
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        (i == arr.length - 1 || arr.length == 1) ? str += arr[i]: str += arr[i] + ' '
    }
    return str
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// console.log(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
console.log(alphabetPosition('abdi'))