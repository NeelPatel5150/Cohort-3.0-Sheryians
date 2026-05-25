// //! Arrays

// let arr = [1, 2, 3, 4, 5];

// console.log(arr);

// //? Accessing elements in an array using index
// console.log(arr[0]); // Output: 1
// console.log(arr[2]); // Output: 3
// console.log(arr[4]); // Output: 5

// //? array of strings
// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits);

// let Arr = [1, "hello", true, null, undefined,20.5];
// console.log(Arr);

// //? last element of an array
// console.log(arr[arr.length - 1]); // Output: 5

// //? Modifying elements in an array
// arr[1] = 20;
// console.log(arr); // Output: [1, 20, 3, 4, 5]

//? Array methods
let arr = [1, 2, 3, 4, 5];

//? push() - adds an element to the end of the array
arr.push(6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

//? pop() - removes the last element from the array
arr.pop();
console.log(arr); // Output: [1, 2, 3, 4, 5]

//? unshift() - adds an element to the beginning of the array
arr.unshift(0);
console.log(arr); // Output: [0, 1, 2, 3, 4, 5]

//? shift() - removes the first element from the array
arr.shift();
console.log(arr); // Output: [1, 2, 3, 4, 5]

//! in this 4 (push, pop, unshift, shift) which working faster
//* --> push and pop are faster than unshift and shift because they do not require re-indexing of the entire array. When you use unshift or shift, all the elements in the array need to be re-indexed, which can be time-consuming for large arrays. On the other hand, push and pop only affect the last element of the array, making them more efficient for adding or removing elements at the end of the array.

//? so the push and pop are very fast
//? and unshift and shift are slower because they require re-indexing of the entire array.

//? splice() - adds or removes elements from an array
//(add element or remove insted of first and last so like in center add or remove )
//? syntax: array.splice(start index, deleteCount, item1, item2, ...)

//? explain with example
let arr1 = [1, 2, 3, 4, 5];

//? adding elements using splice
arr1.splice(2, 0, 10);
console.log(arr1); // Output: [1, 2, 10, 3, 4, 5]

//? removing elements using splice
arr1.splice(2, 1);
console.log(arr1); // Output: [1, 2, 3, 4, 5]

//? adding and removing elements using splice
arr1.splice(2, 1, 20);
console.log(arr1); // Output: [1, 2, 20, 4, 5]

//! arr.splice(startindex, deletecount , newItems)

var arr2 = [1, 2, 3, 4, 5];
arr2[10] = 100;
console.log(arr2); // Output: [1, 2, 3, 4, 5, <5 empty items>, 100]
console.log(arr2.length); // Output: 11

//? reverse() - reverses the order of the elements in an array(mutating method - so it changes the original array)
arr2.reverse();
console.log(arr2); // Output: [100, <5 empty items>, 5, 4, 3, 2, 1]

//? sort() - sorts the elements of an array
let arr3 = [5, 2, 9, 1, 5, 6];
arr3.sort();
console.log(arr3); // Output: [1, 2, 5, 5, 6, 9]

//! Multidimensional Arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);

//? Accessing elements in a multidimensional array
console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][2]); // Output: 6
console.log(matrix[2][1]); // Output: 8

//! sort() method facts

var arr = [45, 10, 89, 100, 5, 30, 9];
arr.sort();
console.log(arr); // Output: [10, 100, 30, 45, 5, 9, 89]

//? so the sort method is sorting the elements as string not as number because by default it converts the elements to string and then sorts them. so we need to provide a compare function to sort the elements as number.

// insted of this we can use the compare function to sort the elements as number

arr.sort((a, b) => a - b); // ascending order [5, 9, 10, 30, 45, 89, 100]
arr.sort((a, b) => b - a); // descending order [100, 89, 45, 30, 10, 9, 5]

//! iterating over an array
let arr4 = [1, 2, 3, 4, 5];

//? using for loop
for (let i = 0; i < arr4.length; i++) {
  console.log(arr4[i]);
}

//? using for...of loop
for (let element of arr4) {
  console.log(element);
}

//? using forEach() method
arr4.forEach((element) => {
  console.log(element);
});

//? task1 - create an array of even numbers from 1 to 50 and print it to the console.
let arr5 = [];

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    arr5.push(i);
  }
}

console.log(arr5); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]

//! Non mutating methods - these methods do not change the original array and return a new array

//? slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

let arr6 = [1, 2, 3, 4, 5];
let newArr = arr6.slice(1, 4);
console.log(newArr); // Output: [2, 3, 4]
console.log(arr6); // Output: [1, 2, 3, 4, 5]

//? concat() - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

let arr7 = [1, 2, 3];
let arr8 = [4, 5, 6];
let mergedArr = arr7.concat(arr8);
console.log(mergedArr); // Output: [1, 2, 3, 4, 5, 6]
console.log(arr7); // Output: [1, 2, 3]
console.log(arr8); // Output: [4, 5, 6]

//? includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate.

let arr9 = [1, 2, 3, 4, 5];
console.log(arr9.includes(3)); // Output: true
console.log(arr9.includes(6)); // Output: false

//? indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.

let arr10 = [1, 2, 3, 4, 5];
console.log(arr10.indexOf(3)); // Output: 2
console.log(arr10.indexOf(6)); // Output: -1

//? join() - joins all elements of an array into a string and returns this string.

let arr11 = ["Hello", "World" , "JavaScript"];
let str = arr11.join(" ");
console.log(str); // Output: "Hello World JavaScript"


var str = "Hello World";
var arr12 = str.split(" ");
var arr13 = str.split("");
console.log(arr12); // Output: ["Hello", "World"]
console.log(arr13); // Output: ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

//! spread operator - it allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

let arr14 = [1, 2, 3];
let newArr2 = [...arr14, 4, 5, 6];
console.log(newArr2); // Output: [1, 2, 3, 4, 5, 6]


var arr15 = [1, 2, 3];
var arr16 = arr15; // this is not creating a new array, it is just creating a reference to the same array
arr16.push(4);
console.log(arr15); // Output: [1, 2, 3, 4] because arr15 and arr16 are referencing the same array in memory
console.log(arr16); // Output: [1, 2, 3, 4]

//? to create a new array we can use the spread operator
var arr17 = [1, 2, 3];
var arr18 = [...arr17]; // this is creating a new array with the same elements as arr17
arr18.push(4);
console.log(arr17); // Output: [1, 2, 3] because arr17 and arr18 are referencing different arrays in memory
console.log(arr18); // Output: [1, 2, 3, 4] because arr17 and arr18 are referencing different arrays in memory


