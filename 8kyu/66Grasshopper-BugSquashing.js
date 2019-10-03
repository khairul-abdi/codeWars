// const rollDice = () => 'rollDice'
// const move = () => 'move'
// const combat = () => 'combat'
// const getCoins = () => 'getCoins'
// const buyHealth = () => 'buyHealth'
// const printStatus = () => 'printStatus'

// const health = 100
// const position = 0
// const coins = 0

// const main = () => [rollDice, move, combat, getCoins, buyHealth, printStatus].forEach(action =>
//     action()
// )

// console.log(health, 100)
// console.log(position, 0)
// console.log(coins, 0)

console.log('-----------------------------------------------------------')

var health = 100
var position = 0
var coins = 0

function main1() {
    getCoins()
    move()
    printStatus()
    combat()
    rolDice()
    attack()
}

const main1 = () => [rollDice, move, combat, getCoins, buyHealth, printStatus].forEach(action =>
    action()
)

console.log(health, 100)
console.log(position, 0)
console.log(coins, 0)