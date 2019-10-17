function diamond(angka) {
  var output = ''
  for (var i = 1; i <= angka; i += 2) {
    angkaJ = angka - i
    for (var j = 1; j <= angkaJ; j++) {
      output += ' '
    }

    for (let k = j; k <= angka; k++) {
      output += '*' + ' '
    }
    output += '\n'
  }

  for (var i = angka - 2; i >= 1; i -= 2) {
    angkaJ = angka - i
    for (var j = 1; j <= angkaJ; j++) {
      output += ' '
    }

    for (let k = j; k <= angka; k++) {
      output += '*' + ' '
    }
    output += '\n'
  }

  return output
}


// console.log(diamond(1)) //, "*\n")
// console.log(diamond(3)) //, " *\n***\n *\n")
console.log(diamond(5)) //, "  *\n ***\n*****\n ***\n  *\n")
// console.log(diamond(2), null)
// console.log(diamond(-3), null)
// console.log(diamond(0), null)

/*
=====SOAL======
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is: " *\n ***\n*****\n ***\n *\n"
*/
/*
CARA ORANG LAIN
1. ======>

function diamond (n) {
  if (n <= 0 || n % 2 === 0) return null
  str = ''
  for (let i = 0; i < n; i++) { 
    let len = Math.abs((n-2*i-1)/2)
    str += ' '.repeat(len)
    str += '*'.repeat(n-2*len)
    str += '\n'
  }
  return str
}

2. ======>

function diamond(n){
  if( n%2==0 || n<1 ) return null
  var x=0, add, diam = line(x,n);
  while( (x+=2) < n ){
    add = line(x/2,n-x);
    diam = add+diam+add;
  }
  return diam;
}//z.

function repeat(str,x){return Array(x+1).join(str); }
function line(spaces,stars){ return repeat(" ",spaces)+repeat("*",stars)+"\n"; }

3. ======>

function diamond(n){
  if(n<=0 || n%2 == 0)
    return null;
  
  var m = (n-1)/2;
  var diam = "";
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < Math.abs(m-i); j++)
      diam += " ";
    for(var j = 0; j < n - Math.abs(i*2-n+1); j++)
      diam += "*";
    diam += "\n"
  }
  return diam;
}

4. =====>

function diamond(n){
  if(n%2===0||n<1)return null;
    let arr = [];
    let mid = Math.ceil(n/2);
    for(let i = 1;i<=n;i++){
        arr.push(' '.repeat(Math.abs(mid-i))+'*'.repeat(n-Math.abs(mid-i)*2));
    }
    return arr.join('\n')+'\n';
}

*/