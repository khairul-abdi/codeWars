/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN

SOLUTION PALING BAGUS LIHAT DARI ATAS KE BAWAH
1. ======>

const Calculator = function() {
  this.operation = (a, b, operator) => {
    switch (operator) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
    }
  }

  this.evaluate = (str) => {
    const args = str.split(' ');
    ['/', '*', '-', '+'].forEach((op) => {
      while ((i = args.indexOf(op)) !== -1) {
        args[i - 1] = this.operation(+args[i - 1], +args[i + 1], op);
        args.splice(i, 2);
      }
    })
    return +args[0];
  }
};

2. ======>

const Calculator = function() {  
  this.evaluate = string => {    
    let splitOperation = output = string.split(' ')
    
    splitOperation = this.evaluateOperands(["*", "/"], splitOperation)
    splitOperation = this.evaluateOperands(["+", "-"], splitOperation)
    
    return Number(splitOperation[0])
  }
  
  this.evaluateOperands = (operands, splitOperation) => {    
    var i = 1
    while (i < splitOperation.length) {
      if (operands.includes(splitOperation[i])) {
        var operationResult = this.operation(splitOperation[i], 
          splitOperation[i-1], splitOperation[i+1])
          
        splitOperation.splice(i-1, 3, operationResult)
      } else {
        i += 2
      }
    }
    
    return splitOperation
  }
  
  this.operation = (operand, first, second) => {
    switch (operand) {
      case "-":
        return Number(first) - Number(second); break;
      case "+":
        return Number(first) + Number(second); break;
      case "*":
        return Number(first) * Number(second); break;
      case "/":
        return Number(first) / Number(second); break;
    }
  }
};

3. ======>

const Calculator = function() {
  this.evaluate = evaluate;
  function evaluate(string) {
     let len = string.length;
     let multi = string.lastIndexOf('*');
     let div = string.lastIndexOf('/');
     let add = string.lastIndexOf('+');
     let subst = string.lastIndexOf('-');
     
     if(add > -1) return evaluate(string.substr(0, add)) + evaluate(string.substr(add + 1, len));
     else if(subst > -1) return evaluate(string.substr(0, subst)) - evaluate(string.substr(subst + 1, len));
     else if(multi > -1) return evaluate(string.substr(0, multi)) * evaluate(string.substr(multi + 1, len));
     else if(div > -1) return evaluate(string.substr(0, div)) / evaluate(string.substr(div + 1, len));
     else return Number(string.trim());
  }
};

4. ======>

const Calculator = function() {
  this.operate = {
    '+': (a,b) => Number(a)+Number(b),
    '-': (a,b) => Number(a)-Number(b),
    '*': (a,b) => Number(a)*Number(b),
    '/': (a,b) => Number(a)/Number(b)
  }
  
  this.calc = arr => {
    for(let i=0; i<arr.length; ) {
      let e = arr[i]
      if(['*','/'].includes(e)) {
        arr.splice(i-1, 3, this.operate[e](arr[i-1], arr[i+1]))
      } else i++
    }
  
    for(let i=0; i<arr.length; ) {
      let e = arr[i]
      if (['+', '-'].includes(e) && !['*','/'].includes(arr[i-2]) && !['*','/'].includes(arr[i+2])) {
        arr.splice(i-1, 3, this.operate[e](arr[i-1], arr[i+1]))
      } else i++
    }
  
    return arr.length === 1 ? arr.pop() : this.calc(arr)
  }
  
  this.evaluate = eq => {
    return this.calc(eq.split(' '))
  }
};

5. =====>

class Calculator {
  evaluate (s) {
    s = s.replace(/\s/g, '');
    const l = s.length;
    const stack = [];
    let i = 0;
    let o = '+';
    while (i < l) {
      const x = s[i];
      if (/\d/.test(x)) {
        const start = i;
        while (i < l && /\d|\./.test(s[i])) i++;
        i--;
        const temp = +s.slice(start, i + 1);
        if (o === '+') stack.push(temp);
        if (o === '-') stack.push(-temp);
        if (o === '*') stack.push(stack.pop() * temp);
        if (o === '/') stack.push(stack.pop() / temp);
      } else o = x;
      i++;
    }
    return stack.reduce((r, e) => r + e, 0);
  }
};

6. ======>

const Calculator = function() {
  this.evaluate = string => {
    let arr = string.split(' ');
    while(arr.length > 1) {
      const multDiv = arr.findIndex(a => a === '*' || a === '/');
      const index = multDiv === -1 ? arr.findIndex(b => b === '+' || b === '-') : multDiv;
      const a = Number(arr[index - 1]);
      const b = Number(arr[index + 1]);
      const calc = arr[index] === '/' ? a / b : arr[index] === '*' ? a * b : arr[index] === '-' ? a - b : a + b;
      arr.splice(index - 1, 3, calc);
    }
    return Number(arr[0]);
  }
};

