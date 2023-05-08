// DNA is composed of Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

//RNA contains no Thymine. 
//RNA Thymine is replaced by Uracil ('U').

// The input string can be of arbitrary length - in particular, it may be empty. 
// All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// Create a function which translates a given DNA string into RNA.

// For example:
// "GCAT"  =>  "GCAU"

//function that loops through string
//loop finds T
//replace T with U

// function DNAtoRNA(dna) {
//     let result=[]
//     for(let i=0; i<dna.length; i++){
//         if(dna[i]=="U"){
//         result.push(dna[i])
//         }
//     }
//     console.log(result) 
//     }   

// (DNAtoRNA("UTUT"))

function DNAtoRNA(dna) {
    let result=[]
    for(let i=0; i<dna.length; i++){
        if(dna[i]=="T"){
        result.push("U")
        } else result.push(dna[i])
    }
    return result.join("")
    }   