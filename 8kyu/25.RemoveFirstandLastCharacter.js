function removeChar(str) {
    let result = ''
    for (let i = 1; i < str.length - 1; i++) {
        result += str[i]
    }

    return result
};

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');

/*
It's pretty straightforward. Your goal is to create a function that removes 
the first and last characters of a string. You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters.
*/

/*
CARA ORANG LAIN
1. ====>

function removeChar(str) {
  return str.slice(1, -1);
}

2. ====>
const removeChar = str => str.slice(1,-1)

3. ====>
const removeChar = (str) => str.replace(/^.|.$/g, '');
*/