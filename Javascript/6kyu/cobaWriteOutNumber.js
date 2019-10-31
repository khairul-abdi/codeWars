function expandedForm(num) {
    if (num < 10) return `${num}`
    let over = num % (Math.pow(10, (String(num).length - 1)))
    return `${num-over} + ${expandedForm(over)}`
}

console.log(expandedForm(12), 'twelve');
console.log(expandedForm(42), 'forty');
console.log(expandedForm(70304), 'seventy thousand three hundred four');
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