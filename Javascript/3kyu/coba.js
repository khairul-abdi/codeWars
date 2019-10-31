function evaluate(angka) {
    let arrHigherPriority = []
    let arrLowerPriority = []

    for (let i = 1; i < angka.length; i += 2) {
        if (angka[i] == '*' || angka[i] == '/') {
            // arr.push(angka[i - 1], angka[i], angka[i + 1])
            arrHigherPriority.push(angka[i - 1], angka[i])
        } else if (angka[i] == '+' || angka[i] == '-') {
            arrLowerPriority.push(angka[i - 1], angka[i])
        }
    }
    console.log('arrHigherPriority = ', arrHigherPriority)
    console.log('arrLowerPriority = ', arrLowerPriority)

}

console.log(evaluate([1, '+', 2, '*', 4, '*', 5, '-', 8, '/', 3]), 1)