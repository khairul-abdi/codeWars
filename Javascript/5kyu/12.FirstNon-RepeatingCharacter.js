function firstNonRepeatingLetter(s) {

    if (s == '') {
        return ''
    }
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] != ' ') {
            arr.push(s[i].toLowerCase())
        }
    }
    // console.log(arr)

    let output = []
    for (let i = 0; i < arr.length; i++) {
        let found = false
        for (let j = 0; j < output.length; j++) {
            if (arr[i] == output[j][0]) {
                found = true
                output[j][1] += 1
            }
        }
        if (found == false) {
            output.push([arr[i], 1])
        }
    }
    // console.log(output)
    for (let i = 0; i < output.length; i++) {
        if (output[i][1] == 1) {
            return output[i][0]
        } else if (output[0][1] == output[output.length - 1][1]) {
            return "''"
        }
    }

}

console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('moonmen'), 'e');
console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!"), ',');
console.log(firstNonRepeatingLetter('∞§ﬁ›ﬂ∞§'), 'ﬁ');
console.log(firstNonRepeatingLetter('abba'), '');