function factorial(n) {
    console.log(n)
    if (n < 0 || n > 12) throw new RangeError
    let output = 1
    if (n == 0) {
        return output
    } else {
        output *= n
        return output * factorial(n - 1)
    }
}

console.log(factorial(0), 1, "factorial for 0 is 1");
console.log(factorial(1), 1, "factorial for 1 is 1");
console.log(factorial(2), 2, "factorial for 2 is 2");
console.log(factorial(3), 6, "factorial for 3 is 6");

/*
=====SOAL======
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python).
*/
/*
CARA ORANG LAIN
1. ======>

function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}

2. ======>

function factorial(n){

 if (n < 0 || n > 12) {
    throw new RangeError('Parameter must be between ' + 0 + ' and ' + 12);
  }
return n<2 ? 1 : n*factorial(n-1);
}

3. ======>

const factorial = n => {
    if (n < 0 || n > 12) {
        throw new Error(RangeError);
    }
    return n === 0 ? 1 : n * factorial(n - 1);
};

*/