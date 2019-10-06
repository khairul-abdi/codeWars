// function digital_root(n) {
//     let output = 0
//     n = String(n)
//     // console.log(n)
//     // console.log(typeof Number(n[0]))
//     let count = 0
//     if (n.length == 1 || output.length == 1) {
//         return n
//     } else {
//         n += Number(n[0])
//         // count++
//         return n + digital_root(n.slice(1))
//     }
// }

// console.log(digital_root(16), 7)
// console.log(digital_root(456), 6)

// function digital_root(n) {
//     n = String(n)
//     let result = 0
//     let output = 0

//     for (let i = 0; i < n.length; i++) {
//         output += Number(n[i])
//         output = String(output)

//         if (output.length == 1) {
//             return output
//         } else {
//             for (let j = 0; j < output.length; j++) {
//                 result += Number(output[i])
//             }
//         }
//     }


//     return output
// }

// console.log(digital_root(16), 7)
// console.log(digital_root(456), 6)


function digital_root(n) {

    var numToString = n.toString()
    var numArr = numToString.split('').map(Number);

    var sum = 0;

    // base case
    if (numArr.length === 0) {
        return sum
    }

    // recursive case
    else {
        var popped = numArr.pop();
        sum += popped;
        return digital_root(numArr);

    }
}


console.log(digital_root(16), 7)
console.log(digital_root(456), 6)