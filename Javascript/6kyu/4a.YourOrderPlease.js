// is2 Thi1s T4est 3a

// ['is2', 'Thi1s', 'T4est', '3a']


// [['is2',2],['Thi1s',1],['T4est',4],['3a',3]]

function order(words) {
  let arr = []
  let str = ''
  for (let i = 0; i <= words.length; i++) {
    if (words[i] == ' ' || i == words.length) {
      arr.push(str)
      str = ''
    } else {
      str += words[i]
    }
  }
  // console.log(arr)
  let output = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (Number(Number(arr[i][j]))) {
        output.push([Number(arr[i][j]), arr[i]])
      }
    }
  }

  for (let i = 0; i < output.length; i++) {
    for (let j = i + 1; j < output.length; j++) {
      if (output[i][0] > output[j][0]) {
        let temp = output[j]
        output[j] = output[i]
        output[i] = temp
      }
    }
  }
  // console.log(output)
  let result = ''
  for (let i = 0; i < output.length; i++) {
    if (i === output.length - 1) {
      result += output[i][1]
    } else {
      result += output[i][1] + ' '
    }
  }
  return result
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
// console.log(order(""), "")

/*
=====SOAL======
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/
/*
CARA ORANG LAIN
1. ======>
2. ======>
3. ======>
*/