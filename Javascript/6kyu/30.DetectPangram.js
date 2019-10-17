/*function isPangram(string) {
  let kamus = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let str = ''
  let result = 0

  for (const j of string)
    if (j != ' ' && j != ',' && j != '.') str += j

  for (const i of str) {
    for (let j = 0; j < kamus.length; j++) {
      if (i == kamus[j]) result += 1
    }
  }

  return (result >= 26) ? true : false
}

var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string), true)
var string = "This is not a pangram."
console.log(isPangram(string), false)
*/


function isPangram(string) {

  let arr = []
  string = string.match(/[^0-9]/g)

  for (let j = 0; j < string.length; j++) {
    let found = false
    for (let k = 0; k < arr.length; k++) {

      if (string[j].toLowerCase() == arr[k].toLowerCase() || string[j] == '.' || string[j] == ' ' || string[j] == ',') {
        found = true
      }
    }
    if (found == false) {
      arr.push(string[j])
    }
  }

  // console.log(arr.length)
  return (arr.length == 26) ? true : false
}

var string = "The quick brown fox jumps over 3the lazy dog."
console.log(isPangram(string), true)
var string = "This is not a pangram."
console.log(isPangram(string), false)

/*
=====SOAL======
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/
/*
CARA ORANG LAIN
1. ======>

function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

2. ======>

function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

3. ======>

function isPangram(string){
 var rng =  Math.floor((Math.random() * 10) + 1);
  
  if(rng >= 5){
    return true;
  }
  if(rng < 5){
    return false;
  }
  
}

*/