function add(a, b) {
    if (Number.isSafeInteger(Number(a)) && Number.isSafeInteger(Number(a))) {
        return (Number(a) + Number(b)).toString();
    }

    a = a.split("");
    b = b.split("");
    // console.log(a, b);
    var carries = 0;
    var result = [];

    // assumming they are both same length
    for (var i = a.length - 1; i >= 0; i--) {
        var sum = Number(a[i]) + Number(b[i]) + carries;
        result.unshift(sum % 10);
        if (sum >= 10) {
            carries = 1;
        } else {
            carries = 0;
        }
    }

    if (sum >= 10) {
        result.unshift(1); // if the sum of first two Numbers is greater or equal to 										// ten then i have carries 1 to unshift
    }
    return result.join("");
}

/*
=====SOAL======
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99"); -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/
/*
CARA ORANG LAIN
1. ======>

function add (a, b) {
  var res = '', c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = c % 10 + res
    c = c > 9
  }
  return res
}

2. ======>

//Method is this - we add each of the digits one buy one from the end of the string.

function add(a, b) {
    a = '0' + a //we add a zero upfront to make space for '1' if sum of digits are greater than 10
    b = '0' + b

    if (a.length > b.length) { //Then we add more '0''s to make a,b strings equal length
        var zeroCount = a.length - b.length
        b = (Array(zeroCount + 1).join('0')) + b
    } else if (b.length > a.length) {
        var zeroCount = b.length - a.length
        a = (Array(zeroCount + 1).join('0')) + a
    }

    var result = '';
    var temp = 0;
    for (var i = a.length - 1; i > -1; i--) { //for every digit from the end...
        var res = parseInt(a[i]) + parseInt(b[i]) + temp // we sum them + temp variable.
        temp = 0 //we renew the temp var
        if (res >= 10) { //if our sum if greater than 10 we put '1' to the temp var so that next calculation will include the previous addition
            res = res - 10
            temp = 1
        }
        result = res + result // we add result to the string at front
    }


    if (result[0] == '0') //sometimes resulting string begins with a zero (if those we added in first line are unneded )
        result = result.substr(1) //that unneeded zero has to be removed

    return result
}

3. === === >

function add(aa, bb, c = 0) {
  let a = aa.split('').reverse();
  let b = bb.split('').reverse();
  let r = [];
  let len = Math.max(a.length, b.length);
  
  for (let i = 0; i < len; ++i) {
    let tmp = (+a[i] || 0) + (+b[i] || 0) + c;
    if (tmp < 10) {
      c = 0;
      r[i] = tmp;
    } else {
      c = 1;
      r[i] = tmp - 10;
    }
  }
  if (c) {
    r.push(c);
  }
  
  return r.reverse().join('');
}

*/