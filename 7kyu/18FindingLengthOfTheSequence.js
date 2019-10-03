//CARA AKU BELUM BERHASIL

// var lengthOfSequence = function (arr, n) {
//     let temp = []
//     for (let i = 0; i < arr.length; i++) {
//         var ketemu = false
//         if (n == arr[i]) {
//             ketemu = true
//             temp.push(i)
//         }
//     }
//     if (ketemu == false) {
//         return 0
//     } else if (temp.length == 1) {
//         return 0
//     }
//     let count = (temp[1] + 1) - temp[0]

//     return count
// };

//PUNYA ORANG
// var lengthOfSequence = function (arr, n) {
//     var count = 0;
//     var pos = arr.indexOf(n);

//     while (pos !== -1) {
//         count++;
//         pos = arr.indexOf(n, pos + 1);
//     }
//     if (arr.indexOf(n) == -1) return 0;
//     if (count === 1) return 0;
//     if (count > 2) return 0;
//     return arr.slice(arr.indexOf(n), arr.lastIndexOf(n)).length + 1
// }

//PUNYA ORANG
var lengthOfSequence = function (arr, n) {
    var index1 = arr.indexOf(n);
    var index2 = arr.indexOf(n, index1 + 1);
    var index3 = arr.indexOf(n, index2 + 1);
    if (index1 == -1 || index2 == -1 || index3 != -1) {
        return 0
    };
    return index2 - index1 + 1;
};

console.log(lengthOfSequence([1, 1], 1), 2, 'Returns two when there are only two elements in the array');
console.log(lengthOfSequence([1, 2, 3, 1], 1), 4, 'Returns four for an array of length four and the number to be searched at the boundaries');
console.log(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5), 5, 'Returns five');
console.log(lengthOfSequence([-7, 6, 2, -7, 4], -7), 4, 'Returns four');

/*
As part of this Kata, you need to find the length of the sequence in an array, between the first and the second occurrence of a specified number.

For example, for a given array arr

[0, -3, 7, 4, 0, 3, 7, 9]
Finding length between two 7s like

lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)
would return 5.

For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

If there are less or more than two occurrences of the number to search for, return 0, or in Haskell, Nothing.
 */

/*
 CARA ORANG LAIN
 1. =====>
 function lengthOfSequence(arr, n){
  return arr.count(n) == 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;
}

2. ======>
Array.prototype.count = function(n){
  return this.filter(function(v){ return v == n }).length;
}

3. ======>
var lengthOfSequence = function (arr, n) {
  // TODO: Write some scripts here
  var index1 = arr.indexOf(n);
  var index2 = arr.indexOf(n,index1 + 1);
  var index3 = arr.indexOf(n,index2 + 1);
  if (index1 == -1 || index2 == -1 || index3 != -1) {return 0} ;
  return index2 - index1 + 1;
};
 */