function list(names) {
  if (names.length == 0) return ''
  if (names.length == 1) return names[0].name
  if (names.length == 2) return names[0].name + ' & ' + names[1].name

  let str = ''
  for (let i = 0; i < names.length - 2; i++) {
    if (i == names.length - 3) {
      str += names[i].name + names[i + 1].name + ' & ' + names[i + 2].name
    } else {
      str += names[i].name + ', '
    }
  }
  return str
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