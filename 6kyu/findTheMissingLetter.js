function findMissingLetter(array){
    var huruf = 'abcdefghijklmnopqrstuvwxyz'

    for(let i = 0; i < array.length; i++){
        console.log(array[i])   
    }

    return ' ';
}
console.log(findMissingLetter(['a','b','c','d','f']), 'e')

// describe("KataTests", function(){
//     it("exampleTests", function(){
//       Test.assertEquals(findMissingLetter(['a','b','c','d','f']), 'e');
//       Test.assertEquals(findMissingLetter(['O','Q','R','S']), 'P');
//     });
//   });