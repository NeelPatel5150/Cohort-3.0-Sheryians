console.log("Hello World!");


//! binary operations
// write examples of binary operations
let a = 10;
let b = 5;
let sum = a + b; // addition
let difference = a - b; // subtraction
let product = a * b; // multiplication
let quotient = a / b; // division

//! type coercion (Implicit + Explicit)
// Implicit type coercion
let x = "5" + 10; // "510" (string concatenation)
let y = "5" * 10; // 50 (number multiplication) 

// Explicit type coercion
let z = Number("5") + 10; // 15 (string "5" is converted to number 5)
let w = String(10) + "5"; // "105" (number 10 is converted to string "10")  


//! increment + decrement operators
//? Pre increment
let num = 5;
console.log(++num); // Output: 6 (num is incremented before being logged)

//? Post increment
let num2 = 5;
console.log(num2++); // Output: 5 (num2 is logged before being incremented)
console.log(num2); // Output: 6 (num2 is now incremented)   

//? Pre decrement
let num3 = 5;
console.log(--num3); // Output: 4 (num3 is decremented before being logged) 

//? Post decrement
let num4 = 5;
console.log(num4--); // Output: 5 (num4 is logged before being decremented)
console.log(num4); // Output: 4 (num4 is now decremented)


let count = 0;
count++; // count is now 1
count--; // count is now 0      

//! comarison operator(losse equality(==) , strict equality(===))
//? loose equality (==) : it compares only values
console.log(5 == "5"); // Output: true (loose equality allows type coercion)
console.log(0 == false); // Output: true (loose equality allows type coercion) 

//? strict equality (===) : it compares both values and types
console.log(5 === "5"); // Output: false (strict equality does not allow type coercion) 
console.log(0 === false); // Output: false (strict equality does not allow type coercion)

//! logical operators (&&, ||, !)
//? AND (&&) [multiplication]
// 0 * 0 = 0
// 0 * 1 = 0
// 1 * 0 = 0
// 1 * 1 = 1
console.log(true && true); // Output: true
console.log(true && false); // Output: false
console.log(false && false); // Output: false

//? OR (||) [addition]
// 0 + 0 = 0
// 0 + 1 = 1
// 1 + 0 = 1
// 1 + 1 = 1
console.log(true || true); // Output: true
console.log(true || false); // Output: true
console.log(false || false); // Output: false   

//? NOT (!)
// !true = false
// !false = true
console.log(!true); // Output: false
console.log(!false); // Output: true

//TODO: Conditional Operators (if, else if, else, switch)

//? if statement
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}

//? if-else statement
let age2 = 16;
if (age2 >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//? if-else if-else statement
let age3 = 65;
if (age3 < 18) {
    console.log("You are a minor.");
} else if (age3 >= 18 && age3 < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}

//! Task 1

// let phy = prompt("Enter your Physics marks:");
// let chem = prompt("Enter your Chemistry marks:");
// let math = prompt("Enter your Math marks:");

// let avg = (Number(phy) + Number(chem) + Number(math)) / 3;
console.log("Your average marks are: " + avg);

// if (avg >= 85) {
//     console.log("Topper Hai Bhaiiiiiiiii...");
// }
// else{
//     console.log("Beter Luck Next Time.");
// }

if (avg >= 85) {
    console.log("Grade: A");
}
else if (avg >= 70) {
    console.log("Grade: B");
}
else if (avg >= 50) {
    console.log("Grade: C");
}
else if (avg >= 33) {
    console.log("Grade: D");
}
else {
    console.log("Failed");
}


//! Task 2

var gender = prompt("Enter your gender (M/F):");
var agee = Number(prompt("Enter your age:"));

if (gender === "F"){
    if (agee >= 18 && agee <= 60) {
        console.log("You Will get $1500 For Per Month.");
    } else {
        console.log("Bhagg yaha See...");
    }
} else{
    console.log("Bhagg yaha See...");
}

//? Truthy and Falsy values


//! Falsy values: false, 0, "", null, undefined, NaN
//! Truthy values: all values that are not falsy
console.log(Boolean(false)); // Output: false
console.log(Boolean(0)); // Output: false
console.log(Boolean("")); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(NaN)); // Output: false 

console.log(Boolean(true)); // Output: true
console.log(Boolean(1)); // Output: true
console.log(Boolean("Hello")); // Output: true
console.log(Boolean([])); // Output: true (empty array is truthy)
console.log(Boolean({})); // Output: true (empty object is truthy)
console.log(Boolean(function() {})); // Output: true (function is truthy)
console.log(Boolean(Infinity)); // Output: true (Infinity is truthy)
console.log(Boolean(-Infinity)); // Output: true (-Infinity is truthy)

//? Ternary Operator (condition ? expressionIfTrue : expressionIfFalse)
let age4 = 20;
let isAdult = (age4 >= 18) ? "You are an adult." : "You are a minor.";
console.log(isAdult); // Output: "You are an adult."


//? Switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;  
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


