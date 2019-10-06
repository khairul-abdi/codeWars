function goodVsEvil(good, evil) {

    let goodList = [1, 2, 3, 3, 4, 10]

    let evilList = [1, 2, 2, 2, 3, 5, 10]

    let arrGood = []
    let sumGood = 0
    let tempGood = ''

    for (let i = 0; i < good.length; i++) {
        if (good[i] == ' ') {
            arrGood.push(Number(tempGood))
            tempGood = ''
        } else {
            tempGood += good[i]
        }
    }
    if (tempGood) arrGood.push(Number(tempGood))

    // console.log(arrGood)

    for (let i = 0; i < arrGood.length; i++) {
        sumGood += (arrGood[i] * goodList[i])
    }
    // console.log(sumGood)

    let arrEvil = []
    let tempEvil = ''
    let sumEvil = 0

    for (let i = 0; i < evil.length; i++) {
        if (evil[i] == ' ') {
            arrEvil.push(Number(tempEvil))
            tempEvil = ''
        } else {
            tempEvil += evil[i]
        }
    }
    if (tempEvil) arrEvil.push(Number(tempEvil))
    // console.log(arrEvil)

    for (let i = 0; i < arrEvil.length; i++) {
        sumEvil += (arrEvil[i] * evilList[i])
    }
    // console.log(sumEvil)

    if (sumGood < sumEvil) {
        return `Battle Result: Evil eradicates all trace of Good`
    } else if (sumGood > sumEvil) {
        return `Battle Result: Good triumphs over Evil`
    } else if (sumGood == sumEvil) {
        return `Battle Result: No victor on this battle field`
    }
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1') === 'Battle Result: Evil eradicates all trace of Good', 'Evil should win');
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0') === 'Battle Result: Good triumphs over Evil', 'Good should win');
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0') === 'Battle Result: No victor on this battle field', 'Should be a tie');

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
Use Loop Biasa

function goodVsEvil(good, evil){
  var g = 0, e = 0;
  var goodWorth = [1, 2, 3, 3, 4, 10], evilWorth = [1, 2, 2, 2, 3, 5, 10];
  for (n in good.split(" ")) g += +good.split(" ")[n]*goodWorth[n];
  for (n in evil.split(" ")) e += +evil.split(" ")[n]*evilWorth[n];
  return (g > e) ? "Battle Result: Good triumphs over Evil" 
    : (e > g) ? "Battle Result: Evil eradicates all trace of Good"
    : "Battle Result: No victor on this battle field";
}

2. ======>
Use .reduce

function goodVsEvil(good, evil){
 var worthGood = [1, 2, 3, 3, 4, 10];
 var worthEvil = [1, 2, 2, 2, 3, 5, 10];
 
 var powerGood = good.split(' ').reduce(function(sum, current, index){ return sum + current*worthGood[index]}, 0);
 var powerEvil = evil.split(' ').reduce(function(sum, current, index){ return sum + current*worthEvil[index]}, 0);
 
  
  if (powerEvil > powerGood) return 'Battle Result: Evil eradicates all trace of Good';
  else if (powerGood > powerEvil) return 'Battle Result: Good triumphs over Evil';
  else return 'Battle Result: No victor on this battle field'
}

3. ======>

const goodWorths = [1, 2, 3, 3, 4, 10];
const evilWorths = [1, 2, 2, 2, 3, 5, 10];

function goodVsEvil(goodTeam, evilTeam){
  goodTeamWorth = getTeamWorth(goodTeam, goodWorths);
  evilTeamWorth = getTeamWorth(evilTeam, evilWorths);
  
  if(goodTeamWorth > evilTeamWorth) {
    return 'Battle Result: Good triumphs over Evil';
  }
  
  if(evilTeamWorth > goodTeamWorth) {
    return 'Battle Result: Evil eradicates all trace of Good'
  }
  
  return 'Battle Result: No victor on this battle field';
}

function getTeamWorth(team, teamWorths) {
  return team.split(' ').reduce((worth, memberCount, index) => worth += memberCount * teamWorths[index], 0);
}

*/