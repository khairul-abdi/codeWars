function reverseMessage(str) {
    str = str.toLowerCase()

    let arr = []
    let temp = ''
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] == ' ') {
            arr.push(temp)
            temp = ''
        } else {
            temp += str[i]
        }
    }
    if (temp) arr.push(temp)
    // console.log(arr)

    let output = ''
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if ([i][j] == [i][0]) {
                output += arr[i][j].toUpperCase()
            } else {
                output += arr[i][j]
            }
        }
        if (i == arr.length - 1) {
            result += output
            output = ''
        } else {
            result += output + ' '
            output = ''
        }
    }
    return result
}

console.log(reverseMessage('AaaaA'), 'Aaaaa')
console.log(reverseMessage('Hello there'), 'Ereht Olleh')
console.log(reverseMessage('Pl34k78j'), 'J87k43lp')
console.log(reverseMessage('Reverse this message!'), '!egassem Siht Esrever')
console.log(reverseMessage('Today is the 14th of January!'), '!yraunaj Fo Ht41 Eht Si Yadot')
console.log(reverseMessage('hty56hA T76#Td'), 'Dt#67t Ah65yth')
console.log(reverseMessage(''), '')

/*
=====SOAL======
Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

Example:

reverseMessage('This is an example of a Reversed Message!');
Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'
*/
/*
CARA ORANG LAIN
1. ======>

function reverseMessage(str) {

var a = str.split("").reverse().join("")

return a.toLowerCase().replace(/(^| )(\w)/g, s => s.toUpperCase())

}

2. ======>

let reverseMessage=(str)=>str.split("").reverse().join("").split(" ").map(chr=>chr.slice(0,1).toUpperCase()+chr.slice(1).toLowerCase()).join(" ");

3. ======>

function reverseMessage(str) {
  str = str.toLowerCase();
  let arr = str.split('').reverse().join('').split(' ');
  arr = arr.map(word => word.length ? word[0].toUpperCase() + word.slice(1) : word); 
  return arr.join(' ');
}

*/