function anagrams(word, words) {
    let arrWord = []
    for (let i = 0; i < word.length; i++) {
        arrWord.push(word[i])
    }
    // console.log(arrWord)

    for (let i = 0; i < arrWord.length; i++) {
        for (let j = i + 1; j < arrWord.length; j++) {
            if (arrWord[i] > arrWord[j]) {
                let temp = arrWord[i]
                arrWord[i] = arrWord[j]
                arrWord[j] = temp
            }
        }
    }
    // console.log(arrWord)
    let resWord = ''

    for (let i = 0; i < arrWord.length; i++) {
        resWord += arrWord[i]
    }
    // console.log(resWord)

    let arrWords = []
    let arrW = []
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            arrW.push(words[i][j])
        }
        arrWords.push(arrW)
        arrW = []
    }
    // console.log(arrWords)

    for (var i = 0; i < arrWords.length; i++) {
        for (let j = 0; j < arrWords[i].length; j++) {
            for (let k = 0; k < arrWords[i].length; k++) {
                if (arrWords[i][j] < arrWords[i][k]) {
                    let temp = arrWords[i][j]
                    arrWords[i][j] = arrWords[i][k]
                    arrWords[i][k] = temp
                }
            }
        }
    }
    // console.log(arrWords)
    let str = ''
    let resArr = []
    for (let i = 0; i < arrWords.length; i++) {
        for (let j = 0; j < arrWords[i].length; j++) {
            str += arrWords[i][j]
        }
        resArr.push(str)
        str = ''
    }
    // console.log(resArr)

    let result = []
    for (let i = 0; i < resArr.length; i++) {
        if (resArr[i] == resWord) {
            result.push(words[i])
        }
    }
    return result
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // => ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) // => ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer'])) // => []

/*
=====SOAL======
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/
/*
CARA ORANG LAIN
1. ======>

function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(function(v) {return word == v.split('').sort().join('');});
}

2. ======>

anagrams = (word, words) => {

  return words.filter(function(e){
    console.log(e)
    var anagrams = e.split('').sort().join('') 
    var testWord = word.split('').sort().join('')
    return anagrams === testWord
  })
}

3. ======>

function anagrams(word, words) {
	//use map then use a callback function that checks if all of the letters in word exist in words
	//include a check for length
	return words.filter(function(x){
		if (x.length === word.length) {
			if (x.split("").sort().join("").toLowerCase().includes(word.split("").sort().join("").toLowerCase())) {
				return x;
			}
		}
	});
	//return another list with all of the matching words
	//or return an empty list if there are none
}

4. ======>

let anagrams = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));

5. ======>

function anagrams(a, b) {
  return b.filter(w=>''+[...a].sort()===''+[...w].sort());
}

*/