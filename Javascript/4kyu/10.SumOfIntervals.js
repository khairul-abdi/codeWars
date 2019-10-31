function sumIntervals(intervals) {
  //TODO
  intervals.sort(function (a, b) {
    if (a[0] !== b[0])
      return a[0] > b[0];
    return a[1] > b[1];
  });

  var ans = 0;

  var start = intervals[0][0],
    end = intervals[0][1];

  for (var i = 1, len = intervals.length; i < len; i++) {
    if (intervals[i][0] <= end) {
      end = Math.max(end, intervals[i][1]);
    } else {
      ans += end - start;
      start = intervals[i][0];
      end = intervals[i][1];
    }
  }

  ans += end - start;
  return ans;
}

var test1 = [
  [1, 5]
];
var test2 = [
  [1, 5],
  [6, 10]
];
var test3 = [
  [-348, -9],
  [-320, -94],
  [-486, 442],
  [-321, -273],
  [-114, 249],
  [89, 296],
  [-102, 442],
  [-295, 214],
  [0, 198],
  [-420, -409],
  [-341, 5],
  [-117, -78],
  [-324, 283],
  [-443, -253],
  [288, 300],
  [-458, -213],
  [-222, 112],
  [-82, 148],
  [295, 423],
  [-157, 269]
]

var test4 = [
  [291, 488], //793
  [-265, -262], //-527
  [-344, -41], //-385
  [-168, 461], //293
  [-346, 488], //142
  [-59, 97], //38
  [345, 436], //781
  [207, 306], //513
  [432, 471], //903
  [-282, -120], //-402
  [219, 387], //606
  [430, 481], //911
  [-197, 115], //-82
  [-218, 159], //-59  
  [234, 424], //658
  [-28, 123], //95
  [304, 467] //771
]

console.log(sumIntervals(test1), 4);
console.log(sumIntervals(test2), 8);
console.log(sumIntervals(test3), 928);
console.log(sumIntervals(test4), 834);