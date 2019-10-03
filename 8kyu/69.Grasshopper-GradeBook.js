function getGrade(s1, s2, s3) {
    let result = (s1 + s2 + s3) / 3

    if (result >= 90 && result <= 100) {
        return 'A'
    } else if (result >= 80 && result < 90) {
        return 'B'
    } else if (result >= 70 && result < 80) {
        return 'C'
    } else if (result >= 60 && result < 70) {
        return 'D'
    } else if (result >= 0 && result < 60) {
        return 'F'
    }
}

console.log(getGrade(95, 90, 93), 'A')
console.log(getGrade(100, 85, 96), 'A')
console.log(getGrade(92, 93, 94), 'A')

/*
=====SOAL======
Grade book
Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/
/*
CARA ORANG LAIN
1. ======>
2. ======>
3. ======>
*/