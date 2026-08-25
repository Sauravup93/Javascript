
// =======================================================
// 05_strings.js
// JavaScript Strings
// =======================================================


// =======================================================
// PART 1 — Creating Strings
// =======================================================

const name = "Saurav";
const title = "Upadhyay";

console.log(name);
console.log(title);


// Single quotes and double quotes both work

const firstName = 'Saurav';
const lastName = "Upadhyay";


// =======================================================
// PART 2 — Template Literals
// =======================================================

// Template literals use backticks ` `
// ${variable} is used to insert a variable inside a string.

console.log(`My name is ${name} and my title is ${title}`);


// Example

const age = 18;

console.log(`My name is ${name} and I am ${age} years old.`);


// =======================================================
// PART 3 — String() Conversion
// =======================================================

// String() converts another data type into a string.

const gameName = String("Saurav");

console.log(gameName);
console.log(typeof gameName);


// Example

const number = 123;

const numberToString = String(number);

console.log(numberToString);
console.log(typeof numberToString);


// =======================================================
// PART 4 — length
// =======================================================

// length returns the number of characters in a string.

console.log(gameName.length);

console.log("Saurav".length); // 6


// =======================================================
// PART 5 — toUpperCase()
// =======================================================

// Converts the string into uppercase.

console.log(gameName.toUpperCase());


// =======================================================
// PART 6 — toLowerCase()
// =======================================================

// Converts the string into lowercase.

const username = "SAURAV";

console.log(username.toLowerCase());


// =======================================================
// PART 7 — charAt()
// =======================================================

// Returns the character at a particular index.
// Index starts from 0.

const studentName = "Saurav";

// S = 0
// a = 1
// u = 2
// r = 3
// a = 4
// v = 5

console.log(studentName.charAt(5)); // v


// =======================================================
// PART 8 — indexOf()
// =======================================================

// Returns the index of the first occurrence of a character/string.

console.log(studentName.indexOf("v")); // 5
console.log(studentName.indexOf("a")); // 1


// If the value is not found, it returns -1.

console.log(studentName.indexOf("z")); // -1


// =======================================================
// PART 9 — substring()
// =======================================================

// substring(start, end)
//
// start is included
// end is NOT included

const text = "Saurav";

const newString = text.substring(0, 6);

console.log(newString); // Saurav


console.log(text.substring(0, 3)); // Sau
console.log(text.substring(2, 5)); // ura


// substring() does not support negative indexes.
// Negative values are treated as 0.


// =======================================================
// PART 10 — slice()
// =======================================================

// slice(start, end)
//
// start is included
// end is NOT included
//
// slice() supports negative indexes.

const sliceText = "Saurav";

console.log(sliceText.slice(0, 4));  // Saur
console.log(sliceText.slice(2, 6));  // urav

console.log(sliceText.slice(-4));    // urav


// Negative index example:
//
// S a u r a v
// 0 1 2 3 4 5
// -6 -5 -4 -3 -2 -1


// =======================================================
// PART 11 — trim()
// =======================================================

// Removes whitespace from the beginning and end.

const nameWithSpace = "     Hitesh     ";

console.log(nameWithSpace);

console.log(nameWithSpace.trim());


// trimStart() → removes whitespace from beginning
// trimEnd()   → removes whitespace from end

console.log(nameWithSpace.trimStart());
console.log(nameWithSpace.trimEnd());


// =======================================================
// PART 12 — replace()
// =======================================================

// replace(oldValue, newValue)
//
// Replaces the first matching occurrence.

const url = "https://www.google.com/google%20baba";

console.log(url.replace("%20", "-"));


// Output:
// https://www.google.com/google-baba


// =======================================================
// PART 13 — replaceAll()
// =======================================================

// Replaces all matching occurrences.

const message = "hello hello hello";

console.log(message.replaceAll("hello", "hi"));


// Output:
// hi hi hi


// =======================================================
// PART 14 — includes()
// =======================================================

// Checks whether a string contains a particular value.
// Returns true or false.

const website = "https://www.google.com";

console.log(website.includes("google")); // true
console.log(website.includes("facebook")); // false


// =======================================================
// PART 15 — startsWith()
// =======================================================

// Checks whether a string starts with a particular value.

const site = "https://www.google.com";

console.log(site.startsWith("https")); // true
console.log(site.startsWith("google")); // false


// =======================================================
// PART 16 — endsWith()
// =======================================================

// Checks whether a string ends with a particular value.

console.log(site.endsWith(".com")); // true
console.log(site.endsWith(".in"));  // false


// =======================================================
// PART 17 — split()
// =======================================================

// split() converts a string into an array.

const marks = "12,33,44,65";

console.log(marks.split(","));


// Output:
// ["12", "33", "44", "65"]


// Another example

const sentence = "I am learning JavaScript";

console.log(sentence.split(" "));


// Output:
// ["I", "am", "learning", "JavaScript"]


// =======================================================
// PART 18 — search()
// =======================================================

// search() searches for a value
// and returns its index.

const namee = "Harry";

console.log(namee.search("r")); // 2


// If not found → -1

console.log(namee.search("z")); // -1


// =======================================================
// PART 19 — concat()
// =======================================================

// Combines two or more strings.

const first = "Saurav";
const last = "Upadhyay";

console.log(first.concat(" ", last));


// =======================================================
// PART 20 — charCodeAt()
// =======================================================

// Returns the Unicode value of a character.

const word = "Saurav";

console.log(word.charCodeAt(0));


// =======================================================
// PART 21 — at()
// =======================================================

// at() returns the character at a given index.
// It also supports negative indexes.

console.log(word.at(0));  // S
console.log(word.at(5));  // v
console.log(word.at(-1)); // v


// =======================================================
// PART 22 — String Comparison
// =======================================================

console.log("apple" === "apple"); // true
console.log("apple" === "Apple"); // false

// JavaScript strings are case-sensitive.


// =======================================================
// PART 23 — Important String Properties / Methods
// =======================================================

// Property
// length

// Common methods
//
// toUpperCase()
// toLowerCase()
// charAt()
// at()
// indexOf()
// substring()
// slice()
// trim()
// trimStart()
// trimEnd()
// replace()
// replaceAll()
// includes()
// startsWith()
// endsWith()
// split()
// search()
// concat()
// charCodeAt()


// =======================================================
// QUICK PRACTICE
// =======================================================

const user = "   Saurav Upadhyay   ";

console.log(user.trim());
console.log(user.toUpperCase());
console.log(user.toLowerCase());
console.log(user.length);
console.log(user.includes("Saurav"));
console.log(user.indexOf("Upadhyay"));
console.log(user.slice(3, 9));