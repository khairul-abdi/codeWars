function one(arr, fun) {
    if (arr.length < fun) {
        return true
    } else if (arr.length % 2 != 0) {
        return false
    } else if (arr.length > 5) {
        return false
    }
}

console.log(one([1, 2, 3, 4, 5], function (item) {
    return item < 2
}), true)
console.log(one([1, 2, 3, 4, 5], function (item) {
    return item % 2
}), false, "more than 1 item are odd")
console.log(one([1, 2, 3, 4, 5], function (item) {
    return item > 5
}), false, "none item is greater than 5")