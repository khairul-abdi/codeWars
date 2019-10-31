function name(params) {
    let output = []
    let number = 0
    for (let i = 0; i < params.length; i++) {
        if (Number(Number(params[i]))) {
            number = Number(params[i])
        }
    }
    output.push(params, number)
    return output
}

console.log(name('s1tu'))