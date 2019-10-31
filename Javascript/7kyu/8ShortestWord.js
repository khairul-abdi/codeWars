function findShort(s) {

    var word = []
    var temp = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            word.push(temp.length)
            temp = ''
        } else {
            temp += s[i]
        }
    }
    word.push(temp.length)


    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] > word[j]) {
                let temp = word[j]
                word[j] = word[i]
                word[i] = temp
            }
        }
    }
    // console.log(word)
    return word[0]
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);

/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

//cara orang lain
/*
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

function findShort(s){
  var arr = s.split(' ');
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length < smallest.length){
      smallest = arr[i];
    }
  }
  return smallest.length;
}

*/