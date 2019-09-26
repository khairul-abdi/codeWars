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

function duplicateCount(text) {

	var temp = text.toLowerCase().split('').sort()
	var count = 0
	var huruf = []
	var output = []

	// console.log(temp)

	for (let i = 0; i < temp.length; i++) {
		// console.log(temp[i])
		if (temp[i] == temp[temp.length - 1]) {
			output.push(huruf)
			huruf = []
			huruf.push(temp[i])
			output.push(huruf)
			// console.log(huruf)
		} else if (huruf.length == 0) {
			huruf.push(temp[i])
		} else if (temp[i] == temp[i - 1]) {
			huruf.push(temp[i])
		} else if (temp[i] != temp[i - 1]) {
			output.push(huruf)
			huruf = []
			huruf.push(temp[i])
		}
	}
	// console.log(output)

	for (let i = 0; i < output.length; i++) {
		if (output[i].length >= 2) {
			count += 1
		}
	}
	return count
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")