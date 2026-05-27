// TODO : Console & Basics

//? 1) Print "Hello JavaScript" in the console.
console.log("Hello JavaScript");

//? 2) Print your name, age, and city using one console.log().
console.log("Name: Neel Patel, Age: 21, City: Gandhinagar");

//? 3) Print a warning message using console.warn().
console.warn("This is a warning message!");

//? 4) Print an error message using console.error().
console.error("This is an error message!");

//? 5) Use console.table() to display an array of 5 numbers.
const numbers = [1, 2, 3, 4, 5];
console.table(numbers);

// TODO : Variables

//? 1) Create a variable called studentName and store your name in it.
let studentName = "Neel Patel";

//? 2) Create a variable age and print it to the console.
let age = 21;
console.log(age);

//? 3) Create two variables and swap their values.
var a = 5;
var b = 10;

// Swapping values
var temp = a;
a = b;
b = temp;
console.log("After swapping: a = " + a + ", b = " + b);

//? 4) Create a constant variable for PI and print it.
const PI = 3.14159;
console.log(PI);

//? 5) Declare a variable without assigning a value and print it.
let Variable;
console.log(Variable); // This will print 'undefined'

//? 6) Create a variable score and increase it by 10.
let score = 0;
score += 10;
console.log(score);

//? 7) Create three variables for first name, last name, and full name.
var firstName = "Neel";
var lastName = "Patel";
var fullName = firstName + " " + lastName;
console.log(fullName);

// TODO: Data Types

//? 1) Create variables of type string, number, boolean, null, and undefined.
let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;
let myNull = null;
let myUndefined;

//? 2) Check the type of different variables using typeof.
console.log(typeof myString); // string
console.log(typeof myNumber); // number
console.log(typeof myBoolean);  // boolean
console.log(typeof myNull);     // object
console.log(typeof myUndefined); // undefined

//? 3) Store your mobile number in a variable and check its type.
let mobileNumber = "1234567890";
console.log(typeof mobileNumber); // string

//? 4) Create a variable with value null and check its type.
var myvalue = null;
console.log(typeof myvalue); // object 

//? 5) Create a bigint number and print it.
let bigIntNumber = 123456789012345678901234567890n;
console.log(bigIntNumber);


// TODO: Type Conversion & Coercion

//? 1) Convert the string "50" into a number.
let str = "50";
let num = Number(str);
console.log(num); // 50

//? 2) Convert the number 100 into a string.
let number = 100;
let strNumber = String(number);
console.log(strNumber); // "100"

//? 3) Convert "true" into a boolean.
let strBool = "true";
let bool = (strBool === "true");
console.log(bool); // true

//? 4) 4. Check the output of:
// - `"5" + 2`
console.log("5" + 2); // "52"
// - `"5" - 2`
console.log("5" - 2); // 3

// - `true + 1`
console.log(true + 1); // 2

//? 5) Create a variable with value "123abc" and convert it into a number.
let mixedStr = "123abc";
let convertedNum = Number(mixedStr);
console.log(convertedNum); // NaN

//? 6) Use parseInt() on "500px".
let pxValue = "500px";
let intValue = parseInt(pxValue);
console.log(intValue); // 500

// TODO: Operators

//? 1) Add two numbers and print the result.
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum); // 30

//? 2) Find the remainder when 25 is divided by 4.
let remainder = 25 % 4;
console.log(remainder); // 1

//? 3) Find the square of a number using exponent operator.
let base = 5;
let square = base ** 2;
console.log(square); // 25

//? 4) Increment a variable using ++.
let count = 0;
count++;
console.log(count); // 1

//? 5) Decrement a variable using -.
let counter = 10;
counter--;
console.log(counter); // 9

//? 6) Use += operator to increase a variable by 20.
let score = 0;
score += 20;
console.log(score); // 20

//? 7) Compare two numbers using >, <, >=, <=.
let a = 5;
let b = 10;
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true

//? 8) Check if two values are strictly equal using ===.
let x = 5;
let y = "5";
console.log(x === y); // false

//? 9) Compare "10" and 10 using both == and ===.
console.log("10" == 10); // true
console.log("10" === 10); // false

//? 10) Create two boolean variables and test &&, ||, and !.
let bool1 = true;
let bool2 = false;
console.log(bool1 && bool2); // false
console.log(bool1 || bool2); // true
console.log(!bool1); // false

//TODO: Strings

