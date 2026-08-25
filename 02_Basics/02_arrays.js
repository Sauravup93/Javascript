let marvel_heroes = ["Ironman", "Thor","Captain America", "Spiderman"]


let dc_heroes = [ "Batman", "flash" , "superman"]


console.log(marvel_heroes.concat(dc_heroes));



//                          Advanced Array Methods


// push() vs concat()

const arr1 = [1, 2];
const arr2 = [3, 4];

arr1.push(arr2);

console.log(arr1);
// [1, 2, [3, 4]]

const result = [1, 2].concat([3, 4]);

console.log(result);
// [1, 2, 3, 4]


// Spread Operator (...)

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];

console.log(combined);
// [1, 2, 3, 4, 5, 6]


// flat()

const numbers = [1, 2, [3, 4], [5, 6]];

console.log(numbers.flat());
// [1, 2, 3, 4, 5, 6]


// Array.isArray()

const fruits = ["Apple", "Mango"];

console.log(Array.isArray(fruits)); // true
console.log(Array.isArray("Apple")); // false


// Array.from()

const name = "Saurav";

const letters = Array.from(name);

console.log(letters);
// ["S", "a", "u", "r", "a", "v"]


// Array.of()

const values = Array.of(10, 20, 30);

console.log(values);
// [10, 20, 30]