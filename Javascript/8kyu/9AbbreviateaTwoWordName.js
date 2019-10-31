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
  }
  result.push(temp);
  // console.log('RESULT : ', result); //Digunakan untuk memisahkan tiap kata ke dalam array

  for (let i = 0; i < result.length; i++) { // Proses ambil huruf pertama 
    if ([i][0] == [i][0]) {
      output.push(result[i][0]);
    }
  }

  // console.log('OUTPUT : ', output)
  return `${output[0].toUpperCase()}.${output[1].toUpperCase()}`;
}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("Daid Mendieta"), "D.M");
console.log(abbrevName("Ca yo"), "C.Y");
console.log(abbrevName("george clooney"), "G.C");


// function abbrevName(name) {
//   var nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }

console.log(abbrevName("Tony greenheck"));