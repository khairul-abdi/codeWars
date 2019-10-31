//BELUM JALAN
function factorial(n) {

  if (n == 1) return toLocaleString(1)
  return toLocaleString(n) * factorial(n - 1)

}

console.log(factorial(1), '1', '1!');
console.log(factorial(5), '120', '5!');
// console.log(factorial(9), '362880', '9!');
// console.log(factorial(15), '1307674368000', '15!');

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>

function factorial(n){
  // Add some code
  if (n < 0) { return null; }

  var factArray = [1];
  var factSize = 1;
  var carry;
  var prod;
  var digit;
  for (var x = 2; x <= n; x++) {
    // multiply each digit
    carry = 0;
    for (var i = 0; i < factArray.length; i++) {
      prod = factArray[i] * x + carry;
      digit = prod % 10;
      carry = Math.floor(prod / 10);
      factArray[i] = digit;
      if (i === factArray.length - 1) {
        while (carry > 0) {
          digit = carry % 10;
          carry = Math.floor(carry / 10);
          factArray.push(digit);
        }
        break;
      }
    }
  }
  var strFactorial = '';
  for (var i = factArray.length - 1; i >= 0; i--) {
    strFactorial += ('' + factArray[i]);
  }
  return strFactorial;
}

2. ======>

function factorial(n) {
  var res = [1];
  for (var i = 2; i <= n; ++i) {
    var c = 0;
    for (var j = 0; j < res.length || c !== 0; ++j) {
      c += (res[j] || 0) * i;
      res[j] = c % 10;
      c = Math.floor(c / 10);
    }
  }
  return res.reverse().join("");
}

3. ======>

function factorial(n){
  let result = '1'
  while (n > 1)
    result = multiply(result, n--)
  return result
}

function multiply(str, x) {
  const resultDigits = []
  let carry = 0

  str.split('').reverse().forEach(char => {
    let intermediate = Number(char) * x + carry
    resultDigits.unshift(intermediate % 10)
    carry = Math.floor(intermediate / 10)
  })
  if (carry > 0)
    resultDigits.unshift(carry)

  return resultDigits.join('')
}

*/