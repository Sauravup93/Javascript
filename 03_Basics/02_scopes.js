// ========================================
// ⭐ JAVASCRIPT SCOPE
// ========================================


// 1️⃣ GLOBAL SCOPE
// Function/block ke bahar declared variable
// Global variable ko andar ke scopes access kar sakte hain.

let globalName = "Saurav";

function showGlobal() {
    console.log(globalName); // ✅ Accessible
}

showGlobal();


// ========================================
// 2️⃣ FUNCTION SCOPE
// Function ke andar declared variable
// Sirf function ke andar access hota hai.

function myFunction() {

    let age = 19;

    console.log(age); // ✅ Accessible

}

myFunction();

// console.log(age); // ❌ Error
// age function ke bahar available nahi hai.


// ========================================
// 3️⃣ BLOCK SCOPE
// {} ke andar let/const declare karne par
// wo sirf us block ke andar available hote hain.

{
    let city = "Ahmedabad";
    const country = "India";

    console.log(city);    // ✅
    console.log(country); // ✅
}

// console.log(city);    // ❌
// console.log(country); // ❌


// ========================================
// 4️⃣ VAR vs LET vs CONST

// var → Function Scoped
{
    var x = 10;
}

console.log(x); // ✅ 10


// let → Block Scoped
{
    let y = 20;
    console.log(y); // ✅
}

// console.log(y); // ❌


// const → Block Scoped
{
    const z = 30;
    console.log(z); // ✅
}

// console.log(z); // ❌


// ========================================
// 5️⃣ NESTED / LEXICAL SCOPE
// Inner function apne outer function ke
// variables ko access kar sakta hai.

let name = "Sauravv";

function outer() {

    let age = 19;

    function inner() {

        console.log(name); // ✅ Global scope
        console.log(age);  // ✅ Outer scope

    }

    inner();
}

outer();


// ========================================
// 6️⃣ SCOPE CHAIN
// JavaScript variable ko:
// Current Scope → Outer Scope → Global Scope
// me search karta hai.

let a = 100;

function first() {

    let b = 200;

    function second() {

        let c = 300;

        console.log(c); // Current scope
        console.log(b); // Outer scope
        console.log(a); // Global scope

    }

    second();
}

first();


// ========================================
// 7️⃣ VARIABLE SHADOWING
// Inner scope me same naam ka variable
// outer variable ko shadow kar deta hai.

let username = "Saurav";

function user() {

    let username = "Virat";

    console.log(username); // Virat

}

user();

console.log(username); // Saurav


// ========================================
// ⭐ QUICK REVISION
// ========================================

// Global Scope    → Everywhere (generally)
// Function Scope → Function ke andar
// Block Scope    → {} ke andar
// var             → Function Scoped
// let             → Block Scoped
// const           → Block Scoped
// Scope Chain     → Current → Outer → Global
// Lexical Scope   → Inner function outer variables access kar sakta hai
// Shadowing       → Inner same-name variable hides outer one

