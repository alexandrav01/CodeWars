// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"
// Input: [0, 1, 4]
// Output: "odd"

// variable for sum of array
// for loop to pick all elements of the array
// variable = sum of elements
// variable for sum total
// sum total %2 - return even/ else odd

function oddOrEven(array) {
    let sum =0
    for(let i=0; i<array.length; i++){
        sum+=array[i]
    }
    var number = sum
    if (number%2==0){
return "even"
    } else return "odd"
 }
console.log(oddOrEven([1,2,3]))