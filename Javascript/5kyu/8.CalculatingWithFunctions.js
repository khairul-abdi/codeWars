function expression(number, operation) {
    if (!operation)
        return number;
    return operation(number);
}

function zero(operation) {
    return expression(0, operation);
}

function one(operation) {
    return expression(1, operation);
}

function two(operation) {
    return expression(2, operation);
}

function three(operation) {
    return expression(3, operation);
}

function four(operation) {
    return expression(4, operation);
}

function five(operation) {
    return expression(5, operation);
}

function six(operation) {
    return expression(6, operation);
}

function seven(operation) {
    return expression(7, operation);
}

function eight(operation) {
    return expression(8, operation);
}

function nine(operation) {
    return expression(9, operation);
}

function plus(x) {
    return function (y) {
        return y + x;
    }
}

function minus(x) {
    return function (y) {
        return y - x;
    }
}

function times(x) {
    return function (y) {
        return y * x;
    }
}

function dividedBy(x) {
    return function (y) {
        return Math.floor(y / x);
    }
}

console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);

/*
=====SOAL======
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/
/*
CARA ORANG LAIN
1. ======>

var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }

2. ======>

['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function (name, n) {
  this[name] = function (f) { return f ? f(n) : n }
});

function plus(n)      { return function (a) { return a + n } }
function minus(n)     { return function (a) { return a - n } }
function times(n)     { return function (a) { return a * n } }
function dividedBy(n) { return function (a) { return a / n } }

3. ======>

'zero one two three four five six seven eight nine'.split(' ').forEach(
  (mth, num) => this[mth] = (f = val => val) => f(num) 
)

let plus      = (r) => (l) => l + r
let minus     = (r) => (l) => l - r
let times     = (r) => (l) => l * r
let dividedBy = (r) => (l) => l / r

*/