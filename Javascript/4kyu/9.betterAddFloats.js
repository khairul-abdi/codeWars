function add() {
  //implement  
}

console.log(add(.1, .2) === '0.3', ".1+.2 expect to be:'0.3' got:" + add(.1, .2));

/*
=====SOAL======
Write a function that returns the sum of the passed arguments. The input arguments may be Numbers and/or String representations of numbers. The function must return a String.

Example

add(123, "321") === "444";
add("1234567890.0987654321", "8765432109.9012345678") === "9999999999.9999999999";
add("1.2.3", 1.23); === NaN;
add(0.1, 0.0001) === "0.1001";

Notes

The input numbers may be very very big and/or very very small. Addition must be exact - no floating point errors. The numbers are all positive and base 10. Some arguments may not be numbers. In these cases, return NaN. Remove trailing zeros and decimal point if possible.

*/
/*
CARA ORANG LAIN
1. ======>

function add(){
  var c = 1000000000;
  var args = Array.prototype.slice.call(arguments);
  var sum = 0;
  for(var i = 0; i < args.length; i++) {
    sum += args[i] * c;
  }
  
  return (sum / c).toString();  
}

2. ======>

function add(...nums){
  return nums.reduce((a,b)=>{
    var one = Number(a).toPrecision();
    var two = Number(b).toPrecision();
    var oI = one.indexOf('.');
    var tI = two.indexOf('.');
    var height;
    if(oI >= 0 || tI >= 0){
      var ol = one.slice(oI).length;
      var tl = two.slice(tI).length;
      height = ol;
      if(tl > ol) {
        height = tl;
      }
    }
    height--;
    if(!one || !two) return NaN;
    var x = Number(one) + Number(two);
    return x.toFixed(height);
  });
}

3. ======>

function add(...args){
  return (+parseFloat(args.reduce((acc, cur) => acc += Number(cur), 0)).toFixed(3)).toString();
}

*/