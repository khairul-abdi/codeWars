function countSheeps(arrayOfSheep) {
    let count = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] == true) {
            count++
        }
    }
    return count
}

var array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
];
console.log(countSheeps(array1)) // == 17, "There are 17 sheeps in total")

/*
Menghitung true di dalam array
CARA ORANG 

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
*/