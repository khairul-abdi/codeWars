function pickIt(arr) {
    let odd = [],
        even = [];

    for (let i = 0; i < arr.length; i++) {
        (arr[i] % 2 == 0) ? even.push(arr[i]): odd.push(arr[i])
    }

    return [odd, even];
}

console.log(pickIt([1, 2]), [
    [1],
    [2]
]);
console.log(pickIt([1, 2, 3]), [
    [1, 3],
    [2]
]);
console.log(pickIt([3, 2, 1]), [
    [3, 1],
    [2]
]);
console.log(pickIt([10, 20, 30]), [
    [],
    [10, 20, 30]
]);
console.log(pickIt([11, 21, 31]), [
    [11, 21, 31],
    []
]);
console.log(pickIt([8, 1, 5, 4, 6, 1, 1]), [
    [1, 5, 1, 1],
    [8, 4, 6]
]);

/*
=====SOAL======
Training JS #10:
loop statement --for

for loop is one of the most frequently used loop statements in JS. It works like while loop. In lesson 9, we wrote a while loop:

function sum1_100(){
  var sum=0,num=1
  while (num<=100){
    sum+=num;
    num++;
  }
  return sum;
}
*/
/*
CARA ORANG LAIN
1. ======>

function pickIt (arr) {
  
  let odd = []
  let even =[]
      
  for (var x of arr) {
      ((x % 2) ? odd : even).push(x)    
  }
      
  return [odd, even]
}

2. ======>
3. ======>
*/