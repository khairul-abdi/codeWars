var number = function (busStops) {
    let countLeft = 0
    let countRight = 0
    for (let i = 0; i < busStops.length; i++) countLeft += busStops[i][0], countRight += busStops[i][1]
    // console.log('Kiri : ', countLeft)
    // console.log('Right : ', countRight)
    return countLeft - countRight
}

console.log(number([
    [10, 0],
    [3, 5],
    [5, 8]
]), 5);
console.log(number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10]
]), 17);
console.log(number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8]
]), 21);

/*
=====SOAL======
Number of people in the bus
There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.
*/
/*
CARA ORANG LAIN
1. ======>

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

2. ======>

const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)

3. ======>

var number = function(busStops){
  return busStops.map(x => x[0] - x[1]).reduce( (x, y) => x + y);
}

*/