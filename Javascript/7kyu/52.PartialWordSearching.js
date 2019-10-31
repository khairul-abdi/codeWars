function wordSearch(query, seq) {
  console.log(query.toLowerCase())
}

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"])
console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"])
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]), ["aB", "Abc", "zAB"])
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]), ["Empty"])