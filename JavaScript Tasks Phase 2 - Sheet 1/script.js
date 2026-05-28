//! Part 1 — Functions Basics (1–20)

//! Beginner Level

//? 1. Create a function named greet that prints "Hello World".
function greet() {
  console.log("Hello World");
}

greet();

//? 2. Create a function add(a, b) that returns the sum
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));

//? 3. Write a function to calculate the square of a number.
function square(num) {
  return num * num;
}   
console.log(square(4));

//? 4.Create a function that checks whether a number is even or odd.
function isEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(isEven(7));

//? 5.Write a function that converts Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(25));

//? 6.Create a function with default parameter "Guest".
function greet(name = "Guest") {
  console.log("Hello " + name);
}
greet(); // Output: Hello Guest
greet("Alice"); // Output: Hello Alice

//? 7. Write a function that returns the greater of two numbers.
function greater(a, b) {
  return a > b ? a : b;
}
console.log(greater(10, 20));

//? 8.Create a function to calculate area of rectangle.
function areaOfRectangle(length, width) {
  return length * width;
}
console.log(areaOfRectangle(5, 3));

//? 9. Write a function that returns "Adult" if age ≥ 18 else "Minor".
function checkAge(age) {
  return age >= 18 ? "Adult" : "Minor";
}   
console.log(checkAge(20));

//? 10. Create a function to reverse a string.
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));

//! Intermediate Level

//? 1.Write a function expression for multiplication.
const multiply = function(a, b) {
  return a * b;
}
console.log(multiply(4, 5));

//? 2.Convert a normal function into an arrow function.
const add = (a, b) => a + b;
console.log(add(3, 7));

//? 3. Create a function that accepts unlimited numbers and returns their sum using rest operator.
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4));

//? 4. Write a function that counts vowels in a string.
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
    for (let char of str) { 
        if (vowels.includes(char)) {
            count++;
        }
    }
  return count;
}
console.log(countVowels("Hello World"));

//? 5. Create a function that checks if a string is palindrome.
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}
console.log(isPalindrome("racecar"));

//? 6.Write a callback function example using setTimeout.
function greet() {
  console.log("Hello after 2 seconds");
}
setTimeout(greet, 2000);

//? 7.Create a higher-order function that executes another function twice.
function executeTwice(func) {
  func();
  func();
}
function sayHello() {
  console.log("Hello!");
}
executeTwice(sayHello);

//? 8. Write a function that returns another function.
function outerFunction() {
  return function innerFunction() {
    console.log("Hello from the inner function!");
  }
}
const innerFunc = outerFunction();
innerFunc();

//? 9. Create a pure function for subtraction.
function subtract(a, b) {
  return a - b;
}
console.log(subtract(10, 5));

//? 10. Create an impure function using global variable modification.
let count = 0;
function increment() {
  count++;
  return count;
}
console.log(increment());
console.log(increment());

//! Part 2 — Advanced Functions

//? 1. Write a recursive function for factorial.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
    return n * factorial(n - 1);
}
console.log(factorial(5));

//? 2. Write recursive Fibonacci function.
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));

//? 3. Create a function that finds power using recursion.
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
    return base * power(base, exponent - 1);
}
console.log(power(2, 3));

//? 4. Create an IIFE that prints "Executed".
(function() {
  console.log("Executed");
})();

//? 5. Write a function that memoizes factorial calculation.
function memoizeFactorial() {
  const cache = {};
    return function factorial(n) {
    if (n in cache) {
      return cache[n];
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    cache[n] = n * factorial(n - 1);
    return cache[n];
    }
}
const factorialMemoized = memoizeFactorial();
console.log(factorialMemoized(5));
console.log(factorialMemoized(6));

//? 6. Create a closure counter function.
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
const counter = createCounter();
console.log(counter());
console.log(counter());

//? 7.Write a function currying example for addition.
function add(a) {
  return function(b) {
    return a + b;
  }
}
const add5 = add(5);
console.log(add5(3)); // Output: 8

//? 8. Create debounce function logic.
function debounce(func, delay) {
  let timeoutId;
    return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
    }
}
const debouncedFunction = debounce(() => {
  console.log("Debounced function executed");
}, 2000);
debouncedFunction();
debouncedFunction();
debouncedFunction(); // Only this call will execute after 2 seconds

//? 9.Create throttle function logic.
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
    return function(...args) {
    if (!lastRan) {
      func.apply(this, args);
        lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(this, args);
            lastRan = Date.now();
        }
        }, limit - (Date.now() - lastRan));
    }
    }
}
const throttledFunction = throttle(() => {
  console.log("Throttled function executed");
}, 2000);
throttledFunction();
throttledFunction();
throttledFunction(); // Only the first call will execute immediately, others will be throttled

//? 10.Write a function that executes only once.
function once(func) {
  let executed = false;
    return function(...args) {
    if (!executed) {
      executed = true;
      return func.apply(this, args);
    }
    }
}
const executeOnce = once(() => {
  console.log("This will only execute once");
});
executeOnce();
executeOnce(); // This call will not execute the function again

