var check1800 = function (str) {

    // console.log(str.slice(0, 11))
    let temp = ''
    let result = []
    let output = ['WAR', 'YAP', 'WAS', 'ZAP']
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'W') {
            break
        } else {
            temp += str[i]
        }
    }


    for (let i = 0; i < output.length; i++) {
        result.push(`${temp}${output[i]}`)
    }

    return result
}

console.log(check1800("1-800-CODE-WAR"))
/*
[
    "1-800-CODE-WAR", 
    "1-800-CODE-YAP", 
    "1-800-CODE-WAS", 
    "1-800-CODE-ZAP"
];
*/



/*
SEBAGAI CONTOH Calculating with Functions di Codewars

var show = function(s) {
  console.log(s);
  return s;
}

var equalSet = function(ary1, ary2) {
  var as = new Set(ary1), bs = new Set(ary2);
  if (as.size !== bs.size) return false;
  for (var a of as) if (!bs.has(a)) return false;
  return true;
}


describe("SampleTests", function() {

  it("example", function() {
    var expected = [
      "1-800-CODE-WAR", 
      "1-800-CODE-YAP", 
      "1-800-CODE-WAS", 
      "1-800-CODE-ZAP"
    ];
    Test.expect(equalSet(show(check1800("1-800-CODE-WAR")), expected));
  });
});
*/