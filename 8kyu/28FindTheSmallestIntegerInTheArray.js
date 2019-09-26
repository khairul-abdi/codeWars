function findSmallestInt(args) {

    for (let i = 0; i < args.length; i++) {
        for (let j = i + 1; j < args.length; j++) {
            if (args[i] > args[j]) {
                let temp = args[i]
                args[i] = args[j]
                args[j] = temp
            }
        }
    }
    return args[0]
}

console.log(findSmallestInt([78, 56, 232, 12, 8]), 8, 'Should return the smallest int 8');
console.log(findSmallestInt([78, 56, 232, 12, 18]), 12, 'Should return the smallest int 12');
console.log(findSmallestInt([78, 56, 232, 412, 228]), 56, 'Should return the smallest int 56');
console.log(findSmallestInt([78, 56, 232, 12, 0]), 0, 'Should return the smallest int 0');
console.log(findSmallestInt([1, 56, 232, 12, 8]), 1, 'Should return the smallest int 1');

/*
CARA ORANG LAIN
Cara 1

    findSmallestInt(args) {
        return Math.min(...args)
    }

=====================================>
Cara 2

findSmallestInt(args) {
    args.sort(function(a, b) {
    return a - b; } )
    return args[0];
}

=====================================>
Cara 3

findSmallestInt(args) {
    return args.sort((a,b)=>a-b)[0];
}

=====================================>
Cara 4

findSmallestInt(args) {
    return args.reduce(function(prev, curr, index, array) {
        return prev < curr ? prev : curr;
    });
}
*/