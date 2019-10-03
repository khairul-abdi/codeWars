const doTurn = () => {
    rollDice()
    move()
    combat()
    getCoins()
    buyHealth()
    printStatus()
}

/*
=====SOAL======
Terminal game turn function
You are creating a text-based terminal version of your favorite board game.
 In the board game, each turn has six steps that must happen in this order: 
 roll the dice, move, combat, get coins, buy more health, and print status.

You are using a library (Game.Logic in C#) that already has the functions below. 
Create a function named doTurn/DoTurn/do_turn that calls the functions in the proper 
order as described in the paragraph above.

- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
*/
/*
CARA ORANG LAIN
1. ======>

const callFn = fn => fn()
const doTurn = () => [
  rollDice,
  move,
  combat,
  getCoins,
  buyHealth,
  printStatus
].forEach(callFn)


2. ======>

function doTurn () {
  var moves = [rollDice, move, combat, getCoins, buyHealth, printStatus];
  for(var i in moves) {
    moves[i]();
  }
}

3. ======>

doTurn=()=>log=['rollDice','move','combat','getCoins','buyHealth','printStatus']
*/