//? 1) Create a string and print its length.
let myString = "Hello, JavaScript!";
console.log(myString.length); // 18

//? 2) Convert a string into uppercase.
let lowerCaseStr = "hello";
console.log(lowerCaseStr.toUpperCase()); // "HELLO"

//? 3) Convert a string into lowercase.
let upperCaseStr = "WORLD";
console.log(upperCaseStr.toLowerCase()); // "world"

//? 4) Check if a string includes the word "JavaScript".
let str = "I love JavaScript!";
console.log(str.includes("JavaScript")); // true

//? 5) Extract the word "World" from "Hello World".
let greeting = "Hello World";
let extractedWord = greeting.substring(6, 11);
console.log(extractedWord); // "World"

//? 6) Replace "apple" with "mango" in a sentence.
let sentence = "I have an apple.";
console.log(sentence.replace("apple", "mango")); // "I have a mango."

//? 7) Split "HTML,CSS,JS" into an array.
let languages = "HTML,CSS,JS";
console.log(languages.split(",")); // ["HTML", "CSS", "JS"]

//? 8) Remove extra spaces from a string.
let spacedStr = "   Hello World!   ";
console.log(spacedStr.trim()); // "Hello World!"

//? 9) Repeat the word "Hi" 5 times.
let word = "Hi";
console.log(word.repeat(5)); // "HiHiHiHiHi"

//? 10) Print the first character of a string.
let sampleStr = "JavaScript";
console.log(sampleStr.charAt(0)); // "J"

//? 11) Use template literals to print:"My name is Aman and I am 20 years old"
let name = "Neel";
let age = 21;
console.log(`My name is ${name} and I am ${age} years old`); // "My name is Neel and I am 21 years old"


//TODO: Numbers & Math

//? 1) Round 4.7 using Math.round().
console.log(Math.round(4.7)); // 5

//? 2) Find the square root of 81
console.log(Math.sqrt(81)); // 9

//? 3) Find the maximum number from 10, 20, 5, 99.
console.log(Math.max(10, 20, 5, 99)); // 99

//? 4) Generate a random number between 1 and 10.
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum); // Random number between 1 and 10

//? 5) Convert "99.99" into an integer.
let numberStr = "99.99";
console.log(parseInt(numberStr)); // 99

//? 6) Check whether 25 is an integer or not.
let num = 25;
console.log(Number.isInteger(num)); // true

//? 7) Use toFixed(2) on 3.141592.
let pi = 3.141592;
console.log(pi.toFixed(2)); // "3.14"


//TODO: Conditionals

//? 1) Check whether a number is positive or negative.
let number = -5;
if (number > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is negative.");
}

//? 2) Check whether a number is even or odd.
let num = 10;
if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

//? 3) Check whether a person is eligible to vote.
let age = 21;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

//? 4) Find the largest among two numbers.
let a = 5;
let b = 10;
if (a > b) {
    console.log("The largest number is: " + a);
} else {
    console.log("The largest number is: " + b);
}

//? 5) Find the largest among three numbers.
let x = 5;
let y = 10;
let z = 15;
if (x > y && x > z) {
    console.log("The largest number is: " + x);
} else if (y > x && y > z) {
    console.log("The largest number is: " + y);
} else {
    console.log("The largest number is: " + z);
}

//? 6) Check whether a year is a leap year.
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

//? 7) Check whether a number is divisible by both 3 and 5.
let num = 15;
if (num % 3 === 0 && num % 5 === 0) {
    console.log(num + " is divisible by both 3 and 5.");
} else {
    console.log(num + " is not divisible by both 3 and 5.");
}

//? 8) 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// below 50 → Fail

let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else if (score >= 50) {
    console.log("Grade: C");
} else {
    console.log("Fail");
}

//? 9) Check whether a character is a vowel or consonant.
let char = 'a';
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(char + " is a vowel.");
} else {
    console.log(char + " is a consonant.");
}

//? 10) Create a calculator using switch statement.
let num1 = 10;
let num2 = 5;
let operator = '+';
let result;
switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        console.log("Invalid operator");
}
console.log("Result: " + result);

//? 11) Print the day name based on a number (1–7).
let dayNum = 3;
let dayName;
switch (dayNum) {
    case 1: dayName = "Monday"; break;
    case 2: dayName = "Tuesday"; break;
    case 3: dayName = "Wednesday"; break;
    case 4: dayName = "Thursday"; break;
    case 5: dayName = "Friday"; break;
    case 6: dayName = "Saturday"; break;
    case 7: dayName = "Sunday"; break;
    default: dayName = "Invalid day number";
}

