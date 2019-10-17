function sortArray(array) {

    let arrGenap = []
    let arrGanjil = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arrGenap.push([array[i], i])
        } else {
            arrGanjil.push([array[i], i])
        }
    }
    // console.log('ARRGANJIL : ', arrGanjil)
    // console.log('ARRGENAP : ', arrGenap)

    for (let i = 0; i < arrGanjil.length; i++) {
        for (let j = i + 1; j < arrGanjil.length; j++) {
            if (arrGanjil[i][0] > arrGanjil[j][0]) {
                let temp = arrGanjil[j][0]
                arrGanjil[j][0] = arrGanjil[i][0]
                arrGanjil[i][0] = temp
            }
        }
    }
    // console.log('ARRGANJIL : ', arrGanjil)

    for (let i = 0; i < arrGenap.length; i++) {
        for (let j = i + 1; j < arrGenap.length; j++) {
            if (arrGenap[i][0] < arrGenap[j][0]) {
                let temp = arrGenap[j][0]
                arrGenap[j][0] = arrGenap[i][0]
                arrGenap[i][0] = temp
            }
        }
    }
    // console.log('ARRGENAP : ', arrGenap)

    let result = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < arrGanjil.length; j++) {
            if (i == arrGanjil[j][1]) {
                result.push(arrGanjil[j][0])
            }
        }

        for (let k = 0; k < arrGenap.length; k++) {
            if (i == arrGenap[k][1]) {
                result.push(arrGenap[k][0])
            }
        }
    }
    // console.log('RESULT => ', result)
    return result
}

console.log(sortArray([5, 3, 2, 8, 1, 4, 11]), [1, 3, 8, 4, 5, 2, 11])
console.log(sortArray([2, 22, 37, 11, 4, 1, 5, 0]), [22, 4, 1, 5, 2, 11, 37, 0])
console.log(sortArray([1, 111, 11, 11, 2, 1, 5, 0]), [1, 1, 5, 11, 2, 11, 111, 0])
console.log(sortArray([]), [])

/*
=====SOAL======
You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

Note that zero is an even number. If you have an empty array, you need to return it.

For example:

[5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

odd numbers ascending:   [1, 3,       5   ]
even numbers descending: [      8, 4,    2]
*/
/*
CARA ORANG LAIN
1. ======>

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    const even = array.filter((x) => ! (x % 2)).sort((a,b) => b - a);
    return array.map((x) => x % 2 ? odd.shift() : even.shift());
}

2. ======>

function sortArray(array) {
    var odds = []
    var oddIndices = []
    var evens = []
    var evenIndices = []
    array.forEach((v,i)=>((v % 2 ? odds : evens).push(v),(v % 2 ? oddIndices : evenIndices).push(i)));
    var result = []
    odds.sort((x,y)=>x-y).forEach((v,i)=>result[oddIndices[i]]=v);
    evens.sort((x,y)=>y-x).forEach((v,i)=>result[evenIndices[i]]=v);
    return result;
}

3. ======>
*/