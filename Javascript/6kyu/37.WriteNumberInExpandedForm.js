// function expandedForm(num) {
//   console.log(num)
// }

// console.log(expandedForm(12), '10 + 2');
// console.log(expandedForm(42), '40 + 2');
// console.log(expandedForm(70304), '70000 + 300 + 4');

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>

function expandedForm(num) {
  var digits = num.toString()
  var output = []

  for(var i=0; i<digits.length; i++){
    if(digits[i]>0){
      var zeros = ''
      // console.log(digits.length-i-1)
      for(var z=digits.length-i-1; z>0; z--){
        // console.log(z)
        zeros+='0'
      }
      output.push(Number(digits[i]+zeros))
    }
  }
  return output.join(' + ')
}


2. ======>

function expandedForm(num) {
  // Your code here
  var j=0;
  var str=num.toString().split("");
  var result=[];
  for(var i=str.length-1;i>=0;i--){
    str[i]=str[i]*Math.pow(10,j);
    j++;    
    if(str[i]){
      result=result.concat(str[i]);
    }
  }
   
  return result.reverse().join(' + ');
}

3. ======>

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");


4. ======>

function expandedForm(num) {
  return String(num)
          .split("")
          .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
          .filter((num) => Number(num) != 0)
          .join(" + ")
}

5. ======>
REKURSIF

function expandedForm(num) {
  if (num < 10) return `${num}`;
  let over = num % (Math.pow(10, (num.toString().length - 1)));
  if (!over) return `${num}`;
  return `${num-over} + ${expandedForm(over)}`;
}

6. ======>

function expandedForm(num) {
  num = String(num);
  let result = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] == 0) continue;
    else result.push(num[i] + "0".repeat(num.length -i -1))
  }
  return result.join(" + ")
}

7. ======>

expandedForm = n => [...String(n)].reverse().map((x,i) => x == '0' ? '' : x + '0'.repeat(i)).filter(x => x != '').reverse().join(' + ')

8. =======>

function expandedForm(num) {
  let result = [];
  num = num.toString();
  for(let  i = 0; i < num.length; i++){
    if(num[i] != 0){
      let val = num[i];
      for(let x = (i + 1) ; x < num.length; x++){
        val +=  "0";
      }

      result.push(val)
    }
  }

  return result.join(" + ");
}

*/