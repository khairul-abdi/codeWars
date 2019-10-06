function reverseNumber(n) {
    n = String(n)
    let end = 0,
        output = '',
        result = ''

    n[0] == '-' ? end = 1 : end = 0

    for (let i = n.length - 1; i >= end; i--) {
        output += n[i]
    }
    // console.log('Output : ', output)

    (n[0] == '-') ? result = n[0] + output: result = output

    return Number(result)
}

console.log(reverseNumber(123), 321)
console.log(reverseNumber(-123), -321, 'Negative Numbers should be preserved')
console.log(reverseNumber(1000), 1, 'Should handle numbers ending with "0"')
console.log(reverseNumber(4321234), 4321234)
console.log(reverseNumber(5), 5)
console.log(reverseNumber(0), 0)
console.log(reverseNumber(98989898), 89898989)

/*
=====SOAL======

*/
/*
CARA ORANG LAIN
1. ======>

function reverseNumber(n) {
  let isNegative = n < 0;  
  let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
  let result = Number(reverseAsString);
  
  return isNegative ? -result : result;
}

2. ======>

reverseNumber = n => (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')

3. ======>
*/