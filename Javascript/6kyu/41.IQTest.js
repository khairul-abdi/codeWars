function iqTest(numbers) {

    let arr = []
    let str = ''
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] != ' ') {
            str += numbers[i]
        } else {
            arr.push(Number(str))
            str = ''
        }
    }
    if (str) {
        arr.push(Number(str))
    }
    // console.log(arr)

    let ganjil = []
    let genap = []

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 == 0) {
            genap.push(i)
        } else if (Number(arr[i]) % 2 != 0) {
            ganjil.push(i)
        }
    }
    // console.log('GENAP : ', genap)
    // console.log('GANJIL : ', ganjil)

    if (genap.length == 1) {
        return genap[0] + 1
    } else {
        return ganjil[0] + 1
    }

}

console.log(iqTest("2 4 7 8 10"), 3);
// console.log(iqTest("1 2 2"), 1);

/*
=====SOAL======
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*/
/*
CARA ORANG LAIN
1. ======>

function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});
  
  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}

2. ======>

function iqTest(numbers){
  numbers = numbers.split(' ')
  
  var evens = []
  var odds = []
  
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] & 1) {
      odds.push(i + 1)
    } else {
      evens.push(i + 1)
    }
  }
  
  return evens.length === 1 ? evens[0] : odds[0]
}

3. ======>

function iqTest(numbers){
  var nums = numbers.split(" ").map(x => x % 2);  
  var sum = nums.reduce((a,b) => a + b);  
  var target = sum > 1 ? 0 : 1;
  
  return nums.indexOf(target) + 1;
}

*/