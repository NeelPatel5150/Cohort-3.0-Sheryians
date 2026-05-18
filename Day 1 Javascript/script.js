console.log("Hello World!");
console.error("This is an error message.");
console.warn("This is a warning message.");
console.table(["Hello", "World!"]);

var name = "Neel patel"; // This is a variable declaration and assignment. The variable name is assigned the value "Neel patel".
console.log(name);

var a; //declaring 
a = 10; //assigning (initializing)
console.log('Value of a:', a);
a=20; //re-assigning (re-initializing | updating)
console.log('Value of a after re-assignment:', a);

//arithmetic operators
var num1 = 10;
var num2 = 5;
var sum = num1 + num2; // addition
var difference = num1 - num2; // subtraction
var product = num1 * num2; // multiplication
var quotient = num1 / num2; // division
var remainder = num1 % num2; // modulus

console.log('Sum:', sum);   
console.log('Difference:', difference);
console.log('Product:', product);
console.log('Quotient:', quotient);
console.log('Remainder:', remainder);

var x = 10.25; // This is a floating-point number (decimal).
console.log(x);

var isJavaScriptFun = true; // This is a boolean variable that indicates whether JavaScript is fun or not.
console.log('Is JavaScript fun?', isJavaScriptFun);

// lowercase
var lowerCaseString = "this is a lowercase string.";
console.log("Lowercase:", lowerCaseString);
// uppercase
var upperCaseString = "THIS IS AN UPPERCASE STRING.";
console.log("Uppercase:", upperCaseString);
//camelCase
var camelCaseString = "neel Patel";
console.log("CamelCase:", camelCaseString);

//TODO: Data types in JavaScript

//? 1 premitive data types (immutable) 
//? -> ek time pe ek hi value rakh sakte hai

//! number (10, 3.14, -5)
//! string ('N','Neel',"Hello, World!" + special characters)
//! boolean (true or false)
//! undefined (not yet assigned a value) + (undefined is a type and value both)
//! null (intentionally empty) + (no value and empty)
//! Bigint (very large integers, e.g., 9007199254740991n) + (range 2^53 - 1 to -(2^53 - 1))
//! symbol (unique values, e.g., Symbol('description'))

var a = 10n;
console.log(typeof(a)); //? BigInt is a primitive data type in JavaScript that can represent integers with arbitrary precision. It is denoted by appending 'n' to the end of an integer literal. The typeof operator will return "bigint" for variables of this type.

var a = null;
console.log(typeof(a));//? The typeof operator will return "object" for null, which is a known quirk in JavaScript. This is because null is considered a primitive value that represents the intentional absence of any object value.

var a = Symbol('hi');
var a1 = Symbol('hi');
console.log(a===a1); //! Symbols are unique, so this will log false
console.log(typeof(a));//? The typeof operator will return "symbol" for variables of this type.

//? 2 non-primitive data types {Reference} (mutable)
//! Array
//! Objects
//! Functions


//? this is provide by web api
alert("This is an alert message!"); // This will display an alert box with the specified message.

prompt("Please enter your name:"); // This will display a prompt box asking the user to enter their name.

var ans =confirm("Do you want to proceed?"); // This will display a confirmation box asking the user if they want to proceed, returning true for "OK" and false for "Cancel".
console.log(ans);

//? + : operators can do addition and concatenation both
//! NaN : (Not a Number) 

var n1 = "50";
var n2 = "20";
console.log(n1 + n2); // This will concatenate the two strings, resulting in "5020".
console.log(n1 - n2); // This will perform subtraction, converting the strings to numbers, resulting in 30.
