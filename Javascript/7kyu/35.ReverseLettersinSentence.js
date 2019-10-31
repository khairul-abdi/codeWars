function reverser(sentence) {
    console.log(sentence)
    if (sentence.length == ' ') {
        return sentence
    }
    let str = ''
    let arr = []
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] != ' ') {
            str += sentence[i]
        } else if (sentence[i] == ' ') {
            arr.push(str)
            str = ''
        }
    }
    arr.push(str)
    console.log(arr)

    let tempStr = ''
    let output = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            tempStr += arr[i][j]
        }
        output.push(tempStr)
        tempStr = ''
    }
    // console.log(output)

    let result = ''
    for (let i = 0; i < output.length; i++) {
        // result+= 
        if (i == output.length - 1) {
            result += output[i]
        } else {
            result += output[i] + ' '
        }
    }
    return result
}

console.log(reverser("Hi mom"), 'iH mom');
console.log(reverser("friendzone"), 'enozdneirf');
console.log(reverser(" "), ' ');
console.log(reverser("yRcnFJHdJo"), ' ');

/*
=====SOAL======
Take a sentence (string) and reverse each word in the sentence. Do not reverse the order of the words, just the letters in each word.

If there is punctuation, it should be interpreted as a regular character; no special rules.

If there is spacing before/after the input string, leave them there.

String will not be empty.

Examples
"Hi mom" => "iH mom"
" A fun little challenge! " => " A nuf elttil !egnellahc "
*/
/*
CARA ORANG LAIN
1. ======>

function reverser(sentence) {
  return  (sentence.split(" ")).map(x=>x.split("").reverse().join("")).join(" ")
}

2. ======>

const reverser = str => str.split(" ").reverse().join(" ").split("").reverse().join("")

3. ======>
*/