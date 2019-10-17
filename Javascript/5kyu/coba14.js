function number2words(n) {
    // works for numbers between 0 and 999999
    var b = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var b2 = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (n <= 19) {
        return b[n]
    }

    if (n >= 20 && n < 100) {
        return b2[Math.floor(n / 10) - 2] + (n % 10 == 0 ? '' : '-' + b[n % 10])
    } else {
        return number2words(Math.floor(n / 1000)) + ' thousand' + (n % 1000 === 0 ? '' : ' ' + number2words(n % 1000))
    }
}

// works for numbers between 0 and 999999   
console.log(number2words(0), "zero");
console.log(number2words(1), "one");
console.log(number2words(8), "eight");
console.log(number2words(10), "ten");
console.log(number2words(19), "nineteen");
console.log(number2words(20), "twenty");
console.log(number2words(22), "twenty-two");
console.log(number2words(54), "fifty-four");
console.log(number2words(80), "eighty");
console.log(number2words(98), "ninety-eight");
console.log(number2words(100), "one hundred");
console.log(number2words(301), "three hundred one");
console.log(number2words(793), "seven hundred ninety-three");
console.log(number2words(800), "eight hundred");
console.log(number2words(650), "six hundred fifty");
console.log(number2words(1000), "one thousand");
console.log(number2words(1003), "one thousand three");