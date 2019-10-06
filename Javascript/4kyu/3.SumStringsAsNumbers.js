sumStrings = (a, b) => `${Number(a) + Number(b)}`

console.log(sumStrings('123', '456'), '579')

//CARA KEDUA BIAR DINAMIS

function sumStrings(a, b) {
    let total = ''
    let totSem = 0
    let totSemStr = ''
    let start = 0
    if (a.length < b.length) {
        start = b.length
    } else {
        start = a.length
    }
    if (a.length == b.length) {
        for (let i = 0; i < a.length; i++) {
            if (Number(a[i]) + Number(b[i]) > 9) {
                totSem = Number(a[i]) + Number(b[i])
                totSemStr = String(totSem)
                total += String(totSemStr[1])
            } else {
                if (totSemStr) {
                    if (Number(totSemStr[0]) + Number(a[i]) + Number(b[i]) > 9) {
                        totSem = Number(a[i]) + Number(b[i])
                        totSemStr = String(totSem)
                        total += String(totSemStr[1])
                    }
                    total += String(Number(totSemStr[0]) + Number(a[i]) + Number(b[i]))

                }
                total += String(Number(a[i]) + Number(b[i]))
            }
        }
    } else {
        for (let i = 0; i < start; i++) {
            if (a.length < start) {
                if (Number(a[i]) + Number(b[i]) > 9) {
                    totSem = Number(a[i]) + Number(b[i])
                    totSemStr = String(totSem)
                    total += String(totSemStr[1])
                } else {
                    if (totSemStr) {
                        if (Number(totSemStr[0]) + Number(a[i]) + Number(b[i]) > 9) {
                            totSem = Number(a[i]) + Number(b[i])
                            totSemStr = String(totSem)
                            total += String(totSemStr[1])
                        }
                        total += String(Number(totSemStr[0]) + Number(a[i]) + Number(b[i]))

                    }
                    total += String(Number(a[i]) + Number(b[i]))
                }
            }
        }
    }
    return total
}


console.log(sumStrings('123', '456'), '579')
console.log(sumStrings('125', '456'), '581')
console.log(sumStrings('8797', '45'), '8842')

//CARA ORANG LAIN
function sumStrings(a, b) {
    let num1 = a.replace(/^0*/g, "").split("").reverse()
    let num2 = b.replace(/^0*/g, "").split("").reverse()
    let spillOver = 0
    let counter = 0
    let sum = ""

    while (counter < num1.length || counter < num2.length) {
        let tempSum = (parseInt(num1[counter]) || 0) + (parseInt(num2[counter]) || 0) + spillOver
        if (tempSum > 9) {
            sum = `${tempSum - 10}` + sum
            spillOver = 1
        } else {
            sum = `${tempSum}` + sum
            spillOver = 0
        }
        counter++
    }
    return spillOver ? `1${sum}` : sum
}

/*
=====SOAL======
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


*/
/*
CARA ORANG LAIN
1. ======>

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

function sumStrings(a,b) {
  a = a.reverse(); b = b.reverse();
  var carry = 0;
  var index = 0;
  var sumDigits = [];
  while (index < a.length || index < b.length || carry != 0) {
    var aDigit = index < a.length ? parseInt(a[index]) : 0;
    var bDigit = index < b.length ? parseInt(b[index]) : 0;
    var digitSum = aDigit + bDigit + carry;
    sumDigits.push((digitSum % 10).toString());
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == '0') sumDigits.shift();
  return sumDigits.join('');
}

2. ======>

var i = 0;
function sumStrings(a,b) { 
  i++;
  
  if(i == 1)
  return "579";
  
  if(i == 2)
  return "8842";
  
  if(i == 3)
  return "10367";
  
  if(i == 4)
  return "100";
  
  if(i == 5)
  return "8670";
  
  if(i == 6)
  return "5";
  
  if(i == 7)
  return "712577413488402631964821329";
  
  if(i == 8)
  return "131151201344081895336534324866";
}

3. ======>
*/