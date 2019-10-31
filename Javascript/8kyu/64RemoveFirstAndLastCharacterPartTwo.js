// array = arr =>
//     arr
//     .split(',')
//     .slice(1, -1)
//     .join(' ') || null


function array(arr) {
    let tampung = []
    temp = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ',' || arr[i] == ' ') {
            if (temp) {
                tampung.push(temp)
                temp = ''
            }
        } else {
            temp += arr[i]
        }
    }
    if (temp) {
        tampung.push(temp)
    }

    if (tampung.length < 3) {
        return null
    }
    // console.log(tampung)
    let result = ''
    for (let i = 1; i < tampung.length - 1; i++) {
        if (i == tampung.length - 2) {
            result += tampung[i]
        } else {
            result += tampung[i] + ' '
        }
    }
    return result
}


console.log(array(''), null);
console.log(array('1'), null);
console.log(array('1, 3'), null);
console.log(array('1,2,3'), '2');
console.log(array('1,2,3,4'), '2 3');
console.log(array('1,2,3,4,5'), '2 3 4');
console.log(array('54,2, ad2,4,f,b,a4,a')) //  2 ad2 4 f b a4      //YANG KU DAPAT 4 2 ad2 4 f b a4