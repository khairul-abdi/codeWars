function add(x, y) {
    var a = 0
    var b = 0

    if (x < y) {
        a = x
        b = y
    } else {
        a = y
        b = x
    }

    let result = 0

    for (let i = a; i <= y; i++) {
        result += i
    }

    return result

}

console.log(add(-13, 13), 0);
console.log(add(-27, 18), -9);
console.log(add(-90, 30), -60);