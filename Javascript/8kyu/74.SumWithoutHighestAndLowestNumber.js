function sumArray(array) {
    if (!array) {
        return 0
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    // return array
    if (array[0] == array[array.length - 1]) {
        return 0
    }
    let result = 0

    for (let i = 1; i < array.length - 1; i++) {
        result += array[i]
    }
    return result
}

console.log(sumArray([6, 2, 1, 8, 10]), 16);
console.log(sumArray([2, 2, 2, 2, 2]), 0);
console.log(sumArray(), null);

/*
=====SOAL======
Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
Note:In C++ instead null an empty vector is used. In C there is no null. ;-)


-- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.
Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/
/*
CARA ORANG LAIN
1. ======>

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

2. ======>
3. ======>
*/