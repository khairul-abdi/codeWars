function isValidIP(str) {

    if (str == '') return false

    let temp = ''
    let arr = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') return false

        if (str[i] == '.') {
            if (temp) arr.push(temp), temp = ''
        } else {
            if (!Number(Number(str[i])) && str[i] != '0') {
                return false
            } else {
                temp += str[i]
            }
        }
    }
    if (temp) arr.push(temp)

    // console.log(arr.length, ' : Panjang')
    if (arr.length < 4 || arr.length > 4) return false

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i][0]) == 0 && arr[i].length > 1) {
            return false
        } else if (Number(arr[i]) > 255 || Number(arr[i] < 0)) {
            return false
        }
    }
    // console.log(arr)
    return true
}



console.log(isValidIP("0.0.0.0"), true);
console.log(isValidIP("12.255.56.1"), true);
console.log(isValidIP("137.255.156.100"), true);
console.log(isValidIP(''), false);
console.log(isValidIP('abc.def.ghi.jkl'), false, 'huruf');
console.log(isValidIP('123.456.789.0'), false);
console.log(isValidIP('12.34.56'), false);
console.log(isValidIP('01.02.03.04'), false);
console.log(isValidIP('256.1.2.3'), false);
console.log(isValidIP('1.2.3.4.5'), false);
console.log(isValidIP('123,45,67,89'), false);
console.log(isValidIP('1e0.1e1.1e2.2e2'), false, 'huruf');
console.log(isValidIP(' 1.2.3.4'), false);
console.log(isValidIP('1.2.3.4 '), false);
console.log(isValidIP('12.34.56.-7'), false);
console.log(isValidIP('1.2.3.4\n'), false, 'huruf');
console.log(isValidIP('\n1.2.3.4'), false, 'huruf');

/*
=====SOAL======
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Input to the function is guaranteed to be a single string.

Examples
Valid inputs:

1.2.3.4
123.45.67.89
Invalid inputs:

1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Note that leading zeros (e.g. 01.02.03.04) are considered invalid.
*/
/*
CARA ORANG LAIN
1. ======>
Use ReGex

function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}

2. ======>
Use .filter

function isValidIP(str) {
  return str.split('.').filter(function(v){return v==Number(v).toString() && Number(v)<256}).length==4;
}

3. ======>

const net = require('net');
const isValidIP = (s) => net.isIP(s);

*/