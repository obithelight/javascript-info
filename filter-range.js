// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// Solution

let arr = [5, 6, 3, 7, 1, 8, 19, 12];

function filterRangeInPlace(arr, a, b){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < a || arr[i] > b){
      arr.splice(i, 1)
      i--
    }    
  }
}

filterRangeInPlace(arr, 5, 10) // removed the numbers except from 5 to 10
console.log(arr) // [5, 6, 7, 8]