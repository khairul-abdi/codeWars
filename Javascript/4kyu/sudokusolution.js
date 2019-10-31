function validSolution(board) {
  var board = new Board(board);

  return board.isValid();
}

var Board = function (data) {
  this.data = data;

  /**
  *  Return a row with a given index
  *
  *  @param integer index - Index of the row to return
  *  @return array - Array of elements in a column
  */
  this.getRow = function (index) {
    return this.data[index];
  }

  /**
  *  Return a column with a given index.
  *
  *  @param integer index - Index of the column to return
  *  @return array - Array of elements in a column
  */
  this.getColumn = function (index) {
    var elements = [];

    for (var i = 0; i < this.data.length; i++) {
      elements.push(this.data[i][index]);
    }

    return elements;
  }

  /**
  *  Return all 3x3 sectors
  *  @return array - Array of sectors
  */
  this.getSectors = function () {
    var sectors = [];

    for (var x = 0; x < 3; x++) {

      for (var y = 0; y < 3; y++) {
        var xOffset = x * 3;
        var yOffset = y * 3;
        var sector = [];

        for (var i = 0; i < 3; i++) {
          var retrieved = this.get3ElementsAt(xOffset, yOffset + i);

          for (var a = 0; a < 3; a++) {
            sector.push(retrieved[a]);
          }
        }
        sectors.push(sector);
      }
    }
    return sectors;
  }

  /**
  *  Return an array of 3 elements starting at position x,y
  *
  *  @param integer x - X coordinate
  *  @param integer y - Y coordinate
  *  @return array - Array of numbers starting at position x,y
  */
  this.get3ElementsAt = function (x, y) {
    var result = [];

    for (var i = 0; i < 3; i++) {
      result.push(this.getElement(x + i, y));
    }

    return result;
  }

  /**
  *  Return an element at x, y
  *
  *  @param integer X - The x coordinate
  *  @param integer Y - The y coordinate
  *  @return integer - The element
  */
  this.getElement = function (x, y) {
    return this.getRow(y)[x];
  }

  /**
  *  Validate a group of numbers for being a valid sudoku group.
  *  @param group - Group of numbers to validate
  *  @return boolean - Whether the group is valid or not
  */
  this.validateGroup = function (group) {
    // the group is valid if it has all the numbers from 1
    // to 9
    for (var i = 1; i <= 9; i++) {
      if (group.indexOf(i) == -1) {
        return false;
      }
    }
    return true;
  }

  /**
  *  Checks whether this Sudoku board is valid or not.
  *  @return boolean - Whether the board is valid
  */
  this.isValid = function () {
    // validate rows
    // validate columns
    // validate sectors
    return this.validateRows() && this.validateColumns() && this.validateSectors();
  }

  /**
  *  Validate all of this boards columns
  *  @return boolean
  */
  this.validateColumns = function () {
    for (var i = 0; i < 9; i++) {
      if (!this.validateGroup(this.getColumn(i))) {
        return false;
      }
    }

    return true;
  }

  /**
  *  Validate all of this boards rows
  *  @return boolean
  */
  this.validateRows = function () {
    for (var i = 0; i < 9; i++) {
      if (!this.validateGroup(this.getRow(i))) {
        return false;
      }
    }

    return true;
  }

  /**
  *  Validate all of this boards sectors
  *  @return boolean
  */
  this.validateSectors = function () {
    var sectors = this.getSectors();

    for (var i = 0; i < sectors.length; i++) {
      if (!this.validateGroup(sectors[i])) {
        return false;
      }
    }

    return true;
  }
}