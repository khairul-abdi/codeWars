function letterFrequency(text) {
    var arr = [];
    var s = text.toLowerCase();
    for (var i = 0; i < s.length; ++i) {
        if (s[i] >= 'a' && s[i] <= 'z') {
            var count = 0;
            for (var j = 0; j < arr.length; ++j)
                if (arr[j][0] == s[i]) {
                    arr[j][1]++;
                    count = 1;
                    break;
                }
            if (count == 0)
                arr.push([s[i], 1]);
        }
    }
    for (var i = 0; i < arr.length - 1; ++i)
        for (var j = i + 1; j < arr.length; ++j)
            if ((arr[i][1] < arr[j][1]) || (arr[i][1] == arr[j][1] && arr[i][0] > arr[j][0])) {
                var c = arr[i];
                arr[i] = arr[j];
                arr[j] = c;
            }
    return arr
}

/*
=====SOAL======
Write a function that takes a piece of text in the form of a string and returns the letter frequency count for the text. This count excludes numbers, spaces and all punctuation marks. Upper and lower case versions of a character are equivalent and the result should all be in lowercase.

The function should return a list of tuples (in Python and Haskell) or arrays (in other languages) sorted by the most frequent letters first. The Rust implementation should return an ordered BTreeMap. Letters with the same frequency are ordered alphabetically. For example:

  letterFrequency('aaAabb dddDD hhcc')
will return

  [['d',5], ['a',4], ['b',2], ['c',2], ['h',2]]
Letter frequency analysis is often used to analyse simple substitution cipher texts like those created by the Caesar cipher.
*/
/*
CARA ORANG LAIN
1. ======>

function letterFrequency(text){
  var arr=[];
  var s=text.toLowerCase();
  for (var i=0; i<s.length; ++i)
  {
    if (s[i]>='a' && s[i]<='z')
    {
      var count=0;
      for (var j=0; j<arr.length; ++j)
        if (arr[j][0]==s[i])
        {
          arr[j][1]++;
          count=1;
          break;
        }
      if (count==0)
        arr.push([s[i],1]);
    }
  }
  for (var i=0; i<arr.length-1; ++i)
    for (var j=i+1; j<arr.length; ++j)
    if ((arr[i][1]<arr[j][1])||(arr[i][1]==arr[j][1] && arr[i][0]>arr[j][0]))
    {
      var c=arr[i];
      arr[i]=arr[j];
      arr[j]=c;
    }
  return arr
}

2. ======>

function letterFrequency(text){
  return (text.toLowerCase()
              .replace(/[^a-z]/g,"")
              .split("")
              .sort()
              .join("")
              .match(/(\w)\1+|(\w)/g) || [])
              .map(function(v){ return [v[0], v.length]; })
              .sort(function(a,b){ 
                  if (a[1] === b[1]) return (a[0].charCodeAt(0) - b[0].charCodeAt(0))
                  else return b[1] - a[1]
              });
}

3. ======>

const letterFrequency = string => {
  const chars = string
    .replace(/[^a-zA-Z]/g, '')
    .toLowerCase()
    .split``
    .reduce((r, e) => {
      r[e] = r[e] ? ++r[e] : 1;
      return r;
    }, []);

  const result = [];
  for (let k in chars) result.push([k, chars[k]]);
  return result.sort((x, y) => 
         x[1] === y[1] ?
           x[0].localeCompare(y[0]) :
           y[1] - x[1]);
}

*/