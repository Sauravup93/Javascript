// ======================================================
// JAVASCRIPT OBJECTS - PRACTICE CODE
// ======================================================


// ======================================================
// 1. TWO WAYS FOR OBJECT DECLARATION
// ======================================================

// Way 1: Object Literal

const student = {
    name: "Saurav",
    age: 20,
    course: "Web Development"
};

console.log(student);


// Way 2: Using Object Constructor

const user = new Object();

user.name = "Rahul";
user.age = 21;
user.course = "JavaScript";

console.log(user);


// ======================================================
// 2. SINGLETON AND NON-SINGLETON OBJECT
// ======================================================

// Non-Singleton Object
// Object literals create normal/non-singleton objects.

const user1 = {
    name: "Saurav"
};

const user2 = {
    name: "Rahul"
};

console.log(user1);
console.log(user2);


// Singleton Object
// Object.create() can be used to create an object
// from a specified prototype.

const singletonUser = Object.create(null);

singletonUser.name = "Saurav";
singletonUser.age = 20;

console.log(singletonUser);


// ======================================================
// 3. NESTING OF OBJECTS
// ======================================================

const person = {

    name: "Saurav",

    age: 20,

    address: {

        city: "Ahmedabad",

        state: "Gujarat",

        country: "India"

    },

    education: {

        degree: "B.Tech",

        branch: "Computer Science"

    }

};

console.log(person);


// Accessing nested object

console.log(person.address.city);

console.log(person.address.state);

console.log(person.education.degree);


// ======================================================
// 4. ARRAY INSIDE OBJECT
// ======================================================

const studentDetails = {

    name: "Saurav",

    age: 20,

    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ]

};

console.log(studentDetails.skills);


// Accessing array elements

console.log(studentDetails.skills[0]);

console.log(studentDetails.skills[2]);


// ======================================================
// 5. OBJECT INSIDE ARRAY
// ======================================================

const students = [

    {
        name: "Saurav",
        age: 20
    },

    {
        name: "Rahul",
        age: 21
    },

    {
        name: "Aman",
        age: 19
    }

];

console.log(students);


// Accessing objects inside array

console.log(students[0].name);

console.log(students[1].age);


// ======================================================
// 6. DOCUMENTATION / OBJECT METHODS
// ======================================================

const product = {

    name: "Laptop",

    price: 50000,

    brand: "Dell"

};


// Object.keys()
// Returns an array containing all keys.

console.log(Object.keys(product));


// Object.values()
// Returns an array containing all values.

console.log(Object.values(product));


// Object.entries()
// Returns an array containing key-value pairs.

console.log(Object.entries(product));


// Object.hasOwn()
// Checks whether an object has a particular property.

console.log(Object.hasOwn(product, "price"));

console.log(Object.hasOwn(product, "color"));


// ======================================================
// 7. TARGET AND SOURCE IDEA
// ======================================================

// Object.assign(target, source)

const target = {

    name: "Saurav"

};

const source = {

    age: 20,

    course: "JavaScript"

};

Object.assign(target, source);

console.log(target);


// target = object that receives the properties
// source = object from which properties are copied


// ======================================================
// 8. MULTIPLE SOURCES
// ======================================================

const first = {

    name: "Saurav"

};

const second = {

    age: 20

};

const third = {

    course: "Web Development"

};

const result = Object.assign(
    {},
    first,
    second,
    third
);

console.log(result);


// ======================================================
// 9. SPREAD OPERATOR WITH OBJECTS
// ======================================================

const obj1 = {

    name: "Saurav",

    age: 20

};

const obj2 = {

    course: "JavaScript",

    language: "English"

};


// Combining objects using spread operator

const combined = {

    ...obj1,
    ...obj2

};

console.log(combined);


// ======================================================
// 10. SPREAD OPERATOR - SAME PROPERTY
// ======================================================

const oldData = {

    name: "Saurav",

    age: 20

};

const newData = {

    age: 21,

    course: "Web Development"

};

const updatedData = {

    ...oldData,
    ...newData

};

console.log(updatedData);


// IMPORTANT:
// If the same property exists,
// the later value overwrites the previous value.


// ======================================================
// 11. PRACTICE OBJECT
// ======================================================

const developer = {

    name: "Saurav",

    age: 20,

    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ],

    address: {

        city: "Ahmedabad",

        country: "India"

    },

    projects: [

        {
            name: "Portfolio",
            technology: "HTML CSS"
        },

        {
            name: "Calculator",
            technology: "JavaScript"
        }

    ]

};


// Accessing different data

console.log(developer.name);

console.log(developer.skills[1]);

console.log(developer.address.city);

console.log(developer.projects[0].name);

console.log(developer.projects[1].technology);


// ======================================================
// 12. FINAL COMBINATION USING SPREAD
// ======================================================

const basicInfo = {

    name: "Saurav",

    age: 20

};

const codingInfo = {

    language: "JavaScript",

    level: "Beginner"

};


const finalObject = {

    ...basicInfo,
    ...codingInfo

};

console.log(finalObject);