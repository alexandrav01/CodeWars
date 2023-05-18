// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// All arrays or lists will always have at least one element, so you don't need to check the length. 
// Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

function minMax(arr){
//   let array=[]
//   for(let i=0; i<arr.length; i++){
// array.push(arr[i])
//   }
  let sorted = arr.sort(function(a, b){return a - b})
  // console.log("array is ", array)
  console.log("sorted array is ", sorted)
  console.log("index 0 is ", sorted[0])
  console.log("index n-1 is ", sorted[sorted.length-1])

  return ([sorted[0], sorted[sorted.length-1]])

  }
  console.log (minMax([9, 567, 3, 66]))