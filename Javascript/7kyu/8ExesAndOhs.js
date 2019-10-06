function XO(str) {
    let str1 = ''
    let str2 = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] != 'x') {
            str1 += str[i]
        } else {
            str2 += str[i]
        }
    }
    // console.log(str1)
    // console.log(str2)

    if (str1.length == str2.length) {
        return true
    } else {
        return false
    }

}

console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);




function XO(str) {
    let str1 = ''
    let str2 = ''
    for (let i = 0; i < str.length; i++) {
        str[i] != 'x' ? str1 += str[i].toLowerCase() : str2 += str[i].toLowerCase()
    }
    // console.log(str1)
    // console.log(str2)

    return str1.length == str2.length ? true : false
}

console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);