// Given a string made up of letters a, b, and/or c, switch the position of letters a and b
// (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x) {
  var swap =[];
//   console.log("string x is ", x);
  for (let i=0; i<x.length; i++) {
    // console.log("index is ", x[i]);
    if (x[i] === "a") {
      swap.push("b");
    } else if (x[i] === "b") {
      swap.push("a");
    } else swap.push(x[i]);
  }
  return swap.join("");
}
console.log(switcheroo("bac"));
