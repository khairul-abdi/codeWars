function deleteNth(arr, n) {
    let result = []
    let count = []

    for (let i = 0; i < arr.length; i++) {
        if (result.length == 0) {
            result.push(arr[i])
            count.push([arr[i], 1])
        } else {
            let found = false
            for (var j = 0; j < count.length; j++) {
                if (arr[i] == count[j][0]) {
                    if (count[j][1] < n) {
                        found = true
                        result.push(arr[i])
                        count[j][1] += 1
                    } else {
                        count[j][1] += 1
                        found = true
                    }
                }
            }
            if (found == false) {
                result.push(arr[i])
                count.push([arr[i], 1])
            }
        }
    }
    // console.log('Result : ', result)
    // console.log('Count : ', count)
    return result
}

console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21])
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2])

/*
=====SOAL======
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

Example
  deleteNth ([1,1,1,1],2) // return [1,1]

  deleteNth ([20,37,20,21],1) // return [20,37,21]
*/
/*
CARA ORANG LAIN
1. ======>

function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}

2. ======>

function deleteNth(arr,x){
  var count = {};
  return arr.filter(function(a){
    count[a] = ~~count[a]+1; // Arti dari ~~ sama fungsinya dengan Math.floor() 
    return count[a]<=x;
  })
}//z.

3. ======>

const deleteNth = (arr,x) => arr.filter((e,i)=> arr.slice(0,i).filter(f=>f== e).length < x );

*/