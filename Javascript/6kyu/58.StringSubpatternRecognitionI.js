function hasSubpattern(string) {

}

console.log(hasSubpattern("a"), false);
console.log(hasSubpattern("aaaa"), true);
console.log(hasSubpattern("abcd"), false);
console.log(hasSubpattern("abababab"), true);
console.log(hasSubpattern("ababababa"), false);
console.log(hasSubpattern("123a123a123a"), true);
console.log(hasSubpattern("123A123a123a"), false);
console.log(hasSubpattern("abbaabbaabba"), true);
console.log(hasSubpattern("abbabbabba"), false);
console.log(hasSubpattern("abcdabcabcd"), false);