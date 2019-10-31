function convertHashToArray(hash) {
    let arr = []
    for (let i in hash) {
        arr.push([i, hash[i]])
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i][0] > arr[j][0]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}

console.log(convertHashToArray({
    name: "Jeremy"
}), [
    ["name", "Jeremy"]
]);
console.log(convertHashToArray({
    name: "Jeremy",
    age: 24
}), [
    ["age", 24],
    ["name", "Jeremy"]
]);
console.log(convertHashToArray({
    name: "Jeremy",
    age: 24,
    role: "Software Engineer"
}), [
    ["age", 24],
    ["name", "Jeremy"],
    ["role", "Software Engineer"]
]);
console.log(convertHashToArray({
    product: "CodeWars",
    powerLevelOver: 9000
}), [
    ["powerLevelOver", 9000],
    ["product", "CodeWars"]
]);
console.log(convertHashToArray({}), []);

/*
=====SOAL======
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically.
*/
/*
CARA ORANG LAIN
1. ======>

const convertHashToArray = o => Object.entries(o).sort();
    
2. ======>
3. ======>
*/