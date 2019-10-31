// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

function learnReduce(angka) {

    console.log(angka.reduce((acc, cur) => acc + cur, 0))

}

console.log(learnReduce([2, 4, 6]))