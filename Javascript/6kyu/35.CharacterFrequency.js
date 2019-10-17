function letterFrequency(text) {

    let arr = []
    for (let i = 0; i < text.length; i++) {
        if (text[i] != ' ' && text[i] != ',' && text[i] != '.' && text[i] != '-' && text[i] != "'") {
            arr.push(text[i].toLowerCase())
        }
    }
    // console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    // console.log(arr)
    let arrK = []
    let arrB = []
    for (let i = 0; i < arr.length; i++) {
        if (arrK.length == 0) {
            arrK.push(arr[i], 1)
        } else if (arr[i] == arr[i - 1]) {
            arrK[1] += 1
        } else if (arr[i] != arr[i - 1]) {
            arrB.push(arrK)
            arrK = []
            arrK.push(arr[i], 1)
        }
    }
    if (arrK) {
        arrB.push(arrK)
    }
    // console.log(arrB)

    for (let i = 0; i < arrB.length; i++) {
        for (let j = 0; j < arrB.length; j++) {
            if (arrB[i][0] < arrB[j][0]) {
                let temp = arrB[i]
                arrB[i] = arrB[j]
                arrB[j] = temp
            }
        }
    }
    // return arrB

    for (let i = 0; i < arrB.length; i++) {
        for (let j = i + 1; j < arrB.length; j++) {
            if (arrB[i][1] < arrB[j][1]) {
                let temp = arrB[j]
                arrB[j] = arrB[i]
                arrB[i] = temp
            }
        }
    }
    return arrB
}

result = letterFrequency('wklv lv d vhfuhw phvvdjh');
expected = [
    ['v', 5],
    ['h', 4],
    ['d', 2],
    ['l', 2],
    ['w', 2],
    ['f', 1],
    ['j', 1],
    ['k', 1],
    ['p', 1],
    ['u', 1]
];

console.log(result, expected, "Resulting array is wrong");

result = letterFrequency("As long as I'm learning something, I figure I'm OK - it's a decent day.");
expected = [
    ["i", 7],
    ["a", 5],
    ["e", 5],
    ["n", 5],
    ["g", 4],
    ["s", 4],
    ["m", 3],
    ["o", 3],
    ["t", 3],
    ["d", 2],
    ["l", 2],
    ["r", 2],
    ["c", 1],
    ["f", 1],
    ["h", 1],
    ["k", 1],
    ["u", 1],
    ["y", 1]
];

console.log(result, expected, "Resulting array is wrong");

result = letterFrequency('IWT LDGAS XH HIXAA P LTXGS EAPRT, STHEXIT BN TUUDGIH ID BPZT RATPG PCS ETGUTRI HTCHT DU XI.');
expected = [
    ["t", 12],
    ["i", 7],
    ["h", 6],
    ["a", 5],
    ["g", 5],
    ["p", 5],
    ["x", 5],
    ["d", 4],
    ["s", 4],
    ["u", 4],
    ["e", 3],
    ["r", 3],
    ["b", 2],
    ["c", 2],
    ["l", 2],
    ["n", 1],
    ["w", 1],
    ["z", 1]
];

console.log(result, expected, "Resulting array is wrong");