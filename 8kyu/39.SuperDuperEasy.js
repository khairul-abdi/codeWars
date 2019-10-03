//CARA 1
function problem(x) {
    if (typeof x != 'number') {
        return 'Error'
    } else {
        return x * 50 + 6
    }
}

//CARA 2
problem = x => typeof x != 'number' ? 'Error' : x * 50 + 6

console.log(problem(1), 56);
console.log(problem(5), 256);
console.log(problem(0), 6);
console.log(problem(1.2), 66);
console.log(problem(3), 156);
console.log(problem("RyanIsCool"), "Error");
console.log(problem(-3), -144);
console.log(problem(""), "Error");
console.log(problem(0.03), 7.5);

/*
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

Note: in C#, you'll always get the input as a string, so the above applies if the string isn't representing a double value.
*/