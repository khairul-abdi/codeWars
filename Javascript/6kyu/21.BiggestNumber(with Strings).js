function biggestNum(a, b) {

    let NumA = ''
    for (let i = 0; i < a.length; i++) {
        if (a[i] != '-') {
            NumA += a[i]
        }
    }
    console.log('NumA', NumA)


    let NumB = ''
    for (let i = 0; i < b.length; i++) {
        if (b[i] != '-') {
            NumB += b[i]
        }
    }
    console.log('NumB', NumB)

    if (Number(NumA) < Number(NumB)) {
        return b
    } else {
        return a
    }
}

// const biggestNum = (a, b) => (Number(a) < Number(b)) ? b : a

// console.log(biggestNum("25", "7"), "25");
console.log(biggestNum("-----05", "-5"), "5");
// console.log(biggestNum("214", "507"), "507");