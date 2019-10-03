function isPrime(num) {
    if (num < 2) {
        return false
    } else if (num > 2) {
        for (let i = 2; i < num; i++) {
            if (num % 2 == 0) {
                return false
            }
        }
    }
    return true
}

console.log(isPrime(0), false, "0 is not prime");
console.log(isPrime(1), false, "1 is not prime");
console.log(isPrime(2), true, "2 is prime");
console.log(isPrime(73), true, "73 is prime");
console.log(isPrime(75), false, "75 is not prime");
console.log(isPrime(-1), false, "-1 is not prime");

/*
Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Example
//is_prime(1)  /* false */
//is_prime(2) /* true  */
//is_prime(-1) /* false */
/*
Assumptions
You can assume you will be given an integer input.
You can not assume that the integer will be only positive.You may be given negative numbers as well(or 0).
There are no fancy optimizations required, but still the most trivial solutions might time out.Try to find a solution which does not loop all the way up to n.
*/