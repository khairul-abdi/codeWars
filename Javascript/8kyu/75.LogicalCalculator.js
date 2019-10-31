function logicalCalc(array, op) {
    let temp = array[0];

    for (let i = 1; i < array.length; i++) {
        if (op == 'AND') {
            temp = temp && array[i]
        } else if (op == 'OR') {
            temp = temp || array[i]
        } else if (op == 'XOR') {
            temp = temp !== array[i]
        }
    }
    return temp
}


console.log(logicalCalc([true, true, true, false], "AND"), false);
console.log(logicalCalc([true, false], "AND"), false);
console.log(logicalCalc([true, true, true, false], "OR"), true);
console.log(logicalCalc([true, true, true, false], "XOR"), true);
console.log(logicalCalc([true, true, false, false], "AND"), false);
console.log(logicalCalc([true, true, false, false], "OR"), true);
console.log(logicalCalc([true, true, false, false], "XOR"), false);
console.log(logicalCalc([true, false, false, false], "AND"), false);
console.log(logicalCalc([true, false, false, false], "OR"), true);
console.log(logicalCalc([true, false, false, false], "XOR"), true);
console.log(logicalCalc([true, true], "AND"), true);
console.log(logicalCalc([true, true], "OR"), true);
console.log(logicalCalc([true, true], "XOR"), false);
console.log(logicalCalc([false, false], "AND"), false);
console.log(logicalCalc([false, false], "OR"), false);
console.log(logicalCalc([false, false], "XOR"), false);
console.log(logicalCalc([false], "AND"), false);
console.log(logicalCalc([false], "OR"), false);
console.log(logicalCalc([false], "XOR"), false);
console.log(logicalCalc([true], "AND"), true);
console.log(logicalCalc([true], "OR"), true);
console.log(logicalCalc([true], "XOR"), true);

/*
=====SOAL======
Your task is to calculate logical value of boolean array. Test arrays are one-dimensional and their size is in the range 1-50.

Links referring to logical operations: AND, OR and XOR.

You should begin at the first value, and repeatedly apply the logical operation across the remaining elements in the array sequentially.

First Example:

Input: true, true, false, operator: AND

Steps: true AND true -> true, true AND false -> false

Output: false

Second Example:

Input: true, true, false, operator: OR

Steps: true OR true -> true, true OR false -> true

Output: true

Third Example:

Input: true, true, false, operator: XOR

Steps: true XOR true -> false, false XOR false -> false

Output: false

Input:

boolean array, string with operator' s name: 'AND', 'OR', 'XOR'.

Output:

calculated boolean


*/
/*
CARA ORANG LAIN
1. ======>
const operations = {
    AND: (a, b) => a && b,
    OR: (a, b) => a || b,
    XOR: (a, b) => a !== b
}

const logicalCalc = (array, op) => array.reduce(operations[op])
2. ======>

const getOperator = operator => {
  switch (operator) {
    case 'AND':
      return '&&'
    case 'OR':
      return '||'
    case 'XOR':
      return '!=='
    default:
      return ''
  }
}
const logicalCalc = (array, op) =>
  eval(
    array.reduce((exp, bool, index) => {
      const operator = getOperator(op)
      if (index === 0) return `${exp} ${bool}`
      return `${exp} ${operator} ${bool}`
    }, '')
  )
3. ======>

function logicalCalc(array, op){
  if(op === 'AND')return array.every(v => v);
  else if(op === 'OR')return array.some(v => v);
  else return !!array.reduce((s, v) => s ^ v);
}

4. ======>

function logicalCalc(array, op)
{ 
  var result = array[0];
  for(var i = 1; i < array.length; i++)
  {
    if(op == "AND")
    {
      result = result && array[i];
    }
    if(op == "OR")
    {
      result = result || array[i];
    }
    if(op == "XOR")
    {
      result = result != array[i];
    }
  }
  return result;
}
*/