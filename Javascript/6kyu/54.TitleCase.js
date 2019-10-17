// Logic ku Stuck di sini Doang Lanjutin Broo
function titleCase(title, minorWords) {
  // console.log('Title : ', title)
  // console.log('Minor : ', minorWords)
  if (title.length == 0) return ''
  if (minorWords == undefined) minorWords = ''
  minorWords = minorWords.toLowerCase().split(' ')
  title = title.toLowerCase()

  let str = ''
  let arr = []
  for (let i = 0; i <= title.length; i++) {
    if (title[i] == ' ' || i == title.length) {
      arr.push(str)
      str = ''
    } else {
      str += title[i]
    }
  }
  // console.log('ARR : ', arr)
  // console.log('Minor : ', minorWords)

  let res = []
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < minorWords.length; j++) {
      if (arr[i] == minorWords[j]) {
        res.push([minorWords[j], i])
      }
    }
  }

  // console.log('RES : ', res)

  let temp = ''
  let output = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if ([i][j] == [i][0]) {
        temp += arr[i][j].toUpperCase()
      } else {
        temp += arr[i][j]
      }
    }
    output.push(temp)
    temp = ''
  }
  // console.log('Output: ', output)

  let result = []

  for (let i = 0; i < output.length; i++) {
    let found = false
    for (let j = 0; j < res.length; j++) {
      if (i == res[j][1]) {
        found = true
        result.push(res[j][0])
      }
    }
    if (found == false) {
      result.push(output[i])
    }
  }
  // console.log('Result ====>', result)
  let hasil = ''
  for (let i = 0; i < result.length; i++) {
    if (i == result.length - 1) {
      hasil += result[i]
    } else {
      hasil += result[i] + ' '
    }
  }
  return hasil
}

console.log(titleCase(''), '')
console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox')

/*
=====SOAL======
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

###Arguments (Haskell)

First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/
/*
CARA ORANG LAIN
1. ======>

function titleCase(title, minorWords) {
  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase().split(' ').map(function(v, i) {
    if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
      v = v.split('');
      v[0] = v[0].toUpperCase();
      v = v.join('');
    }
    return v;
  }).join(' ');
}

2. ======>

const titleCase = (title, minorWords) => {

  if (!title) 
    return title;

  let cap = word => 
    word[0].toUpperCase() + word.slice(1);

  let minors = (minorWords || '')
    .toLowerCase()
    .split(' ');

  let result = title
    .toLowerCase()
    .replace(/\S+/g, w => minors.indexOf(w) === -1 ? cap(w) : w);

  return cap(result);

}

3. ======>

var titleCase=(w,e)=>w?l(w).map((v,i)=>(~l(e).indexOf(v)*i?v:v[0].toUpperCase()+v.slice(1))).join` `:w,l=a=>(a||'').toLowerCase().split` `

*/