//? 11. Create custom implementation of map.
function customMap(array, callback) {
  const result = [];
    for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
    }
    return result;
}
const numbers = [1, 2, 3];
const squaredNumbers = customMap(numbers, num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9]

//? 12. Create custom implementation of filter
function customFilter(array, callback) {
  const result = [];
    for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
    }
    return result;
}
const mixedNumbers = [1, 2, 3, 4, 5];
const evenNumbers = customFilter(mixedNumbers, num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//? 13. Create custom implementation of reduce.
function customReduce(array, callback, initialValue) {
  let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}
const sum = customReduce(numbers, (acc, num) => acc + num, 0);
console.log(sum); // Output: 6

//? 14. Create custom forEach.
function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
    }
}
customForEach(numbers, num => console.log(num)); // Output: 1 2 3

//? 15. 15. Explain output:

```jsx
function test() {
    return;
    console.log("Hello");
}
console.log(test());
 ```
// The output of the code will be `undefined`. The `return;` statement in the `test` function causes the function to exit immediately, so the `console.log("Hello");` line is never executed. Since there is no value returned from the function, it returns `undefined` by default.


//! Part 3 — Arrays Basics

//! Beginner Level

//? 1. Create an array of 5 fruits.
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log(fruits);

//? 2. Print first and last element of array.
console.log(fruits[0]); // First element
console.log(fruits[fruits.length - 1]); // Last element

//? 3. Find length of array.
console.log(fruits.length);

//? 4. Add element at end using push.
fruits.push("Fig");
console.log(fruits);

//? 5.Remove last element using pop.
fruits.pop();
console.log(fruits);

//? 6. Add element at beginning using unshift.
fruits.unshift("Grape");
console.log(fruits);

//? 7. Remove first element using shift.
fruits.shift();
console.log(fruits);

//? 8.Reverse an array.
fruits.reverse();
console.log(fruits);

//? 9.Sort numbers ascending.
const numbers = [5, 2, 9, 1, 5];
numbers.sort((a, b) => a - b);
console.log(numbers);

//? 10. Sort numbers descending.
numbers.sort((a, b) => b - a);
console.log(numbers);

//! Intermediate Level

//? 1.Use splice to remove elements
const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
colors.splice(2, 1); // Removes "Blue"
console.log(colors);

//? 2. Use splice to insert elements.
colors.splice(2, 0, "Cyan"); // Inserts "Cyan" at index 2
console.log(colors);

//? 3. Use slice to copy array
const copiedColors = colors.slice();
console.log(copiedColors);

//? 4. Find index of an element.
const index = colors.indexOf("Green");
console.log(index);

//? 5.Check if array contains a value.
const containsYellow = colors.includes("Yellow");
console.log(containsYellow);

//? 6.Join array elements with .
const joinedColors = colors.join(".");
console.log(joinedColors);

//? 7. Merge two arrays using spread operator.
const moreColors = ["Orange", "Pink"];
const mergedColors = [...colors, ...moreColors];
console.log(mergedColors);

//? 8. Copy array using spread operator.
const copiedColorsSpread = [...colors];
console.log(copiedColorsSpread);

//? 9. Find maximum value using Math.max
const maxNumber = Math.max(...numbers);
console.log(maxNumber);

//? 10. Swap two variables using destructuring.
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a);
console.log(b);

//! Part 4 — Array Iteration Methods

//? 1. Use forEach to print all numbers doubled.
const nums = [1, 2, 3, 4, 5];
nums.forEach(num => console.log(num * 2));

//? 2. Use map to square all numbers.
const squaredNums = nums.map(num => num * num);
console.log(squaredNums);

//? 3.Use filter to get even numbers.
const evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums);

//? 4.Use reduce to calculate sum.
const sumOfNums = nums.reduce((acc, num) => acc + num, 0);
console.log(sumOfNums);

//? 5.Use reduce to find maximum number.
const maxNum = nums.reduce((max, num) => (num > max ? num : max), nums[0]);
console.log(maxNum);

//? 6.Use find to get first even number.
const firstEven = nums.find(num => num % 2 === 0);
console.log(firstEven);

//? 7.Use findIndex to locate number > 50.
const indexGreaterThan50 = nums.findIndex(num => num > 50);
console.log(indexGreaterThan50); // Output: -1 (not found)

//? 8.Use some to check if any number is negative.
const hasNegative = nums.some(num => num < 0);
console.log(hasNegative);

//? 9.Use every to check if all numbers are positive.
const allPositive = nums.every(num => num > 0);
console.log(allPositive);

//? 10.Create array of names and convert all to uppercase.
const names = ["Alice", "Bob", "Charlie"];
const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);

//? 11. Filter all students with marks > 80.
const students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 75 },
    { name: "Charlie", marks: 90 }
];
const topStudents = students.filter(student => student.marks > 80);
console.log(topStudents);

//? 12. Calculate average using reduce.
const averageMarks = students.reduce((acc, student) => acc + student.marks, 0) / students.length;
console.log(averageMarks);

//? 13. Count occurrences of numbers in array.
const numArray = [1, 2, 2, 3, 3, 3];
const countOccurrences = numArray.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
console.log(countOccurrences);

