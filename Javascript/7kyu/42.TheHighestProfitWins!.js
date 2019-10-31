function minMax(arr) {
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  // console.log(arr)
  return (arr.length == 1) ? [arr[0], arr[0]] : [arr[0], arr[arr.length - 1]]
}

console.log(minMax([1, 2, 3, 4, 5], [1, 5]));
console.log(minMax([2334454, 5], [5, 2334454]));

/*
=====SOAL======
Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples
minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
*/
/*
CARA ORANG LAIN
1. ======>

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

2. ======>

const minMax = arr => [ Math.min(...arr), Math.max(...arr) ];

3. ======>

function minMax(arr){
  var max = arr[0], min = arr[0];
  for(var i=0; i<arr.length; i++) {
    if(arr[i]>max) max = arr[i];
    if(arr[i]<min) min = arr[i];
  }
  return [min,max];
}

*/