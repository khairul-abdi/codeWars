// function nextBigger(n) {
//     n = String(n)
//     // console.log(typeof n)
//     var output = ''
//     if (n.length == 1) {
//         return -1
//     } else if (n.length == 2) {
//         if (Number(n[0]) > Number(n[1])) {
//             return -1
//         } else {
//             return Number((n[1]) + (n[0]))
//         }
//     } else {
//         for (let i = 0; i < n.length; i++) {
//             // console.log('WHY : ', Number(n[n.length - 1]))
//             // console.log(n[1])
//             if (i < n.length - 2) {
//                 output += n[i]
//                 console.log(output)
//             }
//             if (Number(n[n.length - 1]) < Number(n[n.length - 2])) {
//                 output += n[n.length - 2] + n[n.length - 1]
//                 // break
//             } else {
//                 output += n[n.length - 1] + n[n.length - 2]
//                 // break
//             }

//         }
//     }
//     return Number(output)
// }

function nextBigger(n) {
    var nextBigNum = -1;
    var nums = n.toString().split('');
    for (var i = nums.length - 1; i >= 0; --i) {
        if (nums[i] < nums[i + 1]) {
            var rightPartNums = nums.splice(i + 1).sort();
            for (var j = 0; j < rightPartNums.length; ++j) {
                if (rightPartNums[j] > nums[i]) {
                    nums[i] = rightPartNums[j] - nums[i];
                    rightPartNums[j] = rightPartNums[j] - nums[i];
                    nums[i] = rightPartNums[j] + nums[i];
                    nextBigNum = parseInt(nums.concat(rightPartNums).join(''), 10);
                    i = 0;
                    break;
                }
            }
        }
    }

    return nextBigNum;
}

console.log(nextBigger(8), -1)
console.log(nextBigger(21), -1)
console.log(nextBigger(12), 21)
console.log(nextBigger(513), 531)
console.log(nextBigger(2017), 2071)
console.log(nextBigger(414), 441)
console.log(nextBigger(144), 414)

/*
=====SOAL======
You have to create a function that takes a positive integer number and returns 
the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071
If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1
*/
/*
CARA ORANG LAIN
1. ======>

function nextBigger(n){
  console.log(n);
  var chars = n.toString().split('');
  var i = chars.length-1;
  while(i > 0) {
    if (chars[i]>chars[i-1]) break;
    i--;
  }
  if (i == 0) return -1;
  var suf = chars.splice(i).sort();
  var t = chars[chars.length-1];
  for (i = 0; i < suf.length; ++i) {
    if (suf[i] > t) break;
  }
  chars[chars.length-1] = suf[i]
  suf[i] = t;
  var res = chars.concat(suf);
  var num = parseInt(res.join(''));
  console.log("->" +num);
  return num;
}

2. ======>

function nextBigger(n) {
  if (n === reverseSortDigits(n)) return -1

  let nSorted = sortDigits(n)
  
  while (true) {
    n += 1
    if (sortDigits(n) === nSorted) return n
  }
}

function splitDigits(d) {
  return String(d).split('')
}

function sortDigits(d) {
  return Number(splitDigits(d).sort().join(''))
}

function reverseSortDigits(d) {
  return Number(splitDigits(d).sort().reverse().join(''))
}

3. ======>

function nextBigger(n){
   let a = +String(n).split('').sort((a,b) => b-a).join('');
   
  for (let i = n + 1; i <= a; i++) {
    if (a == +String(i).split('').sort((a,b) => b-a).join('')) return i
  }
  return -1
}
*/