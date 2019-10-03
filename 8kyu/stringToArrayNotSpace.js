function stringToArray(string) {
    let output = []
    let word = ''

    for (let i = 0; i < string.length; i++) {
        if (word) {
            if (string[i] == ' ') {
                output.push(word)
                word = ''
            } else {
                word += string[i]
            }
        } else {
            if (string[i] != ' ') {
                word += string[i]
            }
        }
    }
    if (word) {
        output.push(word)
    }
    return output
}

console.log(stringToArray(" Robin  Singh "), ["Robin", "Singh"]);
console.log(stringToArray("I love arrays they are       my    favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);