function distinct(a) {
    let arr = []
    for (let i = 0; i < a.length; i++) {
        let found = false
        for (let j = 0; j < arr.length; j++) {
            if (a[i] == arr[j]) found = true
        }
        if (found == false) arr.push(a[i])

    }
    return arr
}

console.log(distinct([1]), [1]);
console.log(distinct([1, 2]), [1, 2]);
console.log(distinct([1, 1, 2]), [1, 2]);

/*
=====SOAL======
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/
/*
CARA ORANG LAIN
1. ======>

function distinct(a) {
  return [...new Set(a)];
}

2. ======>

const distinct = a => a.filter((item, index) => a.indexOf(item) === index);

3. ======>

const {uniq: distinct} = require('lodash');

*/