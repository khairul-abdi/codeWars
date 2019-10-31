function checkTheBucket(bucket) {

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] == 'gold') return true

    }
    return false
}

console.log(checkTheBucket(["stone", "stone", "stone", "stone", "stone"]), false);
console.log(checkTheBucket(["stone", "stone", "stone", "stone", "gold"]), true);
console.log(checkTheBucket(["gold", "stone", "stone", "stone", "stone"]), true);
console.log(checkTheBucket([]), false);
console.log(checkTheBucket(["stone", "stone", "stone", "gold", "gold"]), true);

/*
=====SOAL======
pasteDisiniA western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.
*/
/*
CARA ORANG LAIN
1. ======>

function checkTheBucket(bucket){
  return bucket.includes('gold');
}

2. ======>

let checkTheBucket = arr => arr.includes('gold')

3. ======>
*/