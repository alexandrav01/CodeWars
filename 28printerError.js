// Printer colour names go from a to m
//Printer error from n to z (not a to m)

// Function printer_error which given a string will return the error rate of the printer x/y
//where x= number of errors; y= length of string

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// put letters a to m in a variable noError
//declare variable for stringLength
//declare variable for errorCount
// loop through string
// if loop noError.indexof(s[i])!==-1 error count=0
//else error count+=1

function printerError(s) {
  let noError = "abcdefghijklm";
  let stringLength = s.length;
  let errorCount = 0;

  console.log("String length is ", stringLength);

  for (let i = 0; i < s.length; i++) {
    if (noError.indexOf(s[i]) == -1) {
      errorCount += 1;
    }
    }
    console.log("Error Count is ", errorCount);

    return errorCount+"/"+stringLength
  }

console.log( printerError("aaabbbbhaijjjm"))
