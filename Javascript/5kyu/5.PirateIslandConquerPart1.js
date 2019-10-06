function conquerIsland(map) {

    let found = false
    let output = []
    let positionU = []
    let positionP = []
    let positionM = []
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            // console.log(map[i][j])
            if (map[i][j] == 'p') {
                positionP.push(i, j)
            }

            if (map[i][j] == 'u') {
                positionU.push([i, j])
            }

            if (map[i][j] == 'm') {
                positionM.push([i, j])
            }
        }
    }
    console.log('PP == ', positionP)
    console.log('UU ==', positionU)
    console.log('MM == ', positionM)


}

var map, actual, expected, msg;
map = [
    ['p', '~', '~', 'u', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~']
];
// actual = conquerIsland(map);
// expected = [0, 3];
// msg = "There's an unoccupied island in the first row.  Claim it!"
// console.log(actual, expected, msg);
console.log(conquerIsland(map))

map = [
    ['p', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['u', '~', '~', '~', '~', '~', '~', '~']
];
// actual = conquerIsland(map);
// expected = [7, 0];
// msg = "There's an unoccupied island in the first column!  Claim it!"
// console.log(actual, expected, msg);
console.log(conquerIsland(map))


map = [
    ['p', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~']
];
// actual = conquerIsland(map);
// expected = [];
// msg = "No islands in sight today, captain."
// console.log(actual, expected, msg);
console.log(conquerIsland(map))

map = [
    ['p', '~', 'u', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['u', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', 'u']
];
// actual = conquerIsland(map);
// expected = [
//     [0, 2],
//     [2, 0]
// ];
// msg = "There are two islands the same distance away.  Tell me where they both arrrr.  Sorted from lowest 'y' to highest, and secondarily from lowest 'x' to highest."
// console.log(actual, expected, msg);
console.log(conquerIsland(map))

map = [
    ['p', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', 'm', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', 'u', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~']
];
// actual = conquerIsland(map);
// expected = [4, 4];
// msg = "Looks like the marines have moved in.  But there's still an unoccupied island we can get!"
// console.log(actual, expected, msg);
console.log(conquerIsland(map))

map = [
    ['p', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', 'm', '~', '~', '~', '~'],
    ['m', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', 'm', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', 'm', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~']
];
// actual = conquerIsland(map);
// expected = [2, 0];
// msg = "Well, now isn't this a pretty sight.  Marines all over.  Let's take one of their precious islands!"
// Test.assertDeepEquals(actual, expected, msg);
console.log(conquerIsland(map))