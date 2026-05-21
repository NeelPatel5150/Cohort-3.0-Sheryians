// console.log("Hello JavaScript!");

//! Loops

//? For Loop
 for (let i = 0; i < 5; i++) {
   console.log(i);
 }


//? While Loop
 let j = 0;
    while (j < 5) {
        console.log(j);
        j++;
    }

//? Do While Loop
let k = 0;  
do {
    console.log(k);
    k++;
} while (k < 5);


//? for...of Loop (for arrays and strings)
const array = ['a', 'b', 'c'];
for (const element of array) {
    console.log(element);
}

//! example - 1
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
    console.log(fruit);
}

//! example - 2
let word = "Hello";
for (let char of word) {
    console.log(char);
}

//? for...in Loop (for objects — brief intro)
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

//! Var - Let -Const Difference brif
//? Variable declared with var is function-scoped and can be re-declared and updated. It is hoisted to the top of its scope, meaning it can be accessed before its declaration, but it will be undefined until the declaration is encountered.

//? Variable declared with let is block-scoped and can be updated but not re-declared within the same scope. It is also hoisted, but it cannot be accessed before its declaration, resulting in a ReferenceError if you try to do so.

//? Variable declared with const is block-scoped and cannot be updated or re-declared. It must be initialized at the time of declaration, and its value cannot be changed afterward. Like let, it is hoisted but cannot be accessed before its declaration.