function reverseWords(str) {

    let arr = []
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            arr.push(temp)
            temp = ''
        } else {
            temp += str[i]
        }
    }
    if (temp) {
        arr.push(temp)
    }
    // console.log(arr)

    let result = ''
    for (let i = arr.length - 1; i >= 0; i--) {
        (i == 0) ? result += arr[i]: result += arr[i] + ' '
    }
    return result
}

console.log(reverseWords("hello world!"), "world! hello")

/*
=====SOAL======
Complete the solution so that it reverses all of the words within the string passed in.

Example:

reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"
*/
/*
CARA ORANG LAIN
1. ======>

const reverseWords = (str) => str.split(" ").reverse().join(" ");
2. ======>
3. ======>
*/