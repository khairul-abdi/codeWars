// var countBits = function (n) {

//     let bit = [128, 64, 32, 16, 8, 4, 2, 1]

//     let count = 0
//     while (n > 0) {
//         for (let i = 0; i < bit.length; i++) {
//             if (n >= bit[i]) {
//                 count++
//                 n -= bit[i]
//                 // break
//             }
//         }
//     }
//     if (n <= 0) {
//         return count
//     }
// };

var countBits = function (n) {
    var counter = 0;
    while (n > 0) {
        var binaryNumber = 1;
        while (binaryNumber * 2 <= n) {
            binaryNumber = binaryNumber * 2;
        }
        n -= binaryNumber;
        counter++;
    }
    return counter;
};

console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);
console.log(countBits(129), 2);
console.log(countBits(3811), 8);
console.log(countBits(77231418), 14)