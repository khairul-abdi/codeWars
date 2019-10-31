// const avg = a => {
//     let output = 0
//     output = (a.reduce((acc, cur) => acc + cur))
//     return output / a.length
// }

const avg = a => {
    let output = 0
    for (let i = 0; i < a.length; i++) {
        output += a[i]
    }
    return output / a.length
}

//CARA ORANG LAIN
function avg(a) {
    return a.reduce((a, b) => a + b, 0) / a.length
}


console.log(avg([0, 1, 2, 3, 4]), 2, "returns valid avg number");

/*
=====SOAL======
Given an array of integers, calculate the Average of these numbers.

Main challenge is to write shortest and compact function for it.

For example: var a = [0, 1, 2];
avg(a) // output should be 1
Output of function will be also checked in tests, however most important is to write the shortest possible function as test will check length of written function. Input will always be valid.
*/
/*
CARA ORANG LAIN
1. ======>

const avg = (a) => a.reduce((p, c) => p + c) / a.length

2. ======>

function avg(a){return eval(a.join("+"))/a.length}

3. ======>

function avg(a){
  return a.reduce(sm)/a.length;
}

function sm(t,n){
  return t + n;
}

*/