var run = function (str) {
  return expression(str);
};

var peek = function (str) {
  return str[0] || '';
};

var get = function (str) {
  return str.shift();
};



var factor = function (str) {

  function makeNumber(str) {
    var result = '';
    while (/[0-9\.]/.test(peek(str))) {
      result += get(str);
    }
    return Number(result);
  }

  if (peek(str) === "-") {
    // rule - factor
    get(str);
    return -1 * factor(str);
  } else if (!isNaN(peek(str))) {
    return makeNumber(str);
  } else if (peek(str) === "(") {
    get(str);  //consume opening parenthesis
    var number = expression(str);
    get(str); // consume closing parenthesis
    return number;
  }
};

var term = function (str) {
  var result = factor(str);
  while (peek(str) == '*' || peek(str) == '/') {
    if (get(str) == '*') {
      result *= factor(str);
    } else {
      result /= factor(str);
    }
  }
  return result;
};

var expression = function (str) {
  var result = term(str);
  while (peek(str) == '+' || peek(str) == '-') {
    if (get(str) == '+') {
      result += term(str);
    } else {
      result -= term(str);
    }
  }
  return result;
};

var calc = function (expression) {
  var expressionToParse = expression.replace(/\s+/g, '').split('');
  return run(expressionToParse);
}


var tests = [
  ['1+1', 2],
  ['1 - 1', 0],
  ['1* 1', 1],
  ['1 /1', 1],
  ['-123', -123],
  ['123', 123],
  ['2 /2+3 * 4.75- -6', 21.25],
  ['12* 123', 1476],
  ['2 / (2 + 3) * 4.33 - -6', 7.732],
];

console.log(calc(m[0]), m[1]);

/*
=====SOAL======
Instructions
Given a mathematical expression as a string you must return the result as a number.

Numbers
Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.

Operators
You need to support the following mathematical operators:

Multiplication *
Division / (as true division)
Addition +
Subtraction -
Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.

Parentheses
You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6

Whitespace
There may or may not be whitespace between numbers and operators.

An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. I.e., all of the following are valid expressions.

1-1    // 0
1 -1   // 0
1- 1   // 0
1 - 1  // 0
1- -1  // 2
1 - -1 // 2

6 + -(4)   // 2
6 + -( -4) // 10
And the following are invalid expressions

1 - - 1    // Invalid
1- - 1     // Invalid
6 + - (4)  // Invalid
6 + -(- 4) // Invalid
Validation
You do not need to worry about validation - you will only receive valid mathematical expressions following the above rules.

NOTE: Both eval and Function are disabled. Same goes for String.match.
*/
/*
CARA ORANG LAIN
1. ======>

// Based on http://en.wikipedia.org/wiki/Recursive_descent_parser

function calc(expr) {

    var expressionToParse = expr.replace(/\s+/g, '').split('');

    function peek() {
        return expressionToParse[0] || '';
    }

    function get() {
        return expressionToParse.shift();
    }

    function number() {
        var result = get();
        while (peek() >= '0' && peek() <= '9' || peek() == '.') {
            result += get();
        }
        return parseFloat(result);
    }

    function factor() {
        if (peek() >= '0' && peek() <= '9') {
            return number();
        } else if (peek() == '(') {
            get(); // '('
            var result = expression();
            get(); // ')'
            return result;
        } else if (peek() == '-') {
            get();
            return -factor();
        }
        return 0; // error
    }

    function term() {
        var result = factor();
        while (peek() == '*' || peek() == '/') {
            if (get() == '*') {
                result *= factor();
            } else {
                result /= factor();
            }
        }
        return result;
    }

    function expression() {
        var result = term();
        while (peek() == '+' || peek() == '-') {
            if (get() == '+') {
                result += term();
            } else {
                result -= term();
            }
        }
        return result;
    }

    return expression();
}

2. ======>

function calc( expression )
{
  const tokens = expression.replace( /\s+/g, "" ).split("");
  const peek = () => tokens[0]; // mimic stack
  const pop = () => tokens.shift(); // left to right => top to bottom
  const isNum = () => /[\d\.]/.test( peek() );
  const isAddOrSub = () => /[\+\-]/.test( peek() );
  const isMulOrDiv = () => /[\*\/]/.test( peek() );
  const isParentheses = () => /\(/.test( peek() );
  const isUnary = isAddOrSub;
  // maths
  const eval = ( l, op, r ) =>
  {
    const ops =
    {
      "+": ( l, r ) => l + r, "-": ( l, r ) => l - r,
      "*": ( l, r ) => l * r, "/": ( l, r ) => l / r
    };
    return ops[op]( l, r );
  };
  const getNum = ( numStr = String() ) =>
  {
    while ( isNum() ) numStr += pop();
    return Number( numStr );
  };
  const getNumOrParen = () =>
  {
    if ( isNum() )
    {
      return getNum();
    }
    else if ( isUnary() )
    {
      let sign = 1;
      while ( isUnary() ) sign *= pop() + 1;
      return sign * getNumOrParen();
    }
    else if ( isParentheses() )
    {
      pop();
      let sum = evalTerms();
      pop();
      return sum;
    }
  };
  const evalFactors = ( product = getNumOrParen() ) =>
  {
    while ( isMulOrDiv() ) product = eval( product, pop(), getNumOrParen() );
    return product;
  };
  const evalTerms = ( sum = evalFactors() ) =>
  {
    while ( isAddOrSub() ) sum = eval( sum, pop(), evalFactors() );
    return sum;
  };

  return evalTerms();
}

3. ======>
*/