// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//turn string in an array with arrays where each array ia a word
//reverse each array in the big array

function reverseWords(str) {
   let splitSentence= str.split(" ")
   let splitString=[]
   let reversedSentence=[]
   
   for(let i=0; i<splitSentence.length; i++){
    splitString = splitSentence[i].split("").reverse().join("")
    reversedSentence.push(splitString)
   }
   
return reversedSentence.join(" ")
    }
    console.log(reverseWords("awesome husband and baby"))