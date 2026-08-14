// =======================================================
// 04_comparisonOperators.js
// Comparison Operators in JavaScript
// =======================================================

// Comparison operators compare two values.
// The result is always either true or false.


// -------------------------------------------------------
// 1. Greater Than ( > )
// -------------------------------------------------------

console.log(20 > 10);    // true
console.log(10 > 20);    // false


// -------------------------------------------------------
// 2. Less Than ( < )
// -------------------------------------------------------

console.log(10 < 20);    // true
console.log(20 < 10);    // false


// -------------------------------------------------------
// 3. Greater Than or Equal To ( >= )
// -------------------------------------------------------

console.log(20 >= 20);   // true
console.log(25 >= 20);   // true
console.log(15 >= 20);   // false


// -------------------------------------------------------
// 4. Less Than or Equal To ( <= )
// -------------------------------------------------------

console.log(20 <= 20);   // true
console.log(15 <= 20);   // true
console.log(25 <= 20);   // false


// -------------------------------------------------------
// 5. Loose Equality ( == )
//
// Compares values.
// JavaScript can perform type conversion.
// -------------------------------------------------------

console.log(5 == 5);     // true
console.log(5 == "5");   // true

// 5 is Number
// "5" is String
// == converts the values before comparing them.


// -------------------------------------------------------
// 6. Strict Equality ( === )
//
// Compares BOTH value and data type.
// -------------------------------------------------------

console.log(5 === 5);     // true
console.log(5 === "5");   // false

// 5   -> Number
// "5" -> String
// Different data types -> false

// In modern JavaScript, prefer === over ==.


// -------------------------------------------------------
// 7. Loose Not Equal ( != )
// -------------------------------------------------------

console.log(5 != 10);     // true
console.log(5 != 5);      // false

console.log(5 != "5");    // false


// -------------------------------------------------------
// 8. Strict Not Equal ( !== )
//
// Checks both value and type.
// -------------------------------------------------------

console.log(5 !== 10);    // true
console.log(5 !== "5");   // true
console.log(5 !== 5);     // false


// =======================================================
// IMPORTANT DIFFERENCE
// =======================================================

console.log(5 == "5");    // true
console.log(5 === "5");   // false

// ==  -> Loose comparison
// === -> Strict comparison


// =======================================================
// Variables with Comparison
// =======================================================

let age = 18;

console.log(age > 18);    // false
console.log(age >= 18);   // true
console.log(age < 18);    // false
console.log(age <= 18);   // true

console.log(age == 18);   // true
console.log(age === 18);  // true


// =======================================================
// IMPORTANT
// =======================================================

// =  -> Assignment
// == -> Loose comparison
// === -> Strict comparison

let number = 18;          // Assignment

console.log(number == 18);    // Comparison
console.log(number === 18);   // Strict comparison