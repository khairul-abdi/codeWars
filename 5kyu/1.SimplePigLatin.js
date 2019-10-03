function pigIt(str) {
    let arr = []
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            arr.push(temp)
            temp = ''
        } else {
            temp += str[i]
        }
    }
    arr.push(temp)
    // console.log(arr)

    let tempB = ''
    let tempD = ''
    let simbol = ''
    let output = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (!tempD) {
                if (arr[i][j] == arr[i][0]) {
                    if (arr[i][j] == '!' || arr[i][j] == '?') {
                        simbol += arr[i][0]
                    } else {
                        tempD += arr[i][0]
                    }
                    // console.log('TEMP D : ', tempD)

                }
            } else {
                tempB += arr[i][j]
                // console.log('TEMP B : ', tempB)
            }
        }
        if (simbol) {
            output.push(simbol)
        } else {
            output.push(`${tempB}${tempD}ay`)
        }
        tempD = ''
        tempB = ''
    }
    // console.log(tempD)
    // console.log(tempB)
    console.log('Output = ', output)
    let result = ''
    for (let i = 0; i < output.length; i++) {
        // if (output[i] != output[output.length - 1]) {
        //     result += output[i] + ' '
        // } else if (output[i] == output[output.length - 1]) {
        //     result += output[i]
        // }

        if (i == output.length - 1) {
            result += output[i]
            break
        }

        if (output[i]) {
            result += output[i] + ' '
        }
    }

    // result = output.join(' ')
    return result
}

// console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
// console.log(pigIt('This is my string'), 'hisTay siay ymay tringsay')
// console.log(pigIt('Barba non facit philosophum'), 'arbaBay onnay acitfay hilosophumpay')
// console.log(pigIt('Dura lex sed lex'), '===uraDay exlay edsay exlay')
console.log(pigIt('O tempora o mores !'), 'Oay emporatay oay oresmay !')



/*
=====SOAL======
Move the first letter of each word to the end of it, then add "ay" to 
the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/
/*
CARA ORANG LAIN
1. ======>

function pigIt(str){
  return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay");
}

2. ======>

pigIt = s => s.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ');
*/