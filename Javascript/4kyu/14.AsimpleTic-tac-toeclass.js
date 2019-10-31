function TicTacToe() {
  this.state = [null, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.human = 1;
  this.computer = 2;
}

TicTacToe.prototype.isWin = function (player) {
  var wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  if (wins.filter(pos => pos.every(i => this.state[i] == player)).length == 0) return false;
  this.isGameOver = true;
  return true;
}

TicTacToe.prototype.isDraw = function () {
  if (this.state.filter(cell => cell === 0).length > 0) return false;
  this.isGameOver = true;
  return true;
}

TicTacToe.prototype.move = function (field) {
  var strategy = [5, 1, 3, 7, 9, 2, 4, 6, 8];

  // Game ended ?
  if (this.isGameOver) return [0, 'Game ended'];

  // Illegal move
  if (field < 1 || field > 9 || this.state[field]) return [0, 'Illegal move'];

  // plyaer move or change sides
  if (field) this.state[field] = this.human;
  else[this.human, this.computer] = [this.computer, this.human];

  // Game ended ?
  if (this.isWin(this.human)) return [0, 'You win!'];
  if (this.isDraw()) return [0, 'Draw!'];

  // computer move
  for (var i of strategy) if (!this.state[i]) {
    this.state[i] = this.computer;
    break;
  }

  // Game ended ?
  if (this.isWin(this.computer)) return [i, 'I win!'];
  if (this.isDraw()) return [i, 'Draw!'];

  return [i, 'Your move?'];
}

/*
=====SOAL======
In this kata we want to create a minimalist JavaScript class for playing the well-known game "Tic-tac-toe".

The game is based on a 3x3 grid where we consider the fields numbered like on a telephone keypad, with the number 1 on the top left corner and the number 9 on the bottom right corner.

The two players take turns occupying the fields in the grids with their tiles. The player who can first get a vertical, horizontal or diagonal stroke of 3 tiles wins.

Our class TicTacToe shall provide a method move(). The state of the game must be kept internally in the current instance of the class. Calling the move() method automatically switches sides. To make a move, pass the number of the field as only argument to the method. If this is the first move and the computer shall start, or you want to change sides and let the computer make the next move, call the method without arguments. The method shall always return an array where the first element is the move the computer makes, i.e. a number between 1 and 9, or 0 if there is no possible move. The second element of the returned array shall be one of these comments:

"Game ended" if the game already ended before the move
"You win!" if the passed move was a winning move
"Draw!" if the passed or returned move caused a draw
"I win!" if the returned move was a winning move
"Your move?" if the game is still going on
"Illegal move" if the field was already occupied
The strategy of the computer shall be very simple, in order to give the human player a chance to win. The only criterion for the computer shall be that it prefers the middle tile, then the corners, then the edges. In case of ambiguity it always chooses the tile with the lowest number.

So a game of Tic-tac-toe against the computer will look like this (we let the computer begin):

ttt = new TicTacToe()

ttt.move() // -> [5, "Your move?"]
ttt.move(1) // -> [3, "Your move?"]
ttt.move(4) // -> [7, "I win!"]
ttt.move(9) // -> [0, "Game ended"]
Another game (this time the human starts the game):

ttt = new TicTacToe()

ttt.move(1) // -> [5, "Your move?"]
ttt.move(2) // -> [3, "Your move?"]
ttt.move(5) // -> [0, "Illegal move"]
ttt.move(9) // -> [7, "I win!"]
ttt.move(4) // -> [0, "Game ended"]
Here is a game that ends in a draw:

ttt = new TicTacToe()

ttt.move(2) // -> [5, "Your move?"]
ttt.move(1) // -> [3, "Your move?"]
ttt.move(7) // -> [9, "Your move?"]
ttt.move(6) // -> [4, "Your move?"]
ttt.move(8) // -> [0, "Draw!"]
Try to find a way to win against the computer, and cover it in your tests, too.

After finishing this kata, you may want to improve the algorithm to make it play better and with some randomness.
*/
/*
CARA ORANG LAIN
1. ======>

function TicTacToe() {
 // fill out the construction function
 var board = [1,2,3,4,5,6,7,8,9];
 var isEnded = false; //Game state.

 var flag = true; // computer space mark as false, user mark as true.
 this.checkWin = function(){
    for(var i = 0; i < 3; i++){
      if(board[3*i] === board[3*i+1] && board[3*i] === board[3*i+2]) return true;

      if(board[i] === board[i+3] && board[i] === board[i+6]) return true;
    }
    if(board[0] === board[4] && board[0] === board[8] || board[2] === board[4] && board[2] === board[6]) return true;

    return false;
  }

  this.checkDraw = function(){
    return board.filter(val => val === true || val === false).length === board.length;
  }

  this.switchSide = function(){
      flag = !flag;
  }

  this.userMove = function(field){
    if(typeof board[field - 1] !== "number") return [0, "Illegal move"];
    if(isEnded) return [0, "Game ended"];
    board[field - 1] = flag;

    if(this.checkWin()) {
      isEnded = true;
      return [0, "You win!"];
    }
    if(this.checkDraw()) {
      isEnded = true;
      return [0, "Draw!"];
    }
    this.switchSide();
    return this.computerMove();
  }

  this.computerMove = function(){
    let middle = 4, corners = [0,2,6,8], edges = [1,3,5,7];
    let index, moved = false;
    if(typeof board[middle] === "number") {
      board[middle] = flag;
      index = middle;
      moved = true;
    }
    if(!moved){
      for(let i =0;i<corners.length;i++){
        if(typeof board[corners[i]] === "number") {
        board[corners[i]] = flag;
        index = corners[i];
        moved = true;
        break;
        }
      }
    }

    if(!moved){
       for(let i =0;i<edges.length;i++){
          if(typeof board[edges[i]] === "number") {
          board[edges[i]] = flag;
          index  = edges[i];
          moved = true;
          break;
          }
       }
    }
    index++;
    if(this.checkWin()) {
      isEnded = true;
      this.switchSide();
      return [index, "I win!"];
    }
    if(moved && this.checkDraw()) {
      isEnded = true;
       this.switchSide();
      return [index, "Draw!"];
    }
    this.switchSide();
    return [index, "Your move?"];
  }

}

TicTacToe.prototype.move = function(field) {
  // fill out the move method
  if(arguments.length === 0) return this.computerMove();
  if(field < 0 || field > 9) throw new Error("Invalid move");
  return this.userMove(field);

}


2. ======>

function TicTacToe()
{
  this.side = -1;
  this.field = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

TicTacToe.prototype.try = function (player, idx)
{
  return this.field[idx - 1] ? [0, 'Illegal move'] : (this.field[idx - 1] = player, 0);
};

TicTacToe.prototype.ended = function (idx, msg)
{
  return this.field.some(function (a) { return !a }) ? null : [idx || 0, msg || 'Draw!'];
}

TicTacToe.prototype.win = function (player, idx, message)
{
  return [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]].some(function (a)
  {
    return a.every(function (a) { return this.field[a] === player }.bind(this))
  }.bind(this)) ? (this.field = [1, 1, 1, 1, 1, 1, 1, 1, 1], [idx, message + ' win!']) : null;
};

TicTacToe.prototype.move = function (field)
{
  return this.ended(0, 'Game ended') || (field ? (this.try(-this.side, field) || this.win(-this.side, 0, 'You')) : (this.side = -this.side, 0)) ||
    this.ended() || (field = [4, 0, 2, 6, 8, 1, 3, 5, 7].filter(function (a) { return !this.field[a] }.bind(this))[0], 0) ||
    this.try(this.side, field + 1) || this.win(this.side, field + 1, 'I') || this.ended(field + 1) || [field + 1, 'Your move?'];
}

3. ======>
*/