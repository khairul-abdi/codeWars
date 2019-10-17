// function letterCount(s) {
//     let obj = {}
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i + 1; j < s.length; j++) {
//             if (s[i] < s[j]) {
//                 let temp = s[j]
//                 s[j] = s[i]
//                 s[i] = temp
//             }
//         }
//     }

//     for (let i = 0; i < s.length; i++) {
//         let found = false
//         for (const j in obj) {
//             if (j == s[i]) {
//                 found = true
//                 obj[s[i]] += 1
//             }
//         }
//         if (found == false) {
//             obj[s[i]] = 1
//         }
//     }
//     return obj

// }


function letterCount(s) {
    let obj = {}
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] < s[j]) {
                let temp = s[j]
                s[j] = s[i]
                s[i] = temp
            }
        }
    }
    // console.log(s)
    for (let i = 0; i < s.length; i++) {
        let found = false
        for (const j in obj) {
            if (j == s[i]) {
                found = true
                obj[s[i]] += 1
            }
        }
        if (found == false) {
            obj[s[i]] = 1
        }
    }
    return obj
}

console.log(letterCount("codewars"), {
    "a": 1,
    "c": 1,
    "d": 1,
    "e": 1,
    "o": 1,
    "r": 1,
    "s": 1,
    "w": 1
});
// console.log(letterCount("activity"), {
//     "a": 1,
//     "c": 1,
//     "i": 2,
//     "t": 2,
//     "v": 1,
//     "y": 1
// });
// console.log(letterCount("arithmetics"), {
//     "a": 1,
//     "c": 1,
//     "e": 1,
//     "h": 1,
//     "i": 2,
//     "m": 1,
//     "r": 1,
//     "s": 1,
//     "t": 2
// });
// console.log(letterCount("traveller"), {
//     "a": 1,
//     "e": 2,
//     "l": 2,
//     "r": 2,
//     "t": 1,
//     "v": 1
// });
// console.log(letterCount("daydreamer"), {
//     "a": 2,
//     "d": 2,
//     "e": 2,
//     "m": 1,
//     "r": 2,
//     "y": 1
// });

/*
=====SOAL======
In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.

Example:

letter_count('arithmetics') #=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}
*/
/*
CARA ORANG LAIN
1. ======>

const letterCount = require('lodash/countBy');

2. ======>
3. ======>
*/