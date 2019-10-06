const solution = (str) => {
    let result = ''
    // for (let i = str.length - 1; i >= 0; i--) {
    //     result += str[i]
    // }


    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

console.log(solution('world'), 'dlrow')

/*
=====SOAL======
Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'
*/
/*
CARA ORANG LAIN
1. ======>

const solution = s => [...s].reverse().join('')

2. ======>

function solution(str){
  return str.split('').reduceRight((after, before) => after += before, '');
}

3. ======>
*/