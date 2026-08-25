// =======================================================
// Numbers in JavaScript
// =======================================================

// Number
let age = 18;
let price = 99.4567;

console.log(age);
console.log(price);

console.log(typeof age); // number


// =======================================================
// Number Conversion
// =======================================================

// String to Number
let score = "100";

console.log(Number(score)); // 100


// Invalid conversion
console.log(Number("100abc")); // NaN


// parseInt() → converts to integer
console.log(parseInt("100px")); // 100
console.log(parseInt("99.99")); // 99


// parseFloat() → converts to decimal number
console.log(parseFloat("99.99px")); // 99.99


// =======================================================
// Number Methods
// =======================================================

let number = 123.456789;


// toString() → Number to String
console.log(number.toString());
console.log(typeof number.toString());


// toFixed() → controls decimal places
console.log(number.toFixed(2)); // "123.46"
console.log(number.toFixed(3)); // "123.457"

// Note: toFixed() returns a String


// toPrecision() → controls total significant digits
console.log(number.toPrecision(4)); // "123.5"
console.log(number.toPrecision(6)); // "123.457"

// Note: toPrecision() also returns a String


// toLocaleString() → formats number according to locale
let amount = 1000000;

console.log(amount.toLocaleString());        // 1,000,000
console.log(amount.toLocaleString("en-IN")); // 10,00,000      # isme india me jaise hota hai 




console.log("==========================/////////////////////////==================================");

// =======================================================
// Numbers in JavaScript
// =======================================================
