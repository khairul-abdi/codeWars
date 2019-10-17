function towerBuilder(nFloors) {
    let output = []
    for (let i = 1; i <= nFloors; i++) {
        let angkaJ = nFloors - i
        for (var j = 1; j <= angkaJ; j++) {
            output.push(' ')
        }
        for (let k = j; k <= nFloors; k++) {
            output.push('*' + ' ')
        }
        // output += '\n'
    }
    return output
}

console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ", "***"]);
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);