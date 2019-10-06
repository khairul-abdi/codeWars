function noBoringZeros(n) {
    n = String(n)
    let result = ''

    for (let i = 0; i < n.length; i++) {
        if (n[i] == '0' && n[i + 1] == '0') {
            if (n[i + 2] == '0') {
                return Number(result)
            } else {
                return Number(result)
                // result += n[i]
            }
        } else {
            if (i == n.length - 1 && n[i] == '0') {
                return Number(result)
            } else {
                result += n[i]
            }
        }
    }

    return Number(result)
}

console.log(noBoringZeros(1450), 145)
console.log(noBoringZeros(960000), 96)
console.log(noBoringZeros(1050), 105)
console.log(noBoringZeros(-1050), -105)
console.log(noBoringZeros(980006))
console.log(noBoringZeros(-105), -105)
console.log(noBoringZeros(0), 0)

/*
=====SOAL======
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/
/*
CARA ORANG LAIN
1. ======>

function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}

2. ======>

function noBoringZeros(n) {
  return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
}

3. ======>
*/