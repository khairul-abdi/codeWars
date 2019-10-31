const treeAge = treeTrunk => {
    if (!treeTrunk.length) {
        return 1;
    }
    for (let item of treeTrunk) {
        // console.log('treeTrunk ==>', treeTrunk.length)
        // console.log('Item : ', item.length)
        // console.log('itemmmmss : ', item)

        if ((treeTrunk.length >= 1 && item.length) || (treeTrunk.length === 1 && !item.length)) {
            return 1 + treeAge(item);
        }
    }
}

// var oneYearOld = [];
// console.log(treeAge(oneYearOld), 1)

var threeYearsOld = [
    [
        []
    ]
]
console.log(treeAge(threeYearsOld), 3)

var oneYearOld = [
    [],
    [
        []
    ]
];
console.log(treeAge(oneYearOld), 3)

// var fourYearsOld = [
//     [
//         [
//             []
//         ],
//         []
//     ],
//     []
// ]
// console.log(treeAge(fourYearsOld), 4)

// var sixYearsOld = [
//     [
//         [
//             [
//                 [
//                     []
//                 ]
//             ]
//         ],
//         [],
//         []
//     ],
//     []
// ]
// console.log(treeAge(sixYearsOld), 6)





/*
"Many of those trees were my friends creatures I had known from nut and acorn;
many had voices of their own that are lost for ever now.
And there are wastes of stump and bramble where once there were singing groves.
I have been idle. I have let things slip. It must stop!"

*/
/*
=====SOAL======
Back story
The spitfire Saruman (wizard) was preparing for the war. To gather necessary resources, he had to cut down the trees in the Fangorn Forest. Many trees were chopped down, and long term peace has been disturbed. Not only normal trees live in this forest., but Ents as well. Ents are creatures (walking trees) that take care of that forest. They are very slow thinking beings.
You are walking through the Fangorn Forest and meet an Ent named Treebeard. He is mourning his loss and trying to remember all of the destroyed trees. To recognize the fallen trees, he often has to specify how old it was. It takes enormous effort for Treebeard to determine a tree’s age. He also doesn’t have much time. He must gather his kind and avenge the fallen! Will you help him recognize his fallen brothers?

Task
Your task is to write a function which takes a tree trunk (array of arrays) as an input and returns the tree’s age. Each array in the tree trunk is a tree ring, and each ring is equivalent to one year.
Sometimes knots can grow inside a tree ring. These should be ignored. Knots are represented by an empty array that does not occur in the first two rings. There can be multiple knots in each ring, and they can be in random positions.

  // trunks without knots
  let oneYearOld = []

  let twoYearsOld = [[]]

  let threeYearsOld = [[[]]]

  // with knots

  let threeYearsOld = [[[]], []]

  let fourYearsOld = [[[],[[]],[]]]
*/
/*
CARA ORANG LAIN
1. ======>

const treeAge = treeTrunk => {
  if (!treeTrunk.length){
    return 1;
  }
  for (let item of treeTrunk){
    if ((treeTrunk.length  >= 1  &&  item.length) || (treeTrunk.length === 1 && !item.length)) {
      return 1 + treeAge(item);
    }
  }
}

2. ======>

const treeAge = treeTrunk => {
  const treeSize = treeTrunk.length;
  if (treeSize === 0) {
    return 1;
  }
  let maxTreeAge = 0;
  let age;
  for (let i = 0; i < treeSize; i++) {
    age = treeAge(treeTrunk[i]) + 1;
    if (age > maxTreeAge) {
      maxTreeAge = age;
    }
  }
  return maxTreeAge;
}

3. ======>

const treeAge = (trunk, count = 1) => 
  trunk.length ? treeAge([].concat(...trunk), count + 1) : count

4. ======>

const treeAge = treeTrunk => {
  if(treeTrunk.length == 0) return 1;
  if(treeTrunk.length > 1) treeTrunk = treeTrunk.filter(x => x.length > 0);
  return treeAge(treeTrunk[0]) + 1;
}

*/