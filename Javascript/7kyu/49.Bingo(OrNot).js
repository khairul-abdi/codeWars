function bingo(a) {

    let kamus = [2, 7, 9, 14, 15]
    let count = [0, 0, 0, 0, 0]

    for (let i = 0; i < a.length; i++) {
        // let found = false
        for (let j = 0; j < kamus.length; j++) {
            if (a[i] == kamus[j]) {
                count[j] += 1
            }
        }
    }
    // console.log(count)
    for (let i = 0; i < count.length; i++) {
        if (count[i] == 0) return `LOSE`
    }
    return `WIN`
}

console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "LOSE");
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]), "WIN");


// B   I   N   G  O
// 2   9   14  7  15

/*
=====SOAL======
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers 
can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
*/
/*
CARA ORANG LAIN
1. ======>
2. ======>
3. ======>
*/