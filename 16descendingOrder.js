// Your task is to make a function that can take any non-negative integer as an argument and 
// return it with its digits in descending order. Essentially, rearrange the digits to create 
// the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

//convert number to string
//convert string to an array
//sort array then join
//number array

function descendingOrder(n){
  let stringN=String(n)
  console.log("StringN is ", stringN)

  let arrayN= stringN.split("")
  console.log("ArrayN is ", arrayN)

  let sortN = arrayN.sort(function(a, b){return b - a})
  console.log("SortN is ", sortN)

  return Number(sortN.join(""))

  }
  console.log (descendingOrder(3497))