firstName = {
    A: 'Alpha',
    B: 'Beta',
    C: 'Cache',
    D: 'Data',
    E: 'Energy',
    F: 'Function',
    G: 'Glitch',
    H: 'Half-life',
    I: 'Ice',
    J: 'Java',
    K: 'Keystroke',
    L: 'Logic',
    M: 'Malware',
    N: 'Nagware',
    O: 'OS',
    P: 'Phishing',
    Q: 'Quantum',
    R: 'RAD',
    S: 'Strike',
    T: 'Trojan',
    U: 'Ultraviolet',
    V: 'Vanilla',
    W: 'WiFi',
    X: 'Xerox',
    Y: 'Y',
    Z: 'Zero',
}

surname = {
    A: 'Analogue',
    B: 'Bomb',
    C: 'Catalyst',
    D: 'Discharge',
    E: 'Electron',
    F: 'Faraday',
    G: 'Gig',
    H: 'Hacker',
    I: 'IP',
    J: 'Jabber',
    K: 'Killer',
    L: 'Lazer',
    M: 'Mike',
    N: 'n00b',
    O: 'Overclock',
    P: 'Payload',
    Q: 'Quark',
    R: 'Roy',
    S: 'Spy',
    T: 'T-Rex',
    U: 'Unit',
    V: 'Virus',
    W: 'Worm',
    X: 'X',
    Y: 'Yob',
    Z: 'Zombie',
}

// Long Solution
const firstLetter = str => str[0].toUpperCase()

const isValidName = name => /[a-z]/gi.test(name)

const aliasGen = (fName, sName) =>
    isValidName(fName[0]) && isValidName(sName[0]) ?
    `${firstName[firstLetter(fName)]} ${surname[firstLetter(sName)]}` :
    'Your name must start with a letter from A - Z.'

/*
=====SOAL======
Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

I have created two objects that return a one word name in response to the first letter of your first name and one for the first letter of your surname.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
Happy hacking!
    */
/*
CARA ORANG LAIN
1. ======>

function aliasGen(first, last) {
  if('0123456789'.indexOf(first[0]) != -1 || '0123456789'.indexOf(last[0]) != -1) {
    return 'Your name must start with a letter from A - Z.';
  }
  first = first.toUpperCase();
  last = last.toUpperCase();
  return firstName[first[0]] + ' ' + surname[last[0]];
}

2. ======>

function aliasGen(){
    var aliasFirst = firstName[arguments[0][0].toUpperCase()];
    var aliasLast = surname[arguments[1][0].toUpperCase()];
    if (!aliasFirst || !aliasLast) return "Your name must start with a letter from A - Z.";
    return `${aliasFirst} ${aliasLast}`;
}

3. ======>

function aliasGen(name1, name2){

    let fName = name1[0].toUpperCase();
    let fSurn = name2[0].toUpperCase();
    
    return (!firstName[fName] || !surname[fSurn]) 
           ? 'Your name must start with a letter from A - Z.' 
           : `${firstName[fName]} ${surname[fSurn]}` ;
    
}

*/