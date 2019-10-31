function hasSubpattern(string) {
    let arr = []
    for (let i = 0; i < string.length; i++) {
        let found = false
        for (let j = 0; j < arr.length; j++) {
            if (string[i] == arr[j]) {
                found = true
            }
        }
        if (found == false) {
            arr.push(string[i])
        }
    }
    console.log(arr)
}

console.log(hasSubpattern("a"), "a");
console.log(hasSubpattern("aaaa"), "a");
console.log(hasSubpattern("abcd"), "abcd");
console.log(hasSubpattern("babababababababa"), "ab");
console.log(hasSubpattern("bbabbaaabbaaaabb"), "ab");
console.log(hasSubpattern("123a123a123a"), "123a");
console.log(hasSubpattern("12aa13a21233"), "123a");
console.log(hasSubpattern("123A123a123a"), "111222333Aaa");
console.log(hasSubpattern("12aa13a21233A"), "111222333Aaaa");
console.log(hasSubpattern("abcdabcaccd"), "aaabbccccdd");

/*
=====SOAL======
Similar to the previous kata, but this time you need to operate with shuffled strings to identify if they are composed repeating a subpattern

Since there is no deterministic way to tell which pattern was really the original one among all the possible permutations of a fitting subpattern, return a subpattern with sorted characters, otherwise return the base string with sorted characters (you might consider this case as an edge case, with the subpattern being repeated only once and thus equalling the original input string).

For example:

hasSubpattern("a") === "a"; //no repeated pattern, just one character
hasSubpattern("aaaa") === "a"; //just one character repeated
hasSubpattern("abcd") === "abcd"; //base pattern equals the string itself, no repetitions
hasSubpattern("babababababababa") === "ab"; //remember to return the base string sorted
hasSubpattern("bbabbaaabbaaaabb") === "ab"; //same as above, just shuffled
*/
/*
CARA ORANG LAIN
1. ======>
2. ======>
3. ======>
*/