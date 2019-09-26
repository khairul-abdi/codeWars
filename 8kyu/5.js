function finalGrade(exam, projects) {

    var output = 0

    // if (exam > 90 || projects > 10) {
    //     output = 100
    // } else if (exam > 75 && projects >= 5) {
    //     output = 90
    // } else if (exam > 50 && projects >= 2) {
    //     output = 75
    // } else {
    //     output = 0
    // }

    // return output // final grade

    return output = (exam > 90 || projects > 10) ? 100 : (exam > 75 && projects >= 5) ? 90 : (exam > 50 && projects >= 2) ? 75 : 0
}

console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);
console.log(finalGrade(0, 2), 0)
console.log(finalGrade(0, 4), 0)
console.log(finalGrade(0, 5), 0)
console.log(finalGrade(0, 6), 0)
console.log(finalGrade(1, 10), 0)


/*
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples:

finalGrade(100, 12);  // 100
finalGrade(99, 0);    // 100
finalGrade(10, 15);   // 100

finalGrade(85, 5);    // 90

finalGrade(55, 3);    // 75

finalGrade(55, 0);    // 0
finalGrade(20, 2);    // 0
*/

const finalGrade = (exam, projects) => {
    return (
        exam > 90 || projects > 10 ? 100 :
        exam > 75 && projects >= 5 ? 90 :
        exam > 50 && projects >= 2 ? 75 : 0
    )
}

const finalGrade = (exam, projects) => exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0