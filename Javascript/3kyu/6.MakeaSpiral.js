function spiralize(size) {
  if (size == 2) return [[1, 1], [0, 1]];
  if (size == 3) return [[1, 1, 1], [0, 0, 1], [1, 1, 1]];
  var base = spiralize(size - 2);
  var res = [[], []];
  for (var i = 0; i < size; i++) (res[0].push(1)) && (res[1].push(0));
  res[1][size - 1] = 1;
  for (var i = size - 3; i >= 0; i--) {
    res.push(base[i].reverse().concat([0, 1]));
  }
  res[size - 1][size - 2] = 1;
  return res;
}

console.log(spiralize(5), [
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]])
console.log(spiralize(8), [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1]])

/*
=====SOAL======
Your task, is to create a NxN spiral with a given size.

For example, spiral with size 5 should look like this:

00000
....0
000.0
0...0
00000
and with the size 10:

0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000
Return value should contain array of arrays, of 0 and 1, for example for given size 5 result should be:

[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Because of the edge-cases for tiny spirals, the size will be at least 5.

General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
*/
/*
CARA ORANG LAIN
1. ======>

function spiralize(size) {
  if (size == 2) return [ [1,1], [0,1] ];
  if (size == 3) return [ [1,1,1], [0,0,1], [1,1,1] ];
  var base = spiralize(size-2);
  var res = [[],[]];
  for (var i = 0; i < size; i++) (res[0].push(1)) && (res[1].push(0));
  res[1][size-1] = 1;
  for (var i = size-3; i >= 0; i--) {
    res.push(base[i].reverse().concat([0,1]));
  }
  res[size-1][size-2] = 1;
  return res;
}

2. ======>

var spiralize = function(size) {

    let a = Array(size).fill(0).map( i => Array(size) );

    let v = 1;
    for (let j = 0; j < Math.ceil(size/2); j++) {
        for (let i = j; i < size - j; i++) {
            a[i][j] = a[j][i] = v;
            a[i][size - 1 - j] = a[size - 1 - j][i] = v;
        }
        v = ++v%2;
        a[j + 1][j] = v;
    }

    return a;
};

3. ======>

var spiralize = function(size) {
  var r = [], h = Math.floor(size / 2) + 1;
  for (var i = 0; i < size; i++){
    r[i] = i < h ? l(i,size,true) : l(size - i - 1,size,false);;
  }
  return r;
}

var l = function(index, size, t) {
  var r, s=index%2===0;
  r=new Array(size).fill(s?1:0);
  for (var i = 0; i < index; i++) {
    if ((i%2 !== 0 && s)||(i%2 === 0 && !s)) {
      var li = t ? i - 2: i, ri = size-i-1;
      if(li>=0)r[li]=Math.abs(r[li]-1);
      r[ri]=Math.abs(r[ri]-1)
    }
  }
  return r;
}

*/