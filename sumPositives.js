// You get an array of numbers, return the sum of all of the positives ones.
// Note: if there is nothing to sum, the sum is default to 0.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
  let sum=0;
//   console.log("array is", arr)
    for(let i=0; i<arr.length; i++){
    if(arr[i]>0){
        sum+=arr[i];
        // console.log("if condition is ", arr[i]>0)

    } else if (arr[0]==undefined){
        sum=0
        // console.log("else if condition is ", arr[i]==0)
    }
  }
  return sum
//   console.log("sum is ", sum)
}
console.log(positiveSum([-3, -5, -7, -8]))