function kebabize(str) {
  let temp = ''
  let arr = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i].toUpperCase() && !(Number(Number(str[i]))) && str[i] != '0') {
      temp += str[i]
    } else if (str[i] == str[i].toUpperCase() && !(Number(Number(str[i]))) && str[i] != '0') {
      if (temp) {
        arr.push(temp)
      }
      temp = ''
      temp += str[i].toLowerCase()
    }
  }
  arr.push(temp)
  console.log(arr)

  let result = ''
  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1 || arr.length == 1) {
      result += arr[i]
    } else {
      result += arr[i] + '-'
    }
  }

  return result
}


console.log(kebabize('myCamelCasedString'), 'my-camel-cased-string');
// console.log(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');
// console.log(kebabize('kF2qk'), 'k-fqk')
// console.log(kebabize('JrZt'), 'jr-zt')
console.log(kebabize('3it0o'), 'ito')
console.log(kebabize('hkb'), 'hkb')

/*
=====SOAL======
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters
*/
/*
CARA ORANG LAIN
1. ======>
2. ======>
3. ======>
*/