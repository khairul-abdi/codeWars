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
    // console.log('TEMP D : ', tempD)
    // console.log('TEMP B :', tempB)
    // console.log('Output = ', output)
    let result = ''

    // for (let i = 0; i < output.length; i++) {
    //     if (i == output.length - 1) {
    //         result += output[i]
    //         break
    //     }

    //     if (output[i]) {
    //         result += output[i] + ' '
    //     }
    // }

    for (let i = 0; i < output.length; i++) {
        if (i == output.length - 1) {
            result += output[i]
        } else {
            result += output[i] + ' '
        }
    }

    // result = output.join(' ')
    return result
}

console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
// console.log(pigIt('This is my string'), 'hisTay siay ymay tringsay')
// console.log(pigIt('Barba non facit philosophum'), 'arbaBay onnay acitfay hilosophumpay')
// console.log(pigIt('Dura lex sed lex'), '===uraDay exlay edsay exlay')
// console.log(pigIt('O tempora o mores !'), 'Oay emporatay oay oresmay !')



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

3. ======>

function pigIt(str){
  var arrayStr = str.split(''); 
  var word = '';
  var sentence  = '';
  var begining  = true;
  var firstLetter = '';
  
  arrayStr.forEach(function(letter, i){  
      if (begining) {
          firstLetter = letter;
          begining = false;
      } else { 
          if (letter === ' ' || i == arrayStr.length) {
              sentence += firstLetter; 
              sentence += 'ay '; 
              firstLetter = '';
              begining = true;
          } else {
              sentence += letter;
          }
      } 
      if (i + 1 == arrayStr.length) {
          sentence += firstLetter; 
          sentence += 'ay'; 
      } 
  });
  return sentence;
}

*/