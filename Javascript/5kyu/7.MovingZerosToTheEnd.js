var moveZeros = function (arr) {

    let arrResult = []
    let arrZero = []
    // console.log('Type : ', typeof [])
    for (let i = 0; i < arr.length; i++) {
        // console.log(typeof arr[i])
        if (arr[i] != 0 || typeof arr[i] == 'boolean' || typeof arr[i] == 'object') {
            arrResult[arrResult.length] = arr[i]
        } else {
            arrZero[arrZero.length] = arr[i]
        }
    }
    // console.log('Result : ', arrResult)
    // console.log('ZERO : ', arrZero)

    for (let i = 0; i < arrZero.length; i++) {
        arrResult[arrResult.length] = arrZero[i]
    }
    return arrResult
}

console.log(
    JSON.stringify(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])),
    JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
);
console.log(moveZeros([0, 1, null, 2, false, 1, 0]), [1, null, 2, false, 1, 0, 0])
console.log(moveZeros(['a',
    0,
    0,
    'b',
    null,
    'c',
    'd',
    0,
    1,
    false,
    0,
    1,
    0,
    3,
    [],
    0,
    1,
    9,
    0,
    0,
    {},
    0,
    0,
    9
]), ["a", "b", null, "c", "d", 1, false, 1, 3, [], 1, 9, {}, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

// ["a","b",null,"c","d",1,false,1,3,1,9,{},9,0,0,0,0,0,[],0,0,0,0,0]

/*
=====SOAL======
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
/*
CARA ORANG LAIN
1. ======>

var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

2. ======>

var moveZeros = function (arr) {

  var result = [];
  var zeros = [];

  for (var i in arr) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else if (arr[i] !== 0) {
      result.push(arr[i]);
    }
  }
  return result.concat(zeros);
}

3. ======>

var moveZeros = function (arr) {
  var zeroes = [];
  var withoutZeros = arr.filter(function(value){
    if(value === 0) {
      zeroes.push(0);
      return false;
    }
    return true;
  });
  
  return withoutZeros.concat(zeroes);
}

4.=======>

var moveZeros = function (arr) {
  return arr.reverse().reduce(function(ret,v){
    return v === 0 ? ret.push(v) : ret.unshift(v), ret;
  },[]);
}

*/