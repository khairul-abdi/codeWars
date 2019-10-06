function str(str) {
    let temp = ''
    let tempArr = []
    let result = ''
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i])

        if (str[i] == ' ') {
            tempArr.push(temp)
            temp = ''
        } else {
            temp += str[i]
        }
    }
    tempArr.push(temp)
    // console.log(tempArr)

    for (let i = 0; i < tempArr.length; i++) {
        for (let j = 0; j < tempArr[i].length; j++) {
            if (tempArr[i][j] == tempArr[i][0]) {
                result += tempArr[i][0].toUpperCase()
            } else {
                result += tempArr[i][j]
            }
        }
        result += ' '
    }

    return result
};

//CARA ORANG LAIN

String.prototype.toJadenCase = function () {
    return this.replace(/(^\w{1}|\s\w{1})/g, word => word.toUpperCase())
};

console.log(str("How can mirrors be real if our eyes aren't real")) //, "How Can Mirrors Be Real If Our Eyes Aren't Real"

/*
=====SOAL======
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't 
*/
/*
CARA ORANG LAIN
1. ======>

String.prototype.toJadenCase = function () {

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return this.split(' ').map(capitalizeFirstLetter).join(' ');
};

2. ======>

String.prototype.toJadenCase = function () {
  var words = this.split(' ');

  for(var i = 0, wordsLen = words.length; i < wordsLen; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
};

3. ======>

String.prototype.toJadenCase = function () {
  var x = '';
  x += this[0].toUpperCase();
  for (var i = 1; i < this.length; i++) {
    if (this.charAt(i) == " ") {
      x += (this[i] + this[i + 1].toUpperCase());
      i++; // Increment i to stop the function concatenating the first letter of a new word twice
    } else {
      x += this[i];
    }
  }
  return x;
};

*/