function isDigit(s) {

    let temp = []
    for (let i = 0; i < s.length; i++) {
        temp.push(s[i])
    }
    console.log(temp[0])

    console.log(Number(Number(temp[0])))
    if (Number(Number(temp[0])) == 'NaN') {
        return false
    }

    let output = []

}

console.log(isDigit("-3.23"), true)
console.log(isDigit("-234.4"), true);
console.log(isDigit("3"), true)
console.log(isDigit("  3  "), true)
console.log(isDigit("s2324"), false);
console.log(isDigit("3-4"), false)
console.log(isDigit("  3   5"), false)
console.log(isDigit("3 5"), false)
console.log(isDigit("zero"), false)

/*
=====SOAL======
a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
should return false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")
*/
/*
CARA ORANG LAIN
1. ======>
2. ======>
3. ======>
*/