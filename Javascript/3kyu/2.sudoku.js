function sudoku(gameArr) {
    var emptySpot = nextEmtySpot(gameArr);
    var r = emptySpot[0];
    var c = emptySpot[1];

    // if the game is unsolvable don't even try to solve it
    if (!isValidSudoku(gameArr)) return gameArr;

    // if no vacant spot is left, board is solved
    if (r === -1) {
        return gameArr;
    };

    var possArr = possiblities(r, c, gameArr);

    for (var k = 0; k < possArr.length && nextEmtySpot(gameArr)[0] !== -1; k++) {
        gameArr[r][c] = possArr[k];
        sudoku(gameArr);
    }

    // if no possible value leads to a solution reset this value 
    if (nextEmtySpot(gameArr)[0] !== -1) gameArr[r][c] = 0;

    return gameArr;
}

function nextEmtySpot(gameArr) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (gameArr[i][j] === 0) return [i, j];
        }
    }
    return [-1, -1];
}

function possiblities(r, c, gameArr) {
    var possArr = [];
    var row = [];
    var col = [];
    var quad = [];
    var k = 0;
    var l = 0;
    if (r <= 2) k = 0;
    else if (r <= 5) k = 3;
    else k = 6;
    if (c <= 2) l = 0;
    else if (c <= 5) l = 3;
    else l = 6;

    for (var i = 0; i < 9; i++) {
        row.push(gameArr[i][c]);
    }
    for (var j = 0; j < 9; j++) {
        col.push(gameArr[r][j]);
    }
    for (var i = k; i < k + 3; i++) {
        for (var j = l; j < l + 3; j++) {
            quad.push(gameArr[i][j]);
        }
    }

    for (var n = 1; n < 10; n++) {
        if (row.indexOf(n) === -1 && col.indexOf(n) === -1 && quad.indexOf(n) === -1) {
            possArr.push(n);
        }
    }
    return possArr;
}

function checkQuadrant(r, c, gameArr) {
    var qudarantArr = [];
    for (var i = r; i < r + 3; i++) {
        for (var j = c; j < c + 3; j++) {
            if (qudarantArr.indexOf(gameArr[i][j]) === -1 || gameArr[i][j] === 0) {
                qudarantArr.push(gameArr[i][j]);
            } else {
                return false;
            }
        }
    }
    return true;
}

function isValidSudoku(gameArr) {
    if (!checkQuadrant(0, 0, gameArr)) return false;
    if (!checkQuadrant(0, 3, gameArr)) return false;
    if (!checkQuadrant(0, 6, gameArr)) return false;

    if (!checkQuadrant(3, 0, gameArr)) return false;
    if (!checkQuadrant(3, 3, gameArr)) return false;
    if (!checkQuadrant(3, 6, gameArr)) return false;

    if (!checkQuadrant(6, 0, gameArr)) return false;
    if (!checkQuadrant(6, 3, gameArr)) return false;
    if (!checkQuadrant(6, 6, gameArr)) return false;

    for (var i = 0; i < gameArr.length; i++) {
        var rowNumbers = [];
        for (var j = 0; j < gameArr.length; j++) {
            if (rowNumbers.indexOf(gameArr[i][j]) === -1 || gameArr[i][j] === 0) {
                rowNumbers.push(gameArr[i][j]);
            } else {
                return false;
            }
        }
    }

    for (var i = 0; i < gameArr.length; i++) {
        var colNumbers = [];
        for (var j = 0; j < gameArr.length; j++) {
            if (colNumbers.indexOf(gameArr[j][i]) === -1 || gameArr[j][i] === 0) {
                colNumbers.push(gameArr[j][i]);
            } else {
                return false;
            }
        }
    }
    return true;
}

