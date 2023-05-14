// Given two integers a and b, which can be positive or negative, find the sum of all the integers between 
// and including them and return it. If the two numbers are equal return a or b.

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)

function getSum(a, b){
    var lowEnd=a;
    var highEnd =b;
    var list =[]
    let sum= 0
     for(let i=lowEnd; i<=highEnd; i++){
         list.push(i)
         sum+=i
     }
     return sum

 }
 console.log(getSum(2,4))