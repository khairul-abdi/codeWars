// CARA DIATAS BELUM JALAN
// isomorph = (a, b) => {
//   if (a.length != b.length) return false
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == b[i]) {
//       return false
//     }
//   }
//   return true
// }



//CARA LAIN PUNYA SAYA



// isomorph = (a, b) => {
//   a = a.split('').sort().join('')
//   b = b.split('').sort().join('')

//   console.log(a)
//   console.log(b)
// }



//CARA ORANG LAIN
isomorph = s = (a, b) => b ? s(a) == s(b) : [...a].map(c => a.indexOf(c)) + ""

console.log(isomorph("ESTATE", "DUELED"), true);
console.log(isomorph("XXX", "YYY"), true);
console.log(isomorph("CBAABC", "DEFFED"), true);
console.log(isomorph("RAMBUNCTIOUSLY", "THERMODYNAMICS"), true);
console.log(isomorph("DISCRIMINATIVE", "SIMPLIFICATION"), true)

console.log(isomorph("SEE", "SAW"), false);
console.log(isomorph("BANANA", "SENSE"), false);
console.log(isomorph("XXY", "XYY"), false);
console.log(isomorph("ABCBACCBA", "ABCBACCAB"), false);
console.log(isomorph("AA", "BBB"), false);
console.log(isomorph("abcdefghijk", "abcdefghijba"), false);
console.log(isomorph("ABCDEFGHIJK", "ABCDEFGHIJAA"), false);

/*
=====SOAL======
Notes
This Kata is inspired by "Check if two words are isomorphic to each other" by rasmus_ri.

Task
Two strings a and b are called isomorphic if there is a one-to-one mapping possible for every character of a to every character of b and all occurrences of every character in a map to same character in b.

In this Kata, you will create a function that returns true if two given strings are isomorphic to each other, and false otherwise. Remember that order is important.

Your solution must be able to handle words with more than 100 characters.

Example
True examples:

CBAABC DEFFED
XXX YYY
RAMBUNCTIOUSLY THERMODYNAMICS
False examples:

AB CC
XXY XYY
ABAB CD
Code Limit
Less than 70 chars.

Advice
If your code length is much longer than the limit, giving up is also a good choice :D
*/
/*
CARA ORANG LAIN
1. ======>

isomorph=(a,b)=>f(a)==f(b),f=s=>[...s].map(c=>s.search(c))+''

2. ======>

isomorph=f=(a,b)=>b?f(a)==f(b):0+[...a].map(a.search,a)

3. ======>

isomorph=(a,b,f=s=>[...s].map(s.search,s)+'')=>f(a)==f(b)

4. ======>

isomorph=(a,b,f=s=>[...s].map(x=>s.indexOf(x))+'')=>f(a)==f(b)

*/