// Given two integers a and b, which can be positive or negative, find the sum of all the integers between 
// and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b){
    if (a<b){
    var lowEnd=a;
    // console.log("lowEnd is ", lowEnd)
    var highEnd =b;
    // console.log("highEnd is ", highEnd)
    } else if (a>b){
        var lowEnd=b;
    var highEnd =a;
    } else if(a=b){
        return a
    }
    var list =[]
    let sum= 0
    console.log("compare ", highEnd>lowEnd)

     for(let i=lowEnd; i<=highEnd; i++){
         list.push(i)
          sum+=i
    } 
    return sum
}