//? 14. Flatten nested arrays using flat.
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray);

//? 15. Remove duplicates using Set.
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(arrayWithDuplicates)];
console.log(uniqueArray);

//? 16. Sort array of objects by age.
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);

//? 17.Find total price of shopping cart.
const cart = [
  { item: "Book", price: 10 },
  { item: "Pen", price: 2 },
    { item: "Notebook", price: 5 }
];
const totalPrice = cart.reduce((total, product) => total + product.price, 0);
console.log(totalPrice);

//? 18. Group users by age.
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 }
];
const groupedByAge = users.reduce((group, user) => {
  const age = user.age;
    if (!group[age]) {  
    group[age] = [];
    }
    group[age].push(user);
    return group;
}, {});
console.log(groupedByAge);

//? 19. Chain filter and map.
const numbersChain = [1, 2, 3, 4, 5];
const resultChain = numbersChain
  .filter(num => num % 2 === 0) // Filter even numbers
  .map(num => num * num);
console.log(resultChain); // Output: [4, 16]

//? 20. Explain difference between map and forEach.
// The main difference between `map` and `forEach` is that `map` returns a new array with the results of applying a function to each element, while `forEach` does not return anything and is used for executing a function on each element without creating a new array.


//! Part 5 — Objects Basics 

//? 1. Create object for a student.
const student = {
  name: "Alice",
  age: 20,
  grade: "A"
};
console.log(student);

//? 2.Access properties using dot notation.
console.log(student.name);

//? 3. Access properties using bracket notation.
console.log(student["age"]);

//? 4. Add new property dynamically.
student.major = "Computer Science";
console.log(student);

//? 5. Update existing property.
student.grade = "A+";
console.log(student);

//? 6. Delete a property.
delete student.age;
console.log(student);

//? 7. Create object method.
student.greet = function() {
  console.log("Hello, I am " + this.name);
}
student.greet();

//? 8.Use this keyword inside method.
// The `this` keyword refers to the object that is calling the method. In the `greet` method, `this.name` refers to the `name` property of the `student` object, allowing us to access and use it within the method.

//? 9. Create nested object.
const company = {
  name: "Tech Co",
  address: {
    street: "123 Main St",
    city: "Techville",
    country: "USA"
  }
};
console.log(company);

//? 10. Access deeply nested property.
console.log(company.address.city);

//? 11. Destructure object properties
const { name, address: { city } } = company;
console.log(name);
console.log(city);

//? 12. Rename variables while destructuring.
const { name: companyName, address: { country: companyCountry } } = company;
console.log(companyName);
console.log(companyCountry);

//? 13. Add default values during destructuring.
const { name: compName, address: { zipCode = "00000" } } = company;
console.log(compName);
console.log(zipCode);

//? 14. Copy object using spread operator.
const copiedCompany = { ...company };
console.log(copiedCompany);

//? 15. Merge two objects.
const additionalInfo = { founded: 2010, employees: 100 };
const mergedCompany = { ...company, ...additionalInfo };
console.log(mergedCompany);

//! Part 6 — Advanced Objects + Real Logic

//? 1. Use Object.keys() on object.
const keys = Object.keys(student);
console.log(keys);

//? 2.Use Object.values().
const values = Object.values(student);
console.log(values);

//? 3. Use Object.entries().
const entries = Object.entries(student);
console.log(entries);

//? 4. Loop through object using for...in.
for (let key in student) {
  console.log(key + ": " + student[key]);
}

//? 5. Freeze an object and test modification
Object.freeze(student);
student.name = "Bob";
console.log(student.name); // Output: "Alice" (modification fails)

//? 6.Seal an object and test modification.
Object.seal(student);
student.grade = "B";
console.log(student.grade); // Output: "B" (modification succeeds)
delete student.major;
console.log(student.major); // Output: "Computer Science" (deletion fails)

//? 7. Create array of objects for users.
const usersArray = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
console.log(usersArray);

//? 8. Find user with highest age.
const oldestUser = usersArray.reduce((oldest, user) => (user.age > oldest.age ? user : oldest), usersArray[0]);
console.log(oldestUser);

//? 9. Build a mini TODO app using arrays + objects.
class TodoApp {
  constructor() {
    this.todos = [];
  }
  addTodo(task) {
    const todo = {
      id: Date.now(),
      task: task,
      completed: false
    };
    this.todos.push(todo);
  }
  completeTodo(id) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = true;
    }
  }
  getTodos() {
    return this.todos;
  }
}
const myTodoApp = new TodoApp();
myTodoApp.addTodo("Learn JavaScript");
myTodoApp.addTodo("Build a project");
console.log(myTodoApp.getTodos());
myTodoApp.completeTodo(myTodoApp.getTodos()[0].id);
console.log(myTodoApp.getTodos());

//? 10 10. Build a shopping cart system with:
// - add item
// - remove item
// - calculate total
// - quantity update

