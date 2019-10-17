function calculateGridRange(gridNumber) {
    // summary:
    //  Calculates the min and max row and column numbers associated
    //  with a grid number.
    // gridNumber: Number
    //  Expects a zero-based number (0-8)
    // return: Object
    //  An object containing the min and max row and column numbers.
    var rowMin = Math.floor(gridNumber / 3) * 3,
        columnMin = gridNumber % 3 * 3;

    return {
        row: {
            min: rowMin,
            max: rowMin + 2
        },
        column: {
            min: columnMin,
            max: columnMin + 2
        }
    };
}

function calculateGridNumber(row, column) {
    // summary:
    //  Calculate the grid number that corresponds
    //  to the grid in which a row and column pair reside.
    // row: Number
    //  Expects a zero-based number (0-8)
    // column: Number
    //  Expects a zero-based number (0-8)
    // return: Number
    //  The grid number in which this row and column pair reside.
    return (Math.floor(row / 3) * 3) + Math.floor(column / 3);
}

function parse(puzzle) {
    // summary:
    //  Takes a sudoku puzzle and creates a number map based on the 
    //  numbers' locations within the board.  Also provides methods for
    //  dynamically generating maps.
    // puzzle: Array[]
    //  Array of arrays.  Each element in the parent array is a row.
    //  The index of the element in the parent array, corresponds to
    //  the row number.
    //  Each element in a child array is a number in that row, and its
    //  index corresponds to the column number in which it resides.
    // return: Object
    //  Object containing number map, which is a mapping of where every
    //  number currently resides in the board, contains a method for determining if there are still empty spaces on the board, contains method for retrieving the empty spaces in a grid, and contains a method for retrieving the missing numbers for a grid.
    // Example:
    //  Number Map structure.  Example for number "1":
    //  {
    //    "1": {
    //      "1": { // Row number
    //        "3": { // Column number
    //          rowNumber: 1,
    //          columnNumber: 3,
    //          gridNumber: 1
    //        }
    //      } 
    //    }
    //  }
    var numberMaps = {},
        row, i, j,
        number, numberMap,
        columnMax, map;

    for (i = 0; i < 9; i++) {
        row = puzzle[i];

        for (j = 0; j < 9; j++) {

            number = row[j];
            if (number) {
                numberMap = numberMaps[number];

                if (!numberMap) {
                    numberMap = numberMaps[number] = {};
                }

                map = numberMap[i];

                if (!map) {
                    map = numberMap[i] = {};
                }

                map[j] = {
                    rowNumber: i,
                    columnNumber: j,
                    gridNumber: calculateGridNumber(i, j)
                };

            }
        }
    }

    return {
        numberMaps: numberMaps,
        hasEmptySpaces: function () {
            // summary:
            //  Determines if there are empty spaces on the entire board.
            // returns: Boolean
            var i, j;

            for (i = 0; i < 9; i++) {
                for (j = 0; j < 9; j++) {
                    if (!puzzle[i][j]) {
                        return true;
                    }
                }
            }

            return false;
        },
        getEmptySpacesByGridNumber: function (gridNumber) {
            // summary:
            //  Retrieve the empty spaces (spaces filled with the number 0)
            //  for a provided grid.
            // gridNumber: Number
            //  Expects a zero-based number (0-8)
            // return: Object
            //  A row/column mapping of empty spaces.
            var emptySpaces = {},
                range = calculateGridRange(gridNumber),
                row = range.row,
                column = range.column,
                rowMin = row.min,
                rowMax = row.max,
                columnMin = column.min,
                columnMax = column.max,
                i, z, space;

            for (i = rowMin; i < rowMax + 1; i++) {
                for (z = columnMin; z < columnMax + 1; z++) {
                    if (!puzzle[i][z]) {

                        space = emptySpaces[i];

                        if (!space) {
                            space = emptySpaces[i] = {};
                        }

                        space[z] = true;
                    }
                }
            }

            return emptySpaces;
        },
        getMissingNumbersByGrid: function (gridNumber) {
            // summary:
            //  Returns all of the missing numbers for a given grid as
            //  a concatenated string.
            // gridNumber: Number
            //  Expects a zero-based number (0-8)
            // return: String
            var range = calculateGridRange(gridNumber),
                row = range.row,
                column = range.column,
                rowMin = row.min,
                rowMax = row.max,
                columnMin = column.min,
                columnMax = column.max,
                missingNumbers = "123456789",
                i, j;

            for (i = rowMin; i < rowMax + 1; i++) {
                for (j = columnMin; j < columnMax + 1; j++) {
                    number = puzzle[i][j];

                    if (number) {
                        missingNumbers = missingNumbers.replace(number, "");
                    }
                }
            }

            return missingNumbers;
        }
    };
}

