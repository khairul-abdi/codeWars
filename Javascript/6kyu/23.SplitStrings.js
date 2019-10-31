function solution(str) {

  let output = []
  let temp = ''
  for (let i = 0; i < str.length; i += 2) {
    (i != str.length - 1) ? temp += str[i] + str[i + 1]: temp += `${str[i]}_`
    output.push(temp)
    temp = ''
  }
  return output
}

function solution(str) {

  let output = []
  let temp = ''
  for (let i = 0; i < str.length; i += 2) {
    if (str.length % 2 == 0) {
      output.push(str[i] + str[i + 1])
    } else if (str.length % 2 != 0) {
      if (i != str.length) {
        output.push(str[i] + str[i + 1])
      } else if (i == undefined) {
        output.push(str[i] + '_')
      }
    }
  }
  return output
}

console.log(solution('abc')) // should return ['ab', 'c_']
console.log(solution('abcdef')) // should return ['ab', 'cd', 'ef']

/*
=====SOAL======
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/
/*
CARA ORANG LAIN
1. ======>

function solution(str){
   return (str + "_").match(/../g);
}

2. ======>

function solution(str){
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
      result.push(str[i] + str[i+1]);
      i += 2;
    }
  return result;
}

3. ======>

function solution(str){
  arr = [];
  for(var i = 0; i < str.length; i += 2){
    second = str[i+1] || '_';
    arr.push(str[i] + second);
  }
  return arr;
}

*/