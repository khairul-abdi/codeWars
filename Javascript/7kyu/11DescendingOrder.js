// function descendingOrder(n) {

//     // console.log(String(n))

//     let str = n.toString()
//     let arr = []
//     let result = ''
//     // console.log(str)

//     for (let i = 0; i < str.length; i++) {
//         arr.push(str[i])
//     }
//     // console.log(arr)

//     for (let j = arr.length - 1; j >= 0; j--) {
//         result += arr[j]
//     }

//     return Number(result)
// }

// console.log(descendingOrder(0), 0)
// console.log(descendingOrder(1), 1)
// console.log(descendingOrder(123456789), 987654321)
// console.log(descendingOrder(11), 11)
// console.log(descendingOrder(011)) //2110
// console.log(descendingOrder(01), 11) //2110

// function descendingOrder(n) {
//   let arr = n.toString().split('');
//   let arrNum = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrNum.push(parseInt(arr[i]));
//   }
//   let sorted = arrNum.join('');
//   return parseInt(sorted);
// }

function descendingOrder(n) {
  let arr = n.toString().split('');
  let arrNum = [];
  // console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    arrNum.push(parseInt(arr[i]));
    // console.log(arrNum)
  }

  let sorted = arrNum.sort(function (a, b) {
    return b - a
  });
  let sorted2 = sorted.join('');
  return parseInt(sorted2);
}

// function descendingOrder(n) {
//   return parseInt(String(n).split('').sort().reverse().join(''))
// }


console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(123456789), 987654321)
console.log(descendingOrder(11), 11)
console.log(descendingOrder(011)) //2110
console.log(descendingOrder(01), 11) //2110


/*
CARA ORANG LAIN
1. ====>

function descendingOrder(n){
  let arr = n.toString().split('');
  let arrNum = [];
  console.log(arr);
  for(var i = 0; i < arr.length; i++){
    arrNum.push(parseInt(arr[i]));
    console.log(arrNum)
  }
  
  let sorted = arrNum.sort(function(a, b){return b-a});
  let sorted2 = sorted.join('');
  return parseInt(sorted2);
}

2. ====>
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

3. ===>
const descendingOrder = n => +String(n).split('').sort((a,b)=>a-b).reverse().join('')
*/