function crossHatch(gridNumber, maps, puzzle) {
    // summary:
    //  Performs a cross hatch of a number to a grid's empty spaces.
    //  When a number is already on the board, and its location
    //  intersects with a row/column in the grid, that grid is removed
    //  from the available possibilities for placing a number.
    //  When only one possibility remains for a number, it is placed.
    //  If more than one possibility exists, the number is skipped.
    var missingNumbers = maps.getMissingNumbersByGrid(gridNumber).split(""),
        total = missingNumbers.length,
        gridRange = calculateGridRange(gridNumber),
        row = gridRange.row,
        column = gridRange.column,
        rowMin = row.min,
        rowMax = row.max,
        columnMin = column.min,
        columnMax = column.max,
        number, numberMap, i, j, rowMap, rowNumber, map,
        columnNumber, availableSpaces, availableRows, availableColumns;

    for (i = 0; i < total; i++) {
        number = missingNumbers[i];
        numberMap = maps.numberMaps[number];
        availableSpaces = maps.getEmptySpacesByGridNumber(gridNumber);

        for (rowNumber in numberMap) {
            rowMap = numberMap[rowNumber];

            if (rowNumber >= rowMin && rowNumber <= rowMax) {
                if (availableSpaces[rowNumber]) {
                    delete availableSpaces[rowNumber];
                }
            }

            for (columnNumber in rowMap) {
                if (columnNumber >= columnMin && columnNumber <= columnMax) {
                    for (j = rowMin; j < rowMax + 1; j++) {
                        if (availableSpaces[j]) {
                            delete availableSpaces[j][columnNumber];

                            if (!Object.keys(availableSpaces[j]).length) {
                                delete availableSpaces[j];
                            }
                        }
                    }
                }
            }
        }

        // Converting the keys of the availableSpaces (which will be row numbers where a number can go)
        // into an array.  We can then check the length of this array to ensure that only one
        // possibile row exists for this number in a grid.
        availableRows = Object.keys(availableSpaces);
        if (availableRows.length === 1) {
            // Convert the keys of the availableSpaces[availableRows[0]] (which will be the column numbers where
            // a number can go) into an array.  We can then check the length of this array, to ensure that only one
            // possible column exists for this number in a grid.  If there is only one possible column, we have
            // eliminated all other possibilities for this number in this grid, so we can place it.
            availableColumns = Object.keys(availableSpaces[availableRows[0]]);
            if (availableColumns.length === 1) {
                rowNumber = availableRows[0];
                columnNumber = availableColumns[0];

                // Convert to a true number because the test expects the array to contain only numbers.
                puzzle[rowNumber][columnNumber] = parseInt(number, 10);

                // Update the number map to include the new location of this placed number.
                map = numberMap[rowNumber];

                if (!map) {
                    map = numberMap[rowNumber] = {};
                }

                map[columnNumber] = {
                    rowNumber: availableRows[0],
                    columnNumber: availableColumns[0],
                    gridNumber: gridNumber
                };
            }
        }
    }
}

