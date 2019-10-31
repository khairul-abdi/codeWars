function reverseVowels(str) {

  str = str.split('')
  // console.log(str)

  let arr = []
  let index = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'A') {
      arr.push(str[i])
      index.push(i)
    } else if (str[i] == 'e' || str[i] == 'E') {
      arr.push(str[i])
      index.push(i)
    } else if (str[i] == 'i' || str[i] == 'I') {
      arr.push(str[i])
      index.push(i)
    } else if (str[i] == 'o' || str[i] == 'O') {
      arr.push(str[i])
      index.push(i)
    } else if (str[i] == 'u' || str[i] == 'U') {
      arr.push(str[i])
      index.push(i)
    }
  }
  // console.log('ARR:=> ', arr)
  // console.log('Index ', index)
  arr = arr.reverse()
  // console.log('ARR:=>|| ', arr)

  for (let i = 0; i < index.length; i++) {
    str[index[i]] = arr[i]
  }
  return str.join('')
}

console.log(reverseVowels("Hello!"))//, "Holle!", "Expected 'Holle!', got " + reverseVowels("Hello!"));
// console.log(reverseVowels("TomatOes"))//, "Temotaos", "Expected 'Temotaos', got " + reverseVowels("Tomatoes"));
console.log(reverseVowels("Reverse Vowels In A String"))//, "RivArsI Vewols en e Streng", "Expected 'RivArsI Vewols en e Streng', got " + reverseVowels("Reverse Vowels In A String"));

/*
=====SOAL======
In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

reverseVowels("Hello!"); // "Holle!"
reverseVowels("Tomatoes"); // "Temotaos"
reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.
*/
/*
CARA ORANG LAIN
1. ======>

function reverseVowels(str) {
  const vs = str.match(/[aeiou]/gi);
  return (vs === null) ? str : str.replace(/[aeiou]/gi, c => vs.pop());
}

2. ======>

function reverseVowels(str) {
  var s='';
  for (var i=0; i<str.length; ++i)
    if (str[i].toLowerCase()=='a'||str[i].toLowerCase()=='e'||str[i].toLowerCase()=='u'||str[i].toLowerCase()=='i'||str[i].toLowerCase()=='o')
      s=str[i]+s;
  var ans='';
  var k=0;
  for (var i=0; i<str.length; ++i)
    if (str[i].toLowerCase()=='a'||str[i].toLowerCase()=='e'||str[i].toLowerCase()=='u'||str[i].toLowerCase()=='i'||str[i].toLowerCase()=='o')
      ans+=s[k++];
    else
      ans+=str[i];
  return ans;
}

3. ======>
*/