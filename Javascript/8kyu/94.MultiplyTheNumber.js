const multiply = number => {
    const num = String(Math.abs(number)).length
    return number * 5 ** num
}

console.log(multiply(10), 250);
console.log(multiply(5), 25);
console.log(multiply(200), 25000);
console.log(multiply(0), 0);
console.log(multiply(-2), -10);

/*
=====SOAL======
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3)==15
multiply(10)==250
multiply(200)==25000
multiply(0)==0
multiply(-3)==-15
*/
/*
CARA ORANG LAIN
1. ======>

function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}

2. ======>

const multiply = number => number * Math.pow(5, (Math.abs(number) + "").length);

3. ======>

function multiply(number){
  var c = number.toString().replace('-', '').length;
  for( var now = 0; now < c; ++now )
    number *= 5;
  return number;
}


4. =======>

const multiply = n => n * Math.pow(5,(Math.abs(n)+'').length)
*/