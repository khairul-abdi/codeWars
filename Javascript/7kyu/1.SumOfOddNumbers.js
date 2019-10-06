function rowSumOddNumbers(n) {
    var start = 1
    var end = n * n + n - 1
    var output = 0

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= end; j++) {
            output += start
            start += 2

        }
        console.log(output)
    }
    // return output
}

// console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(2), 8); // 3 + 5 = 8
// console.log(rowSumOddNumbers(42), 74088);

/*
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29

Test Case
rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/