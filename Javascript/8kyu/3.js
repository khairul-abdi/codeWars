function boolToWord(bool) {

    // if (bool == true) {
    //     return 'Yes'
    // } else {
    //     return 'No'
    // }

    // output = (bool == true) ? 'Yes' : 'No';
    // return output

    return bool ? 'Yes' : 'No';
}

console.log(boolToWord(false), 'No')
console.log(boolToWord(true), 'Yes')