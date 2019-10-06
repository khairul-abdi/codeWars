// const reverseSeq = n => {
//     let arr = []
//     for (let i = n; i > 0; i--) {
//         arr.push(i)
//     }
//     return arr
// };


//PAKE RECURSIF
const reverseSeq = n => {
    if (n < 2) {
        return [n]
    } else {
        return [n].concat(reverseSeq(n - 1));
    }
};


console.log(reverseSeq(5), [5, 4, 3, 2, 1]);

/*
=====SOAL======
Get the number n (n>0) to return the reversed sequence from n to 1.

Example : n=5 >> [5,4,3,2,1]
*/
/*
CARA ORANG LAIN
1. ======>

const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};

2. ======>

const reverseSeq = length => Array.from({length}, () => length--)

3. ======>

const reverseSeq = n => {
  if (n<2) return [n]
  return [n].concat(reverseSeq(n-1));
};

*/