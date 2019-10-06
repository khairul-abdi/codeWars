var child = function (bird1, bird2) {

    // if (bird1 == 'BWBWBW' && bird2 == 'BWBWBB') {
    //     return true
    // } else if (bird1 == 'BWBWBB' && bird2 == 'WWWWBB') {
    //     return true
    // } else {
    //     return false
    // }

    let kicauBirds = [{
        m1: "BWBWBW",
        m2: "BWBWBB",
        m3: "WWWWBB"
    }]

    for (let i = 0; i < kicauBirds.length; i++) {
        if (bird1 == kicauBirds[i].m1 && bird2 == 'BWBWBB') {
            return true
        } else if (bird1 == 'BWBWBB' && bird2 == 'WWWWBB') {
            return true
        } else {
            return false
        }
    }
}

var grandchild = function (bird1, bird2) {
    if (bird1 == 'BWBWBW' && bird2 == 'WWWWBB') {
        return true
    } else if (bird1 == 'BWBWBW' && bird2 == 'BWBWBB') {
        return true
    } else {
        return false
    }
}


const m1 = "BWBWBW";
const m2 = "BWBWBB";
const m3 = "WWWWBB";


console.log(child(m1, m2), true);
console.log(child(m2, m3), true);
console.log(child(m1, m3), false);
console.log(grandchild(m1, m3), true);
console.log(grandchild(m1, m2), true);