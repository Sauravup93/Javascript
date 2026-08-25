
let convertedMarks = Number(marks);

console.log(convertedMarks);          // NaN
console.log(typeof convertedMarks);   // number

// IMPORTANT:
// NaN = Not a Number
//
// Even though the result is NaN,
// its data type is still a "number".


// -------------------------------------------------------
// 2. Number -> String
// -------------------------------------------------------

let someNumber = 344;

console.log(someNumber);
console.log(typeof someNumber);   // number

// String() converts a value into a String.
let valueInString = String(someNumber);

console.log(valueInString);          // "344"
console.log(typeof valueInString);   // string


// -------------------------------------------------------
// 3. Number -> Boolean
// -------------------------------------------------------

let isLoggedIn = 1;

// Boolean() converts a value into true or false.
//
// 1  -> true
// 0  -> false

let valueInBoolean = Boolean(isLoggedIn);

console.log(valueInBoolean);               // true
console.log(typeof valueInBoolean);        // boolean


// -------------------------------------------------------
// 4. String -> Boolean
// -------------------------------------------------------

let username = "Saurav";

let usernameBoolean = Boolean(username);

console.log(usernameBoolean);   // true

// A non-empty string becomes true.


// -------------------------------------------------------
// Empty String -> Boolean
// -------------------------------------------------------

let emptyString = "";

let emptyStringBoolean = Boolean(emptyString);

console.log(emptyStringBoolean);   // false

// Empty string "" -> false
// Non-empty string "Saurav" -> true


// -------------------------------------------------------
// 5. Number -> Boolean
// -------------------------------------------------------

console.log(Boolean(1));      // true
console.log(Boolean(0));      // false
console.log(Boolean(100));    // true
console.log(Boolean(-10));    // true


// -------------------------------------------------------
// 6. Boolean -> Number
// -------------------------------------------------------

console.log(Number(true));    // 1
console.log(Number(false));   // 0


// -------------------------------------------------------
// 7. Boolean -> String
// -------------------------------------------------------

console.log(String(true));    // "true"
console.log(String(false));   // "false"


// =======================================================
// IMPORTANT CONVERSION TABLE
// =======================================================
//
// String -> Number
// Number("22")       -> 22
// Number("22abc")    -> NaN
//
// Number -> String
// String(344)        -> "344"
//
// Number -> Boolean
// Boolean(1)         -> true
// Boolean(0)         -> false
//
// String -> Boolean
// Boolean("Saurav")  -> true
// Boolean("")        -> false
//
// Boolean -> Number
// Number(true)       -> 1
// Number(false)      -> 0
//
// Boolean -> String
// String(true)       -> "true"
// String(false)      -> "false"


// =======================================================
// SOME IMPORTANT SPECIAL CASES
// =======================================================

console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN

console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false

console.log(String(null));       // "null"
console.log(String(undefined));  // "undefined"


// =======================================================
// NaN
// =======================================================

// NaN means "Not a Number".
//
// It usually happens when we try to convert
// something into a number but the value is invalid.

let value = Number("Saurav");

console.log(value);        // NaN
console.log(typeof value); // number