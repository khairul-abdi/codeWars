function findUniq(numbers) {
    let arr = []

    for (let i = 0; i < numbers.length; i++) {
        let found = false
        for (let j = 0; j < arr.length; j++) {
            if (numbers[i] == arr[j][0]) found = true, arr[j][1] += 1
        }
        if (found == false) arr.push([numbers[i], 1])
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] == 1) return arr[i][0]
    }
}

console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([4, 4, 'foo', 4]), 'foo');

/*
=====SOAL======
There is an array. All elements are the same except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 4, 4, 'foo', 4 ]) === 'foo'
It’s guaranteed that array contains more than 3 elements. Array may contain anything (including NaN).
*/
/*
CARA ORANG LAIN
1. ======>

function findUniq(arr) {
  let ans=arr.filter(x=>Object.is(x,arr[0])?false:true)
  return ans.length==1?ans.pop():arr[0]
}

2. ======>

function findUniq(arr) {

 for(i in arr){
      if((arr[i])!==arr[i])continue;
      if(arr.indexOf(arr[i])==arr.lastIndexOf(arr[i])) return arr[i];
    }
}

3. ======>

function findUniq(arr) {
  
  let map = new Map();
  
  for(let i = 0; i < arr.length; i++) {
  if(!map.get(arr[i])) {
    
     map.set(arr[i],1); 
    
  } else {
    let counter = map.get(arr[i])
    counter++;
     map.set(arr[i], counter);
  }
    
  }
  
  for(let [key, value] of map.entries()) {
    //console.log(key, value);
    if(value === 1) {
       return key;
    }
    
  }
  
}

4. ======>

function findUniq(arr) { 
return arr.find(i => i === i && arr.indexOf(i) == arr.lastIndexOf(i));
}

5. ======>

function findUniq(arr) {
  const a = arr[0], b = arr[1];
  if (!Object.is(a, b)) return Object.is(arr[2], a) ? b : a;
  for (let i = 2; i < arr.length; ++i) if (!Object.is(arr[i], a)) return arr[i];
}

6. ======>

function findUniq(arr) {  
  if((arr[0]!==arr[1]&&arr[0]!==arr[2]) && !isNaN(arr[0])){
    return arr[0]
  }  
  for(let i=1; i<arr.length; i++){  
   if(arr[i]!==arr[0]&&(!isNaN(arr[i])||(typeof arr[i] == "object"|| typeof arr[i] == "string"))){
     return arr[i]
   }    
  }  
}

7. ======>

var isNaN = function(value) {
    return typeof value === 'number' && Number.isNaN(value);
}
function compare(a, b) {
  return isNaN(a) && isNaN(b) ? true : a === b;
}
function findUniq(arr) {
  let basic = arr[0];
  
  if (compare(basic, arr[1]) && compare(basic, arr[2])) {
        basic = arr.find(n => !compare(n, basic));
  } else if (compare(basic, arr[1])) {
    basic = arr[2];
  } else if (compare(basic, arr[2])) {
    basic = arr[1];
  }
  
  return basic;
}

8. ======>

let findUniq=a=>a.find((x,i)=>Number.isNaN(x)?!(Number.isNaN(x)&&(Number.isNaN(a[i+1])||Number.isNaN(a[i-1]))):a.indexOf(x)===a.lastIndexOf(x));

9. ======>

function findUniq(arr) {
    const notUniq = arr[0] === arr[1] ? arr[0] : arr[2];
    let uniq;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isNaN(arr[i]) && Number.isNaN(notUniq)) {
            continue;
        }

        if (arr[i] !== notUniq) {
            uniq = arr[i];
            break;
        }
    }

    return uniq;
}

10. ======>

function findUniq(arr) {
    for (const v of new Set(arr)) {
        if (arr.filter(v2 => v2 === v, arr).length === 1) {
            return arr[arr.indexOf(v)]
        }
    }
}


11. ======>

findUniq=a=>a.find(e=>!Number.isNaN(e)&&a.lastIndexOf(e)===a.indexOf(e))

*/