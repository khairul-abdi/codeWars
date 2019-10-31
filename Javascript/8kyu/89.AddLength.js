function addLength(str) {
    // let arr = []
    // let temp = ''
    // let count = 0
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] == ' ') {
    //         temp += ` ${count}`
    //         arr.push(temp)
    //         temp = ''
    //         count = 0
    //     } else {
    //         temp += str[i]
    //         count += 1
    //     }
    // }

    // if (temp) {
    //     temp += ` ${count}`
    //     arr.push(temp)
    //     temp = ''
    //     count = 0
    // }

    // return arr

    let arr = []
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            temp += str[i]
        } else {
            temp += ' ' + temp.length
            arr.push(temp)
            temp = ''
        }
    }
    temp += ' ' + temp.length
    arr.push(temp)

    return arr
}
console.log(addLength('apple ban'), ["apple 5", "ban 3"]);
console.log(addLength('    you will    win   '), ["you 3", "will 4", "win 3"]);

/*
=====SOAL======
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/
/*
CARA ORANG LAIN
1. ======>

function addLength(str){
  return str.split(' ').map(function(v){return v+' '+v.length})
}

2. ======>

var addLength = s => s.split(' ').map(x => x + ' ' + x.length);

*/