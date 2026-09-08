// ===============================
// JAVASCRIPT FUNCTIONS
// ===============================


// 1. Basic Function

function sayHello() {
    console.log("Hello World");
}

sayHello();


// 2. Function with Parameters

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumbers(5, 10);
addTwoNumbers(20, 30);


// 3. Function with Return

function add(num1, num2) {
    return num1 + num2;
}

const result = add(10, 20);

console.log(result);


// 4. Return Multiple Operations

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(5, 4));


// 5. Function with String

function loginUserMessage(username) {
    return `${username} just logged in`;
}

console.log(loginUserMessage("Saurav"));


// 6. Default Parameter

function loginUser(username = "Guest") {
    return `${username} just logged in`;
}

console.log(loginUser());
console.log(loginUser("Saurav"));


// 7. If Condition inside Function

function checkNumber(number) {

    if (number > 0) {
        return "Positive Number";
    } else if (number < 0) {
        return "Negative Number";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));


// 8. Function with Array

function getArrayElement(myArray) {
    return myArray[1];
}

console.log(getArrayElement([10, 20, 30, 40]));


// 9. Function with Object

function getUserDetails(user) {
    return `Name: ${user.name}, Age: ${user.age}`;
}

const user = {
    name: "Saurav",
    age: 20
};

console.log(getUserDetails(user));


// 10. Function Expression

const subtract = function (num1, num2) {
    return num1 - num2;
};

console.log(subtract(20, 5));


// 11. Arrow Function

const square = (number) => {
    return number * number;
};

console.log(square(5));


// 12. Short Arrow Function

const cube = number => number * number * number;

console.log(cube(3));


// 13. Function with Rest Operator

function calculateCartPrice(...prices) {
    return prices;
}

console.log(calculateCartPrice(100, 200, 300));


// 14. Rest Operator with Calculation

function calculateTotal(...prices) {

    let total = 0;

    for (const price of prices) {
        total += price;
    }

    return total;
}

console.log(calculateTotal(100, 200, 300, 400));


// 15. Scope Example

const username = "Saurav";

function userName() {

    const username = "Rahul";

    console.log(username);
}

userName();

console.log(username);

