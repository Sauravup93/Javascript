let date= new Date()
console.log(date.toDateString());    // thur Aug 20  2026

console.log(date.toLocaleDateString());   // 20/11/2006
console.log(date.toLocaleString());       // 20/11/2004 , 5:18:55 pm


let created_date= new Date (2023,10,19,7,35,44)
console.log(created_date.toLocaleString());



// Change the 4th number from 7 to 19
let createdd_date = new Date(2023, 10, 19, 19, 35, 44); 

console.log(createdd_date.toLocaleString());

datee=new Date("09-11-2023")
console.log(datee.toLocaleString());


let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(created_date.getTime());





// =======================================================
// Date and Time in JavaScript
// =======================================================

// Current date and time
const now = new Date();

console.log(now);


// =======================================================
// Date Methods
// =======================================================

// Current date
console.log(now.getDate());

// Day of week
// 0 = Sunday
// 1 = Monday
// ...
// 6 = Saturday
console.log(now.getDay());

// Month
// 0 = January
// 1 = February
// ...
// 11 = December
console.log(now.getMonth());

// Full year
console.log(now.getFullYear());


// =======================================================
// Time Methods
// =======================================================

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());


// =======================================================
// Date Formats
// =======================================================

console.log(now.toDateString());
console.log(now.toTimeString());

console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());

console.log(now.toISOString());


// =======================================================
// Timestamp
// =======================================================

// Milliseconds from January 1, 1970
console.log(Date.now());


// =======================================================
// Creating a Specific Date
// =======================================================

const birthday = new Date("2007-05-15");

console.log(birthday);
console.log(birthday.getFullYear());
console.log(birthday.getMonth());
console.log(birthday.getDate());


