// function high(x) {
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     let word = ''
//     let arrWord = []

//     x.toLowerCase()

//     for (let i = 0; i < x.length; i++) {
//         if (word) {
//             if (x[i] == ' ') {
//                 arrWord.push(word)
//                 word = ''
//             } else {
//                 word += x[i]
//             }
//         } else {
//             if (x[i] != ' ') {
//                 word += x[i]
//             }
//         }
//     }
//     if (word) {
//         arrWord.push(word)
//     }

//     // console.log(arrWord)

//     let output = []
//     for (let i = 0; i < arrWord.length; i++) {
//         let score = 0
//         for (let j = 0; j < arrWord[i].length; j++) {
//             for (let k = 0; k < alphabet.length; k++) {
//                 if (arrWord[i][j] == alphabet[k]) {
//                     score += k + 1
//                 }
//             }
//         }
//         output.push(score)
//     }
//     // console.log(output)

//     result = []
//     for (let i = 0; i < output.length; i++) {
//         result.push([output[i], arrWord[i]])
//     }
//     // console.log(result)

//     for (let i = 0; i < result.length; i++) {
//         for (let j = i + 1; j < result.length; j++) {
//             if (result[i][0] < result[j][0]) {
//                 let temp = result[j]
//                 result[j] = result[i]
//                 result[i] = temp
//             }
//         }
//     }

//     return result[0][1]
// }

//CARA ORANG

function high(x) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var wordScores = [];
    var highScore = 0;
    var stringOut = "";
    x = x.toLowerCase();
    var xArray = x.split(" ");
    // console.log (xArray);

    for (var wordLoop = 0; wordLoop < xArray.length; wordLoop++) {
        wordScores[wordLoop] = 0;
        for (var lettersLoop = 0; lettersLoop < xArray[wordLoop].length; lettersLoop++) {
            // console.log(xArray[wordLoop][lettersLoop]);
            if (alphabet.indexOf(xArray[wordLoop][lettersLoop]) !== -1)
                wordScores[wordLoop] += alphabet.indexOf(xArray[wordLoop][lettersLoop]) + 1;
        }
        // console.log (wordScores);
    }

    for (var loop = 0; loop < xArray.length; loop++)
        if (wordScores[loop] > highScore) {
            highScore = wordScores[loop];
            stringOut = xArray[loop];
        }

    return stringOut;
}

console.log(high('  man i need a taxi up to     ubud   '), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('take me to semynak'), 'semynak');

/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/

/*
CARA ORANG LAIN
1. =========>
function high(x){
    return x.split(' ').reduce((accum, current)=>{
        return score(current) > score(accum)? current:accum;  
    })
}

function score(word){
    return word.split('').reduce((accum,current)=>{return accum+(current.charCodeAt()-96)},0)
}

2. ==========>
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

3. =========>

const countPositivesSumNegatives = input => input && input.length ? input.reduce((p, n) => (n > 0 ? p[0]++ : p[1] += n, p), [0, 0]) : [];
*/