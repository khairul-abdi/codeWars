function reverseWords(str) {
    let temp = ''
    let arr = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            arr.push(temp)
            temp = ''
        } else {
            temp += str[i]
        }
    }
    if (temp) {
        arr.push(temp)
    }
    // console.log(arr)
    let output = []
    let tempStr = ''
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
        (i == output.length - 1) ? result += output[i]: result += output[i] + ' '
    }
    return result
}


console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');

/*
=====SOAL======
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
/*
CARA ORANG LAIN
1. ======>

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

2. ======>

function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

3. ======>

var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)

*/