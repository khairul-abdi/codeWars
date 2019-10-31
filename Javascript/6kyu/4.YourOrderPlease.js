// function order(words) {

//     let kata = []
//     let tempStr = ''
//     if (words == '') {
//         return '""'
//     }
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] == ' ') {
//             if (tempStr) {
//                 kata.push(tempStr)
//                 tempStr = ''
//             }
//         } else {
//             tempStr += words[i]
//         }
//     }
//     if (tempStr) {
//         kata.push(tempStr)
//     }
//     // console.log(kata)

//     let arr = []
//     let number = 0
//     let tampungKata = ''
//     for (let i = 0; i < kata.length; i++) {
//         for (let j = 0; j < kata[i].length; j++) {
//             if (Number(Number(kata[i][j]))) {
//                 number = Number(kata[i][j])
//             }
//         }
//         arr.push([kata[i], number])
//     }

//     // console.log(arr)

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i][1] < arr[j][1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     // console.log(arr)
//     let result = ''

//     for (let i = 0; i < arr.length; i++) {
//         if (i == arr.length - 1) {
//             result += arr[i][0]
//         } else {
//             result += arr[i][0] + ' '
//         }
//     }
//     return result
// }

// console.log(order("   is2 Thi1s       T4est 3a       "), "Thi1s is2 3a T4est")
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
// console.log(order(""), "")

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

/*
CARA ORANG LAIN
1. ====>
function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}    

2. ====>
function order(words) {
  return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
}

3. ===>
*/
function order(words) {
    var array = words.split(' ');
    // console.log(array)
    var sortedArray = [];
    for (i = 0; i <= array.length; i++) {
        // console.log(array[i])
        for (j = 0; j < array.length; j++) {
            // console.log('ARRAY I : ', array[i])
            // console.log('ARRAY J : ', array[j])
            // console.log(array[j].indexOf(i))
            if (array[j].indexOf(i) >= 0) {
                sortedArray.push(array[j]);
            }
        }
    }
    // console.log(sortedArray)
    return sortedArray.join(' ');
}

console.log(order("   is2 Thi1s       T4est 3a       "), "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), "")