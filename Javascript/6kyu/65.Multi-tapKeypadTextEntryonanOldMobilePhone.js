function presses(phrase) {
  phrase = phrase.toUpperCase()

  let kamus = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0']

  let counter = 0
  let result = []
  for (let k = 0; k < phrase.length; k++) {
    for (let i = 0; i < kamus.length; i++) {
      for (let j = 0; j < kamus[i].length; j++) {
        counter++
        if (phrase[k] == kamus[i][j]) {
          result.push(counter)
        }
      }
      counter = 0
    }
  }
  // console.log(result)
  let output = 0
  for (let i = 0; i < result.length; i++) {
    output += result[i]
  }
  return output
}

console.log(presses("LOL"), 9, "should work for simple examples")
console.log(presses("HOW R U"), 13, "should work for phrases with spaces")

/*
=====SOAL======
Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|     | |space| |     |
|  *  | |  0  | |  #  |
------- ------- -------
Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)
*/
/*
CARA ORANG LAIN
1. ======>

function presses(phrase) {
  var chunks = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'],
      phrase = phrase.toUpperCase().split(''),
      total = 0;

  phrase.forEach(function(l) {
    var key = chunks.filter(function(c) {
      return c.indexOf(l) > -1;
    })[0];
    total += key.indexOf(l) + 1;
  });

  return total;

}

2. ======>

var buttons = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', '*', ' 0', '#'];
function presses(phrase) {
  return phrase.toUpperCase().split('').reduce((a, b) => {
    return a + buttons.reduce((c, d) => {
      return c + d.indexOf(b) + 1;
    }, 0);
  }, 0);
}

3. ======>

function presses(phrase) {
  var keypad = [" 0", "1", "ABC2", "DEF3", "GHI4", "JKL5", "MNO6", "PQRS7", "TUV8", "WXYZ9"];
  return phrase.toUpperCase().split('').reduce( function( p, l ){
    return p + keypad.filter(function(s){return s.indexOf(l)>-1;})[0].indexOf(l) + 1;
  }, 0 );
}

*/