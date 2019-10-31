function list(names) {
  let result = ''
  if (names.length == 1) return names[0].name
  for (let i = 0; i < names.length; i++) {
    if (i == names.length - 1) {
      result += ' & ' + names[i].name
    } else if (i == names.length - 2) {
      result += names[i].name
    } else {
      result += names[i].name + ', '
    }
  }
  return result
}

console.log(list([{
    name: 'Bart'
  }, {
    name: 'Lisa'
  }, {
    name: 'Maggie'
  }, {
    name: 'Homer'
  }, {
    name: 'Marge'
  }]), 'Bart, Lisa, Maggie, Homer & Marge',
  "Must work with many names")
console.log(list([{
    name: 'Bart'
  }, {
    name: 'Lisa'
  }, {
    name: 'Maggie'
  }]), 'Bart, Lisa & Maggie',
  "Must work with many names")
console.log(list([{
    name: 'Bart'
  }, {
    name: 'Lisa'
  }]), 'Bart & Lisa',
  "Must work with two names")
console.log(list([{
  name: 'Bart'
}]), 'Bart', "Wrong output for a single name")
console.log(list([]), '', "Must work with no names")

/*
=====SOAL======
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/
/*
CARA ORANG LAIN
1. ======>

function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }

2. ======>

function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}

3. ======>

function list( names ){
  return names.reduce(function(prev, curr, i, arr){
    return prev + curr.name + (i<arr.length-2?', ':i==arr.length-2?' & ':'');
  }, '');
}

*/