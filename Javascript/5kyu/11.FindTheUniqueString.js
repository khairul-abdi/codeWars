function findUniq(arr) {

    let output = []
    for (let i = 0; i < arr.length; i++) {
        let temp = []
        let str = ''
        let tempStr = ''
        for (let j = 0; j < arr[i].length; j++) {
            temp.push(arr[i][j].toLowerCase())
        }
        // str = temp.sort().join('')
        str = temp.sort()
        for (let k = 0; k < str.length; k++) {
            if (str[k] != str[k + 1]) {
                tempStr += str[k]
            }
        }
        output.push(tempStr)
    }
    // console.log(output)
    let result = []
    for (let i = 0; i < output.length; i++) {
        let found = false
        for (let j = 0; j < result.length; j++) {
            if (output[i] == result[j][0]) {
                result[j][1] += 1
                found = true
            }
        }
        if (found == false) {
            result.push([output[i], 1, i])
        }
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i][1] > result[j][1]) {
                let temp = result[j]
                result[j] = result[i]
                result[i] = temp
            }
        }
    }
    return arr[result[0][2]]
}

// console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']), 'BbBb');
// console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']), 'foo');
// console.log(findUniq(['silvia', 'vasili', 'victor']), 'victor');
// console.log(findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']), 'Harry Potter');
// console.log(findUniq(['    ', 'a', ' ']), 'a');
console.log(findUniq(['o', 'b', 'b', 'b']), 'o');

/*
=====SOAL======
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.
*/
/*
CARA ORANG LAIN
1. ======>

const unique = (x, i, ar) => ar.indexOf(x) === ar.lastIndexOf(x);

const getUniques = x => [...new Set([...x.toLowerCase()].sort())].join('');

const findUniq = arr => arr[arr.map(getUniques).findIndex(unique)];

2. ======>

function findUniq(arr) {
  let [a,b,c] = arr.slice(0,3)
  
  if (!similar(a,b) && !similar(a,c)) return a
  for (d of arr) if (!similar(a,d)) return d
}

function similar (x, y) {
  x = new Set(x.toLowerCase())
  y = new Set(y.toLowerCase())

  if (x.size !== y.size) return false
  for (z of x) if (!y.has(z)) return false

  return true
}

3. ======>

function findUniq(arr) {
  var tmp = arr.map(el=>Array.from(new Set(el.toLowerCase().split(''))).sort().join('')),
  str = tmp[0]==tmp[1] ? tmp[0] : tmp[2];
  for(var i = 0; i < arr.length; i++) if(tmp[i]!=str) return arr[i]
}

*/