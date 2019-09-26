function repeatStr(n, s) {
    let output = ''
    for (let i = 0; i < n; i++) {
        output += s
    }

    return output;
}

console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");

/*
1.===============>

function repeatStr(n, s) {
    return s.repeat(n);
}

2.===============>

repeatStr = (n, s) => s.repeat(n)

3.===============>

function repeatStr (n, s) {
  return n > 1 ? s + repeatStr(--n, s) : s;
}
*/