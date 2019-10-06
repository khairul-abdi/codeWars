function filter_list(l) {
    let output = []
    for (let i = 0; i < l.length; i++) {
        // if (Number(Number(l[i]))) {
        //     output.push(l[i])
        // }

        // console.log(typeof (typeof (l[i])))

        //CARA DARI MAS GANANG
        if (typeof (l[i]) == 'number') {
            output.push(l[i])
        }
    }
    return output
}

console.log(filter_list([1, 2, 'a', 'b']), [1, 2])
console.log(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15])
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123])

/*
CARA ORANG LAIN
1. ==========>

function filter_list(l) {
 return l.filter(v => typeof v == "number")
}

2. =========>
const filter_list = l => l.filter(c => typeof c === 'number');
*/