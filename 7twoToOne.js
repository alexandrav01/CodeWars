// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string,
// the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

//variabila care creaza din a si b un singur string
//variabila care imi ia elementele noi intr un singur exemplar (sorted)
//for loop care ruleaza prin string si push elementele de acelasi fel o singura data in arrayul sorted
//sorted.sort
//array to string
//return sorted

function longest(s1, s2) {
  let string = s1 + s2;
  console.log("string is ", string);
  //create 1 string

  let array = string.split("");
  console.log("array is ", array);
  //convert string to array

  let newArray = array.filter((item, index) => array.indexOf(item) === index);
  //filter duplicates from array

  let sorted = newArray.sort();
  // sort alphabetically

  let comma = newArray.toString();
  console.log("sorted is ", sorted);
  //convert back to string

  let final = comma.replaceAll(",", "");
  console.log("final string is ", final);
  //remove ","

  return final;
}
console.log(longest("absjgoi", "hafiwgfjhbfd"));
