// function tickets(peopleInLine) {
//     // console.log(peopleInLine)

//     let uangVasya = 0
//     if (peopleInLine[0] > 25) {
//         return 'NO'
//     } else {
//         for (let i = 0; i < peopleInLine.length; i++) {
//             if (i == 0) {
//                 uangVasya += peopleInLine[i]
//             } else if (peopleInLine[i] == 25) {
//                 uangVasya += 25
//             } else if ((uangVasya - (peopleInLine[i] - 25)) >= 0) {
//                 uangVasya += 25
//             }

//             if (uangVasya < 0 || uangVasya < peopleInLine[i]) {
//                 return 'NO'
//             }
//         }
//         if (uangVasya >= 0) {
//             return 'YES'
//         }
//     }
// }

// console.log(tickets([25, 25, 50, 50]), "YES");
// console.log(tickets([25, 100]), "NO");
// console.log(tickets([25, 25, 25, 25, 50, 100, 50]), "YES");
// console.log(tickets([25, 25, 25, 25, 25, 100, 100]), "NO");