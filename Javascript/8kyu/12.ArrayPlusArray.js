// function arrayPlusArray(arr1, arr2) {
//     var array1 = 0
//     var array2 = 0

//     for (let i = 0; i < arr1.length; i++) {
//         array1 += arr1[i]
//     }

//     for (let j = 0; j < arr2.length; j++) {
//         array2 += arr2[j]
//     }

//     return array1 + array2;
// }

//cara orang lain

function arrayPlusArray(arr1, arr2) {

    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);

    /*
    link MDN ARRAY.reduce()
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    
    awal mulanya
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    */
}


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) // 21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])) // -21
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])) // 15
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])) // 2100