function amIWilson(p) {
    if (p < 2) {
        return false
    } else if (p > 2) {
        for (let i = 2; i < p; i++) {
            if (p % i == 0) {
                return false
            }
        }
    }
    return true
}

console.log(amIWilson(5), true)
console.log(amIWilson(9), false)
console.log(amIWilson(6), false)