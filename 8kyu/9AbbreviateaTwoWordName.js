// Cara pertama kekurangannya jika nama kedua ataupun nama pertama itu huruf kecil
// maka tidak akan masuk ke array

//cara 1
// function abbrevName(name) {
//     var result = []
//     for (let i = 0; i < name.length; i++) {
//         if (name[i] == name[i].toUpperCase() && name[i] != ' ') {
//             result.push(name[i])
//         }
//     }
//     return `${result[0]}.${result[1]}`
// }

// console.log(abbrevName("Sam Harris"), "S.H");
// console.log(abbrevName("Patrick Feenan"), "P.F");
// console.log(abbrevName("Evan Cole"), "E.C");
// console.log(abbrevName("P Favuzzi"), "P.F");
// console.log(abbrevName("David Mendieta"), "D.M");
// console.log(abbrevName("Ca Yo"), "C.Y")

//cara 2
function abbrevName(name) {
  var output = [];
  var result = [];
  var temp = "";

  for (let i = 0; i < name.length; i++) {
    if (name[i] == " ") {
      result.push(temp);
      temp = "";
    } else {
      temp += name[i];
    }

    // (name[i] == ' ') ? (result.push(temp), (temp = '')) : (name[i] == name[name.length - 1]) ? (temp += name[i], (result.push(temp))) : (temp += name[i])
  }
  result.push(temp);

  console.log(result);
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (result[i][j] == result[i][0]) {
        output.push(result[i][j]);
      }
    }
  }

  // console.log(output)
  return `${output[0].toUpperCase()}.${output[1].toUpperCase()}`;
}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("Daid Mendieta"), "D.M");
console.log(abbrevName("Ca yo"), "C.Y");

function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

console.log(abbrevName("Tony greenheck"));
