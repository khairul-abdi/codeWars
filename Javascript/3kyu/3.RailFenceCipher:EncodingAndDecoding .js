function encodeRailFenceCipher(string, numberRails) {
  // code
}

function decodeRailFenceCipher(string, numberRails) {
  // code
}

console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3), "WECRLTEERDSOEEFEAOCAIVDEN");
console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3), "WEAREDISCOVEREDFLEEATONCE");
console.log(encodeRailFenceCipher("Hello, World!", 3), "Hoo!el,Wrdl l");

/*
=====SOAL======
Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string. You can optionally include or dis-include punctuation.

For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

W       E       C       R       L       T       E
  E   R   D   S   O   E   E   F   E   A   O   C  
    A       I       V       D       E       N    

The encoded string would be:

WECRLTEERDSOEEFEAOCAIVDEN

Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out the punctuation as they are a part of the string.

*/
/*
CARA ORANG LAIN
1. ======>

function* rails(rn, ln) {
    for (var rc = 0; rc < rn; ++rc) {
        var rv = rc, rd = rc;
        while (rv < ln) {
            yield rv;
            rv += 2 * (rn - 1 - (rn == rd + 1 ? 0 : rd));
            rd = rn - 1 - rd;
        }
    }
}

function encodeRailFenceCipher(s, numberRails) {
    return Array.from(rails(numberRails, s.length)).map(function(i) {
        return s[i];
    }).join("");
}

function decodeRailFenceCipher(s, numberRails) {
    var r = [];
    for (var [i, k] of Array.from(rails(numberRails, s.length)).entries()) {
        r[k] = s[i];
    }
    return r.join("");
}

2. ======>

function encodeRailFenceCipher(string, numberRails) {
  var s = '', count = 2 * numberRails - 3;
  for(var i = 0; i < numberRails; i++) {
    var a = count - i * 2,
        b = i * 2 - 1;
    var iterator = [a < 0 ? 0 : a + 1, b < 0 ? 0 : b + 1]
    for(var j = i, k = -1; j < string.length; j += iterator[k%2] ? iterator[k%2] : iterator[(k+1)%2]) {
      s+= string[j];
      k++;
    }
  }
  return s;
}

function decodeRailFenceCipher(string, numberRails) {
  var s = [], count = 2 * numberRails - 3;
  var globalIndex = 0;
  for(var i = 0; i < numberRails; i++) {
    var a = count - i * 2,
        b = i * 2 - 1;
    var iterator = [a < 0 ? 0 : a + 1, b < 0 ? 0 : b + 1]
    for(var j = i, k = -1; j < string.length; j += iterator[k%2] ? iterator[k%2] : iterator[(k+1)%2]) {
      s[j] = string[globalIndex];
      globalIndex++;
      k++;
    }
  }
  return s.join('');
}

3. ======>

function encodeRailFenceCipher(plainText, n) {
  const zz = zigzag(n);
  return Array.from(plainText).reduce((rails, char, i) =>
    (r => Object.assign(rails, {[r]: rails[r] + char}))(zz(i)),
    Array.from({ length: n }, () => "")
  ).join("");
}

function decodeRailFenceCipher(cipherText, n) {
  const zz = zigzag(n);
  const rs = railSize(n, cipherText.length);
  const chars = Array.from(cipherText);
  const rails = Array.from({ length: n }, (_, i) => chars.splice(0, rs(i)));
  return Array.from({ length: cipherText.length }, (_, i) =>
    rails[zz(i)].shift()
  ).join("");
}

function zigzag(n) {
  return function(x) {
    const m = modulus(n);
    return Math.min(m - x%m, x%m);
  }
}

function railSize(n, l) {
  return function(i) {
    const m = modulus(n);
    const [q, r] = divmod(l, m);
    return q + (r > i) + (0 < i && i < m/2) * (q + (r > m - i));
  }
}

function modulus(n) { return 2*n - 2; }

function divmod(n, d) { return [Math.floor(n / d), n % d]; }

*/