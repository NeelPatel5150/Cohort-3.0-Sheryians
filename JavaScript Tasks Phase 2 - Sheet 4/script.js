//! Beginner Level

//? 1. Create an Object

// Create an object for a student with:

// - name
// - age
// - course

// Then print all values.
let student = {
    name: "John Doe",
    age: 20,
    course: "Computer Science"
};
console.log(student.name); // John Doe
console.log(student.age); // 20
console.log(student.course); // Computer Science

//? 2. Access Properties
// Print:
// - brand
// - model
// using both:
// - dot notation
// - bracket notation
const car = {
    brand: "BMW",
    model: "M4",
    year: 2022
  };

// Dot notation
console.log(car.brand); // BMW
console.log(car.model); // M4
// Bracket notation
console.log(car["brand"]); // BMW
console.log(car["model"]); // M4

//? 3. Update Object Value

//* Change the age of a user from 20 to 25.

const user = {
    name: "Anubhav",
    age: 20
  }

user.age = 25; // Update age to 25
console.log(user.age); // 25

//? 4. Add New Property

//* isAdmin: true
const user1 = {
    name: "Anubhav",
    age: 25
  }
user1.isAdmin = true; // Add new property isAdmin
console.log(user1.isAdmin); // true

//? 5. Delete Property

// Remove the `password` property from the object.

// ```jsx
// const account = {
//   username: "john",
//   password: "12345"
// }
// ```
const account = {
    username: "john",
    password: "12345"
  }
delete account.password;
console.log(account.password); // undefined

//! Intermediate Level

//? 6. Count Properties

// Write a function that returns how many properties an object has.

// Example:

// ```jsx
// countProperties({a:1,b:2,c:3})
// // 3
// ```

// Hint:

// Use:

// ```jsx
// Object.keys()
// ```
function countProperties(obj) {
    return Object.keys(obj).length;
}
console.log(countProperties({a:1,b:2,c:3})); // 3

//? 7. Loop Through Object

// Print all keys and values from this object.

// ```jsx
// const person = {
//   name: "Rahul",
//   age: 22,
//   city: "Delhi"
// }
// ```

// Hint:

// Use:

// ```jsx
// for...in
// ```

const person = {
    name: "Rahul",
    age: 22,
    city: "Delhi"
  }
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: Rahul
// age: 22
// city: Delhi

//? 8. Check Property Exists

// Check whether `"email"` exists inside an object or not.

// Hint:

// Use:

// ```jsx
// in
// ```
const user2 = {
    name: "Anubhav",
    age: 25,
    isAdmin: true
  }
console.log("email" in user2); // false

//? 9. Merge Two Objects

// Merge these two objects into one.

// ```jsx
// const obj1 = { a: 1, b: 2 }
// const obj2 = { c: 3, d: 4 }
// ```

// Hint:

// Use:

// ```jsx
// spread operator
// ```
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

//? 10. Convert Object to Array

// Convert this object into an array of key-value pairs.

// ```jsx
// const user = {
//   name: "Aman",
//   age: 21
// }
// ```

// Hint:

// Use:

// ```jsx
// Object.entries()
// ```

const user3 = {
    name: "Aman",
    age: 21
    }
const entries = Object.entries(user3);
console.log(entries); // [ ['name', 'Aman'], ['age', 21] ]


//! Problem Solving Level

//? 11. Find Highest Value

// Find the student with highest marks.

// ```jsx
// const marks = {
//   Anubhav: 95,
//   Rahul: 82,
//   Aman: 90
// }
// ```

// Expected Output:

// ```jsx
// "Anubhav"
// ```
const marks = {
    Anubhav: 95,
    Rahul: 82,
    Aman: 90
  }
let highestMarks = -Infinity;
let topStudent = "";
for (let student in marks) {
    if (marks[student] > highestMarks) {
        highestMarks = marks[student];
        topStudent = student;
    }
}
console.log(topStudent); // "Anubhav"

//? 12. Sum of Object Values

// Find total salary.

// ```jsx
// const salaries = {
//   john: 1000,
//   alex: 2000,
//   bob: 1500
// }
// ```

// Expected Output:

// ```jsx
// 4500
// ```

const salaries = {
    john: 1000,
    alex: 2000,
    bob: 1500
  }
let totalSalary = 0;
for (let employee in salaries) {
    totalSalary += salaries[employee];
}
console.log(totalSalary); // 4500

//? 13. Nested Object Access

// Print:

// - city
// - pincode

