//CARA REKURSIF
function factorial(n) {
    let output = 1
    if (n == 0) {
        return output
    } else {
        output *= n
        return output * factorial(n - 1)
    }
}

//CARA LOOP
function factorial(n) {
    let output = 1
    for (let i = 1; i <= n; i++) {
        output *= i
    }
    return output
}

console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
console.log(factorial(17), 355687428096000);

/*
=====SOAL======
Yor task is to write function factorial
*/
/*
CARA ORANG LAIN
1. ======>

const factorial = n => n ? factorial(n - 1) * n : 1;

2. ======>

function factorial(n){
  let answer = 1;
  
  while (n > 0) {
    answer *= n;
    n--;
  }
  
  return answer;
}

3. ======>
*/