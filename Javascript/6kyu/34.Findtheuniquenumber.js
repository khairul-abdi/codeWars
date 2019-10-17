// CARA OBJECT UDAH BERHASIL TAPI (Execution Timed Out)|| WAKTU COMPILE KELAMAAN DI CODEWARS
/*

function findUnique(numbers) {
    let obj = {}

    for (let i = 0; i < numbers.length; i++) {
        if (obj[numbers[i]] == undefined) {
            obj[numbers[i]] = 1
        } else {
            for (const key in obj)
                if (key == numbers[i])
                    obj[key] += 1
        }
    }
    // console.log(obj)

    for (const j in obj)
        if (obj[j] == 1) return Number(j)
}

*/

//CARA KEDUA SUDAH BERHASIL
function findUnique(numbers) {
  let arr = []

  for (let i = 0; i < numbers.length; i++) {
    let found = false
    for (let j = 0; j < arr.length; j++) {
      if (numbers[i] == arr[j][0]) found = true, arr[j][1] += 1
    }
    if (found == false) arr.push([numbers[i], 1])
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] == 1) return arr[i][0]
  }
}


console.log(findUnique([1, 8, 4, 4, 6, 1, 8]), 6);
console.log(findUnique([1234567]), 1234567);
console.log(findUnique([1, 4, 4, 5, 5, 3, 3, 2, 2]), 1);
console.log(findUnique([2, 2, 5, 5, 4, 3, 3, 1, 1]), 4);
console.log(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9]), 9);

/*
=====SOAL======
Write a function called findUnique which returns the only unique number from an array.

All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.

Example
Input:

[ 1, 8, 4, 4, 6, 1, 8 ]
Expected output:

6
*/
/*
CARA ORANG LAIN
1. ======>
======Belum JALAN di Codewars saat di compile=====
function findUnique(arr) { 
  uniqueNumber = [];
  var sortedArr = arr.sort(function(a, b){return a-b});
     for (i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] !== sortedArr[i+1] && sortedArr[i] !== sortedArr[i-1]) {
          uniqueNumber.push(sortedArr[i]);
        }
       }
    return uniqueNumber[0];
}

2. ======>

function findUnique(numbers) {
  return numbers.reduce((a, b) => a ^ b);
}

3. ======>

const findUnique = arr => arr.reduce((a, b) => a ^ b);

4. ======>
function findUnique(numbers) {
  return numbers.reduce((xs, x) => xs ^ x, 0)
}

5. ======>
function findUnique(numbers) {
  nums = {};
  for(i=0;i<numbers.length;i++){
    if(nums[numbers[i]]===undefined){nums[numbers[i]] = 1;} else {nums[numbers[i]]++;}
  }
  for(var i in nums){if(nums[i]===1){return parseInt(i);}}
}

6. =======>
function findUnique(arr) {
  let obj = {};
 
  for(let i = 0; i< arr.length; i++){
    if(obj[arr[i]]){
      obj[arr[i]] += 1;
    }else{
      obj[arr[i]] =  1;
    }
  }
  
 let finallyRes = "";
  for( let key in obj){
    if(obj[key] === 1){
      finallyRes += "" + key
    }
  }
  return +finallyRes
}

*/