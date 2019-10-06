function evaluate(arr) {
    // console.log(arr)
    let arrHigherPriority = []
    let arrLowerPriority = []

    // console.log(!(Number(arr[0])))
    if (!(Number(arr[0])) == true) {
        return undefined
    } else if (!(Number(arr[arr.length - 1])) == true) {
        return undefined
    }


    for (var i = 1; i < arr.length; i += 2) {
        if (arr[i] == '*' && arr[i + 2] != '*') {
            arrHigherPriority.push(arr[i - 1], arr[i + 1])
        } else if (arr[i] == '+' && arr[i - 2] != '*') {
            arrLowerPriority.push(arr[i - 1])
        }
        // else {
        //     if (arr[arr.length - 2] == '+') {
        //         arrLowerPriority.push(arr[arr.length - 1])
        //         console.log(i, ' : ARR Terakhir : ', arr[arr.length - 1])
        //     }
        // }
    }
    if (arr[arr.length - 2] == '+') {
        arrLowerPriority.push(arr[arr.length - 1])
    }

    // console.log('HIGHER : ', arrHigherPriority)
    // console.log('LOWER : ', arrLowerPriority)

    let times = 1
    let timesArr = []
    if (arrHigherPriority.length < 3) {
        for (let i = 0; i < arrHigherPriority.length; i++) {
            times *= arrHigherPriority[i]
        }
    } else {
        for (let i = 0; i < arrHigherPriority.length - 1; i += 2) {
            timesArr.push(arrHigherPriority[i] * arrHigherPriority[i + 1])
        }
    }
    if (!times) {
        return undefined
    }
    // console.log(times)

    let multiply = 0
    for (let i = 0; i < arrLowerPriority.length; i++) {
        multiply += Number(arrLowerPriority[i])
    }
    if (!multiply) {
        return undefined
    }
    // console.log(multiply)

    let result = 0
    if (arrHigherPriority.length < 3) {
        result = times + multiply
    } else {
        result = timesArr[0] + multiply + timesArr[1]

    }
    return result
}

console.log(evaluate(['10', '+', '20', '*', '3']), 70);
console.log(evaluate(['10',
    '+',
    '20',
    '*',
    '3',
    '+',
    '30',
    '+',
    '10',
    '+',
    '20',
    '*',
    '3',
    '+',
    '30'
]), 200)
console.log(evaluate(['10', '+', '20', '*', '3', '+', '30']), 100);
console.log(evaluate(['10', '+', '20', '*', '3', '*']), undefined);
console.log(evaluate(['+', '10', '+', '20', '*', '3']), undefined);
console.log(evaluate(['10', '10', '+', '20', '*', '3']), undefined);

/*
=====SOAL======
In this Kata, you need to create an calculator out of an array input.

Example: evaluate(['10', '+', '20', '*','3']) // Returns 70

For an case where expretion is not having the correct or valid input then it should return undefined.

evaluate(['10', '+', '20', '*','3', '*']) // Returns undefined

evaluate(['+', '20', '*','3']) // Returns undefined

evaluate(['10', '20', '*','3']) // Returns undefined

Supported operations

Only plus(+) and multiply(*) binary operators Cosider priority of plus and multiply. 10 + 20 * 3 should return 70 not 90 i.e 10 + (20 * 3) not (10 + 20) * 3

Note: You could not able to use the eval function for this.
*/
/*
CARA ORANG LAIN
1. ======>

function evaluate(arr){
  //TODO
  var value,pre_value,operator,pre_operator,index,evaluation = parseInt(arr[0]),len = arr.length;
  
  if(isNaN(evaluation)){
    return;
  }
  for(index = 1; index < len; index+=2 ){
    operator = arr[index];
    value = parseInt(arr[index+1]);
    if(operator !== '+' && operator !== '*' || isNaN(value)){
      return;
    }
    if(operator === '*'){
      if(pre_operator === '+'){
        evaluation += (pre_value * value); 
      }else{
        evaluation *= value;
      }
      pre_operator = undefined;
    }else if(operator === '+'){
      if(pre_operator === '+'){
        evaluation += pre_value;
      }
      pre_operator = operator;
      pre_value = value;
    } 
  }
  if(pre_operator === '+'){
    evaluation += pre_value;
  }
  return evaluation;
}

2. ======>

function evaluate(arr){
  var ln= arr.length;
  if (arr[ln-1] === '*' || arr[ln-1] === '+' || arr[0] === '+' || arr[0] === '*'){
  return 'undefined'
  }
  else {
  for (var i=0; i<ln;i++){
    if (arr[i] ==='*') {
      arr.splice(i-1 ,3 , arr[i-1] * arr[i+1])
    } 
  }
  for (var i=0; i<ln;i++){
      if (arr[i] ==='+') {
      arr[i+1]-=0;
      arr.splice(i-1 ,3 , arr[i-1]-0 + arr[i+1]-0);
      i=0;
    } 
  }
  if (arr.length > 1) return 'undefined'
  else  return arr.join()
  
  }
}

3. ======>

function evaluate(arr){

  function parseSign(sign, fn) {
    var i, a, b;
    while (i = arr.indexOf(sign) !== -1 ? arr.indexOf(sign) : 0) {
      a = arr[i-1];
      b = arr[i+1];
      if (i === 0 || i === arr.length - 1 || isNaN(a) || isNaN(b)) { return false; }
      arr.splice(i-1, 3, fn(Number(a), Number(b)));
    }
    return true;
  }

  var mult = parseSign('*', function(a, b) { return a * b; });
  var add = parseSign('+', function(a, b) { return a + b; });

  if (add && mult && arr.length === 1) { return arr[0]; }
}

*/