function GetSum(a, b) {
    if (a == b) return a

    let indeks = (a < b) ? a : b
    let akhir = indeks == a ? b : a

    akhir = indeks == a ? b : a

    let result = 0

    // console.log('INDEKS AWAL : ', indeks)
    for (let i = 0; indeks <= akhir; i++) {
        result += indeks
        // console.log('I BEFORE: ', indeks)
        indeks++
        // console.log('I AFTER : ', indeks)

    }
    return result
}

//arrow function

// const GetSum = (a, b) => a == b ? a : a + b


console.log(GetSum(0, -1), -1);
console.log(GetSum(0, 1), 1);
console.log(GetSum(-1, 2), 2) // - 1 + 0 + 1 + 2 = 2
console.log(GetSum(3, 3), 3);
console.log(GetSum(-527, -560), -18479);

/*
Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

/*
CARA ORANG LAIN
1. ===>
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
 
2. ===>
function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

3. ===>
function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}
 */