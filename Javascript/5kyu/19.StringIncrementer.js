function incrementString(strng) {
  let alpha = ''
  let num = ''
  for (let i = 0; i < strng.length; i++) {
    if (Number(Number(strng[i])) || strng[i] == '0') {
      num += strng[i]
    } else {
      alpha += strng[i]
    }
  }
  // console.log(num)
  // console.log(alpha)
  // let output = Number(num) + 1
  // console.log('===', output)
  // let result = alpha + output
  let result = ''
  for (let i = 0; i < num.length; i++) {
    if (Number(num[num.length - 1]) < 9) {
      output += Number(num[num.length - 1]) + 1
    }
  }

  return result
}

console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar99"), "foobar100");
console.log(incrementString("foobar099"), "foobar100");
console.log(incrementString(""), "1");