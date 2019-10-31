function sortItOut(array) {
  // console.log(array)
  let odd = []
  let even = []
  for (let i = 0; i < array.length; i++) {
    if (Math.floor(array[i]) % 2 == 0) {
      even.push(array[i])
    } else {
      odd.push(array[i])
    }
  }
  // console.log(Math.round(array[6]) % 2 == 0)

  for (let i = 0; i < odd.length; i++) {
    for (let j = i + 1; j < odd.length; j++) {
      if (odd[i] > odd[j]) {
        let temp = odd[j]
        odd[j] = odd[i]
        odd[i] = temp
      }
    }
  }

  for (let i = 0; i < even.length; i++) {
    for (let j = i + 1; j < even.length; j++) {
      if (even[i] < even[j]) {
        let temp = even[j]
        even[j] = even[i]
        even[i] = temp
      }
    }
  }

  // console.log('Even : ', even)
  // console.log('Odd==> ', odd)
  odd = odd.concat(even)
  return odd
}


console.log(sortItOut([11, 22, 33, 44, 55, 55, 90.4, 4, 78]), ([11, 33, 55, 55, 90.4, 78, 44, 22, 4]));
// console.log(sortItOut([26, 243, 52, 2, 432414, 1, 11, 46, 32]), ([1, 11, 243, 432414, 52, 46, 32, 26, 2]));
// console.log(sortItOut([19, 65, 88, 112, 60, 14, 33, 49, 88]), ([19, 33, 49, 65, 112, 88, 88, 60, 14]));
// console.log(sortItOut([]), ([]))
// console.log(sortItOut([68, 25, 99, 50, 10, 67, 2, 5, 8, 34, 67]), ([5, 25, 67, 67, 99, 68, 50, 34, 10, 8, 2]));

/*
=====SOAL======
Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round them down while checking for odd/even. The output must have the original numbers!

If there are no issues with the kata and you successfully completed it, please rank and upvote!
*/
/*
CARA ORANG LAIN
1. ======>

function sortItOut(array){
  return array.filter(x => Math.floor(x) % 2 == 1)
    .sort((a, b) => a - b)
    .concat(array.filter(x => Math.floor(x) % 2 == 0)
      .sort((a, b) => b - a));
   
}

2. ======>

function sortItOut(array) {
  return array.sort((a, b) => ~~a % 2 === ~~b % 2 ? (~~b % 2 ? 1 : -1) * (a - b) : ~~b % 2 - ~~a % 2)
}

3. ======>

function sortItOut(array){
  var evens = [];
  var odds = [];
  array.forEach(function(item) {
    Math.floor(item) % 2 == 0 ? evens.push(item) : odds.push(item);
  });
  return odds.sort(function(a,b){return a - b}).concat(evens.sort(function(a,b){return b - a;})); 
}

*/