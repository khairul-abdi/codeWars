const count = string => {

  let obj = {}
  if (string === '') return obj

  for (let i = 0; i < string.length; i++) {
    obj[string[i]] == undefined ? obj[string[i]] = 1 : obj[string[i]]++
  }
  return obj;
}

console.log(count("abazab"), {
  a: 2,
  b: 1
});
console.log(count(""), {});

/*
=====SOAL======
The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }

For C#: Use a Dictionary<char, int> for this kata!
*/
/*
CARA ORANG LAIN
1. ======>
USE forEach

function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

2. ======>
USE reduce

function count (string) {
  return string.split('').reduce(function(counts,char){
    counts[char] = (counts[char]||0) + 1;
    return counts;
  },{});
}

3. ======>
USE lodash

const count = require('lodash').countBy;

4. ======>
USE map

function count (string) {  
  var result = {};
    
  string.split("").map(function(current) {
     result.hasOwnProperty(current)
       ? result[current]++
       : result[current] = 1;
  });
    
  return result;
}

5. ======>
Use Loop for of

function count(string) {
    const res = {}

    for (const char of string)
        res[char] = -~res[char]

    return res
}

*/