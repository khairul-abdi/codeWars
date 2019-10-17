// function validBraces(braces) {
//     // console.log(braces)
//     let arrFront = {
//         '(': 0,
//         '{': 0,
//         '[': 0
//     }
//     let arrBack = {
//         ')': 0,
//         '}': 0,
//         ']': 0
//     }

//     for (const i in arrFront) {
//         // console.log(arrFront[i]) // 0, 0, 0
//         console.log(i)
//     }



//     // for (let i = 0; i < brances.length; i++) {
//     //     for (const j in arrFront) {
//     //         if(braces)
//     //     }

//     //     for (const j in arrFront) {

//     //     }
//     // }

// }




function validBraces(braces) {
    var nD = 0;
    var nB
    for (var i = 0; i < braces.length; i++) {
        if (braces[i] == '(') n++;
        if (braces[i] == ')') n--;
        if (braces[i] == '[') n++;
        if (braces[i] == ']') n--;
        if (braces[i] == '{') n++;
        if (braces[i] == '}') n--;
        if (n < 0) return false;
    }

    return n == 0;
}

console.log(validBraces("()"), true);
console.log(validBraces("[(])"), false);