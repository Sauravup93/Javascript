
// =======================================================
// JavaScript Objects
// =======================================================


// =======================================================
// 1. Creating an Object
// =======================================================

// Object stores data in key-value pairs.

const student = {
    name: "Saurav",
    age: 18,
    city: "Ahmedabad"
};

console.log(student);


// =======================================================
// 2. Accessing Object Properties
// =======================================================

// Dot notation

console.log(student.name);
console.log(student.age);
console.log(student.city);


// Bracket notation

console.log(student["name"]);
console.log(student["age"]);
console.log(student["city"]);


// =======================================================
// 3. Adding a Property
// =======================================================

student.course = "JavaScript";

console.log(student);


// =======================================================
// 4. Updating a Property
// =======================================================

student.age = 19;

console.log(student);


// =======================================================
// 5. Deleting a Property
// =======================================================

delete student.city;

console.log(student);


// =======================================================
// 6. Object with Different Data Types
// =======================================================

const user = {
    name: "Saurav",
    age: 18,
    isLoggedIn: true,
    skills: ["HTML", "CSS", "JavaScript"]
};

console.log(user);


// =======================================================
// 7. Nested Object
// =======================================================

const person = {
    name: "Saurav",
    age: 18,

    address: {
        city: "Ahmedabad",
        state: "Gujarat"
    }
};

console.log(person.address.city);
console.log(person.address.state);


// =======================================================
// 8. Object Method
// =======================================================

// A function inside an object is called a method.

const account = {
    username: "Saurav",

    greet: function () {
        console.log("Hello Saurav");
    }
};

account.greet();


// =======================================================
// 9. this Keyword
// =======================================================

// 'this' refers to the current object.

const profile = {
    name: "Saurav",

    greet: function () {
        console.log(`Hello ${this.name}`);
    }
};

profile.greet();


// =======================================================
// 10. Object.keys()
// =======================================================

// Returns all keys as an array.

const studentData = {
    name: "Saurav",
    age: 18,
    city: "Ahmedabad"
};

console.log(Object.keys(studentData));


// =======================================================
// 11. Object.values()
// =======================================================

// Returns all values as an array.

console.log(Object.values(studentData));


// =======================================================
// 12. Object.entries()
// =======================================================

// Returns key-value pairs as an array.

console.log(Object.entries(studentData));


// =======================================================
// 13. in Operator
// =======================================================

// Checks whether a property exists.

console.log("name" in studentData); // true
console.log("email" in studentData); // false


// =======================================================
// 14. Object Destructuring
// =======================================================

// Extracting properties into variables.

const studentInfo = {
    name: "Saurav",
    age: 18,
    city: "Ahmedabad"
};

const { name, age, city } = studentInfo;

console.log(name);
console.log(age);
console.log(city);


// =======================================================
// 15. Object Spread Operator
// =======================================================

// Used to copy/combine objects.

const firstObject = {
    name: "Saurav",
    age: 18
};

const secondObject = {
    ...firstObject,
    city: "Ahmedabad"
};

console.log(secondObject);


// =======================================================
// 16. Bracket Notation with Variable
// =======================================================

const property = "name";

console.log(studentInfo[property]);


// =======================================================
// QUICK REVISION
// =======================================================

// Access
// object.name
// object["name"]

// Add
// object.city = "Ahmedabad"

// Update
// object.age = 19

// Delete
// delete object.city

// Object methods
// Object.keys()
// Object.values()
// Object.entries()

// Check property
// "name" in object

// Destructuring
// const { name, age } = object;

// Spread
// const newObject = { ...object };

// Method
// object.method()

// this
// this.name