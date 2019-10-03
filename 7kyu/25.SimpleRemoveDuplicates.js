function solve(arr) {
    let output = []

    for (let i = arr.length - 1; i >= 0; i--) {
        var found = false
        for (let j = 0; j < output.length; j++) {
            if (output[j] == arr[i]) {
                found = true
            }
        }
        if (found == false) {
            output.push(arr[i])
        }
    }

    // console.log(output);

    let result = []
    for (let i = output.length - 1; i >= 0; i--) {
        result.push(output[i])
    }

    return result
}

console.log(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3]);
console.log(solve([1, 2, 1, 2, 1, 2, 3]), [1, 2, 3]);
console.log(solve([1, 2, 3, 4]), [1, 2, 3, 4]);
console.log(solve([1, 1, 4, 5, 1, 2, 1]), [4, 5, 2, 1]);
console.log(solve([1, 2, 1, 2, 1, 1, 3]), [2, 1, 3]);
/*
=====SOAL======
In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
More examples can be found in the test cases.
*/
/*
CARA ORANG LAIN
1. ======>

function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}

2. ======>

const solve = a => Array.from(new Set(a.reverse())).reverse() ;

3. ======>
*/