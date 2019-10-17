let findOutlier = function (integers) {
    let odd = [],
        even = []
    let len = integers.length
    for (let i = 0; i < len; i++)(integers[i] % 2 == 0) ? even.push(integers[i]) : odd.push(integers[i])
    return (even.length == 1) ? even[0] : odd[0]
}

console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2, 6, 8, 10, 3]), 3)
console.log(findOutlier([0, 0, 3, 0, 0]), 3)
console.log(findOutlier([1, 1, 0, 1, 1]), 0)

/*
=====SOAL======
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/
/*
CARA ORANG LAIN
1. ======>

function findOutlier(integers){
  return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
}
function even(num){
  return (num % 2 == 0);
}
function odd(num){
  return !even(num)
}

2. ======>

function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}

3. ======>

function findOutlier(integers){
  var odds = integers.filter((e)=> e & 1);
  
  var evens = integers.filter((e)=> !(e & 1));
  
  var result = (odds.length < evens.length) ? odds.pop() : evens.pop();
  
  return result;
}

*/