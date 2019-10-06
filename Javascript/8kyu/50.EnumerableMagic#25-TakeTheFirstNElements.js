function take(arr, n) {
    let result = []
    if (arr.length == 0) {
        return result
    }
    if (n > arr.length) {
        return arr
    }
    for (let i = 0; i < n; i++) {
        result.push(arr[i])
    }
    return result
}
console.log(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");

/*
Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/

/*
CARA ORANG LAIN

1. ======>
function take(arr, n) {
  return arr.slice(0, n);
}
*/