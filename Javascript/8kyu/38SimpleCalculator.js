function calculator(a, b, sign) {

    if (!(Number(a) && Number(b))) {
        return `unknown value`
    }

    if (sign == '+') {
        return a + b
    } else if (sign == '-') {
        return a - b
    } else if (sign == '*') {
        return a * b
    } else if (sign == '/') {
        return a / b
    } else {
        return `unknown value`
    }
}

console.log(calculator(1, 2, "+"), 3, "calculate");
console.log(calculator(1, 2, "-"), -1, "calculate");
console.log(calculator(3, 5, "*"), 15, "calculate");
console.log(calculator(6, 2, "/"), 3, "calculate");
console.log(calculator(6, 2, "$"), "unknown value", "calculate");
console.log(calculator(6, "h", "*"), "unknown value", "calculate");

/*
You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument will be numbers.
The third argument will represent a sign indicating the operation to perform on these two numbers.

Example:
calculator(1,2,"+"); //=> result will be 3
if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"
*/

/*
CARA ORANG LAIN
1. ======>

function calculator(a,b,sign){
  if ((typeof a === "number") && (typeof b === "number")) {
    switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    }
  }
  return "unknown value";
}

2. =======>

calculator = (a, b, s) => ['+', '-', '*', '/'].includes(s) & a === +a & b === +b ? eval(`${a}${s}${b}`) : 'unknown value';

3. ======>
function calculator(a,b,sign) {
  try
    { return eval(a+sign+b); }
  catch(e)
    { return "unknown value"; }
}
*/