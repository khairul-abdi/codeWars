function biggestNum(a, b) {
    let numA = Number(a)
    let numB = Number(b)
    if (numA < numB) {
        return b
    } else {
        return a
    }
}

console.log(biggestNum("25", "7"), "25");
console.log(biggestNum("214", "507"), "507");