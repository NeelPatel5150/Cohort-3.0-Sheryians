//! Question 1 (Easy) — Find Expensive Products

let prices = [100, 250, 500, 150, 700];

let newarr = prices.filter((price)=>price > 300);

// console.log(newarr);

//! Question 2 (Moderate) — Student Average

let marks = [80, 90, 70, 85, 95];

let total = marks.reduce((acc,curent)=>{
    return acc + curent
},0)

let avg = total / marks.length
//  console.log(avg);

//! Question 3 (Hard) — Most Frequent Number

let numbers = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];
let frequency = {};

for(let i=0; i<numbers.length; i++){
    let num = numbers[i];

    if(frequency[num]){
        frequency[num]++;
    }
    else{        frequency[num] = 1;
    }
}
for(let key in frequency)
{
    // console.log(`Number ${key} appears ${frequency[key]} times`);
}

//! Question 4 (Easy) — Update User Age

// let user = {
//   name: "Ritik",
//   age: 20,
// };

// console.log(`Before update: ${user.age}`);

// user.age = 21;

// console.log(`After update: ${user.age}`);

//! Question 5 (Moderate) — Print User Information

// let user = {
//   name: "Ritik",
//   age: 20,
//   city: "Bhopal",
// };

// for(let key in user){
//     console.log(`${key}: ${user[key]}`);
// }

//! Question 6 (Hard) — Highest Paid Employee

let employees= {
    aman:25000,
    ritik:50000,
    priya:45000
    };

let highestPaidEmployee = "";
let highestSalary = 0;

for(let employee in employees){
    if(employees[employee] > highestSalary){
        highestSalary = employees[employee];
        highestPaidEmployee = employee;
    }
}

// console.log(`Highest Paid Employee: ${highestPaidEmployee} with salary ${highestSalary}`);

//! Question 7 (Easy) — Greeting Function

// function greetUser(name) {
//     console.log(`Hello, ${name}!`);
// }

// greetUser("Ritik");

//! Question 8 (Moderate) — Discount Calculator

function calculateDiscountedPrice(price, discount) {
    let discountedPrice = price - (price * (discount / 100));
    return discountedPrice;
}

let originalPrice = 100;
let discountPercentage = 20;
let finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);
// console.log(`Original Price: $${originalPrice}`);
// console.log(`Discount: ${discountPercentage}%`);
// console.log(`Discounted Price: $${finalPrice}`);

//! Question 9 (Hard) — Dynamic Sum Function

function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
let result = sum(1, 2, 3, 4, 5);
// console.log(`The sum is: ${result}`);

//! Question 10 (Easy) — Find Adult Users

let users = [
  { name: "Ritik", age: 20 },
  { name: "Aman", age: 16 },
  { name: "Priya", age: 25 },
];

function getAdultUsers(users) {
    return users.filter(user => user.age >= 18);
}
let adultUsers = getAdultUsers(users);
// console.log(adultUsers);

//! Question 11 (Moderate) — Shopping Cart Total

let cart = [
  { name: "Mouse", price: 500, qty: 2 },
  { name: "Keyboard", price: 1000, qty: 1 },
  { name: "Monitor", price: 10000, qty: 1 },
];

function getCartTotal(cart){
    return cart.reduce((total, item) => total + (item.price * item.qty), 0);
}

let cartTotal = getCartTotal(cart);
// console.log(`Total Cart Price: $${cartTotal}`);

//! Question 12 (Hard) — Student Grade Report

let students= [
    {
    name:"Ritik",
    marks: [80,90,85]
    },
    {
    name:"Aman",
    marks: [50,40,60]
    }
];

function generateReport(students){
    return students.map(student => {
        let totalMarks = student.marks.reduce((acc, mark) => acc + mark, 0);
        let averageMarks = totalMarks / student.marks.length;
        let grade;
        if(averageMarks >= 90){
            grade = 'A';
        }
        else if(averageMarks >= 80){
            grade = 'B';
        }
        else if(averageMarks >= 70){
            grade = 'C';
        }
        else if(averageMarks >= 60){
            grade = 'D';
        }
        else{
            grade = 'F';
        }
        return {
            name: student.name,
            averageMarks: averageMarks,
            grade: grade
        };
    });
}

let report = generateReport(students);
// console.log(report);

//! 🚀 Final Challenge (Very Hard)
// Mini Library Management System

// Create:

// addBook(title,author)
// borrowBook(id)
// returnBook(id)
// showAvailableBooks()

// Books should be stored as:

// {
// id:1,
// title:"Atomic Habits",
// author:"James Clear",
// borrowed:false
// }

function Library() {
    this.books = [];
    this.nextId = 1;
    this.addBook = function(title, author) {
        const book = {
            id: this.nextId++,
            title: title,
            author: author,
            borrowed: false
        };
        this.books.push(book);
    };

    this.borrowBook = function(id) {
        const book = this.books.find(book => book.id === id);
        if (book && !book.borrowed) {
            book.borrowed = true;
            return `You borrowed "${book.title}" by ${book.author}`;
        } else {
            return `Book not available for borrowing.`;
        }
    };

    this.returnBook = function(id) {
        const book = this.books.find(book => book.id === id);
        if (book && book.borrowed) {
            book.borrowed = false;
            return `You returned "${book.title}" by ${book.author}`;
        } else {
            return `Book not found or not borrowed.`;
        }
    };

    this.showAvailableBooks = function() {
        return this.books.filter(book => !book.borrowed);
    };
}

// Example usage:
const myLibrary = new Library();
myLibrary.addBook("Atomic Habits", "James Clear");
myLibrary.addBook("The Power of Habit", "Charles Duhigg");
console.log(myLibrary.showAvailableBooks());
console.log(myLibrary.borrowBook(1));
console.log(myLibrary.showAvailableBooks());
console.log(myLibrary.returnBook(1));
console.log(myLibrary.showAvailableBooks());