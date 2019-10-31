function calculate(str) {
    let arr = []
    let temp = ''
    let angka = ''
    for (let i = 0; i < str.length; i++) {
        if (!Number(Number(str[i])) && str[i] != '0') temp += str[i]

        if ((Number(Number(str[i])) || str[i] == '0')) {
            angka += str[i]
            if (temp) arr.push(temp), temp = ''
        } else if (!Number(Number(str[i]))) {
            if (angka) arr.push(Number(angka))
            angka = ''
        }
    }
    arr.push(Number(angka))
    console.log(arr)

    let output = arr[0]

    for (let i = 1; i < arr.length; i += 2)(arr[i] == 'plus') ? output += arr[i + 1] : output -= arr[i + 1]
    return String(output)
}

console.log(calculate('520minus764plus592'), '348')
console.log(calculate("1plus2plus3plus4"), '10');
// console.log(calculate('1minus2minus3minus4'), '-8');
// console.log(calculate('1plus2plus3minus4'), '2');

/*
=====SOAL======
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/
/*
CARA ORANG LAIN
1. ======>

function calculate(str) {

  return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
}

2. ======>

function calculate(str) {
  var arr=str.split('plus');
  var sum=0;
  for (var i=0; i<arr.length; ++i)
    if (arr[i].indexOf('minus')==-1)
      sum+=+arr[i];
    else
    {
      var ar=arr[i].split('minus');
      var s=+ar[0];
      for (var j=1; j<ar.length; ++j)
        s-=ar[j];
      sum+=s;
    }
  return sum.toString();
}

3. ======>
*/