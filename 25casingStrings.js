// Your task is to convert strings to how they would be written by Jaden Smith. 
// The strings are actual quotes from Jaden Smith, but they are not capitalized in the 
// same way he originally typed them.

// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

function toJadenCase(str) {
    let newArray=str.split(" ")
    console.log(newArray)

    for(let i=0; i<newArray.length; i++){
        newArray[i] = newArray[i][0].toUpperCase() + newArray[i].substr(1);
    }
    return newArray.join(" ")

  };
 console.log( toJadenCase("How can mirrors be real if our eyes aren't real"))