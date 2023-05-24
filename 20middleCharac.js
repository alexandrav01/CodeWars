// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even,
// return the middle 2 characters.

// Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"

// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some
// test cases due to an error in the test cases). You do not need to test for this.
// This is only here to tell you that you do not need to worry about your solution timing out.

// #Output
// The middle character(s) of the word represented as a string.

//convert to array
//varianble for length of array
//if length is even return index [length/2, length/2+1]
//if length is odd return index [length/2+1]

function getMiddle(s) {
  let sLength = s.length;
  console.log("String length is ", sLength);

  if (sLength % 2 == 0) {
    return s.substring(sLength / 2 - 1, sLength / 2 + 1);
  } else if (sLength % 2 !== 0) {
    return s.substring(sLength / 2, sLength / 2 + 1);
  }
}
console.log(getMiddle("bamboozle"));
