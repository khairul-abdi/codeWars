with (Math) circleIntersection = ([a, b], [c, d], r) => (-sin(x = 2 * acos(hypot(a - c, b - d) / 2 / r)) + x) * r * r | 0

console.log(circleIntersection([0, 0], [7, 0], 5), 14)

console.log(circleIntersection([0, 0], [0, 10], 10), 122)

console.log(circleIntersection([5, 6], [5, 6], 3), 28)

console.log(circleIntersection([-5, 0], [5, 0], 3), 0)

console.log(circleIntersection([10, 20], [-5, -15], 20), 15)

console.log(circleIntersection([-7, 13], [-25, -5], 17), 132)

console.log(circleIntersection([-20, -4], [-40, 29], 7), 0)

console.log(circleIntersection([38, -18], [46, -29], 10), 64)

console.log(circleIntersection([-29, 33], [-8, 13], 15), 5)

console.log(circleIntersection([-12, 20], [43, -49], 23), 0)

/*
=====SOAL======
Task
Given two congruent circles a and b of radius r, return the area of their intersection rounded down to the nearest integer.

Code Limit
Javascript: Less than 94 characters.

Python: Less than 128 characters.

Example
For c1 = [0, 0], c2 = [7, 0] and r = 5,

the output should be 14.
*/
/*
CARA ORANG LAIN
1. ======>

circleIntersection=([a,b],[c,d],r)=>(m=Math,-m.sin(x=2*m.acos(m.hypot(a-c,b-d)/2/r))+x)*r*r|0

2. ======>

with(Math)circleIntersection=([a,b],[c,d],r)=>(-sin(x=2*acos(hypot(a-c,b-d)/2/r))+x)*r*r|0

*/