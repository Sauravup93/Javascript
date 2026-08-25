// Array

const fruits = ["Apple", "Mango", "Banana", "Orange"];

console.log(fruits);


// 1. push()
// Adds value to the end of an array

fruits.push("Grapes");

console.log(fruits);


// 2. pop()
// Removes the last value

fruits.pop();

console.log(fruits);


// 3. unshift()
// Adds value to the beginning

fruits.unshift("Pineapple");

console.log(fruits);


// 4. shift()
// Removes the first value

fruits.shift();

console.log(fruits);


// 5. includes()
// Checks whether a value exists
// Returns true or false

console.log(fruits.includes("Mango")); // true
console.log(fruits.includes("Apple")); // true


// 6. indexOf()
// Returns the index/position of a value

console.log(fruits.indexOf("Banana")); // 2


// 7. join()
// Converts an array into a string

console.log(fruits.join(", "));


// 8. slice()
// Extracts a portion of an array
// Original array remains unchanged

const newFruits = fruits.slice(1, 3);

console.log(newFruits);
console.log(fruits);


// 9. splice()
// Adds, removes or replaces elements
// Original array is changed

fruits.splice(1, 1);

console.log(fruits);