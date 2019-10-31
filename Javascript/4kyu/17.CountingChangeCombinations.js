function countChange(target, arr) {
  if (target <= 0)
    return 0;

  if (!arr) {
    arr = [];
    for (var i = 1; i <= target; i++)
      arr[i] = i;
  }

  var a = []
    , b = [];

  for (var i = 0; i <= target; i++)
    a[i] = b[i] = 0;

  // start
  a[0] = 1;

  for (var i = 0; i < arr.length; i++) {

    for (var j = 0; j <= target; j++)
      for (var k = 0; j + k <= target; k += arr[i])
        b[j + k] += a[j];

    for (var j = 0; j <= target; j++)
      a[j] = b[j], b[j] = 0;
  }

  return a[target];
}
console.log(countChange(4, [1, 2]), 3, 'Simple case')
console.log(countChange(10, [5, 2, 3]), 4, 'Another simple case')
console.log(countChange(11, [5, 7]), 0, 'No change')

/*
=====SOAL======
Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

1+1+1+1, 1+1+2, 2+2.
The order of coins does not matter:

1+1+2 == 2+1+1
Also, assume that you have an infinite amount of coins.

Your function should take an amount to change and an array of unique denominations for the coins:

  countChange(4, [1,2]) // => 3
  countChange(10, [5,2,3]) // => 4
  countChange(11, [5,7]) //  => 0
*/
/*
CARA ORANG LAIN
1. ======>

var countChange = function(money, coins) {
  if(money < 0 || coins.length === 0)
    return 0
  else if(money === 0)
    return 1
  else
    return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
}

2. ======>

var countChange = function(money, coins) {
  return (money < 0 || coins.length<1) ? 0 : (money === 0) ? 1 : countChange(money - coins[0], coins) + countChange(money, coins.slice(1));
}

3. ======>

var countChange = function(money, denoms) {

  function count(m, n) {
    if (n == 0) return 1;
    if (n < 0) return 0;
    if (m <= 0 && n >= 1) return 0;
    return count(m - 1, n) + count(m, n - denoms[m - 1]);
  }

  return count(denoms.length, money);
}

*/