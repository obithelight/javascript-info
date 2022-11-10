/*
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.
*/

let arr = ['Lagos', 'Enugu', 'Benue', 'Kaduna', 'Imo']

function copySorted(arr){
  return arr.slice().sort()
}

console.log(copySorted(arr)) // ["Benue","Enugu","Imo","Kaduna","Lagos"]
console.log(arr) // ["Lagos","Enugu","Benue","Kaduna","Imo"]