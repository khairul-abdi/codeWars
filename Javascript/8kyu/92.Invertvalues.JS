// const invert = array => {
//     let result = []
//     for (let i = 0; i < array.length; i++)(array[i] != -array[i]) ? result.push(-array[i]) : result.push(array[i])
//     return result
// }

// const invert = array => {
//     let result = []
//     array.map(x => {
//         (x != -x) ? result.push(-x): result.push(x)
//     })
//     return result
// }



console.log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
console.log(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
console.log(invert([]), []);
console.log(invert([0]), [0]);

/*
=====SOAL======
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/
/*
CARA ORANG LAIN
1. ======>

function invert(array) {
    return array.map(x => x === 0 ? x : -x);
}

2. ======>

function invert(array) {
  var newArr = [];
  for(var i = 0; i < array.length; i++){
    newArr.push(-array[i]);
  }
   return newArr;
}

3. ======>

invert=a=>a.map(n=>~~-n)
*/