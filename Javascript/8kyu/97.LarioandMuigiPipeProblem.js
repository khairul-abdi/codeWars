function pipeFix(numbers) {
    let min = numbers[0]
    let max = numbers[0]
    let arr = []
    for (let i = 0; i < numbers.length; i++) {
        if (min > numbers[i]) min = numbers[i]
        if (max < numbers[i]) max = numbers[i]
    }
    // console.log(min)
    // console.log(max)

    for (let i = min; i <= max; i++) arr.push(i)

    return arr
}

console.log(pipeFix([1, 2, 7, 3, 9, 5, 6, 8]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(pipeFix([1, 2, 3, 12]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
// console.log(pipeFix([6, 9]), [6, 7, 8, 9]);
// console.log(pipeFix([-1, 4]), [-1, 0, 1, 2, 3, 4]);
// console.log(pipeFix([1, 2, 3]), [1, 2, 3]);

/*
=====SOAL======
#Issue Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you recieve any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.

#Task Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

#Example:

Input: 1,3,5,6,7,8

Output: 1,2,3,4,5,6,7,8
*/
/*
CARA ORANG LAIN
1. ======>

function pipeFix(numbers){
  var first = numbers[0];
  var last = numbers[numbers.length-1];
  
  var arr = [];
  for(var i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}

2. ======>
3. ======>
*/