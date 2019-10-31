//CARA AKU BELUM JALAN
function clean(arr) {

    let output = []
    for (let i = 0; i < arr.length; i++) {
        // if (arr[i] != undefined && arr[i] != typeof arr[i] != 'undefined') {
        //     output.push(arr[i])
        // }
        if (arr[i] !== true) {
            output.push(arr[i])
        }
    }
    return output

    // console.log(typeof null)
    // console.log('EMPTY TYPE : ', typeof arr[1] === true)
    // console.log('UNDEFINED TIPE : ', typeof arr[7] === true)


}

//CARA ORANG LAIN UDAH JALAN
// function clean(arr) {
//     return arr.filter(v => v !== true)
// }


console.log(clean([2, , 3, null, false, NaN, [], undefined]))

// console.log(clean([]), [], 'Empty Array');
// console.log(clean(Array(500000)), [], '5000000 empty items');
// console.log(clean([1, 2]), [1, 2], 'No empty items here');
// console.log(clean([1, 2, , , 3, 4, ]), [1, 2, 3, 4], 'Two Empty Items');
// console.log(clean([1, 2, [], , 3]), [1, 2, [], 3], 'Sub-Arrays');
// console.log(clean([undefined, null, NaN, false, '', 0]), [undefined, null, NaN, false, '', 0], 'Falsey Values');
// console.log(clean([undefined, , , , null, , NaN, , false, '', 4, 3, 2, 1, 0]), [undefined, null, NaN, false, '', 4, 3, 2, 1, 0], 'Falsey, Empty, Truthy');

/*
=====SOAL======
In this Kata, you will learn how to remove all empty items in an Array.

In JavaScript, empty items in arrays can be declared by [1, 2,,,3, 4] (Multiple commas without a value in that index)

The values that are not given a value are empty items, and usually add up with others to form <# empty items>; In the example, <2 empty items>

[1, 2, <2 empty items>, 3, 4] should be cleared such that it should be [1, 2, 3, 4]

Example:

Before: [1, 2, 3, <5 empty items>, 4, <1 empty item>, null, undefined];

After: [1, 2, 3, 4, null, undefined];
*/
/*
CARA ORANG LAIN
1. ======>

const clean = Object.values

2. ======>

const clean = arr => arr.filter(_ => 1);

3. ======>

function clean(arr) {
  var ar=[]
  for(var i=0; i<arr.length; ++i) 
  if (i in arr) 
    ar.push(arr[i]);
  return ar;
}

*/