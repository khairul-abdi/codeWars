function persistence(num) {
  numStr = String(num)
  let numCal = 1
  let count = 0
  if (numStr.length == 1) {
    return count
  } else {
    count++
    for (let i = 0; i < numStr.length; i++) {
      numCal *= numStr[i]
    }
    return count + persistence(numCal)
  }
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>

function persistence(num) {
    if (num < 10)
        return 0;
    else {
        var m = 1;
        while (num / 10) {
            m = m * (num % 10);
            num = Math.floor(num / 10);
        }
        return 1 + persistence(m);
    }
}

2. ======>
3. ======>
*/