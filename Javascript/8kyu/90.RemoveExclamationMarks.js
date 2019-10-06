function removeExclamationMarks(s) {
    let kamus = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < kamus.length; j++) {
            if (s[i] == kamus[j]) result += s[i]
        }
    }
    return result
}

console.log(removeExclamationMarks("Hello World!"), "Hello World");

/*
=====SOAL======
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/
/*
CARA ORANG LAIN
1. ======>

function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

2. ======>

removeExclamationMarks = (s) => s.split('!').join('');

3. ======>

removeExclamationMarks = str => str.replace(/!/g, '');

*/