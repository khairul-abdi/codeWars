function number2words(n) {
    // works for numbers between 0 and 999999
    var b = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var b2 = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    if (n >= 0 && n < 20) {
        return b[n];
    }
    if (n >= 20 && n < 100) {
        return b2[Math.floor(n / 10) - 2] + (n % 10 === 0 ? '' : '-' + b[n % 10])
    }
    if (n >= 100 && n < 1000) {
        return b[Math.floor(n / 100)] + ' hundred' + (n % 100 === 0 ? '' : ' ' + number2words(n % 100));
    } else {
        return number2words(Math.floor(n / 1000)) + ' thousand' + (n % 1000 === 0 ? '' : ' ' + number2words(n % 1000));
    }
}

// works for numbers between 0 and 999999   
console.log(number2words(0), "zero");
console.log(number2words(1), "one");
console.log(number2words(8), "eight");
console.log(number2words(10), "ten");
console.log(number2words(19), "nineteen");
console.log(number2words(20), "twenty");
console.log(number2words(22), "twenty-two");
console.log(number2words(54), "fifty-four");
console.log(number2words(80), "eighty");
console.log(number2words(98), "ninety-eight");
console.log(number2words(100), "one hundred");
console.log(number2words(301), "three hundred one");
console.log(number2words(793), "seven hundred ninety-three");
console.log(number2words(800), "eight hundred");
console.log(number2words(650), "six hundred fifty");
console.log(number2words(1000), "one thousand");
console.log(number2words(1003), "one thousand three");

/*
=====SOAL======
Create a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999999.

Examples
number2words(0)  ==>  "zero"
number2words(1)  ==>  "one"
number2words(9)  ==>  "nine"
number2words(10)  ==>  "ten"
number2words(17)  ==>  "seventeen"
number2words(20)  ==>  "twenty"
number2words(21)  ==>  "twenty-one"
number2words(45)  ==>  "forty-five"
number2words(80)  ==>  "eighty"
number2words(99)  ==>  "ninety-nine"
number2words(100)  ==>  "one hundred"
number2words(301)  ==>  "three hundred one"
number2words(799)  ==>  "seven hundred ninety-nine"
number2words(800)  ==>  "eight hundred"
number2words(950)  ==>  "nine hundred fifty"
number2words(1000)  ==>  "one thousand"
number2words(1002)  ==>  "one thousand two"
number2words(3051)  ==>  "three thousand fifty-one"
number2words(7200)  ==>  "seven thousand two hundred"
number2words(7219)  ==>  "seven thousand two hundred nineteen"
number2words(8330)  ==>  "eight thousand three hundred thirty"
number2words(99999)  ==>  "ninety-nine thousand nine hundred ninety-nine"
number2words(888888)  ==>  "eight hundred eighty-eight thousand eight hundred eighty-eight"
*/
/*
CARA ORANG LAIN
1. ======>

// function number2words(n){
//   let key = {1: 'one', 2: 'two', 3: 'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine', 10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen', 20:'twenty', 30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety'};
//   let holder, temp, result = [], data = n;
//   if(data >= 100000){
//     holder = (data-(data%100000))/100000;
//     result.push(key[holder],'hundred')
//     data = data - (holder * 100000);
//     if(data < 1000){
//       result.push('thousand')
//     }
//   }
//   if(data >= 20000){
//     holder = (data-(data%10000))/10000;
//     temp = key[holder * 10];
//     data = data - (holder * 10000);
//     holder = (data-(data%1000))/1000;
//     if(holder){
//       temp += '-' + key[holder];
//       data = data - (holder * 1000);
//     }
//     result.push(temp, 'thousand');
//   }
//   if(data >= 1000){
//     holder = (data-(data%1000))/1000;
//     result.push(key[holder], 'thousand');
//     data = data - holder * 1000;
//   }
//   if(data >= 100){
//     holder = (data-(data%100))/100;
//     result.push(key[holder],'hundred')
//     data = data - (holder * 100);
//   }
//   if(data >= 20){
//     holder = (data-(data%10))/10;
//     temp = key[holder * 10];
//     data = data - (holder * 10);
//     holder = data;
//     if(holder){
//       temp += '-' + key[holder];
//       data = data - (holder);
//     }
//     result.push(temp);
//   }
//   if(data){
//     holder = data;
//     result.push(key[holder])
//     data = data - (holder);
//   }
//   if(n === 0){
//     return 'zero'
//   }
//   return result.join(' ');
// }

2. ======>

function number2words(n){
  // works for numbers between 0 and 999999
  var b=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  var b2=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
  if(n>=0 && n<20){
    return b[n];
  }
  if(n >= 20 && n<100){
    return b2[Math.floor(n/10)-2]+(n%10===0?'':'-'+b[n%10])
  }
  if(n>=100 && n<1000){
    return b[Math.floor(n/100)]+' hundred'+(n%100===0?'':' '+number2words(n%100));
  }else{
    return number2words(Math.floor(n/1000))+' thousand'+(n%1000===0?'':' '+number2words(n%1000));
  }
}

3. ======>
*/