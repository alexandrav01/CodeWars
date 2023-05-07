// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the
// second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// declare an empty array
// for loop

//if statement elemente <0 -> sum
//if array null - return null
//else return [length, sum]

//input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
//return [10, -65]

function countPositivesSumNegatives(input) {
  if (input[0] == undefined) {
    return [];
  } else var sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      sum++;
    }
  }
  var neg = 0;
  for (let a = 0; a < input.length; a++) {
    if (input[a] < 0) {
      neg = neg + input[a];
    }
  }
  let arr = [sum, neg];
  return arr;
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
// console.log(countPositivesSumNegatives([]))