//? 12) Check whether a username is "admin" and password is "1234".
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login successful!");
} else {
    console.log("Invalid username or password.");
}


// TODO: Truthy & Falsy

//? 1) Check whether an empty string is truthy or falsy.
if ("") {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

//? 2) Check whether 0 is truthy or falsy.
if (0) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

//? 3) Check whether [] is truthy or falsy.
if ([]) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

//? 4) Create a variable and print "Valid" if it has a value otherwise print "Invalid".
let myVar = "Hello";
if (myVar) {
    console.log("Valid");
} else {
    console.log("Invalid");
}


//TODO: Ternary Operator

//? 1) Check whether a number is even or odd using ternary operator.
let num = 10;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);

//? 2) Check whether age is above 18 using ternary operator.
let age = 21;
let isAdult = (age >= 18) ? true : false;
console.log(isAdult);

//? 3) Find the greater number between two values using ternary operator.
let x = 5;
let y = 10;
let greater = (x > y) ? x : y;
console.log("The greater number is: " + greater);


//TODO : Mixed Practice Questions

//? 1) Create a mini biodata program using variables and template literals.
let name = "Neel Patel";
let age = 21;
let city = "Gandhinagar";
console.log(`Name: ${name}, Age: ${age}, City: ${city}`);

//? 2) Calculate the area of a rectangle.
let length = 5;
let width = 3;
let area = length * width;
console.log("Area of the rectangle: " + area);

//? 3) Calculate the simple interest.
let principal = 1000;
let rate = 5;
let time = 2;
let simpleInterest = (principal * rate * time) / 100;
console.log("Simple Interest: " + simpleInterest);

