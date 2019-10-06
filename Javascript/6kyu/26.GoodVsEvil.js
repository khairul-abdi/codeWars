function goodVsEvil(good, evil) {

    let sumGood = 0
    let arrGood = []
    let sumEvil = 0
    let arrEvil = []
    console.log('GOOD : ', good)
    console.log('EVIL = ', evil)

    for (let i = 0; i < good.length; i++) {
        if (good[i] != ' ') arrGood.push(Number(good[i]))
    }
    // console.log(arrGood)

    for (let i = 0; i < arrGood.length; i++) {
        sumGood += arrGood[i]
    }
    // console.log(sumGood)

    for (let i = 0; i < evil.length; i++) {
        if (evil[i] != ' ') arrEvil.push(Number(evil[i]))
    }
    // console.log(arrEvil)

    for (let i = 0; i < arrEvil.length; i++) {
        sumEvil += arrEvil[i]
    }
    // console.log(sumEvil)

    if (sumGood < sumEvil) {
        return `Battle Result: Evil eradicates all trace of Good`
    } else if (sumGood > sumEvil) {
        return `Battle Result: Good triumphs over Evil`
    } else if (sumGood == sumEvil) {
        return `Battle Result: No victor on this battle field`
    }
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1') === 'Battle Result: Evil eradicates all trace of Good', 'Evil should win');
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0') === 'Battle Result: Good triumphs over Evil', 'Good should win');
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0') === 'Battle Result: No victor on this battle field', 'Should be a tie');