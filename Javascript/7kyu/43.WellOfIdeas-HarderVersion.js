function well(x) {
    // console.log(x)
    let count = 0
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
            // console.log(x[i][j]);
            if (!Number(Number(x[i][j])) && x[i][j].toLowerCase() == 'good') count++
        }
    }
    return (count == 0) ? 'Fail!' : (count <= 2) ? 'Publish!' : (count > 2) ? 'I smell a series!' : ''
}

console.log(well([
    ['bad', 'bAd', 'bad'],
    ['bad', 'bAd', 'bad'],
    ['bad', 'bAd', 'bad']
]), 'Fail!');

console.log(well([
    ['gOOd', 'bad', 'BAD', 'bad', 'bad'],
    ['bad', 'bAd', 'bad'],
    ['GOOD', 'bad', 'bad', 'bAd']
]), 'Publish!');

console.log(well([
    ['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'],
    ['bad'],
    ['gOOd', 'BAD']
]), 'I smell a series!')

console.log(well([
    ['1', '1', 'bad'],
    ['bad', 'bAd', 'bad'],
    ['bad', 'bAd', 'bad']
]), 'Fail!');

/*
=====SOAL======
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.
*/
/*
CARA ORANG LAIN
1. ======>

function well(x) {
  let match = (''+x).match(/good/gi) || []
  if (match.length == 0) return 'Fail!'
  if (match.length <= 2) return 'Publish!'
  return 'I smell a series!'
}

2. ======>

function well(x){
  var count = 0;
  x.forEach(function(arr) {
    arr.forEach(function(elem) {
      if(typeof(elem) === 'string' && elem.toLowerCase() === 'good') {
        count++;
      }
    });
  });
  if(count === 0) {
    return 'Fail!';
  }
  return count > 2 ? 'I smell a series!' : 'Publish!';
}

3. ======>

function isGood(idea) {
  return typeof idea === 'string' && idea.toLowerCase() === 'good'
}

function well([first, ...rest]) {
  const all = first.concat(...rest)
  const good = all.filter(isGood).length
  if (good > 2) return 'I smell a series!'
  if (good > 0) return 'Publish!'
  return 'Fail!'
}

*/