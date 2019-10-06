// function makeUpperCase(str) {
//     let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     let lower = 'abcdefghijklmnopqrstuvwxyz'
//     let output = ''

//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < lower.length; j++) {
//             if (str[i] == lower[j]) {
//                 output += upper[j]
//             }
//         }
//     }
//     return output
// }

// console.log(makeUpperCase("hello"), "HELLO");

console.log('=====================================')

makeUpperCase = str => str.toUpperCase()




console.log(makeUpperCase("hello"), "HELLO");