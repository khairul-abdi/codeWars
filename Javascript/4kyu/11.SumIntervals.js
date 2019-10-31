/*
=====SOAL======
Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
Intervals

Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
Overlapping Intervals

List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]

The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.
Examples:

sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19

*/
/*
CARA ORANG LAIN
1. ======>

function sumIntervals(intervals) {
  const ranges = new Set();
  
  intervals.forEach(([start, end]) => {
    for (let i = start; i < end; i++) ranges.add(i);
  });
  
  return ranges.size;
}

2. ======>

function sumIntervals(intervals){
  var arr=[];
  for (var i=0; i<intervals.length; ++i)
    for (var j=intervals[i][0]; j<intervals[i][1]; ++j)
      if (arr.indexOf(j)==-1)
        arr.push(j);
  return arr.length; 
}

3. ======>

function sumIntervals(intervals){
  var nums = new Set()
  for (var j of intervals){
    for (var i=j[0]; i<j[1]; i++){
      nums.add(i)
    }
  }
  return nums.size
}

*/