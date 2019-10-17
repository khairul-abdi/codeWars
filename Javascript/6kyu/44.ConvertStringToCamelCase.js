function toCamelCase(str) {
    let arr = []
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] != '-' && str[i] != '_') {
            temp += str[i]
        } else {
            arr.push(temp)
            temp = ''
        }
    }
    if (temp) arr.push(temp)
    // console.log(arr)

    let result = ''
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if ([i][j] == [i][0] && [i][j] != [0][0]) {
                result += arr[i][j].toUpperCase()
            } else {
                result += arr[i][j]
            }
        }
    }
    // console.log('Result = ', result)
    return result
}

console.log(toCamelCase(''), '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")

/*
=====SOAL======
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

*/
/*
CARA ORANG LAIN
1. ======>
2. ======>
3. ======>
*/