// function findUnique(numbers) {
//     let obj = {}
//     let jumlah = 0

//     for (let i = 0; i < numbers.length; i++) {
//         let found = false
//         for (const j in obj) {
//             if (numbers[i] == j.jumlah) {
//                 found = true
//                 obj[jumlah] += 1
//             }
//         }
//         if (found == false) {

//             obj[numbers[i]] = [numbers[i]],
//                 obj[jumlah] = 1
//         }
//     }
//     console.log(obj)
// }

// console.log(findUnique([1, 8, 4, 4, 6, 1, 8]), 6);
// console.log(findUnique([1234567]), 1234567);
// console.log(findUnique([1, 4, 4, 5, 5, 3, 3, 2, 2]), 1);
// console.log(findUnique([2, 2, 5, 5, 4, 3, 3, 1, 1]), 4);
// console.log(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9]), 9);


function findUnique(numbers) {
    let arr = []

    for (let i = 0; i < numbers.length; i++) {
        let found = false
        for (let j = 0; j < arr.length; j++) {
            if (numbers[i] == arr[j][0]) {
                arr[j][1] += 1
                found = true
            }
        }
        if (found == false) {
            arr.push([numbers[i], 1])
        }
    }
    // console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i][1] > arr[j][1]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    // console.log(arr)
    return arr[0][0]

}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8]), 6);
console.log(findUnique([1234567]), 1234567);
console.log(findUnique([1, 4, 4, 5, 5, 3, 3, 2, 2]), 1);
console.log(findUnique([2, 2, 5, 5, 4, 3, 3, 1, 1]), 4);
console.log(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9]), 9);