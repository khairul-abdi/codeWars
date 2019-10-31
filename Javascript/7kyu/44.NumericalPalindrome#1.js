function palindrome(num) {
    if (typeof num == 'string' || num <= 0) return 'Not Invalid'

    num = String(num)
    let str = ''
    for (let i = num.length - 1; i >= 0; i--) str += num[i]

    return num == str
}

console.log(palindrome(1221), true);
console.log(palindrome(123322), false);
console.log(palindrome("ACCDDCCA"), "Not valid");
console.log(palindrome("1221"), "Not valid");
console.log(palindrome(-450), "Not valid");

/*
=====SOAL======
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, write a function to test if it's a numerical palindrome or not and return a boolean (true if it is and false if not).

Return "Not valid" if the input is not an integer or less than 0.
*/
/*
CARA ORANG LAIN
1. ======>

const palindrome = n => {
  if (typeof n !== 'number' || n < 0) return "Not valid"
  return String(n).split('').reverse().join('') === String(n)
}

2. ======>

function palindrome(num) { 
  if (typeof num !== 'number' || num < 0){ return 'Not valid';} 
 return num - Number(num.toString().split('').reverse().join('')) === 0 ? true : false;
} 

3. ======>

function palindrome(num) { 
 console.log(num)
  if (typeof num !== 'number' || num < 0) return 'Not valid';
  let str = num.toString();
    for (let i = 0; i < str.length/2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      } 
    }
  return true;
}

*/