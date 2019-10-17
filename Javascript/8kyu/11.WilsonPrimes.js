function amIWilson(p) {
    if (p < 2) {
        return false
    } else if (p > 2) {
        for (let i = 2; i < p; i++) {
            if (p % i == 0) {
                return false
            }
        }
    }
    return true
}

console.log(amIWilson(5), true)
console.log(amIWilson(9), false)
console.log(amIWilson(6), false)

/*
=====SOAL======
Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/
/*
CARA ORANG LAIN
1. ======>
2. ======>
3. ======>
*/