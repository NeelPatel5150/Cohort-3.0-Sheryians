//! Today we learning This Keyword in JavaScript

//! What is This Keyword in JavaScript?
//! The this keyword in JavaScript refers to the current object that is executing the code. It is a special keyword that can be used in functions, methods, and constructors to refer to the object that is currently being accessed or manipulated.

//! The value of this can change depending on how a function is called. For example, if a function is called as a method of an object, this will refer to that object. If a function is called as a standalone function, this will refer to the global object (window in browsers).

//! Example 1: Using this in a method
const person = {
  name: "John",
  greet: function () {
    // console.log("Hello, my name is " + this.name);
  },
};

person.greet(); // Output: Hello, my name is John

//! Example 2: Using this in a standalone function
function sayHello() {
  console.log("Hello, " + this.name);
}
// sayHello(); // Output: Hello, undefined (in strict mode) or Hello, [object Window] (in non-strict mode)

//! Example 3: Using this in a constructor function
function Person(name) {
  this.name = name;
}

const person1 = new Person("Alice");

// console.log(person1.name); // Output: Alice

//! In summary, the this keyword in JavaScript is a powerful tool that allows you to refer to the current object in different contexts. Understanding how this works is essential for writing effective JavaScript code.

//! syntax Error - A syntax error occurs when the code does not follow the rules of the language.
// Example:
// console.log("Hello World" // Missing closing parenthesis

//! refrence Error - A reference error occurs when you try to access a variable that has not been declared or is out of scope.
// Example:
// console.log(x); // x is not defined

//! type Error - A type error occurs when you try to perform an operation on a value that is not of the expected type.
// Example:
// let num = 5;
// num.toUpperCase(); // num is a number, not a string

//! range Error - A range error occurs when you try to use a value that is outside the allowed range.
// Example:
// let arr = new Array(-1); // Invalid array length

//! URI Error - A URI error occurs when you try to encode or decode a URI component that is not valid.
// Example:
// decodeURIComponent("%"); // Invalid URI component

//! Aggregate Error - An aggregate error occurs when multiple errors are thrown together in a single error object.
// Example:
// let errors = [];
// try {
//   // Some code that might throw errors
// } catch (e) {
//   errors.push(e);
// }
// if (errors.length > 0) {
//   throw new Error("Multiple errors occurred");
// }

//! Internal Error - An internal error occurs when there is an error in the JavaScript engine itself, such as a stack overflow or out of memory error.
// Example:
// function recursive() {
//   return recursive();
// }
// recursive(); // This will cause a stack overflow error

var obj = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function () {
    console.log(this);
  },
};
obj.fullName(); // Output: {firstName: "John", lastName: "Doe", age: 30, fullName: ƒ}

//! when i use fat arrow function then this keyword will refer to the global object (window in browsers) instead of the object that is calling the function.

//? because in this not any lexical scope of this keyword in fat arrow function. it will refer to the global object (window in browsers) instead of the object that is calling the function.

//? and in normal function this keyword will refer to the object that is calling the function.

//? because in this have lexical scope of this keyword in normal function. it will refer to the object that is calling the function.

//! function Shering - When a function is shared between multiple objects, the value of this will refer to the object that is calling the function, not the object that defined the function.

// let person1 = {
//   name: "Alice",
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   },
// };
let person2 = {
  name: "Bob",
  greet: person1.greet,
};
// person1.greet(); // Output: Hello, my name is Alice
// person2.greet(); // Output: Hello, my name is Bob

//! call method - The call method is a built-in method in JavaScript that allows you to call a function with a specified this value and arguments provided individually.

function greet() {
  console.log("Hello, my name is " + this.name);
}
let person3 = {
  name: "Charlie",
};
greet.call(person3); // Output: Hello, my name is Charlie

//! apply method - The apply method is similar to the call method, but it allows you to call a function with a specified this value and arguments provided as an array.

function greet2(greeting) {
  console.log(greeting + ", my name is " + this.name);
}
let person4 = {
  name: "Dave",
};
greet2.apply(person4, ["Hi"]); // Output: Hi, my name is Dave

//! bind method - The bind method is a built-in method in JavaScript that allows you to create a new function with a specified this value and arguments provided individually.
function greet3(greeting) {
  console.log(greeting + ", my name is " + this.name);
}
let person5 = {
  name: "Eve",
};

let boundGreet = greet3.bind(person5, "Hello");

boundGreet(); // Output: Hello, my name is Eve

//? example of call, apply and bind method

var student1 = {
  firstName: "John",
  lastName: "Doe",
};
var student2 = {
  firstName: "Jane",
  lastName: "Smith",
};
function GetIntro(city, state) {
  console.log(
    `My name is ${this.firstName} ${this.lastName} and I am from ${city}, ${state}`,
  );
}

GetIntro.call(student1, "New York", "NY"); // Output: My name is John Doe and I am from New York, NY
GetIntro.call(student2, "Los Angeles", "CA"); // Output: My name is Jane Smith and I am from Los Angeles, CA

GetIntro.apply(student1, ["Chicago", "IL"]); // Output: My name is John Doe and I am from Chicago, IL
GetIntro.apply(student2, ["Houston", "TX"]); // Output: My name is Jane Smith and I am from Houston, TX

let boundGetIntro = GetIntro.bind(student1, "Miami", "FL");
boundGetIntro(); // Output: My name is John Doe and I am from Miami, FL


//? Prototype of this keyword in JavaScript
//! The prototype of the this keyword in JavaScript is the object that is used as a template for creating new objects. When a function is called as a method of an object, the this keyword refers to that object, and the prototype of that object is used to look up properties and methods.

function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

let person6 = new Person("Frank");
person6.greet(); // Output: Hello, my name is Frank
//! In this example, the Person function is a constructor function that creates new objects with a name property. The greet method is added to the prototype of the Person function, which means that all objects created with the Person constructor will have access to the greet method through their prototype chain. When person6 calls the greet method, the this keyword refers to person6, and the greet method is able to access the name property of person6 through the prototype chain.

//! prototypal inheritence - Prototypal inheritance is a feature in JavaScript that allows objects to inherit properties and methods from other objects. This is achieved through the prototype chain, where an object can access properties and methods of its prototype, and the prototype can access properties and methods of its own prototype, and so on.
var college = {
    title: "ABC College",
    name: "ABC College",
    rating: 4.5,
    students: 2000,
    saySlogan: function () {
        console.log("We are the best college in the world!");
    }
}

var branch = {
    title: "Computer Science Branch",
    name: "Computer Science",
    rating: 5,
    students: 500,
    subjects : ["TOC", "DSA", "CD"]
}

var user = {
    name: "Raja",
    age: 21,
    marks: 85
}

user.__proto__ = branch;
branch.__proto__ = college;

console.log(user); // Output: Raja