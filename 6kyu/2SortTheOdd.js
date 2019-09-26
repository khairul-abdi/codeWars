function sortArray(array) {

    var indeksGanjil = []
    var genap = []
    var ganjil = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            genap.push(array[i])
        } else {
            indeksGanjil.push(i)
            ganjil.push(array[i])
        }
    }

    // console.log('GENAP : ', genap)
    // console.log('GANJIL : ', ganjil)

    for (let i = 0; i < ganjil.length; i++) {
        for (let j = i + 1; j < ganjil.length; j++) {
            if (ganjil[i] > ganjil[j]) {
                let temp = ganjil[i]
                ganjil[i] = ganjil[j]
                ganjil[j] = temp
            }
        }
    }
    // console.log('GANJIL UDH SORT : ', ganjil)
    // console.log('INDEKS GANJIL : ', indeksGanjil)

    for (let j = 0; j < indeksGanjil.length; j++) {
        array[indeksGanjil[j]] = ganjil[j]
    }

    return array
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
// console.log(sortArray([]), [])

/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.
Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

//cara orang lain
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}

function sortArray(array) {
    var odd = array
        .filter(n => n % 2)
        .sort((a, b) => a - b);

    return array.map(n => n % 2 ? odd.shift() : n);
}