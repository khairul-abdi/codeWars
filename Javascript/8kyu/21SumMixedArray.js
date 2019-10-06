//CARA COOL ABDI
const sumMix = (x) => x.reduce((acc, cur) => Number(acc) + Number(cur), 0)

// CARA SEDERHANA
// function sumMix(x) {
//     return x.reduce((acc, cur) => Number(acc) + Number(cur), 0)
// }

console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41);

//cara orang lain
return x.map(a => +a).reduce((a, b) => a + b);

//cara orang lain
function sumMix(x) {
    let result = 0;
    for (let n of x) {
        result += parseInt(n);
    }
    return result;
}