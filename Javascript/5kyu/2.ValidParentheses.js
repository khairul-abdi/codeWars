// === CARA AKU BELUM BERHASIL ====
// function validParentheses(parens) {
//     let tempA = []
//     let tempB = []

//     for (let i = 0; i < parens.length; i++) {
//         if (parens[i] != '(' || parens[i] != ')') {
//             parens[i] == '(' ? tempA.push(parens[i]) : tempB.push(parens[i])
//         } else {
//             return false
//         }
//     }

//     return (tempA.length == tempB.length) ? true : false
// }

//CARA ORANG LAIN
function validParentheses(parens) {
    var indent = 0;


    for (var i = 0; i < parens.length && indent >= 0; i++) { //indent>=0 is critical
        indent += (parens[i] == '(') ? 1 : -1;
        // console.log(indent, parens[i]);
    }

    return (indent == 0);
}

console.log(validParentheses("()"), true);
console.log(validParentheses("())"), false);
console.log(validParentheses(""), false);
console.log(validParentheses("("), false);



/*
=====SOAL======
Write a function called that takes a string of parentheses, 
and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/
/*
CARA ORANG LAIN
1. ======>

function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}

2. ======>

function validParentheses(parens){
  var re = /\(\)/;
  while (re.test(parens)) parens = parens.replace(re, "");
  return !parens;
}

*/