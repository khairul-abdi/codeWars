function josephus(items, k) {
    // output = []
    // if (items.length == 0) {
    //     return output
    // } else {
    //     for (let i = 0; i < items.length; i += k) {
    //         output.push(items[i])
    //         break
    //     }
    //     return output + josephus(items.slice(k), k)
    // }

    var OriginK = k
    let output = []
    let counter = 0
    for (let i = 0; i < items.length; i++) {
        if (k <= items.length) {
            output.push(items[k - 1])
            k += OriginK
        } else {
            let found = false
            for (let j = 0; j < output.length; j++) {
                // console.log(output[i])
                if (output[j] == items[counter]) {
                    found = true
                }
            }
            if (found == false) {
                output.push(items[i])
            }
        }
    }
    return output
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2), [2, 4, 6, 8, 10, 3, 7, 1, 9, 5])
console.log(josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4), ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a'])
console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3), [3, 6, 2, 7, 5, 1, 4])
console.log(josephus([], 3), [])