function sudoku(puzzle) {
    // summary:
    //  Parses the puzzle and begins the solve process.
    // puzzle: Array[]
    //  Array of arrays.  Each element in the parent array is a row.
    //  The index of the element in the parent array, corresponds to
    //  the row number.
    //  Each element in a child array is a number in that row, and its
    //  index corresponds to the column number in which it resides.
    var maps = parse(puzzle),
        i = 0;

    while (maps.hasEmptySpaces()) {
        if (i === 9) {
            i = 0;
        }

        crossHatch(i, maps, puzzle);
        i++;
    }

    return puzzle;
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
// console.log(isValidSudoku(gameArr));


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
// console.log(isValidSudoku(gameArr));



/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>

function legal(solution, i, j, val) {
  for (var c = 0; c < 9; c++) {
    if (solution[i][c] === val) {
      return false;
    }
  }
  
  for (var r = 0; r < 9; r++) {
    if (solution[r][j] === val) {
      return false;
    }
  }

  var r = Math.floor(i / 3) * 3;
  var c = Math.floor(j / 3) * 3;  
  // sub 3 x 3 contains 1 - 9
  for (var k = r; k < r + 3;  k++) {
    for (var l = c; l < c + 3; l++) {
      if (val === solution[k][l]) {
        return false;
      }
    }
  }  
  return true;
}

function sudokuSolver(solution, i, j) {
  console.log('i:' + i + ',j:' + j);
  if (i === 9) {
    i = 0;
    j = j + 1;
    if (j === 9) {
      return true;  // we are done
    }
  }
    
  if (solution[i][j] > 0) {
    // fill the value down the row
    return sudokuSolver(solution, i+1, j);
  }

  // sudoku value 
  for (var val = 1; val <= 9; val++) {    
    // guess non-filled value
    if (legal(solution, i, j, val)) {
      solution[i][j] = val;
      if (sudokuSolver(solution, i+1, j)) {
        return true;
      } 
    }  
  }
  // no valid value
  solution[i][j] = 0;
  return false;
}

function sudoku(puzzle) {
  //return the solved puzzle as a 2d array of 9 x 9 
  var solution = JSON.parse(JSON.stringify(puzzle));
  if (sudokuSolver(solution, 0, 0)) {
    return solution;
  }
  return null;
}

2. ======>

function sudoku (puzzle) {

  var size = puzzle.length,        // puzzle size
      sizeBlock = Math.sqrt(size), // size of 1 block 
      stack = [],                  // stack of all previously visited cells
      numInit = 1;                 // initial number of cell which will be tried to blaced in 
      found = true;

  // go through each row
  for (var row = 0; row < size; row++) {

    // go throught each column in row
    for (var col = 0; col < size; col++) {

      if (!found) {
        var backTraced = false;

        while (!backTraced) {
          var prevCoord = stack.pop();

          if (typeof prevCoord == 'undefined') {
            found = true;
            backTraced = true;
          } else if (prevCoord[2] !== size) {
            row = prevCoord[0];
            col = prevCoord[1];
            numInit = prevCoord[2] + 1;
            puzzle[row][col] = 0;

            found = true;
            backTraced = true;
          } else {
            row = prevCoord[0];
            col = prevCoord[1];
            numInit = 1;
            puzzle[row][col] = 0;
          }
        }
      } // end for !found

      // skip adding value if already has assigned
      if(puzzle[row][col])
        continue;

      // try and place number
      for (var num = numInit; num <= size; num++) {

        if (sudokuNumFound(puzzle, size, sizeBlock, row, col, num)) {
          stack.push([row, col, num]);
          puzzle[row][col] = num;
          found = true;
          numInit = 1;
          break;
        } else {
          found = false;
        }
            
      } // end for num
    } // end for col
  } // end for row

  return puzzle;
}

function sudokuNumFound (puzzle, size, sizeBlock, row, col, num) {
  var ret = false,
      inRow = true,
      inCol = true,
      inBlock = true;

  // find in row
  if (puzzle[row].indexOf(num) === -1)
    inRow = false;

  // find in column
  var tempCol = [];
  for (var tempRow = 0; tempRow < size; tempRow++) {
    if (tempRow !== row)
      tempCol.push(puzzle[tempRow][col]);
  }

  if (tempCol.indexOf(num) === -1)
    inCol = false;

  // find in block
  var blockMinRow = sizeBlock * Math.floor(row / sizeBlock),
      blockMinCol = sizeBlock * Math.floor(col / sizeBlock),
      blockMaxRow = blockMinRow + sizeBlock,
      blockMaxCol = blockMinCol + sizeBlock,
      blockStack = []; // will all hold values of the current block

  for (var i = blockMinRow; i < blockMaxRow; i++) {
    for (var j = blockMinCol; j < blockMaxCol; j++) {
      if(i !== row && j !== col)
        blockStack.push(puzzle[i][j]);
    }
  }

  if (blockStack.indexOf(num) === -1)
    inBlock = false;

  // if is available to place set return true
  if(!inRow && !inCol && !inBlock)
    ret = true;

  return ret;
}

3. ======>
*/