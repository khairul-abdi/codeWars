function stringToArray(string) {
    let output = []
    let word = ''
    for (let i = 0; i < string.length; i++) {
        if (word) {
            if (string[i] == ' ') {
                output.push(word)
                word = ''
            } else {
                word += string[i]
            }
        } else {
            if (string[i] != ' ') {
                word += string[i]
            }
        }
    }

    if (word) {
        output.push(word)
    }

    return output
}

console.log(stringToArray("       Robin            Singh             "), ["Robin", "Singh"]);
console.log(stringToArray("I love arrays they are my    favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);

/*
Write a function to split a string and convert it into an array of words. For example:

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they"
*/

/*
CARA ORANG LAIN
1. =============>

function stringToArray(string){
  return string.split(' ');
}

2. =============>
const stringToArray = string => string.split(' ');

3. =============>
stringToArray=(s)=>s.split(' ')
*/