// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let array=s.split(" ")
   let indexes = []
   for(let i=0; i<array.length; i++){
    indexes.push(array[i].length)
   }
   let sorted = indexes.sort(function(a, b){return a - b})
   return sorted[0]
}
console.log (findShort("the world is mine"))