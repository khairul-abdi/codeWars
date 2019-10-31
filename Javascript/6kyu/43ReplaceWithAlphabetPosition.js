function alphabetPosition(text) {

    text = text.toLowerCase()
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    // console.log(text)

    let arr = []

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
            if (text[i] == alpha[j]) {
                arr.push(j + 1)
            }
        }
    }
    // console.log(arr)
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            result += arr[i]
        } else {
            result += arr[i] + ' '
        }
    }
    return result
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

/*
=====SOAL======
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
*/
/*
CARA ORANG LAIN
1. ======>

function alphabetPosition(text) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return text.toLowerCase().split('')
  .filter( letter => {
    let index = alphabet.indexOf(letter);
    return index > -1;
  }  )
  .map( letter => alphabet.indexOf(letter) + 1 )
  .join(' ')
}

2. ======>

function alphabetPosition(text) {
  return text.toLowerCase()
    .split('')
    .filter(c => c.charCodeAt(0) < 123 && c.charCodeAt(0) > 96)
    .map(c => c.charCodeAt(0) - 96)
    .join(' ');
}

3. ======>
*/