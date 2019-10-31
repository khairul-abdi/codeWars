function solution(input, markers) {
    let arr = input.split('\n');
    let mark;
    for (let i in arr) {
        if (arr[i].indexOf(markers[0]) !== -1) {
            mark = arr[i].indexOf(markers[0])
        } else if (arr[i].indexOf(markers[1]) !== -1) {
            mark = arr[i].indexOf(markers[1])
        } else continue
        arr[i] = arr[i].slice(0, mark - 1)
    }
    return arr.join('\n')
}

function checkComments(input, markers, expected) {
    var actual
    actual = solution(input, markers)
    return Test.expect(actual === expected, "Returned '" + actual + "' but expected '" + expected + "'")
}

checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")
/*
=====SOAL======
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/
/*
CARA ORANG LAIN
1. ======>
2. ======>
3. ======>
*/