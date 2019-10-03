const factorial = n => {
    let output = 1
    if (n == 0) {
        return output
    } else {
        output *= n
        return output * factorial(n - 1)
    }

    // return (output *= n) = (n == 0) ? output : output * factorial(n - 1)
};

console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(2), 2);
console.log(factorial(3), 6);

/*
##1 - Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,
5! = 5 * 4 * 3 * 2 * 1 = 120.
The value of 0! is 1.
*/

/*
1. =====>
const factorial = n => n > 1 ? n*factorial(n-1) : 1;

2. =====>
const factorial = (n, acc = 1) => n ? factorial(n - 1, acc * n) : acc;

3. =====>
const factorial = n => {
  return n>1? n*factorial(n-1) : 1;
};
*/