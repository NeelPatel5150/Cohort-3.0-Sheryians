//! Objects
//? Objects are a collection of properties, and a property is an association between a name (or key) and a value.

//? Objects are used to store data in a structured way, and they can also contain functions (called methods) that operate on that data.

//? Objects can be created using object literals, constructor functions, or the Object.create() method.

//! Object Literals
//? The most common way to create an object is using an object literal, which is a comma-separated list of name-value pairs enclosed in curly braces {}.
//? Example:
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
//? In this example, we have created an object called person with three properties: name, age, and city. Each property has a corresponding value.

//! Accessing Object Properties
//? You can access the properties of an object using dot notation or bracket notation.

//? Example:
// console.log(person.name); // Output: John
// console.log(person["age"]); // Output: 30

//? You can also add new properties to an object or modify existing properties using the same notations.
person.job = "Developer";
person["hobby"] = "Coding";

// console.log(person);
//? Output: { name: 'John', age: 30, city: 'New York', job: 'Developer', hobby: 'Coding' }

//! Object Methods
//? Objects can also contain functions, which are called methods. Methods are used to perform actions on the data stored in the object.

//? Example:
const person2 = {
    name: "Jane",
    age: 25,
    city: "Los Angeles",
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// person2.greet(); // Output: Hello, my name is Jane and I am 25 years old.
//? In this example, we have added a method called greet to the person2 object. The greet method uses the this keyword to access the properties of the object and print a greeting message to the console.

//! Constructor Functions
//? Another way to create objects is by using constructor functions. A constructor function is a special type of function that is used to create and initialize objects.

//? Example:    
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person3 = new Person("Alice", 28, "Chicago");

// person3.greet(); // Output: Hello, my name is Alice and I am 28 years old.
//? In this example, we have defined a constructor function called Person that takes three parameters: name, age, and city. The constructor function initializes the properties of the object and defines a method called greet. We then create a new object called person3 using the new keyword and call the greet method to print a greeting message to the console.

//! Object.create() Method
//? The Object.create() method is another way to create objects in JavaScript. It creates a new object with the specified prototype object and properties.

//? Example:
const person4 = Object.create(person2);

person4.name = "Bob";
person4.age = 35;
person4.city = "Miami";

// person4.greet(); // Output: Hello, my name is Bob and I am 35 years old.

//? In this example, we have created a new object called person4 using the Object.create() method. We set the prototype of person4 to person2, which means that person4 inherits the properties and methods of person2. We then set the properties of person4 and call the greet method to print a greeting message to the console.


let user = {
    name: "John",
    age: 30,
    city: "New York",
}

// console.log("Keys:",Object.keys(user)); // Output: [ 'name', 'age', 'city' ]
// console.log("Values:",Object.values(user)); // Output: [ 'John', 30, 'New York' ]
// console.log("Entries:",Object.entries(user)); // Output: [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ] 

var maths = {
    add:function(a,b){
        return a+b;
    },
    multiply:function(a,b){
        return a*b;
    },
    square:function(a){
        return a*a;
    },
    cube:function(a)
    {
        return a*a*a;
    }
}
// console.log("Addition:", maths.add(2,3)); // Output: 5
// console.log("Multiplication:", maths.multiply(2,3)); // Output: 6
// console.log("Square:", maths.square(4)); // Output: 16
// console.log("Cube:", maths.cube(3)); // Output: 27

const User = {
    name: "Alice",
    age: 25,    
    city: "Los Angeles",
}

Object.seal(User); // This will prevent adding new properties to the User object
User.name = "Bob"; // This will work because we can modify existing properties
User.country = "USA"; // This will not work because we cannot add new properties    
// console.log(User); // Output: { name: 'Bob', age: 25, city: 'Los Angeles' }

Object.freeze(User); // This will prevent modifying existing properties and adding new properties to the User object
User.name = "Charlie"; // This will not work because we cannot modify existing properties
User.country = "USA"; // This will not work because we cannot add new properties
// console.log(User); // Output: { name: 'Bob', age: 25, city: 'Los Angeles' }

//! Object Destructuring

let person5 = {
    name: "David",
    age: 40,
    city: "San Francisco"
}

let { name, age, city } = person5;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);

//! deep copy and shallow copy

let original = {
    name: "Eve",
    age: 35,
    city: "Seattle"
}
//? Shallow copy
let shallowCopy = Object.assign({}, original);
shallowCopy.name = "Frank";
console.log("Original:", original); // Output: { name: 'Eve', age: 35, city: 'Seattle' }
console.log("Shallow Copy:", shallowCopy); // Output: { name: 'Frank', age: 35, city: 'Seattle' }

//? Deep copy
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.name = "Grace";
console.log("Original:", original);
console.log("Deep Copy:", deepCopy); // Output: { name: 'Grace', age: 35, city: 'Seattle' }

//? structured clone
let structuredCloneCopy = structuredClone(original);
structuredCloneCopy.name = "Hank";
console.log("Original:", original);
console.log("Structured Clone Copy:", structuredCloneCopy); // Output: { name: 'Hank', age: 35, city: 'Seattle' }
