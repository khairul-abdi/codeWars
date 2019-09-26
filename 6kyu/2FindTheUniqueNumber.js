function findUniq(arr) {
    let result = []
    let temp = []
    arr.sort()

    for (let i = 0; i < arr.length; i++) {

        if (temp.length == 0) {
            temp.push(arr[i])
        } else if (arr[i] == arr[i - 1]) {
            temp.push(arr[i])
        } else if (arr[i] != arr[i - 1]) {
            result.push(temp)
            temp = []
            temp.push(arr[i])
        }
    }
    result.push(temp)

    for (let i = 0; i < result.length; i++) {
        if (result[i].length == 1) {
            return result[i][0]
        }
    }
}


//cara orang
// let findUniq = arr => +arr.filter(e => arr.indexOf(e) == arr.lastIndexOf(e))

console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);
console.log(findUniq([4, 1, 1]))