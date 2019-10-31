function disemvowel(str) {
    let strNotVowel = ''
    let vowel = 'aeiouAEIOU'

    for (let i = 0; i < str.length; i++) {
        var isVowel = false
        for (let j = 0; j < vowel.length; j++) {
            if (str[i] == vowel[j]) {
                isVowel = true
            }
        }
        if (isVowel == false) {
            strNotVowel += str[i]
        }
    }

    return strNotVowel;
}

console.log(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")

//cara orang lain
const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

//cara orang lain
const positiveSum = arr => arr.reduce((acc, cur) => cur > 0 ? acc + cur : acc, 0)