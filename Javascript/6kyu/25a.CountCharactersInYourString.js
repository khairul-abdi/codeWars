function count(string) {
    let obj = {}
    for (let i = 0; i < string.length; i++) {
        if (obj[string[i]] == undefined) {
            obj[string[i]] = 1
        }
    }
}

console.log(count("abazaz"), {
    a: 2,
    b: 1
});
console.log(count(""), {});

// var object1 = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// for (var property1 in object1) {
//     string1 += object1[property1];
// }

// console.log(string1);