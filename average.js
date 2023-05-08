// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//declare variable for sum
//create a for loop to go through array
//add elements of the array
//create variable for average - sum/array.length
//clg average
//if array [] - return 0 else return average


function findAverage(array) {
   let sum=0;
   for (let i=0; i<array.length; i++){
    sum+=array[i];
   }
   let average=0;
   average=sum/array.length
  if(array[0]==undefined){
    return 0
  } else
  return average;
   
  }
  console.log (findAverage([]));