class ShoppingCart {
  constructor() {
    this.cart = [];
  }
  addItem(item, price, quantity = 1) {
    const existingItem = this.cart.find(cartItem => cartItem.item === item);
    if (existingItem) {
      existingItem.quantity += quantity;
    }
    else {
      this.cart.push({ item, price, quantity });
    }
  }
  removeItem(item) {
    this.cart = this.cart.filter(cartItem => cartItem.item !== item);
  }
  calculateTotal() {
    return this.cart.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
  }
  updateQuantity(item, quantity) {
    const cartItem = this.cart.find(cartItem => cartItem.item === item);
    if (cartItem) {
      cartItem.quantity = quantity;
    }
  }
}
const myCart = new ShoppingCart();
myCart.addItem("Book", 10, 2);
myCart.addItem("Pen", 2, 5);
console.log(myCart.calculateTotal());
myCart.updateQuantity("Pen", 3);
console.log(myCart.calculateTotal());
myCart.removeItem("Book");
console.log(myCart.calculateTotal());

//! Bonus Hard Questions

//? Debugging Questions

// //? 1.
// const arr = [1,2,3];
// arr[10] = 5;
// console.log(arr.length);
// The output will be `11`. When you assign a value to an index that is greater than the current length of the array, JavaScript automatically increases the length of the array to accommodate the new index. The indices between the last defined index and the new index will be filled with `undefined` values. In this case, `arr[10] = 5;` sets the value at index 10, which causes the array length to become 11 (indices 0 to 10).

//? 2.console.log(typeof []);
// The output will be `object`. In JavaScript, arrays are a type of object, so when you use the `typeof` operator on an array, it returns "object". To check if a variable is an array, you can use `Array.isArray([])`, which will return `true`.

//? 3.console.log([] == false);
// The output will be `true`. In JavaScript, when comparing an empty array `[]` to `false` using the loose equality operator `==`, the empty array is coerced to a boolean value. An empty array is considered truthy, but when coerced to a boolean, it becomes `false`. Therefore, `[] == false` evaluates to `true`. However, it's important to note that using strict equality `===` would return `false` because they are of different types.

//? 4.console.log([1,2] + [3,4]);
// The output will be `"1,23,4"`. When you use the `+` operator with arrays in JavaScript, it converts the arrays to strings and concatenates them. The array `[1,2]` is converted to the string `"1,2"` and the array `[3,4]` is converted to the string `"3,4"`. When you concatenate these two strings, you get `"1,23,4"`.

//? 5.
function x(a,b){
  return a+b;
}
console.log(x(2));
// The output will be `NaN`. The function `x` expects two parameters, `a` and `b`. When you call `x(2)`, you are only providing one argument, so `b` is `undefined`. When you try to add a number (`2`) to `undefined`, the result is `NaN` (Not a Number).

//! Ultra Advanced Practice

//? 1. Build custom Array.prototype.map
Array.prototype.customMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
const arr = [1, 2, 3];
const mappedArr = arr.customMap(num => num * 2);
console.log(mappedArr); // Output: [2, 4, 6]

//? 2. Build custom Array.prototype.filter.
Array.prototype.customFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
const filteredArr = arr.customFilter(num => num % 2 === 0);
console.log(filteredArr); // Output: [2]

//? 3.Build custom Array.prototype.reduce.
Array.prototype.customReduce = function(callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};
const reducedValue = arr.customReduce((acc, num) => acc + num, 0);
console.log(reducedValue); // Output: 6

//? 4. Implement deep clone function.
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
console.log(cloned);

//? 5.Create student management system.
class StudentManagementSystem {
  constructor() {
    this.students = [];
  }
  addStudent(name, age) {
    const student = {
      id: Date.now(),
      name: name,
      age: age
    };
    this.students.push(student);
  }
  removeStudent(id) {
    this.students = this.students.filter(student => student.id !== id);
  }
  getStudent(id) {
    return this.students.find(student => student.id === id);
  }
  getAllStudents() {
    return this.students;
  }
}
const sms = new StudentManagementSystem();
sms.addStudent("Alice", 20);
sms.addStudent("Bob", 22);
console.log(sms.getAllStudents());
sms.removeStudent(sms.getAllStudents()[0].id);
console.log(sms.getAllStudents());

//? 6.Create library management system.
class LibraryManagementSystem {
  constructor() {
    this.books = [];
  }
  addBook(title, author) {
    const book = {
      id: Date.now(),
      title: title,
      author: author
    };
    this.books.push(book);
  }
}
const library = new LibraryManagementSystem();
library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
library.addBook("To Kill a Mockingbird", "Harper Lee");
console.log(library.books);

//? 7.Create expense tracker logic.
class ExpenseTracker {
  constructor() {
    this.expenses = [];
  }
  addExpense(description, amount) {
    const expense = {
      id: Date.now(),
      description: description,
      amount: amount
    };
    this.expenses.push(expense);
  }
  getTotalExpenses() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }
}
const tracker = new ExpenseTracker();
tracker.addExpense("Groceries", 50);
tracker.addExpense("Utilities", 100);
console.log(tracker.getTotalExpenses());

