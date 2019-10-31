function theBiggestSearchKeys(...a) {
    // console.log('AAAA : ', a)

    let arr = []
    for (let i = 0; i < a.length; i++) {
        let count = 0
        // console.log(a[i])
        for (let j = 0; j < a[i].length; j++) {
            // console.log(a[i][j])
            if (a[i][j]) {
                count += 1
            }
        }
        arr.push([a[i], count])
    }
    // console.log('A : ', arr)

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i][1] < arr[j][1]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    // console.log(arr)

    let output = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] == arr[0][1]) {
            // output.push(arr[i][0])
            if (arr.length == 1) {
                output += `'${arr[i][0]}'`
            } else {
                output += `'${arr[i][0]}', `
            }
        }
    }
    // return output
    return (output.length === 0) ? '\'\'' : output;
}

console.log(theBiggestSearchKeys("key1", "key22", "key333"), "'key333'");
console.log(theBiggestSearchKeys("coding", "sorting", "tryruby"), "'sorting', 'tryruby'");
console.log(theBiggestSearchKeys("small keyword", "how to coding?", "very nice kata", "a lot of keys", "I like Ruby!!!"), "'I like Ruby!!!', 'how to coding?', 'very nice kata'");
console.log(theBiggestSearchKeys("pippi"), "'pippi'");
console.log(theBiggestSearchKeys(), "''");

/*
=====SOAL======
You're a programmer in a SEO company. The SEO specialist of your company gets the list of all project keywords everyday, then he looks for the longest keys to analyze them.

You will get the list with keywords and must write a simple function that returns the biggest search keywords and sorts them in lexicographical order.

For instance you might get:

'key1', 'key2', 'key3', 'key n', 'bigkey2', 'bigkey1'
And your function should return:

"'bigkey1', 'bigkey2'"
Don't forget to rate this kata! Thanks :)
*/
/*
CARA ORANG LAIN
1. ======>

function theBiggestSearchKeys(...args) {
  let maxLength = Math.max(...args.map(a => a.length)),
      result = args.filter(a => a.length === maxLength).sort().map(a => `'${a}'`).join(', ');
  return (result.length === 0) ? '\'\'' : result;
}

2. ======>

function theBiggestSearchKeys(...strs) {
  if (strs.length === 0)
    return "''";
    
  let words = [],
      result = "";

  let maxLen = strs.reduce((acc, el) => {
    if (el.length > acc)
      return el.length;
    return acc;
  }, strs[0].length);
  
  
  strs.forEach((str) => {
    if (str.length === maxLen)
      words.push(str);
  });
  
  words.sort();
  
  words.forEach((str) => {
    result = result + `'${str}', `;
  });
  
  result = result.slice(0, result.length - 2);
  
  return result;
}

3. ======>
*/