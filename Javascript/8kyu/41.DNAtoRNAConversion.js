function DNAtoRNA(dna) {
    let output = ''
    for (let i = 0; i < dna.length; i++) {
        // if (dna[i] == 'T') {
        //     output += 'U'
        // } else {
        //     output += dna[i]
        // }
        dna[i] == 'T' ? output += 'U' : output += dna[i]
    }
    return output
}

console.log(DNAtoRNA("TTTT"), "UUUU")
console.log(DNAtoRNA("GCAT"), "GCAU")
console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")

/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a funciton which translates a given DNA string into RNA.

For example:

DNAtoRNA("GCAT") returns ("GCAU")
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/

/*
CARA ORANG LAIN
1. =====>
function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}

2. =====>
function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

3. =====>
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  
  while(dna.indexOf('T') !== -1 ){
    dna = dna.replace('T', 'U');
  }
  
  return dna;
}
*/