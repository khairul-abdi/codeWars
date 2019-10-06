function powersOfTwo(n) {
    let arr = []
    for (let i = 0; i <= n; i++) {
        arr.push(Math.pow(2, i))
    }
    return arr
}

console.log(powersOfTwo(0), [1])
console.log(powersOfTwo(1), [1, 2])
console.log(powersOfTwo(4), [1, 2, 4, 8, 16])

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>

var powersOfTwo = n => Array.from({length : n + 1}, (val, i) => Math.pow(2, i));

2. ======>

powersOfTwo = n => [...Array(n + 1)].map((e, i) => Math.pow(2, i));

3. ======>

function powersOfTwo(n)
{
  var array = [];
  var lastNumber = 0.5;
  for (var i = 0; i <= n; i++)
  {
    lastNumber *= 2;
    array.push(lastNumber);
  }
  return array;
}

4.======>

function powersOfTwo(n){
var i = 0;
array = [];
while ( i <=n){
array.push(2**i);
i++;
}
  return array;
}

5. =======>

function powersOfTwo(n){
  var ar = new Array();
  var p=1;
  for (let i=0;i<=n;i++){
    ar.push(p)
    p*=2;
  }
  return ar;
}

*/