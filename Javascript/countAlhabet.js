let count = (words) => {
    // let count = 0
    let arr = []
    for (let i = 0; i < words.length; i++) {
        let found = false
        for (let j = 0; j < arr.length; j++) {
            if (words[i] == arr[j][0]) {
                console.log('ARR : ', arr[j][1])
                arr[j][1] += 1
                found = true
            }
        }
        if (found == false) {
            arr.push([words[i], 1])
        }
    }

    // console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i][1] < arr[j][1]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    // console.log(arr)
    return arr
}

console.log(count('khairulabdidongoran'))