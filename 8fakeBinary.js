// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
// Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
let arr =[]
    for(let i=0; i<x.length; i++){
  if(x[i]<5){
    arr.push(0)
  } else if (x[i]>=5){
    arr.push(1)
  }
}
return arr.join("")
}
console.log(fakeBin("0782265032452887038223"))