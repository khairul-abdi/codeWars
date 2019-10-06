function isPalindrome(x) {
    var output = ''
    for (let i = x.length - 1; i >= 0; i--) {
        output += x[i]
    }

    // if (x.toLowerCase() == output.toLowerCase()) {
    //     return true
    // } else {
    //     return false
    // }

    return (output.toLowerCase() == x.toLowerCase()) ? true : false

}

console.log(isPalindrome("a"), true);
console.log(isPalindrome("aba"), true);
console.log(isPalindrome("Abba"), true);
console.log(isPalindrome("hello"), false);
console.log(isPalindrome("Bob"), true);
console.log(isPalindrome("Madam"), true);
console.log(isPalindrome("AbBa"), true);
console.log(isPalindrome(""), true);

isPalindrome = s => (s = s.toLowerCase(), [...s].reverse().join `` === s)

function isPalindrome(line) {
    line = line.toString().toLowerCase();

    for (var left = 0, right = line.length - 1; left < right;) {
        if (line.charAt(left++) !== line.charAt(right--)) {
            return false;
        }
    }

    return true;
}

function isPalindrome(x) {
    x = x.toLowerCase()
    let a = 0
    let b = x.length
    while (a < b) {
        if (x[a] != x[b - 1])
            return false
        a++
        b--
    }
    return true
}

function isPalindrome(x) {
    return x.toUpperCase() == x.split('').reverse().join('').toUpperCase();
}