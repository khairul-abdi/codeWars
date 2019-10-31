function tripledouble(num1, num2) {
  num1 = String(num1)
  num2 = String(num2)
  let arrNum1 = []
  let arrNum2 = []

  for (let i = 0; i < num1.length; i++) {
    if (num1[i] == num1[i + 1] && num1[i] == num1[i + 2]) {
      arrNum1.push(num1[i])
    }
  }
  // console.log('ARRNUM1 : ', arrNum1)

  for (let i = 0; i < num2.length; i++) {
    if (num2[i] == num2[i + 1]) {
      arrNum2.push(num2[i])
    }
  }
  // console.log('ARRNUM2 : ', arrNum2)

  for (let i = 0; i < arrNum1.length; i++) {
    for (let j = 0; j < arrNum2.length; j++) {
      if (arrNum1[i] == arrNum2[j]) {
        return 1
      }
    }
  }
  return 0
}

console.log(tripledouble(426684119888, 278284348), 0);
// console.log(tripledouble(451999277, 41177722899), 1);
// console.log(tripledouble(1222345, 12345), 0);
// console.log(tripledouble(12345, 12345), 0);
// console.log(tripledouble(666789, 12345667), 1);
// console.log(tripledouble(10560002, 100), 1);
// console.log(tripledouble(1112, 122), 0);
// console.log(tripledouble(625185546777, 28133688477), 1)

/*
=====SOAL======
Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/
/*
CARA ORANG LAIN
1. ======>

function tripledouble(num1, num2) {
  for (let i = 0; i < 10; i++) {
    if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
      return 1;
    }
  }
  return 0;
}

2. ======>

function tripledouble(num1, num2){
  for(var i = 0; i < 10; i++){
    triple = new RegExp (i + "{3}")
    double = new RegExp (i + "{2}")
    if(triple.test(num1) && double.test(num2)){
       return 1
    }
  }
  return 0
}

3. ======>

const tripledouble = (a, b) => +/(.)\1\1.*,.*\1\1/.test([a, b]);

*/