//? 8.Build inventory management system.
class InventoryManagementSystem {
  constructor() {
    this.inventory = [];
  }
  addItem(name, quantity) {
    const item = {
      id: Date.now(),
      name: name,
      quantity: quantity
    };
    this.inventory.push(item);
  }
  removeItem(id) {
    this.inventory = this.inventory.filter(item => item.id !== id);
  }
  getItem(id) {
    return this.inventory.find(item => item.id === id);
  }
  getAllItems() {
    return this.inventory;
  }
}
const inventory = new InventoryManagementSystem();
inventory.addItem("Laptop", 10);
inventory.addItem("Phone", 20);
console.log(inventory.getAllItems());
inventory.removeItem(inventory.getAllItems()[0].id);
console.log(inventory.getAllItems());

//? 9. Create function composition utility.

function compose(...functions) {
  return function(value) {
    return functions.reduceRight((acc, fn) => fn(acc), value);
  };
}
const add = (x) => x + 1;
const multiply = (x) => x * 2;
const composed = compose(multiply, add);
console.log(composed(5)); // Output: 12

//? 10.Build calculator using objects and methods.
class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}
const calculator = new Calculator();
console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(5, 3));
console.log(calculator.divide(5, 3));

//! Scenario-Based Questions

//? 1. You have an array of users. Return only active users.
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true }
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

//? 2.Calculate total revenue from orders array.
const orders = [
  { item: "Book", price: 10, quantity: 2 },
  { item: "Pen", price: 2, quantity: 5 },
  { item: "Notebook", price: 5, quantity: 3 }
];
const totalRevenue = orders.reduce((total, order) => total + (order.price * order.quantity), 0);
console.log(totalRevenue);

//? 3.Find second largest number in array.
const numbers = [5, 2, 9, 1, 5];
const secondLargest = numbers.sort((a, b) => b - a)[1];
console.log(secondLargest);

//? 4. Find missing number in array.
const arr = [1, 2, 4, 5];
const missingNumber = arr.reduce((acc, num) => acc + num, 0) - (arr.length * (arr.length + 1)) / 2;
console.log(missingNumber); // Output: -1 (since the array is missing the number 3)

//? 5. Check whether two objects are equal.
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
const obj1 = { name: "Alice", age: 30 };
const obj2 = { name: "Alice", age: 30 };
console.log(areObjectsEqual(obj1, obj2)); // Output: true

//! Interview-Level Questions

//? 1. Difference between:
// - function declaration
// - function expression
// - arrow function
// - Function Declaration: A function declaration is a named function that is defined using the `function` keyword. It is hoisted, meaning it can be called before it is defined in the code.
function declaredFunction() {
  console.log("This is a function declaration");
}
// - Function Expression: A function expression is a function that is assigned to a variable. It can be anonymous or named, and it is not hoisted, meaning it cannot be called before it is defined in the code.
const expressedFunction = function() {
  console.log("This is a function expression");
};
// - Arrow Function: An arrow function is a concise syntax for writing functions. It does not have its own `this` context and is not hoisted. It is often used for shorter functions or as callbacks.
const arrowFunction = () => {
  console.log("This is an arrow function");
};

//? 2. Difference between:
// - `slice`
// - `splice`

// - `slice`: The `slice` method is used to create a shallow copy of a portion of an array into a new array. It does not modify the original array and takes two arguments: the start index and the end index (exclusive).
const arr = [1, 2, 3, 4, 5];
const slicedArr = arr.slice(1, 4);
console.log(slicedArr); // Output: [2, 3, 4]
console.log(arr); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

// - `splice`: The `splice` method is used to change the contents of an array by removing, replacing, or adding elements. It modifies the original array and takes three arguments: the start index, the number of elements to remove, and the elements to add (optional).
const splicedArr = arr.splice(1, 2, 6, 7);
console.log(splicedArr); // Output: [2, 3] (removed elements)
console.log(arr); // Output: [1, 6, 7, 4, 5] (original array is modified)

//? 3. Difference between:
// - `map`
// - `filter`
// - `reduce`
// - `map`: The `map` method creates a new array by applying a provided function to each element of the original array. It does not modify the original array.
const numbers = [1, 2, 3];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9]

// - `filter`: The `filter` method creates a new array with all elements that pass a test implemented by the provided function. It does not modify the original array.
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2]

// - `reduce`: The `reduce` method executes a reducer function on each element of the array, resulting in a single output value. It can be used to sum values, find maximums, or perform any reduction operation. It does not modify the original array.
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 6

//? 4. Difference between:
// - `for...in`
// - `for...of`

// - `for...in`: The `for...in` loop iterates over the enumerable properties of an object. It is used to loop through the keys of an object and is not recommended for arrays as it may include inherited properties.
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key); // Output: a, b, c
}

// - `for...of`: The `for...of` loop iterates over the values of an iterable object, such as an array or a string. It is used to loop through the elements of an array or the characters of a string.
const arr = [1, 2, 3];
for (let value of arr) {
  console.log(value); // Output: 1, 2, 3
}

//? 5. 1. Difference between:
// - shallow copy
// - deep copy

