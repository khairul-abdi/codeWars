function reverseLetter(str) {
    let kamus = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''

    for (let i = str.length - 1; i >= 0; i--) {
        for (let j = 0; j < kamus.length; j++) {
            if (str[i] == kamus[j]) result += str[i]
        }
    }
    return result
}

console.log(reverseLetter("krishan"), "nahsirk")

console.log(reverseLetter("ultr53o?n"), "nortlu")

console.log(reverseLetter("ab23c"), "cba")

console.log(reverseLetter("krish21an"), "nahsirk")

/*
=====SOAL======
Task
Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str

A string consists of lowercase latin letters, digits and symbols.

[output] a string

*/
/*
CARA ORANG LAIN
1. ======>

reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

2. ======>

function reverseLetter(str) {
  return str.split('').reverse().filter(function(el) {
    if('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(el) != -1) {
      return el;
    }
  }).join('');
}

3. ======>
*/