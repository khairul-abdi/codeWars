function tickets(peopleInLine) {
    let uang25 = 0;
    let uang50 = 0;

    for (let i = 0; i < peopleInLine.length; i++) {
        if (peopleInLine[i] == 25) {
            uang25 += 1;
        }
        if (peopleInLine[i] == 50) {
            uang25 -= 1;
            uang50 += 1;
        }
        if (peopleInLine[i] == 100) {
            if (uang50 == 0 && uang25 >= 3) {
                uang25 -= 3;
            } else {
                uang25 -= 1;
                uang50 -= 1;
            }
        }
        if (uang25 < 0 || uang50 < 0) {
            return 'NO';
        }
    }
    return 'YES';
}

console.log(tickets([25, 25, 50, 50]), "YES");
console.log(tickets([25, 100]), "NO");
console.log(tickets([25, 25, 25, 25, 50, 100, 50]), "YES");
console.log(tickets([25, 25, 25, 25, 25, 100, 100]), "NO");