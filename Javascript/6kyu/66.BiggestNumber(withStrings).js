function biggestNum(a, b) {
  const formatStr = s => s.replace(/^-+/, m => m.length % 2 ? '-' : '').replace(/^(-)?(0+)/g, (_, m1) => m1 || '')
  let [c, d] = [a, b].map(formatStr)
  let [lc, ld] = [c.length, d.length]
  let cmp = c.localeCompare(d, 'kn')
  if (c[0] == '-')
    if (d[0] == '-')
      return (lc > ld || (lc == ld && cmp > 0)) ? d : c
    else
      return d
  else
    if (d[0] == '-')
      return c
    else
      return (lc < ld || (lc == ld && cmp < 0)) ? d : c
}

console.log(biggestNum("25", "7"), "25");
console.log(biggestNum("214", "507"), "507");

/*
=====SOAL======
You are to write a function biggestNum() that takes as argument two numbers (passed as strings) and returns the biggest (written as a string).

Note the numbers can be negative and/or very large. They can also have leading zeros and multiple negative signs, but your answers should be written without those.

Good luck!
*/
/*
CARA ORANG LAIN
1. ======>
2. ======>
3. ======>
*/