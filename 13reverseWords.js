
function reverseWords(str) {
  let splitString = str.split("")
  console.log("Split String is ", splitString)

  let reverseArray = splitString.reverse()
  console.log("Reversed Array is ", reverseArray)

  var newString = reverseArray.join("")
  console.log("New String is ", newString)

  return newString
  }
  console.log(reverseWords("awesome food"))