//? 4) Convert temperature from Celsius to Fahrenheit.
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C is equal to ${fahrenheit}°F`);

//? 5) Convert kilometers into meters.
let kilometers = 5;
let meters = kilometers * 1000;
console.log(`${kilometers} km is equal to ${meters} meters`);

//? 6) Calculate total marks and percentage of 5 subjects.
let physics = 85;
let chemistry = 90;
let math = 95;
let english = 80;
let computer = 92;
let totalMarks = physics + chemistry + math + english + computer;
let percentage = (totalMarks / 500) * 100;
console.log(`Total Marks: ${totalMarks}, Percentage: ${percentage}%`);

//? 7) Calculate electricity bill based on units consumed.
let units = 150;
let billAmount;
if (units <= 100) {
    billAmount = units * 5;
} else if (units <= 200) {
    billAmount = (100 * 5) + ((units - 100) * 7);
} else {
    billAmount = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}
console.log(`Electricity Bill: $${billAmount}`);

//? 8)Create a username generator using first name and birth year.
let firstName = "Neel";
let birthYear = 2002;
let username = firstName.toLowerCase() + birthYear;
console.log("Generated Username: " + username);

//? 9) Check whether a string starts with a specific letter.
let str = "Hello, World!";
let letter = "H";
if (str.startsWith(letter)) {
    console.log("The string starts with the specified letter.");
} else {
    console.log("The string does not start with the specified letter.");
}

//? 10) Count the total characters in a sentence excluding spaces.
let sentence = "Hello, World!";
let charCount = sentence.replace(/\s/g, '').length;
console.log("Total characters (excluding spaces): " + charCount);


//TODO: Logical Thinking Questions

//? 1) Take two numbers and print which one is greater.
let num1 = 10;
let num2 = 20;
if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
} else if (num2 > num1) {
    console.log(num2 + " is greater than " + num1);
} else {
    console.log("Both numbers are equal.");
}

//? 2) Check whether a number lies between 10 and 50.
let num = 25;
if (num > 10 && num < 50) {
    console.log(num + " lies between 10 and 50.");
} else {
    console.log(num + " does not lie between 10 and 50.");
}

//? 3) Check whether a password length is greater than 8.
let password = "mysecretpassword";
if (password.length > 8) {
    console.log("Password is strong.");
} else {
    console.log("Password is weak.");
}

//? 4) 4. Check if a person can drive:
// - age > 18
// - has license = true

let age = 21;
let hasLicense = true;
if (age > 18 && hasLicense) {
    console.log("Person can drive.");
} else {
    console.log("Person cannot drive.");
}

//? 5) Check whether a number is divisible by 2, 3, or both.
let num = 12;
if (num % 2 === 0 && num % 3 === 0) {
    console.log(num + " is divisible by both 2 and 3.");
} else if (num % 2 === 0) {
    console.log(num + " is divisible by 2.");
} else if (num % 3 === 0) {
    console.log(num + " is divisible by 3.");
} else {
    console.log(num + " is not divisible by 2 or 3.");
}

//? 6) Print "Good Morning", "Good Afternoon", or "Good Evening" based on time.
let hour = new Date().getHours();
if (hour < 12) {
    console.log("Good Morning");
} else if (hour < 18) {
    console.log("Good Afternoon");
} else {
    console.log("Good Evening");
}

//? 7) Find whether a number is a multiple of 10.
let num = 50;
if (num % 10 === 0) {
    console.log(num + " is a multiple of 10.");
} else {
    console.log(num + " is not a multiple of 10.");
}

//? 8) Create a simple discount calculator.
let originalPrice = 100;
let discountPercentage = 20;
let discountAmount = (originalPrice * discountPercentage) / 100;
let finalPrice = originalPrice - discountAmount;
console.log(`Final Price after ${discountPercentage}% discount: $${finalPrice}`);

//? 9) Check whether a product is in stock.
let product = "Laptop";
let inStock = true;
if (inStock) {
    console.log(product + " is in stock.");
} else {
    console.log(product + " is out of stock.");
}

//? 10) Calculate final bill after GST.

let billAmount = 1000;
let gstPercentage = 18;

let gstAmount = (billAmount * gstPercentage) / 100;
let finalBill = billAmount + gstAmount;

console.log(`Final Bill after ${gstPercentage}% GST: $${finalBill}`);

//TODO: Challenge Questions for Beginners

//? 1) Generate a random OTP of 4 digits.
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}
console.log("Generated OTP: " + generateOTP());

//? 2) Reverse a 3-letter string manually.
let str = "abc";
let reversedStr = str[2] + str[1] + str[0];
console.log("Reversed String: " + reversedStr);

//? 3) Find the last character of a string.
let sampleStr = "Hello, World!";
let lastChar = sampleStr.charAt(sampleStr.length - 1);
console.log("Last Character: " + lastChar);

//? 4) Convert a full name into uppercase initials.
let fullName = "Neel Patel";
let initials = fullName.split(' ').map(name => name.charAt(0).toUpperCase()).join('');
console.log("Initials: " + initials); // "NP"

//? 5) Check whether two strings are equal ignoring case sensitivity.
let str1 = "Hello";
let str2 = "hello";
if (str1.toLowerCase() === str2.toLowerCase()) {
    console.log("Strings are equal (ignoring case).");
} else {
    console.log("Strings are not equal.");
}

//? 6) Create a simple login validation system.
let username = "admin";
let password = "1234";
let inputUsername = "admin";
let inputPassword = "1234";

if (inputUsername === username && inputPassword === password) {
    console.log("Login successful.");
} else {
    console.log("Invalid username or password.");
}

//? 7) Find whether a number is a 2-digit or 3-digit number.
let num = 45;
if (num >= 10 && num < 100) {
    console.log(num + " is a 2-digit number.");
} else if (num >= 100 && num < 1000) {
    console.log(num + " is a 3-digit number.");
} else {
    console.log(num + " is neither a 2-digit nor a 3-digit number.");
}

//? 8) Create a mini ATM balance checker.
let accountBalance = 5000;
let inputPin = 1234;
let correctPin = 1234;

if (inputPin === correctPin) {
    console.log("Your account balance is: $" + accountBalance);
} else {
    console.log("Incorrect PIN.");
}

//? 9) Simulate a traffic light system using switch.
let trafficLight = "green";
switch (trafficLight) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Get Ready"); break;
    case "green": console.log("Go"); break;
    default: console.log("Invalid traffic light color");
}

//? 10) Build a small marksheet generator using variables and conditionals.
let studentName = "Neel Patel";
let marks = 85;
let grade;
if (marks >= 90) {
    grade = "A";
}
else if (marks >= 75) {
    grade = "B";
}
else if (marks >= 50) {
    grade = "C";
}
else {
    grade = "Fail";
}
console.log(`Marksheet for ${studentName}: Marks = ${marks}, Grade = ${grade}`);
