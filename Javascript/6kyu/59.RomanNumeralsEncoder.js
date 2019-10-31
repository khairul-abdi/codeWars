function solution(number) {
    var roman = {
        'MM': 3000,
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'CC': 200,
        'C': 100,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }
    var result = '';
    var newAngka = number;
    while (newAngka > 0) {
        for (var keys in roman) {
            if (newAngka >= roman[keys]) {
                newAngka -= roman[keys];
                result += keys;
            }
        }
    }
    return result;
}

// console.log(solution(2), 'II', '2 should, "II"')
// console.log(solution(3), 'III', '3 should, "III"')
// console.log(solution(4), 'IV', '4 should, "IV"')
// console.log(solution(5), 'V', '5 should, "V"')
// console.log(solution(9), 'IX', '9 should, "IX"')
// console.log(solution(10), 'X', '10 should, "X"')
// console.log(solution(11), 'XI')
// console.log(solution(19), 'XIX')
console.log(solution(22), 'XXII')
console.log(solution(15), 'XV')
console.log(solution(1000), 'M', '1000 should, "M"')
console.log(solution(1001), 'MI', '1001 should, "MI"')
console.log(solution(1990), 'MCMXC', '1990 should, "MCMXC"')
console.log(solution(2007), 'MMVII', '2007 should, "MMVII"')
console.log(solution(2008), 'MMVIII', '2008 should, "MMVIII"')