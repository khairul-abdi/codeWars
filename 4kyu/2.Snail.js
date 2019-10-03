snail = function (array) {
    let output = []
    let mundur = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            // console.log('MANA: ', array[i][j]);
            mundur = array[array.length - 1][array[i].length - 2]

            if (array[i][j] == array[0][j]) {
                output.push(array[i][j])
            } else if (array[i][j] == array[i][array[i].length - 1] && array[i][j] != array[0][array[i].length - 1]) {
                output.push(array[i][j])
                if (array[i][j] == mundur) {
                    output.push(array[i][j])
                    mundur = array[array.length - 1][(array[i].length - 2) - 1]
                }
            }
        }
    }
    console.log(output)
}

console.log(snail([
    []
]), []);
console.log(snail([
    [1]
]), [1]);
console.log(snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
console.log(snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
console.log(snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11]
]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);


//CARA ORANG LAIN
const snail = (arr) => {
    const answer = [];

    while (arr.length) {

        answer.push(...arr.shift());
        for (let i = 0; i < arr.length - 1; i++) {
            answer.push(arr[i].pop())
        }

        if (arr.length) {
            answer.push(...arr.pop().reverse());
        }


        for (let i = arr.length - 1; i > 0; i--) {
            answer.push(arr[i].shift())
        }
    }
    return answer;
}

/*
=====SOAL======
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements 
to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; 
the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as [[]]
*/
/*
CARA ORANG LAIN
1. ======>


2. ======>
3. ======>
*/