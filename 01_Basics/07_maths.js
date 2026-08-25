
// =======================================================
// Important Math Methods
// =======================================================

// round() → nearest integer
console.log(Math.round(4.6)); // 5


// floor() → rounds down
console.log(Math.floor(4.9)); // 4


// ceil() → rounds up
console.log(Math.ceil(4.1)); // 5


// trunc() → removes decimal part
console.log(Math.trunc(4.9)); // 4


// abs() → removes negative sign
console.log(Math.abs(-10)); // 10


// min() → smallest number
console.log(Math.min(10, 20, 5, 30)); // 5


// max() → largest number
console.log(Math.max(10, 20, 5, 30)); // 30


// sqrt() → square root
console.log(Math.sqrt(25)); // 5


// pow() → power
console.log(Math.pow(2, 3)); // 8

// Modern way
console.log(2 ** 3); // 8


// =======================================================
// Random Number
// =======================================================

// random() → random number between 0 and 1
console.log(Math.random());


// Random number from 1 to 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);


// =======================================================
// Special Values
// =======================================================

// NaN → Not a Number
console.log(Number("Saurav")); // NaN


// Infinity
console.log(10 / 0); // Infinity