// - Shallow Copy: A shallow copy of an object or array creates a new object or array that references the same memory as the original. Changes to nested objects or arrays in the shallow copy will affect the original, and vice versa.
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c); // Output: 3 (original is affected)

// - Deep Copy: A deep copy of an object or array creates a new object or array that is completely independent of the original. Changes to nested objects or arrays in the deep copy will not affect the original, and vice versa.
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item));
  }
  const copiedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copiedObj[key] = deepCopy(obj[key]);
    }
  }
  return copiedObj;
}
const deepCopied = deepCopy(original);
deepCopied.b.c = 4;
console.log(original.b.c); // Output: 3 (original is not affected)


//! Logic Building Questions

//? 1. Rotate array by k positions.
function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}
const arr = [1, 2, 3, 4, 5];
console.log(rotateArray(arr, 2)); // Output: [4, 5, 1, 2, 3]

//? 2.Find frequency of characters in string.
function characterFrequency(str) {
  const frequency = {};
  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
}
console.log(characterFrequency("hello world")); // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

//? 3. Find longest word in sentence.
function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"

//? 4. Check if two strings are anagrams.
function areAnagrams(str1, str2) {
  const normalize = str => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  return normalize(str1) === normalize(str2);
}
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false

//? 5. Capitalize first letter of every word.
function capitalizeFirstLetter(sentence) {
  return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
console.log(capitalizeFirstLetter("hello world")); // Output: "Hello World"

//? 6. Remove falsy values from array.
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}
const mixedArr = [0, 1, false, 2, '', 3, null, 4, undefined];
console.log(removeFalsyValues(mixedArr)); // Output: [1, 2, 3, 4]

//? 7. Convert array into object.
function arrayToObject(arr) {
  const obj = {};
  arr.forEach((item, index) => {
    obj[index] = item;
  });
  return obj;
}
const arr = ["a", "b", "c"];
console.log(arrayToObject(arr)); // Output: { 0: "a", 1: "b", 2: "c" }

//? 8. Convert object into array.
function objectToArray(obj) {
  return Object.entries(obj);
}
const obj = { a: 1, b: 2, c: 3 };
console.log(objectToArray(obj)); // Output: [["a", 1], ["b", 2], ["c", 3]]

//? 9. Find duplicate elements.
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  for (let item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  return Array.from(duplicates);
}
const arr = [1, 2, 3, 2, 4, 3, 5];
console.log(findDuplicates(arr)); // Output: [2, 3]

//? 10. Merge two sorted arrays.
function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]

//! Real World Practice

//? 1. Create authentication validation functions.
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function validatePassword(password) {  return password.length >= 8;
}
console.log(validateEmail("user@example.com")); // Output: true
console.log(validatePassword("password123")); // Output: true

//? 2. Create OTP generator.
function generateOTP(length = 6) {
  const digits = "0123456789";
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * digits.length)];
  }
  return otp;
}
console.log(generateOTP()); // Output: A random 6-digit OTP

//? 3. Create password strength checker.
function checkPasswordStrength(password) {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isLongEnough = password.length >= 8;
  if (isLongEnough && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
    return "Strong";
  }
  if (isLongEnough && ((hasUpperCase && hasLowerCase) || (hasNumbers && hasSpecialChars))) {
    return "Medium";
  }
  return "Weak";
}
console.log(checkPasswordStrength("Password123!")); // Output: "Strong"
console.log(checkPasswordStrength("Password")); // Output: "Medium"
console.log(checkPasswordStrength("pass")); // Output: "Weak"

//? 4. Build leaderboard system.
class Leaderboard {
  constructor() {
    this.scores = [];
  }
  addScore(player, score) {
    this.scores.push({ player, score });
    this.scores.sort((a, b) => b.score - a.score);
  }
  getTopPlayers(n) {
    return this.scores.slice(0, n);
  }
}
const leaderboard = new Leaderboard();
leaderboard.addScore("Alice", 100);
leaderboard.addScore("Bob", 150);
leaderboard.addScore("Charlie", 120);
console.log(leaderboard.getTopPlayers(2)); // Output: [{ player: "Bob", score: 150 }, { player: "Charlie", score: 120 }]

//? 5. Create attendance management logic.
class AttendanceManager {
  constructor() {
    this.attendance = {};
  }
  markAttendance(studentName, date) {
    if (!this.attendance[date]) {
      this.attendance[date] = [];
    }
    this.attendance[date].push(studentName);
  }
  getAttendance(date) {
    return this.attendance[date] || [];
  }
}
const attendanceManager = new AttendanceManager();
attendanceManager.markAttendance("Alice", "2024-06-01");
attendanceManager.markAttendance("Bob", "2024-06-01");
attendanceManager.markAttendance("Charlie", "2024-06-02");
console.log(attendanceManager.getAttendance("2024-06-01"));
// Output: ["Alice", "Bob"]
console.log(attendanceManager.getAttendance("2024-06-02"));
// Output: ["Charlie"]

//! Advanced Functional Programming

//? 1. Implement compose function.
function compose(...functions) {
  return function(value) {
    return functions.reduceRight((acc, fn) => fn(acc), value);
  };
}
const add = (x) => x + 1;
const multiply = (x) => x * 2;
const composedFunction = compose(multiply, add);
console.log(composedFunction(5)); // Output: 12

