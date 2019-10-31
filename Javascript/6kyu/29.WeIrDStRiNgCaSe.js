function toWeirdCase(string) {
    let arr = []
    let temp = ''
    let result = ''
    let output = ''

    for (let i = 0; i < string.length; i++) {
        if (string[i] == ' ') {
            if (temp) {
                arr.push(temp)
                temp = ''
            }
        } else {
            temp += string[i]
        }
    }
    if (temp) arr.push(temp)

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j % 2 == 0) {
                result += arr[i][j].toUpperCase()
            } else {
                result += arr[i][j].toLowerCase()
            }
        }
        if (i == arr.length - 1) {
            output += result
        } else {
            output += result + ' '
            result = ''
        }
    }
    return output
}

console.log(toWeirdCase('This  '), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('  This  is   a test'), 'ThIs Is A TeSt');

/*
=====SOAL======
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/
/*
CARA ORANG LAIN
1. ======>

function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}

2. ======>

function toWeirdCaseCharacter(chr, index)
{
  return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
}

function toWeirdCaseWord(word){
  return word.split("").map(toWeirdCaseCharacter).join("");
}

function toWeirdCase(string){
  return string.split(" ").map(toWeirdCaseWord).join(" ");
}

3. ======>

function toWeirdCase(string){
  return string.replace(/(\w{1,2})/g,(m)=>m[0].toUpperCase()+m.slice(1))
}

4. ======>

function toWeirdCase(string) {
  var i = 0;
  return [].map.call(string.toLowerCase(), function(char) {
    if (char == " ") { i = -1; }
    return i++ % 2 ? char : char.toUpperCase();
  }).join('');
}
    
*/