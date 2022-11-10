/* You have an array of user objects, each one has user.name. 

1. Write the code that converts it into an array of names. 
2. Write the code that converts it into an array of ages.

*/

let john = { 
  name: "John", 
  age: 25 
};

let pete = { 
  name: "Pete", 
  age: 30 
};

let mary = { 
  name: "Mary", 
  age: 28 
};

let users = [ john, pete, mary ];

let names = users.map(item => item.name)

let ages = users.map(item => item.age)

console.log( names ); // John, Pete, Mary
console.log( ages ); // 25, 30, 28