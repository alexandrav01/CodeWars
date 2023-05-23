// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

//cutie pt vocale
//array pt nousl string
//for loop care trece prin stringul actual, gaseste vocalele si le remove, push restul literelor in newString

function disemvowel(str) {
     let vowels="AEIOUaeiou"
let newString=[]
for(let i=0; i<str.length; i++){
if(vowels.indexOf(str[i]) == -1){
newString.push(str[i])
}
}
return newString.join("")
  }
console.log(disemvowel("i love bananas"))