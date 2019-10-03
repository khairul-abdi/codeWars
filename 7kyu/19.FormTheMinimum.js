function minValue(values) {
    let temp = ''

    for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
            if (values[i] > values[j]) {
                let temp = values[j]
                values[j] = values[i]
                values[i] = temp
            }
        }
    }

    // console.log(values)

    for (let i = 0; i < values.length; i++) {
        if (values[i] != values[i + 1]) {
            temp += values[i]
        }
    }
    // console.log(temp)
    return Number(temp)
}

console.log(minValue([1, 3, 1]), 13);
console.log(minValue([4, 7, 5, 7]), 457);
console.log(minValue([4, 8, 1, 4]), 148);
console.log(minValue([5, 7, 9, 5, 7]), 579);
console.log(minValue([6, 7, 8, 7, 6, 6]), 678);
console.log(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);
console.log(minValue([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0);

/*
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications
*/

/*
CARA ORANG LAIN
1. =====>
function minValue(values){
  let arr = Array.from(new Set(values))
  return parseInt(arr.sort().join(''))
}

2. ======>
function minValue(values){
  return Number(Array.from(new Set(values)).sort().join(''))
}
*/

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from(['x', 'x', 'x'], x => x + x));
// expected output: Array [2, 4, 6]