var gameArr = [
    [2, 0, 3, 0, 0, 8, 6, 0, 7],
    [1, 4, 0, 7, 2, 6, 0, 0, 9],
    [5, 0, 7, 1, 3, 9, 4, 2, 8],
    [0, 2, 5, 0, 8, 1, 9, 0, 4],
    [4, 1, 0, 9, 0, 3, 2, 0, 5],
    [0, 7, 9, 2, 0, 5, 0, 3, 6],
    [6, 0, 2, 0, 1, 0, 0, 9, 3],
    [7, 0, 0, 5, 0, 2, 0, 0, 1],
    [0, 8, 1, 3, 6, 7, 0, 4, 0]
];

sudoku(gameArr);

console.log('Solved');
console.log(gameArr);
console.log(isValidSudoku(gameArr));


var puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

// var solution = [
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ];

sudoku(puzzle);

console.log('Solved');
console.log(puzzle);
console.log(isValidSudoku(gameArr));

/*
=====SOAL======
Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

For Sudoku rules, see the Wikipedia article.

var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

sudoku(puzzle);
/* Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] 
*/
/*
CARA ORANG LAIN
1. ======>
//Menggunakan Recursif

function sudoku(puzzle) {
  const valid = (x,y) => {
    var v = [];
    for(var i=0; i<3; i++) {
      for(var j=0; j<3; j++) {
        v.push(puzzle[x][i*3+j])
        v.push(puzzle[i*3+j][y])
        v.push(puzzle[3*Math.floor(x/3)+i][3*Math.floor(y/3)+j])
      }
    }
    return [1,2,3,4,5,6,7,8,9].filter(e => v.indexOf(e) == -1)
  }
  const rec = (x,y) => {
    if(y == 9) {
      return puzzle
    } else if (!puzzle[x][y]) {
      const correct = valid(x,y).some(i => {
        puzzle[x][y] = i;
        return rec((x+1)%9,y+(x==9?1:0))
      })
      if (correct)
        return puzzle;
      puzzle[x][y] = 0;
    } else {
      return rec((x+1)%9,y+(x==8?1:0))
    }
  }
  return rec(0,0)
}

2. ======>

function sudoku(a, x=0, y=0) {
    function next(x, y) {
        if (++y == 9) (x++, y=0);
        return x==9 ? a : sudoku(a,x,y);
    }
    function getFree(x, y) {
        let [xx, yy] = [~~(x / 3) * 3, ~~(y / 3) * 3];
        let nums = a[x].concat(a[0].map((_,i)=>a[i][y])).concat(a.slice(xx,xx+3).reduce((p,c)=>p.concat(c.slice(yy,yy+3)), []));
        return [1,2,3,4,5,6,7,8,9].filter(v=>!nums.includes(v));
    }
    a = a.slice().map(x=>x.slice());
    return a[x][y] ? next(x,y) : getFree(x,y).reduce((ans,n)=>(a[x][y]=n, ans||next(x,y)), 0);
}

3. ======>

function sudoku(puzzle) {
  while (puzzle.some( l => l.some( p => p===0 ) ))  // while some unfilled pos.
    for (let y=0; y<9; y++)                         // scan whole board
      for (let x=0; x<9; x++)
        if (puzzle[y][x]===0) {                     // and with unfilled do:
          let p = [true,true,true,true,true,        // init possible digits
                   true,true,true,true,true];
          for (let i = 0; i<9; i++) {               // exclude all digits
            p[ puzzle[y][i] ] = false;              // found in same row
            p[ puzzle[i][x] ] = false;              // and column
          }
          for (let i=3*~~(x/3); i<3*(~~(x/3)+1); i++)    // exclude all
            for (let j=3*~~(y/3); j<3*(~~(y/3)+1); j++)  // digits in
              p[ puzzle[j][i] ] = false;                 // local 3x3 sqare
          if (p.reduce( (p,c) => p+(c?1:0) ) === 1) // if just one possible left
            puzzle[y][x] = p.indexOf(true);         // put it in current place
        }
  return puzzle;
}

*/