// var pindahAngka = [2, 5] // [2,1]

// // [3,2] [0] = 2+3
// // [3,1] [1] = 3-2 
// // [2,1] [0] = 3-1

// pindahAngka[0] = pindahAngka[0] + pindahAngka[1]

// pindahAngka[1] = pindahAngka[0] - pindahAngka[1]

// pindahAngka[0] = pindahAngka[0] - pindahAngka[1]

// console.log(pindahAngka)

// gak boleh pake method array
// gak boleh ada looping
// gak boleh ada variable baru 
// pindahkan 2 ke 1  1 ke 2 tanpa bikin array baru

// var pindahAngka = [2, 1] // [2,1]
var pindahAngka = [3, 2] // [2,1]


pindahAngka[0] -= pindahAngka[1]
pindahAngka[1] += pindahAngka[0]


console.log(pindahAngka)