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


    for (let i = 0; i < x.length; i++) {

    }

    let result = x + y
    return result

}

console.log(add(-13, 13), 0);
console.log(add(-27, 18), -9);
console.log(add(-90, 30), -60);