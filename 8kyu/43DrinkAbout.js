function peopleWithAgeDrink(old) {
    if (old < 14) {
        return "drink toddy"
    } else if (old < 18) {
        return "drink coke"
    } else if (old < 21) {
        return "drink beer"
    } else {
        return "drink whisky"
    }
};

console.log(peopleWithAgeDrink(22), 'drink whisky');

/*
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples:

peopleWithAgeDrink(13) === "drink toddy"
peopleWithAgeDrink(17) === "drink coke"
peopleWithAgeDrink(18) === "drink beer"
peopleWithAgeDrink(20) === "drink beer"
peopleWithAgeDrink(30) === "drink whisky"
*/

/*
CARA ORANG LAIN
1. =====>
const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"

2. =====>
const peopleWithAgeDrink = old => 'drink ' + (old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer' : 'whisky')

3. =====>
var peopleWithAgeDrink = function(old) {
  var groups = [
    [14, "toddy"],
    [18, "coke"],
    [21, "beer"],
    [999, "whisky"]
  ];
  for(var i = 0; i < groups.length; i++){
    var group = groups[i];
    if(old < group[0]){
       return "drink "+group[1];
    }
  }
};
*/