7. =======>

const Calculator = function() {

  this.calculate = (val1, operator, val2) => {
    switch (operator) {
      case '*':
        return val1 * val2;
      case '/':
        return val1 / val2;
      case '+':
        return val1 + val2;
      case '-':
        return val1 - val2;
    }
    return null;
  }
  
  this.evaluateExpression = (expression, operators) => {
    var operator;
    return expression.reduce((acc, val) => {
      if (operators.includes(val)) {
        operator = val;
      } else if (operator) {
        acc.push(this.calculate(acc.pop(), operator, val))
        operator = '';
      } else {
        acc.push(val);
      }
      return acc;
    }, []);
  }

  this.evaluate = string => {
    var expression = string.split(' ').map(v => +v ? +v : v);
    
    expression = this.evaluateExpression(expression, ['*', '/']);
    expression = this.evaluateExpression(expression, ['+', '-']);
    return expression[0];
  }
};


8. ======>

class Calculator {
  constructor () {
    this.parts = []
  }
  
  evaluate (string) {
    this.parts = string.split(' ').map(p => Number(p) || p)
    if (!this.parts.length) return 0
    
    const order = [['*', '/'], ['+', '-']]
    let orderAt = 0
    let partsAt = -1

    while (this.parts.length > 1) {
      partsAt = this.getNextEquationId(order[orderAt])
      
      if (partsAt > -1) {
        const result = this.calculate(this.getEquationAt(partsAt))
        this.parts.splice(partsAt - 1, 3, result)
        partsAt = -1
      } else {
        orderAt += 1
      }
    }
    
    return this.parts[0]
  }
  
  getNextEquationId (operators) {
    return this.parts.findIndex(p => operators.includes(p))
  }
  
  getEquationAt (id) {
    return this.parts.slice(id - 1, id + 2)
  }
  
  calculate ([a, o, b]) {
    switch (o) {
      case '*': return a * b
      case '/': return a / b
      case '+': return a + b
      case '-': return a - b
      default: throw new Error(`No valid operator "${o}" between numbers ${a} and ${b}`)
    }
  }
};

9. ======>

var Calculator = function() {
  this.evaluate = function(b) {
    for (var e = {
        "+": 0,
        "-": 0,
        "*": 1,
        "/": 1
      }, c = [], a = [], d = [], f = b.split` `; 0 < f.length;)
      if (b = f.shift(), e.hasOwnProperty(b)) {
        for (; e[a[a.length - 1]] >= e[b];) d.push(a.pop());
        a.push(b)
      }
    else d.push(+b);
    for (; 0 < a.length;) d.push(a.pop());
    for (; 0 < d.length;)
      if (b = d.shift(), e.hasOwnProperty(b)) switch (c.push(a.pop(), a.pop()),
        b) {
        case "+":
          a.push(c.pop() + c.pop());
          break;
        case "-":
          a.push(c.pop() - c.pop());
          break;
        case "*":
          a.push(c.pop() * c.pop());
          break;
        case "/":
          a.push(c.pop() / c.pop())
      }
    else a.push(b);
    return a.pop()
  }
};

10. ======>
*/
// const Calculator = function() {
//   this.evaluate = s => +s.replace(/ /g, '').replace(/(\d+[*/])+\d+/g,m=>m.match(/\D?\d+/g)
//   .reduce((t,v)=>v[0]=='*'?t*v.slice(1):v[0]=='/'?t/v.slice(1):t=v)).match(/\D?\d+\.?\d*(e-?\d)?/g)
//   .reduce((t,v)=>v[0]=='+'?+t+ +v.slice(1):v[0]=='-'?t-v.slice(1):t=v)
// };

/*
11. ======>

function Function(){}
const Calculator = function() {
  this.evaluate = string => (()=>{}).constructor('return '+string)()
};

12. ======>

const Calculator = function() {
  this.evaluate = string => {
    var ops = [
      ['+', (a, b) => a + b],
      ['-', (a, b) => a - b],
      ['*', (a, b) => a * b],
      ['/', (a, b) => a / b]
    ]
    for (let i = 0; i < ops.length; i++) {
      if (string.indexOf(ops[i][0]) !== -1) {
        return string.trim().split(ops[i][0]).map(this.evaluate).reduce(ops[i][1]);
      }
    }
    return Number(string);
  }
};

*/