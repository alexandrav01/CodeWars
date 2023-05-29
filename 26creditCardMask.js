// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// if cc.length>5
//push last 4 digits in a var secondHalf
//push others in another var firstHallf
//declare a var result=[]
// create a string of # of the same length as firstHalf and push in result
//return result.secondHalf.join

function maskify(cc) {
  let array = cc.split("");
  let firstHalf = [];
  let secondHalf = [];
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array.length >= 5) {
      secondHalf = array.slice(-4);
      firstHalf = array.slice(0, array.length - 4);
    } else return cc;
  }

  for (let j = 0; j < firstHalf.length; j++) {
    result.push("#");
  }
  
  let cardNumber = result.concat(secondHalf);
  let cardMask = cardNumber.join("");

  return cardMask;
}
console.log(maskify("1"));
