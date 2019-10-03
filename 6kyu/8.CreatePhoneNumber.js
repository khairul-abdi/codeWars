function createPhoneNumber(numbers) {
    let front = ''
    let middle = ''
    let back = ''

    front = `${numbers[0]}${numbers[1]}${numbers[2]}`

    middle = `${numbers[3]}${numbers[4]}${numbers[5]}`

    for (let i = 6; i < numbers.length; i++) {
        back += numbers[i]
    }
    return `(${front}) ${middle}-${back}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");

/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parenthesis!
*/

/*
CARA ORANG LAIN
1. =============>

function createPhoneNumber(numbers) {
    let format = '(xxx) xxx-xxxx'
    let output = ''

    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i])
    }
    return format
}

2. =============>
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}

3. =============>
function createPhoneNumber(numbers){
   return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}
*/