function DNAStrand(dna) {
    let temp = ''
    for (let i = 0; i < dna.length; i++) {
        // if (dna[i] == 'A') {
        //     temp += 'T'
        // } else if (dna[i] == 'T') {
        //     temp += 'A'
        // } else if (dna[i] == 'G') {
        //     temp += 'C'
        // } else if (dna[i] == 'C') {
        //     temp += 'G'
        // }

        temp += (dna[i] == 'A') ? 'T' : (dna[i] == 'T') ? 'A' : (dna[i] == 'G') ? 'C' : 'G'
    }
    return temp
}
console.log(DNAStrand("AAAA"), "TTTT", "String AAAA is");
console.log(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
console.log(DNAStrand("GTAT"), "CATA", "String GTAT is");

/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA" 
*/

/*
CARA ORANG LAIN
1. ===>
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}


2. ===>
let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);
*/