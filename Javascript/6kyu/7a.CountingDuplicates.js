function duplicateCount(text) {

  if (text == '') return 0
  text = text.toLowerCase()
  let arr = []
  for (let i = 0; i < text.length; i++) {
    let found = false
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][0] == text[i]) {
        arr[j][1] += 1
        found = true
      }
    }
    if (found == false) arr.push([text[i], 1])
  }
  console.log(arr)
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] > 1) count++
  }
  return count
}

// console.log(duplicateCount(""), 0);
// console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
// console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
// console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")