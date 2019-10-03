function pyramid(n) {
    let result = []
    if (n == 0) {
        return []
    }

    for (let i = 0; i < n; i++) {
        let arr = []
        arr.push(1)
        for (let j = 0; j < i; j++) {
            arr.push(1)
        }
        result.push(arr)
    }

    return result
}

console.log(pyramid(0)) //  [ ]
console.log(pyramid(1)) //  [  [1]  ]
console.log(pyramid(2)) // [  [1],  [1, 1]  ]
console.log(pyramid(3)) // [  [1],  [1, 1],  [1, 1, 1]  ]

/*
SOAL
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [  [1]  ]
pyramid(2) => [  [1],  [1, 1]  ]
pyramid(3) => [  [1],  [1, 1],  [1, 1, 1]  ]
Note: the subarrays should be filled with 1s
*/