function getCount(str) {
    var vowelsCount = 0;
    vowel = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < str.length; i++) {
        // console.log(str[i])
        for (let j = 0; j < vowel.length; j++) {
            if (str[i] == vowel[j]) {
                vowelsCount += 1
            }
        }
    }
    return vowelsCount;
}

console.log(getCount("abracadabra"), 5)