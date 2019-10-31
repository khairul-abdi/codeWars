function reverse(str) {
    let arr = []
    let temp = ''
    if (str.length == 0) {
        return ''
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            arr.push(temp)
            temp = ''
        } else {
            temp += str[i]
        }
    }
    if (temp) {
        arr.push(temp)
    }
    // console.log(arr)

    let result = ''
    let tempStr = ''
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            for (let j = arr[i].length - 1; j >= 0; j--) {
                tempStr += arr[i][j]
            }
            if (i == arr.length - 1) {
                result += tempStr
                tempStr = ''
            } else {
                result += tempStr + ' '
                tempStr = ''
            }
        } else {

            if (i == arr.length - 1) {
                result += arr[i]
            } else {
                result += arr[i] + ' '
            }
        }
    }
    return result
}

console.log(reverse("Reverse this string, please!"), "Reverse siht string, !esaelp")
console.log(reverse("I really don't like reversing strings!"), "I yllaer don't ekil reversing !sgnirts")

/*
=====SOAL======
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, 
while ensuring there is exactly one space between each word. Punctuation marks should be treated as if 
they are apart of the word in this kata.
*/
/*
CARA ORANG LAIN
1. ======>

function reverse(str){
	//console.log(str.length)
  let revStr = str.split(" ").map((word,i) => {
		if( i%2 !==0 ){
			return word.split("").reverse().join("");
		}
		return word;
	})
	return revStr.join(" ").trim();
}

2. ======>

function reverse(str){
  
  let arr = str.split(" "); 

  for(var i = 1; i<arr.length; i+=2){
      arr[i] = arr[i].split('').reverse().join(""); 
  }
  
  return arr.join(" ").trim(); 
  
}

3. ======>
*/