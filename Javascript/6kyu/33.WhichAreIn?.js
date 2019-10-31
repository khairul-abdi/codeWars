 function inArray(array1, array2) {
     let arr = [];
     array1.forEach(function (a1) {
         array2.some(function (a2) {
             if (a2.search(a1) > -1) {
                 if (!arr.includes(a1)) {
                     arr.push(a1);
                     return true
                 }
             }
         })
     });
     return arr.sort()
 }

 a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
 a1 = ["xyz", "live", "strong"]
 console.log(inArray(a1, a2), ["live", "strong"])
 a1 = ["live", "strong", "arp"]
 console.log(inArray(a1, a2), ["arp", "live", "strong"])
 a1 = ["tarp", "mice", "bull"]
 console.log(inArray(a1, a2), [])

 /*
 =====SOAL======
 Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

#Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

Beware: r must be without duplicates.
Don't mutate the inputs.
 */
 /*
 CARA ORANG LAIN
 1. ======>

 function inArray(arr1, arr2) {
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}

 2. ======>

 function inArray(array1,array2){
  return array1.filter(a1 => array2.find(a2 => a2.match(a1))).sort()
}

 3. ======>



 */