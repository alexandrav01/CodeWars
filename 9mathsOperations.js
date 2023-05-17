// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//var operate=0
// var arr =[]
// for loop through array to pick up array[0], array[1] si array [2]
//if statements pt 4 operatii 
// return  operation


function basicOp(operation, value1, value2){
    return eval(value1+ operation + value2);
}
console.log(basicOp("-",5,8))