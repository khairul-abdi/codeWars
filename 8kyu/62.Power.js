function numberToPower(number, power) {
    let total = 1
    for (let i = 0; i < power; i++) {
        total *= number
    }
    return total
}

console.log(numberToPower(4, 2), 16);
console.log(numberToPower(10, 4), 10000);
console.log(numberToPower(10, 0), 1);