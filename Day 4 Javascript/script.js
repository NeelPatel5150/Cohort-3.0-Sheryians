// console.log("Hello World!");

// Functions
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

let sum = addTwoNumbers(5, 10);
// console.log(sum);

function greet(name, age) {
    console.log(`Hello, good morning ${name}!`);

    if (age < 18) {
        console.log("You are welcome in party!");
    } else {
        console.log("You are not welcome in party!");
    }
}

// greet("Neel", 25);

//! different types of functions

//? normal function declarations (it is hoisted)
function normalFunction() {
    console.log("This is a normal function!");
}

//? 1. Anonymous function (function expression) + (it is not hoisted)
let anonymousFunction = function() {
    console.log("This is an anonymous function!");
}
// anonymousFunction();

//? anonymons function with fat arrow function
let anonymousArrowFunction = () => {
    console.log("This is an anonymous arrow function!");
}
// anonymousArrowFunction();

//? 2. Arrow function (fat arrow function)
let arrowFunction = () => {
    console.log("This is an arrow function!");
}
// arrowFunction();

//? 3. IIFE (Immediately Invoked Function Expression) --> it is a function that is immediately invoked after its definition. It is used to create a new scope and avoid polluting the global scope.
//! Most ask in interviews (concept of this functions)
// (function() {
//     console.log("This is an IIFE!");
// })();

//? function with return statement
function multiplyTwoNumbers(num1, num2) {
    return num1 * num2;
}
let product = multiplyTwoNumbers(5, 10);
// console.log(product);

//? function with default parameters
function greetWithDefault(name = "Guest") {
    console.log(`Hello, good morning ${name}!`);
}
// greetWithDefault();

//? function with rest parameters
function sumAllNumbers(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }   
    return sum;
}   
let total = sumAllNumbers(1, 2, 3, 4, 5);
// console.log(total);

//! function with callback
function fetchData(callback) {
    setTimeout(() => {
        let data = "Data fetched from server!";
        callback(data);
    }, 2000);
}
fetchData((data) => {
    // console.log(data);
});

//? Pure function (it is a function that always returns the same output for the same input and has no side effects)

function sqrt(num1) {
    return Math.sqrt(num1 * num1);
}

// console.log(sqrt(5));
// console.log(sqrt(5));

//? Impure function (it is a function that does not always return the same output for the same input and has side effects)
let count = 0;
function impureFunction() {
    count++;
    return count;
}
// console.log(impureFunction());
// console.log(impureFunction());
// console.log(impureFunction());

async function APIcall() 
{
    var data = await fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=1000000000")

    var ans  = await data.json();

    // console.log(ans.data.data);
}
// APIcall();

//? SetInterval and SetTimeout

// setInterval(()=>{
//     console.log("This is a setInterval function!");
// },1000);

// setTimeout(()=>{
//     console.log("This is a setTimeout function!");
// },1000);


//! First class functions (it is a function that can be treated as a first-class citizen, which means it can be assigned to a variable, passed as an argument to another function, and returned from another function)

function firstClassFunction() {
    console.log("This is a first class function!");
}  
let firstClass = firstClassFunction; // assigning function to a variable
// firstClass(); // calling the function using the variable


//! Higher order functions (it is a function that takes another function as an argument or returns a function as a result)
function dada()
{
    console.log("i am dada")

function papa()
{
    console.log("i am papa")

    function child()
    {
        console.log("i am child")
    }
    return child; 
}
return papa;
}

dada()()();