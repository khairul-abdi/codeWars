function solution(string) {
    let str = ''
    for (let i = 0; i < string.length; i++)(string[i] == string[i].toUpperCase()) ? str += ' ' + string[i] : str += string[i]
    return str
}

console.log(solution('camelCasing'), 'camel Casing')

/*
=====SOAL======
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution('camelCasing') // => should return 'camel Casing'
*/
/*
CARA ORANG LAIN
1. ======>

function solution(string) {
  var chars = string.split('');
  var resultArray = [];
  chars.forEach(function(c) {
    if (c.toUpperCase() === c) {
      resultArray.push(' ');
    }
    resultArray.push(c);
  });
  return resultArray.join('');
}

2. ======>
3. ======>
*/