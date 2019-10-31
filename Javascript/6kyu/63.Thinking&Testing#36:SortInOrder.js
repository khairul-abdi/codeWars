function testIt(arr) {
  let count
  for (let i = 0; i < arr.length; i++) {

  }

  console.log(arr)
  return arr.sort();
}

console.log(testIt(["2", "3", "4"]), ["2", "3", "4"])
console.log(testIt(["5", "6", "7"]), ["5", "6", "7"])
//return arr.sort()?
console.log(testIt(["4", "3", "2"]), ["2", "3", "4"])
console.log(testIt(["5", "7", "6"]), ["5", "6", "7"])
console.log(testIt(['5', '9', 'Q', 'K', '2']), ['2', '5', '9', 'Q', 'K'])
console.log(testIt(['R', 'G', 'F', 'S', 'V', '3', 'V', 'R', '5', '4', '2', '8', 'Z']), 'Invalid input!')
console.log(testIt(['Q', '4', 'K', 'A', '6', '2', '7', 'T', 'T', 'A', '4', 'Q']), ['2', '4', '4', '6', '7', 'T', 'T', 'Q', 'Q', 'K', 'A', 'A'])


// A   B   C   D   E  F  G  H  I  J   K   L   M   N   O   P   Q   R   S   T   U   V   W    X   Y   Z
// 1   2   3   4   5  6  7  8  9  10  11  12  13  14  15  16  17  18  19  20  21  22  23   24  25  26

// Q  J  K  T  A   17  10   11   20  1
// T  J  Q  K  A   20  10   17   11  1