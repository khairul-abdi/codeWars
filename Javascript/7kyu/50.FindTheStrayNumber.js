function stray(numbers) {
  let uniq = []
  let same = []
  let num = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    (num === numbers[i]) ? same.push(numbers[i]): uniq.push(numbers[i])
  }
  // console.log('SAME : ', same)
  // console.log('UNIQ : ', uniq)
  return (uniq.length === 1) ? uniq[0] : same[0]
}

console.log(stray([1, 1, 2]), 2);
console.log(stray([0, 0, 0, 7, 0, 0, 0]), 7)

/*
=====SOAL======
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/
/*
CARA ORANG LAIN
1. ======>

function stray(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}

2. ======>

const stray = nums => nums.reduce((a, b) => a ^ b);

3. ======>

function stray(numbers) {
  var a = numbers.sort();
  
  if(a[0] != a[1]) {
    return a[0]
  } 
  return a[a.length-1]
}

*/