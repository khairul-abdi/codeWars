const testit = (a, b) => {
    console.log('My name is khairul')
    return a + b;
}

//Who are you?
//My name is myjinxin.
//Nice to meet you!
console.log(testit(1, 1), 2);
console.log(testit(1, 2), 3);
console.log(testit(2, 2), 4);
//random test:
for (var i = 0; i < 100; i++) {
    var a = ~~(100 * Math.random()),
        b = ~~(100 * Math.random());
    Test.assertSimilar(testit(a, b), a + b);
}
//click "Submit" try more testcase...

/*
=====SOAL======
No No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/
/*
CARA ORANG LAIN
1. ======>

testit=(a='',b='my name is Bubbler')=>a+b

2. ======>

const testit = (a, b) => a + b;

testit.toString = () => "My name is Andrei";

3. ======>

function testit(a,b){
  return "my name is JhonDoe", a+b;
}

*/