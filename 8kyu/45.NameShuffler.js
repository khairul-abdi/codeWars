// function nameShuffler(str) {
//     let arr = []
//     let temp = ''
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == ' ') {
//             arr.push(temp)
//             temp = ''
//         } else {
//             temp += str[i]
//         }
//     }
//     arr.push(temp)

//     return `${arr[1]} ${arr[0]}`
// }

// console.log(nameShuffler('john McClane'), 'McClane john');

/*
Write a function that returns a string in which firstname is swapped with last name.
nameShuffler('john McClane'); => "McClane john"
*/

/*
CARA ORANG LAIN
1. =====>
function nameSuffler(str){
  return str.split(' ').reverse().join(' ')
}

2. =====>
nameShuffler = str => str.split(' ').reverse().join(' ')
*/

//RECURSIVE
function nameShuffler(str) {
    var arr = []
    var temp = ''
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] == ' ') {
    //         arr.push(temp)
    //         temp = ''
    //     } else {
    //         temp += str[i]
    //     }
    // }
    // arr.push(temp)

    // // return `${arr[1]} ${arr[0]}`

    if (str.length == 1) {
        return `${arr[1]} ${arr[0]}`
    } else {
        if (str[0] == ' ') {
            arr.push(temp)
            temp = ''
        } else {
            temp += str[0]
            // console.log(temp)
        }
        console.log(arr)
        return arr + nameShuffler(str.slice(1))
    }
}

console.log(nameShuffler('john McClane'), 'McClane john');