//? 2. Implement pipe function.
function pipe(...functions) {
  return function(value) {
    return functions.reduce((acc, fn) => fn(acc), value);
  }
}
const pipedFunction = pipe(add, multiply);
console.log(pipedFunction(5)); // Output: 12

//? 3. Create custom event emitter.
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(...args));
    }
  }
}
const emitter = new EventEmitter();
emitter.on("greet", name => console.log(`Hello, ${name}!`));
emitter.emit("greet", "Alice"); // Output: "Hello, Alice!"

//? 4. Build promise-like function logic.
class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach(callback => callback(value));
      }
    };
    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach(callback => callback(reason));
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFulfilled, onRejected) {
    if (this.state === "fulfilled") {
      onFulfilled(this.value);
    } else if (this.state === "rejected") {
      onRejected(this.reason);
    }
    return this; // For chaining
  }
}
const myPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});
myPromise.then(result => console.log(result)); // Output: "Success!" after 1 second

//? 5.Create retry mechanism function.

function retry(fn, retries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    const attempt = () => {
      fn()
        .then(resolve)
        .catch(error => {
          if (retries > 0) {
            retries--;
            setTimeout(attempt, delay);
          }
          else {            reject(error);
          }
        });
    };
    attempt();
  });
}
function unreliableFunction() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Success!");
    } else {
      reject("Failure!");
    }
  });
}
retry(unreliableFunction)
  .then(result => console.log(result))
  .catch(error => console.error(error))
   .finally(() => console.log("Retry mechanism completed."));
   
//! Final Challenge Questions

