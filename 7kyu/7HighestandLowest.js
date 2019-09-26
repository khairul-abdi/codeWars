function highAndLow(numbers) {
    var temp = ''
    var tempArr = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] != ' ') {
            temp += numbers[i]
        } else if (numbers[i] == ' ') {
            tempArr.push(Number(temp))
            temp = ''
        }
    }
    tempArr.push(Number(temp))

    // console.log(typeof tempArr[0])
    // console.log(tempArr)

    for (let i = 0; i < tempArr.length; i++) {
        for (let j = i + 1; j < tempArr.length; j++) {
            if (tempArr[i] < tempArr[j]) {
                let temp = tempArr[i]
                tempArr[i] = tempArr[j]
                tempArr[j] = temp
            }
        }
    }
    // console.log(tempArr)
    return `${tempArr[0]} ${tempArr[tempArr.length-1]}`
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");

/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

//cara orang lain
function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

//cara orang lain
function highAndLow(numbers) {
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}