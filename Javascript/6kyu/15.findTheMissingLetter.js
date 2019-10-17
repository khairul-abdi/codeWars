// function findMissingLetter(array) {
//     var huruf = 'abcdefghijklmnopqrstuvwxyz'

//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }

//     return ' ';
// }
// console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e')


// describe("KataTests", function(){
//     it("exampleTests", function(){
//       Test.assertEquals(findMissingLetter(['a','b','c','d','f']), 'e');
//       Test.assertEquals(findMissingLetter(['O','Q','R','S']), 'P');
//     });
//   });






// function findMissingLetter1(array) {
//     var huruf = 'abcdefghijklmnopqrstuvwxyz'
//     // let hurufBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     let count = 0

//     for (let i = 0; i < array.length; i++) {
//         let found = false
//         for (var j = 0; j < huruf.length; j++) {
//             if (array[i].toLowerCase() == huruf[j].toLowerCase()) {
//                 found = true
//                 console.log('huruf[j] == ',
//                     huruf[j], '--', true)
//                 count = j
//             }
//         }
//         if (found == false) {
//             return huruf[count]
//         }
//     }

//     // return ' ';
// }
// console.log(findMissingLetter1(['a', 'b', 'c', 'd', 'f']), 'e')
// console.log(findMissingLetter1(['O', 'Q', 'R', 'S']), 'P');

console.log('----------------------------------------------------')


function findMissingLetter(array) {
    var besarAtauKecil;

    if (array[0] == array[0].toUpperCase()) {
        besarAtauKecil = true;
    } else {
        besarAtauKecil = false;
    }

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (besarAtauKecil === true) {
        alphabet = alphabet.toUpperCase();
    }

    var hurufPertama = alphabet.indexOf(array[0]);
    // console.log("hurufPertama: ", hurufPertama);

    for (var i = 1; i < array.length; i++) {
        var indeks = alphabet.indexOf(array[i]);
        // console.log("indeks: ", indeks);
        if (indeks == hurufPertama + i) {
            true
        } else {
            return jawaban = alphabet[indeks - 1];
        }
    }
}

console.log(findMissingLetter(["N", "P", "Q", "R", "S"]), 'O');
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');