function cobaArguments() {
  // return arguments.length //dapat digunakan length walaupun berbentuk objek
  return arguments
}

console.log(cobaArguments(2, '3', 4, false, 'hi', 'nona'))