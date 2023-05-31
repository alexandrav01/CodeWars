// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case
// insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let xCount = 0;
  let oCount = 0;
  let x = "xX";
  let o = "oO";

  for (let i = 0; i < str.length; i++) {
    if (x.indexOf(str[i]) !== -1) {
      xCount += 1;
    } else if (o.indexOf(str[i]) !== -1) {
      oCount += 1;
    }
  }
  console.log("X count is ", xCount, ";O count is ", oCount);

  if (xCount==oCount){
    return true
  } else return false
}

console.log( XO("zpzpzp"));
