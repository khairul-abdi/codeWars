function spinWords(x) {
  let arr = []
  let str = ''
  for (let i = 0; i <= x.length; i++) {
    if (x[i] == ' ' || x.length == i) {
      arr.push(str)
      str = ''
    } else {
      str += x[i]
    }
  }
  // console.log(arr)
  let output = []
  let temp = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      for (let j = arr[i].length - 1; j >= 0; j--) {
        temp += arr[i][j]
      }
      output.push(temp)
      temp = ''
    } else {
      output.push(arr[i])
    }
  }

  let result = ''
  for (let i = 0; i < output.length; i++) {
    if (i == output.length - 1) {
      result += output[i]
    } else {
      result += output[i] + ' '
    }
  }

  return result
}

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
console.log(spinWords("This is another test"), "This is rehtona test");
console.log(spinWords("You are almost to the last test"), "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");

/*
=====SOAL======
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/
/*
CARA ORANG LAIN
1. ======>

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

2. ======>

R = s => 
  s.split``.reverse().join``;

spinWords = s => 
  s.split(' ').map(e => e.length >= 5 ? R(e) : e).join(' ');
  
3. ======>
*/