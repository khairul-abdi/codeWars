// CARA AKU YANG BELUM JALAN
// function digital_root(n) {
//     n = String(n)
//     console.log('=== ', n)
//     if (n.length == 0) {
//         return Number(n)
//     } else {
//         let num = 0
//         for (let i = 0; i < n.length; i++) {
//             num += Number(n[i])
//         }
//         num = String(num)
//         return num + digital_root(num.slice(1))
//     }
// }


//CARA DARI ORANG LAIN

// function digital_root(n) {
//     var digits = n.toString().split("").map(Number);
//     var sum = 0;
//     for (var i = 0; i < digits.length; i++) {
//         sum += digits[i];
//     }
//     var sumString = sum.toString();
//     if (sumString.length > 1) {
//         var sumDigits = sumString.split("").map(Number);
//         var firstSumDigit = sumDigits.slice(0);
//         var lastSumDigit = sumDigits.slice(-1);
//         return firstSumDigit[0] + lastSumDigit[0];
//     } else {
//         return sum;
//     }
// }



// CARA YANG UDH DI REVISI DARI PUNYA ORANG LAIN dan PRAKTIS
const digital_root = n => n % 9

console.log(digital_root(7), 7)
console.log(digital_root(16), 7)
console.log(digital_root(456), 6)
console.log(digital_root(10), 1)


/*
=====SOAL======
In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Here's how it works:

digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2
*/
/*
CARA ORANG LAIN
1. ======>

function digital_root(n) {
  return (n - 1) % 9 + 1;
}

2. ======>

function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}

3. ======>

function digital_root(n) {
  if (n < 10)
    return n;

  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);
   
  return digital_root(sum);
}

*/