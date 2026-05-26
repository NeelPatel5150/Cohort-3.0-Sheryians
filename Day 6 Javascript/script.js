// console.log("Hello World!");

//? for each - iteration
//? map - transformation
//? filter - filtration
//? reduce - accumulation

//! forEach - iteration (cannot return anything)
// let arr = [1, 2, 3, 4, 5];

// arr.forEach((element) => {
//     console.log(element);
// });

//! (element, index) => in this pehla hamesha element aayega aur uske baad index aayega
// arr.forEach(function (element ,index) {
//     console.log(`The element at index ${index} is ${element}`);
// });

//? using foreach sum of all elements in the array


// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach((element) => {
//     sum += element;
// });

// console.log(sum);

//! using map - transformation (returns a new array of the same length as the original array)

// let arr = [10, 20, 30, 40, 50];

// let newArr = arr.map((element) => {
//     return element * 2;
// });

// console.log(newArr);

// let arr = ["Neel","jay","Dev","Mahi"]

// let newarr = arr.map((element) => {
//     return element+ " Patel";
// });
// console.log(newarr);

//! using filter - filtration (returns a new array of the same length or less than the original array)
//* filter ke return me always condition lagani hoti hai jisse pata chale ki element ko new array me include karna hai ya nahi karna hai

// let arr = [1, 2, 3, 4, 5];

// let newarr = arr.filter((element) =>{
//     if(element % 2 === 0){
//         return element;
//     }
// });
// console.log(newarr);

// let marks = [50,85,90,58,45,78,92];

// let newMarks = marks.filter((element) => {
//     if(element >= 60){
//         return element;
//     }
// });

// console.log(newMarks);

//! using reduce - accumulation (returns a single value by accumulating the elements of the array)

//*--> reduce make array to single value me convert karta hai bas simple

// let arr = [10, 20, 30, 40, 50];

// let sum = arr.reduce((accumulator, currentValue) => {
//     console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
//     return accumulator + currentValue;
// }, 0); //! 0 is the initial value of the accumulator

// console.log(sum);

//! accumulator is the value that is returned by the callback function in the previous iteration and currentValue is the current element of the array that is being processed

//? using reduce to find the maximum element in the array

// let arr = [10, 20, 30, 40, 50];

// let max = arr.reduce((accumulator, currentValue) => {
//     if (currentValue > accumulator) {
//         return currentValue;
//     }
//     return accumulator;
// });
// console.log(max);

//? using reduce to find the minimum element in the array

// let arr = [10, 20, 30, 40, 50];

// let min = arr.reduce((accumulator, currentValue) => {
//     if (currentValue < accumulator) {
//         return currentValue;
//     }
//     return accumulator;
// });
// console.log(min);

//? using reduce to find the product of all elements in the array

// let arr = [10, 20, 30, 40, 50];

// let product = arr.reduce((accumulator, currentValue) => {
//     return accumulator * currentValue;
// }, 1); //! 1 is the initial value of the accumulator

// console.log(product);

//! find method - returns the first element in the array that satisfies the condition specified in the callback function

// let arr = [10, 20, 30, 40, 50];

// let foundElement = arr.find((element) => { 
//     console.log(`The element being processed is ${element}`); 
//     if (element > 25) {
        
//         return element;
//     }
// });

// console.log(foundElement);

//! findIndex method - returns the index of the first element in the array that satisfies the condition specified in the callback function

// let arr = [10, 20, 30, 40, 50];

// let foundIndex = arr.findIndex((element) => {
//     console.log(`The element being processed is ${element}`);
//     if (element > 25) {
//         return element;
//     }
// });

// console.log(foundIndex);

//? some method - returns true if at least one element in the array satisfies the condition specified in the callback function

// let arr = [10, 20, 30, 40, 50];

// let isGreaterThan25 = arr.some((element) => {
//     console.log(`The element being processed is ${element}`);
//     if (element > 25) {
//         return true;
//     }   
// });

// console.log(isGreaterThan25);

// let nums = [1, 2, 3];
// console.log(nums.some(n => n > 2));   // true
// console.log(nums.some(n => n > 10));  // false

//! every method - returns true if all elements in the array satisfy the condition specified in the callback function

// let nums = [1, 2, 3];
// console.log(nums.every(n => n > 0));   // true
// console.log(nums.every(n => n > 2));   // false

//? Array Destructuring - a way to unpack values from arrays or properties from objects into distinct variables

// let arr = [10, 20, 30];

 // Old way
// let a = arr[0];
// let b = arr[1];

 // New way
// let [x, y, z] = arr;
// console.log(x, y, z);   // 10 20 30

 //skipping elements in array destructuring

// let [first, , third] = [1, 2, 3];
// console.log(first, third);   // 1 3

 // default values in array destructuring

// let [a = 10, b = 20] = [5];
// console.log(a, b);   // 5 20

// swapping variables using array destructuring

// let x = 1, y = 2;
// [x, y] = [y, x];
// console.log(x, y);   // 2 1