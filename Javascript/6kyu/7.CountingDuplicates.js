function duplicateCount(text) {
    let temp = []
    let output = []
    if (text.length == 0) {
        return 0
    }
    //cara built in function
    // var text = text.toLowerCase().split('')

    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let small = ''
    for (let i = 0; i < text.length; i++) {
        let found = false
        for (let j = 0; j < upper.length; j++) {
            if (text[i] == upper[j]) {
                small += lower[j]
                found = true
            }
        }
        if (found == false) {
            small += text[i]
        }
    }

    // console.log(small)
    let split = []
    for (let i = 0; i < small.length; i++) {
        split.push(small[i])
    }
    // console.log(split)

    for (let i = 0; i < split.length; i++) {
        for (let j = i + 1; j < split.length; j++) {
            if (split[i] > split[j]) {
                let temp = split[j]
                split[j] = split[i]
                split[i] = temp
            }
        }
    }
    // console.log(split)

    for (let i = 0; i < split.length; i++) {
        if (temp.length == 0) {
            temp.push(split[i])
        } else if (split[i] == split[i - 1]) {
            temp.push(split[i])
        } else if (split[i] != split[i - 1]) {
            output.push(temp)
            temp = []
            temp.push(split[i])
        }
    }
    output.push(temp)
    // console.log(output)
    let count = 0
    for (let i = 0; i < output.length; i++) {
        if (output[i].length > 1) {
            count++
        }
    }
    return count
}

console.log(duplicateCount("")) // 0
console.log(duplicateCount("abcde")) // 0
console.log(duplicateCount("aabbcde")) // 2
console.log(duplicateCount("aabBcde")) // 2  "should ignore case"
console.log(duplicateCount("Indivisibility")) // 1
console.log(duplicateCount("Indivisibilities")) // 2  "characters may not be adjacent"

/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

/*
CARA ORANG LAIN
1.=============>
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

2.=============>
const duplicateCount = (text) => (text.match(/(\w)(?=(?!.*\1.*\1).*\1)/gi) || []).length;

3. ============>
function duplicateCount(text){
  return [...new Set([...text.toLowerCase()].sort().filter((c,p,a)=>c===a[p-1]))].length
}
*/