// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// Your function receives one side of the DNA (string, except for Haskell);
// you need to return the other complementary side. DNA strand is never empty or there is no DNA at all
// (again, except for Haskell).

// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function dnaStrand(dna) {
  let result = [];
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] == "T") {
      result.push("A");
    } else if (dna[i] == "C") {
      result.push("G");
    } if(dna[i]=="A"){
        result.push("T")
  }if(dna[i]=="G"){
    result.push("C")
  }
}
  return result.join("");

}
console.log(DNAtoRNA("CAGT"));
