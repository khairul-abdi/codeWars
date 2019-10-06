function reverse(string) {
    let arr = []
    let temp = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ' ') {
            arr.push(temp)
            temp = ''
        } else {
            temp += string[i]
        }
    }
    if (temp) arr.push(temp)

    // console.log(arr)
    let result = ''
    for (let i = arr.length - 1; i >= 0; i--) {
        (i == 0) ? result += arr[i]: result += arr[i] + ' '
    }
    return result
}

console.log(reverse('I am an expert at this'), 'this at expert an am I');
console.log(reverse('This is so easy'), 'easy so is This');
console.log(reverse('no one cares'), 'cares one no');
console.log(reverse(''), '');
console.log(reverse('CodeWars'), 'CodeWars');

/*
=====SOAL======
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

reverse('Hello World') === 'World Hello'
reverse('Hi There.') === 'There. Hi'
Happy coding!

*/
/*
CARA ORANG LAIN
1. ======>

reverse = s => s.split(' ').reverse().join(' ')
*/