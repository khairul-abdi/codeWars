function validateBattlefield(field) {
  var hit = (row, col) => (row < 0 || col < 0 || row > 9 || col > 9) ? 0 : field[row][col];
  for (var ships = [10, 0, 0, 0, 0], row = 0; row < 10; row++) {
    for (var col = 0; col < 10; col++) {
      if (hit(row, col)) {
        if (hit(row - 1, col - 1) || hit(row - 1, col + 1)) return false; // Corner is touching
        if (hit(row - 1, col) && hit(row, col - 1)) return false; // Side is touching
        if ((field[row][col] += hit(row - 1, col) + hit(row, col - 1)) > 4) return false; // Ship is too long
        ships[field[row][col]]++; ships[field[row][col] - 1]--;
      }
    }
  }
  return [0, 4, 3, 2, 1].every((s, i) => s == ships[i]);
}

/*
=====SOAL======
Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.


Before the game begins, players set up the board and place the ships accordingly to the following rules:
There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
Each ship must be a straight line, except for submarines, which are just single cell.

The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

This is all you need to solve this kata. If you're interested in more information about the game, visit this link.
*/
/*
CARA ORANG LAIN
1. ======>

function validateBattlefield(field) {
    // Check diagonal collisions

    for (var y = 0; y < 10; y++) {
        for (var x = 0; x < 10; x++) {
            if (!field[y][x]) continue;

            if (x > 0 && y > 0 && field[y - 1][x - 1]) return false;
            if (x > 0 && y < 9 && field[y + 1][x + 1]) return false;
            if (x < 9 && y > 0 && field[y - 1][x + 1]) return false;
            if (x < 9 && y < 9 && field[y + 1][x + 1]) return false;
        }
    }


    // Read and count ships

    var shipsNumbers = {'4': 1, '3': 2, '2': 3, '1': 4};

    while (field.some(row => row.some(cell => cell))) {
        // Read another ship

        var startPointY = field.findIndex(row => row.some(cell => cell)),
            startPointX = field[startPointY].findIndex(cell => cell);

        var shipPoints = [{x: startPointX, y: startPointY}];
        var shipDone = false;

        var searchDirection = startPointX < 9 && field[startPointY][startPointX + 1]
            ? 'right'
            : 'down';

        var curX = startPointX,
            curY = startPointY;

        while (!shipDone) {
            if (searchDirection == 'right' && curX == 9 || searchDirection == 'down' && curY == 9) shipDone = true;

            if (!shipDone) {
                curX += searchDirection == 'right' ? 1 : 0;
                curY += searchDirection == 'down' ? 1 : 0;

                var nextCell = field[curY][curX];

                if (!nextCell) shipDone = true;
            }

            if (shipDone) {
                // Ship is too big
                if (shipPoints.length > 4) return false;

                shipsNumbers[shipPoints.length]--;

                // More ships of this length than required
                if (shipsNumbers[shipPoints.length] < 0) return false;

                // Clear field from found ship
                shipPoints.forEach(point => field[point.y][point.x] = 0);

                continue;
            }

            shipPoints.push({x: curX, y: curY});
        }
    }

    // Any ships missing?
    if (Object.keys(shipsNumbers).some(key => shipsNumbers[key] > 0)) return false;

    return true;
}

2. ======>

function validateBattlefield(field) {
  let ships = [0,4,3,2,1];                             // initialize ships to be found
  const s = (x, y) => field[x] && field[x][y];         // formula for "is ship at [x, y]?"
  for (let i = 0; i < 100; i++) {                      // check all spaces in field
    let x = i%10, y = i/10|0, l = 0;                   // calculate x & y, initialize length
    if (s(x, y)) {                                     // ship found at [x, y]?
      if (s(x+1, y+1) || s(x-1, y+1)) return false;    // corners touching?
      if (s(x+1, y  ) && s(x  , y+1)) return false;    // sides touching?
      while(s(x+l, y  )) { field[x+l][y  ] = 0; l++; } // find vertical ship
      while(s(x  , y+l)) { field[x  ][y+l] = 0; l++; } // find horizontal ship
      if (ships[l]) ships[l]--; else return false;     // record found ship
    }
  }
  return ships.every(s => s === 0);                    // verify all ships found
}

3. ======>
*/