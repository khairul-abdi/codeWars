//BELUM JALAN
// function isOpposite(s1, s2) {

// let hBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// let hKecil = 'abcdefghijklmnopqrstuvwxyz'
// let tempS1 = ''
// let tempS2 = ''

// if (s1.length == 0 || s2.length == 0) {
//     return false
// }
// for (let i = 0; i < s1.length; i++) {
//     let found = false
//     for (let j = 0; j < hBesar.length; j++) {
//         if (s1[i] == hBesar[j]) {
//             tempS1 += hKecil[j]
//             found = true
//         }
//     }
//     if (found == false) {
//         tempS1 += s1[i]
//     }
// }
// // console.log('S1 == ', tempS1)

//BELUM JALAN
// for (let i = 0; i < s2.length; i++) {
//     let found = false
//     for (let j = 0; j < hBesar.length; j++) {
//         if (s2[i] == hBesar[j]) {
//             tempS2 += hKecil[j]
//             found = true
//         }
//     }
//     if (found == false) {
//         tempS2 += s2[i]
//     }
// }

// // console.log('S2 == ', tempS2)
// return tempS1 == tempS2 ? true : false
// }

//BELUM JALAN
// function isOpposite(s1, s2) {
//     if (s1.length == 0 || s2.length == 0) {
//         return false
//     }

//     if (s1.toLowerCase() == s2.toLowerCase()) {
//         return true
//     } else {
//         return false
//     }
// }

const isOpposite = (s1, s2) => {
  if (s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) {
    return false
  }

  for (let i = 0; i < s1.length; i++) {
    if (s1.charAt(i) === s2.charAt(i)) {
      return false
    }
  }

  return true
}

console.log(isOpposite("ab", "AB"), true);
console.log(isOpposite("aB", "Ab"), true);
console.log(isOpposite("aBcd", "AbCD"), true);
console.log(isOpposite("aBcde", "AbCD"), false);
console.log(isOpposite("AB", "Ab"), false);
console.log(isOpposite("", ""), false);

/*
Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

#Some examples:
isOpposite("ab","AB") should return true;
isOpposite("aB","Ab") should return true;
isOpposite("aBcd","AbCD") should return true;
isOpposite("AB","Ab") should return false;
isOpposite("","") should return false;
*/

/*
CARA ORANG LAIN
1. ======>
const isOpposite = (s1, s2) => {
  if (s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false

  for (let i = 0; i < s1.length; i++) {
    if (s1.charAt(i) === s2.charAt(i)) return false
  }

  return true
}

2. ======>
function isOpposite(s1,s2){
  return s1!=''&&s1==s2.replace(/./g,ch=>ch['to'+(ch<='Z'?'Lower':'Upper')+'Case']())
}

3. ======>
isOpposite = (s1,s2) => s1+s2!='' && s1==s2.replace(/./g, x => /[A-Z]/.test(x) ? x.toLowerCase() : x.toUpperCase());
*/