// function solve(s) {
//     let arr = []
//     let count = 0

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == 'a' || s[i] == 'i' || s[i] == 'e' || s[i] == 'o' || s[i] == 'u') {
//             count += 1
//         } else {
//             arr.push(count)
//             count = 0
//         }
//     }
//     // console.log(arr)
//     let result = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > result)
//             result = arr[i]
//     }
//     return result
// }



function solve(s) {
    let tempKe = []
    let tempBe = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'i' || s[i] == 'e' || s[i] == 'o' || s[i] == 'u') {
            // tempKe.push(s[i])
            tempKe[tempKe.length] = s[i]
        } else {
            // tempBe.push(tempKe)
            tempBe[tempBe.length] = tempKe
            tempKe = []
        }
    }
    // tempBe.push(tempKe)
    tempBe[tempBe.length] = tempKe
    console.log(tempBe)

    let result = []
    for (let i = 0; i < tempBe.length; i++) {
        // result.push(tempBe[i].length)
        result[result.length] = tempBe[i].length
    }

    // console.log(result)

}


console.log(solve("codewarriorsa"), 2);
// console.log(solve("suoidea"), 3);
// console.log(solve("ultrarevolutionariees"), 3);
// console.log(solve("strengthlessnesses"), 1);
// console.log(solve("cuboideonavicuare"), 2);
// console.log(solve("chrononhotonthuooaos"), 5);
// console.log(solve("iiihoovaeaaaoougjyaw"), 8);

/*
======SOAL=====
The vowel substrings in the word codewarriors are o,e,a,io. 
The longest of these has a length of 2. Given a lowercase string that 
has alphabetic characters only and no spaces, return the length of the longest 
vowel substring. Vowels are any of aeiou.
*/

/*
CARA ORANG LAIN
1. ======>

function solve(s) {
  let cur = 0
  let max = 0
  for (let i = 0; i < s.length; ++i) {
    if ("aeiou".includes(s[i])) {
      cur++
      if (cur > max) {
        max = cur
      }
    } else {
      cur = 0
    }
  }
  return max
}

2. ======>

const solve = s => s.split(/[^aeiou]/).reduce((s,n)=> Math.max(s,n.length),0);

3. ======>

function solve(s){
  let vowels = ['a','e','i','o','u'];
  let count = 0;
  let highestCount = 0;
  for (let i = 0; i < s.length -1; i++) {
    if (vowels.includes(s[i]) && vowels.includes(s[i + 1])) {
      count++;
    } else {
      if (highestCount < count) highestCount = count;
      count = 1;
    }
  }
  return highestCount;
}

*/