function longest(s1, s2) {

    s1 += s2
    let arr = []

    for (let i = 0; i < s1.length; i++) {
        let found = true
        for (let j = 0; j < arr.length; j++) {
            if (s1[i] == arr[j]) {
                found = false
            }
        }
        if (found == true) {
            arr.push(s1[i])
        }
    }
    // console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")

/*
=====SOAL======
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/
/*
CARA ORANG LAIN
1. ======>

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

2. ======>
3. ======>
*/