// ```jsx
// const user = {
//   name: "Anubhav",
//   address: {
//     city: "Bhopal",
//     pincode: 462001
//   }
// }
// ```
const user4 = {
    name: "Anubhav",
    address: {
        city: "Bhopal",
        pincode: 462001
    }
}
console.log(user4.address.city); // Bhopal
console.log(user4.address.pincode); // 462001

//? 14. Object Method Practice

// Create an object with:

// - name
// - marks
// - method called `getResult`

// If marks > 40:

// ```jsx
// "Pass"
// ```

// else:

// ```jsx
// "Fail"
// ```

const student1 = {
    name: "Anubhav",
    marks: 85,
    getResult: function() {
        return this.marks > 40 ? "Pass" : "Fail";
    }
}
console.log(student1.getResult()); // "Pass"

//? 15. Convert Array to Object

// Convert this array into an object.

// ```jsx
// const arr = ["name", "Anubhav", "age", 24]
// ```

// Expected Output:

// ```jsx
// {
//   name: "Anubhav",
//   age: 24
// }
// ```
const arr = ["name", "Anubhav", "age", 24];
const obj = {};
for (let i = 0; i < arr.length; i += 2) {
    obj[arr[i]] = arr[i + 1];
}
console.log(obj); // { name: "Anubhav", age: 24 }

//! Harder Practice Questions

//? 16. Frequency Counter

// Count frequency of each character.

// Input:

// ```jsx
// "banana"
// ```

// Expected Output:

// ```jsx
// {
//   b:1,
//   a:3,
//   n:2
// }
// ```
function frequencyCounter(str) {
    const frequency = {};
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}
console.log(frequencyCounter("banana")); // { b: 1, a: 3, n: 2 }

//? 17. Group By Property

// Group users by age.

// ```jsx
// const users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 21 },
//   { name: "C", age: 20 }
// ]
// ```

// Expected Output:

// ```jsx
// {
//   20: [
//     { name: "A", age: 20 },
//     { name: "C", age: 20 }
//   ],
//   21: [
//     { name: "B", age: 21 }
//   ]
// }
// ```
const users = [
    { name: "A", age: 20 },
    { name: "B", age: 21 },
    { name: "C", age: 20 }
  ]
const groupedByAge = {};
for (let user of users) {
    if (!groupedByAge[user.age]) {
        groupedByAge[user.age] = [];
    }
    groupedByAge[user.age].push(user);
}
console.log(groupedByAge);
// Output:
// {
//   20: [
//     { name: "A", age: 20 },
//     { name: "C", age: 20 }
//   ],
//   21: [
//     { name: "B", age: 21 }
//   ]
// }

//? 18. Deep Property Check

// Check whether this property exists:

// ```jsx
// "user.address.city"
// ```

// inside an object dynamically.

// Hint:

// Use:

// ```jsx
// split(".")
// ```

function deepPropertyCheck(obj, propertyPath) {
    const properties = propertyPath.split(".");
    let current = obj;
    for (let prop of properties) {
        if (current[prop] === undefined) {
            return false;
        }
        current = current[prop];
    }
    return true;
}
const user5 = {
    name: "Anubhav",
    address: {
        city: "Bhopal",
        pincode: 462001
    }
}
console.log(deepPropertyCheck(user5, "user.address.city")); // false
console.log(deepPropertyCheck(user5, "address.city")); // true

//? 19.  Object Comparison

// Check if two objects have same keys and values.

// Example:

// ```jsx
// {a:1,b:2}
// {a:1,b:2}
// ```

// Expected Output:

// ```jsx
// true
// ```

function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
console.log(areObjectsEqual({a:1,b:2}, {a:1,b:2})); // true
console.log(areObjectsEqual({a:1,b:2}, {a:1,b:3})); // false

//? 20.   Remove Duplicate Objects

// Remove duplicate objects from array based on `id`.

// ```jsx
// [
//   {id:1,name:"A"},
//   {id:2,name:"B"},
//   {id:1,name:"A"}
// ]
// ```

// Expected Output:

// ```jsx
// [
//   {id:1,name:"A"},
//   {id:2,name:"B"}
// ]
// ```
function removeDuplicateObjects(arr) {
    const uniqueObjects = {};
    const result = [];
    for (let obj of arr) {
        if (!uniqueObjects[obj.id]) {
            uniqueObjects[obj.id] = true;
            result.push(obj);
        }
    }
    return result;
}
const arrWithDuplicates = [
    {id:1,name:"A"},
    {id:2,name:"B"},
    {id:1,name:"A"}
];
console.log(removeDuplicateObjects(arrWithDuplicates));
// Output:
// [
//   {id:1,name:"A"},
//   {id:2,name:"B"}
// ]