//? 1. Build a note-taking app logic.
(() => {
  class NotesApp {
    constructor() {
      this.notes = [];
      this.nextId = 1;
    }

    addNote(title, content = "", tags = []) {
      const note = {
        id: this.nextId++,
        title,
        content,
        tags: Array.isArray(tags) ? [...tags] : [],
        pinned: false,
        createdAt: new Date().toISOString(),
      };
      this.notes.push(note);
      return note;
    }

    updateNote(id, updates) {
      const note = this.notes.find((item) => item.id === id);
      if (!note) {
        return null;
      }

      if (typeof updates.title === "string") note.title = updates.title;
      if (typeof updates.content === "string") note.content = updates.content;
      if (Array.isArray(updates.tags)) note.tags = [...updates.tags];
      if (typeof updates.pinned === "boolean") note.pinned = updates.pinned;

      return note;
    }

    deleteNote(id) {
      const previousLength = this.notes.length;
      this.notes = this.notes.filter((note) => note.id !== id);
      return this.notes.length !== previousLength;
    }

    searchNotes(query) {
      const keyword = query.toLowerCase();
      return this.notes.filter((note) => {
        const searchableText = `${note.title} ${note.content} ${note.tags.join(" ")}`.toLowerCase();
        return searchableText.includes(keyword);
      });
    }

    getPinnedNotes() {
      return this.notes.filter((note) => note.pinned);
    }

    getAllNotes() {
      return [...this.notes];
    }
  }

  //? 2. Build student dashboard logic.

  class StudentDashboard {
    constructor() {
      this.students = [];
      this.nextId = 1;
    }

    addStudent(name, className, subjects = {}) {
      const student = {
        id: this.nextId++,
        name,
        className,
        subjects: { ...subjects },
        attendance: 0,
      };
      this.students.push(student);
      return student;
    }

    updateMarks(studentId, subject, marks) {
      const student = this.students.find((item) => item.id === studentId);
      if (!student) {
        return null;
      }

      student.subjects[subject] = marks;
      return student;
    }

    markAttendance(studentId) {
      const student = this.students.find((item) => item.id === studentId);
      if (!student) {
        return null;
      }

      student.attendance += 1;
      return student;
    }

    getAverageMarks(studentId) {
      const student = this.students.find((item) => item.id === studentId);
      if (!student) {
        return 0;
      }

      const marks = Object.values(student.subjects);
      if (!marks.length) {
        return 0;
      }

      return marks.reduce((total, mark) => total + mark, 0) / marks.length;
    }

    getTopStudents(limit = 3) {
      return [...this.students]
        .map((student) => ({
          ...student,
          averageMarks: this.getAverageMarks(student.id),
        }))
        .sort((a, b) => b.averageMarks - a.averageMarks)
        .slice(0, limit);
    }

    getStudentReport(studentId) {
      const student = this.students.find((item) => item.id === studentId);
      if (!student) {
        return null;
      }

      return {
        ...student,
        averageMarks: this.getAverageMarks(studentId),
      };
    }
  }

  //? 3. Build quiz app logic.

  class QuizApp {
    constructor(questions = []) {
      this.questions = [...questions];
      this.answers = {};
    }

    addQuestion(question, options, correctAnswer, explanation = "") {
      const quizQuestion = {
        id: this.questions.length + 1,
        question,
        options: [...options],
        correctAnswer,
        explanation,
      };
      this.questions.push(quizQuestion);
      return quizQuestion;
    }

    submitAnswer(questionId, selectedAnswer) {
      this.answers[questionId] = selectedAnswer;
    }

    getScore() {
      let score = 0;

      for (const question of this.questions) {
        if (this.answers[question.id] === question.correctAnswer) {
          score += 1;
        }
      }

      return {
        score,
        total: this.questions.length,
        percentage: this.questions.length ? (score / this.questions.length) * 100 : 0,
      };
    }

    getReview() {
      return this.questions.map((question) => ({
        questionId: question.id,
        question: question.question,
        selectedAnswer: this.answers[question.id] ?? null,
        correctAnswer: question.correctAnswer,
        isCorrect: this.answers[question.id] === question.correctAnswer,
      }));
    }
  }

  //? 4. Build e-commerce cart logic.
  class EcommerceCart {
    constructor() {
      this.items = [];
      this.discountPercent = 0;
    }

    addItem(name, price, quantity = 1) {
      const existingItem = this.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.price = price;
        return existingItem;
      }

      const item = { name, price, quantity };
      this.items.push(item);
      return item;
    }

    removeItem(name) {
      this.items = this.items.filter((item) => item.name !== name);
    }

    updateQuantity(name, quantity) {
      const item = this.items.find((cartItem) => cartItem.name === name);
      if (!item) {
        return null;
      }

      item.quantity = quantity;
      return item;
    }

    applyDiscount(percent) {
      this.discountPercent = Math.max(0, Math.min(100, percent));
    }

    getSubtotal() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    getTotal() {
      const subtotal = this.getSubtotal();
      return subtotal - (subtotal * this.discountPercent) / 100;
    }

    getItems() {
      return [...this.items];
    }
  }

//? 5. Build Netflix watchlist logic.

  class NetflixWatchlist {
    constructor() {
      this.items = [];
      this.nextId = 1;
    }

    addTitle(title, genre, year = null) {
      const titleItem = {
        id: this.nextId++,
        title,
        genre,
        year,
        watched: false,
        addedAt: new Date().toISOString(),
      };
      this.items.push(titleItem);
      return titleItem;
    }

    markWatched(id) {
      const item = this.items.find((watchItem) => watchItem.id === id);
      if (!item) {
        return null;
      }

      item.watched = true;
      return item;
    }

    removeTitle(id) {
      this.items = this.items.filter((item) => item.id !== id);
    }

    searchTitles(query) {
      const keyword = query.toLowerCase();
      return this.items.filter((item) => {
        const searchableText = `${item.title} ${item.genre} ${item.year ?? ""}`.toLowerCase();
        return searchableText.includes(keyword);
      });
    }

    getWatchProgress() {
      const watched = this.items.filter((item) => item.watched).length;
      return {
        watched,
        total: this.items.length,
        remaining: this.items.length - watched,
      };
    }

    getWatchlist() {
      return [...this.items]
        .sort((a, b) => Number(a.watched) - Number(b.watched))
        .map((item) => ({ ...item }));
    }
  }

  const notesApp = new NotesApp();
  notesApp.addNote("JavaScript Revision", "Review closures, arrays, and objects", ["study", "js"]);
  notesApp.addNote("Project Idea", "Build a notes app with search and pinning", ["project"]);
  notesApp.updateNote(1, { pinned: true });
  console.log(notesApp.getPinnedNotes());

  const dashboard = new StudentDashboard();
  const alice = dashboard.addStudent("Alice", "10-A", { Math: 95, Science: 88, English: 91 });
  const bob = dashboard.addStudent("Bob", "10-A", { Math: 72, Science: 79, English: 84 });
  dashboard.markAttendance(alice.id);
  dashboard.updateMarks(bob.id, "Science", 82);
  console.log(dashboard.getStudentReport(alice.id));
  console.log(dashboard.getTopStudents(2));

  const quiz = new QuizApp();
  quiz.addQuestion("What does JS stand for?", ["Java Source", "JavaScript", "JSON Syntax"], "JavaScript");
  quiz.addQuestion("Which method turns an array into a string?", ["join", "push", "map"], "join");
  quiz.submitAnswer(1, "JavaScript");
  quiz.submitAnswer(2, "join");
  console.log(quiz.getScore());
  console.log(quiz.getReview());

  const cart = new EcommerceCart();
  cart.addItem("Book", 10, 2);
  cart.addItem("Pen", 2, 5);
  cart.updateQuantity("Pen", 3);
  cart.applyDiscount(10);
  console.log(cart.getItems());
  console.log(cart.getTotal());

  const watchlist = new NetflixWatchlist();
  const strangerThings = watchlist.addTitle("Stranger Things", "Sci-Fi", 2016);
  const dark = watchlist.addTitle("Dark", "Mystery", 2017);
  watchlist.markWatched(strangerThings.id);
  console.log(watchlist.searchTitles("dark"));
  console.log(watchlist.getWatchProgress());
  console.log(watchlist.getWatchlist());

  window.finalChallengeSystems = {
    notesApp,
    dashboard,
    quiz,
    cart,
    watchlist,
    dark,
  };
})();