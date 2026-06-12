//! OOPS Practice Questions

//? Question 1 Understanding this in an Object

// const user = {
//     name : "Neel",
//     greet(){
//         console.log(`Hello, I am ${this.name}`);
//     }
// }

// user.greet();

//? Question 2: Default Binding

// function show()
// {
//     this.name = "Neel";
//     console.log(this);
// }
// show();

//? Question 3: call method

// function introduce()
// {
//     console.log(`Hello, I am ${this.name}`);
// }

// const Person = {
//     name : "Neel"
// }

// introduce.call(Person);

//? Question 4: apply method

// function introduce(city, country)
// {
//     console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
// }

// const Person = {
//     name : "Neel"
// }

// introduce.apply(Person, ["Mumbai", "India"]);

//? Question 5:

// const user = {
//   name: "Ritik",
//   greet() {
//     console.log(this.name);
//   },
// };

// const fn = user.greet.bind(user);
// fn();

//? Question 6:

// const animal = {
//   eats: true,
// };

// let dog = Object.create(animal);

// console.log(dog.eats); // true

//? Question 7:

// function Person(name) {
//   this.name = name;
// }

//!add greet() method to Person prototype

// Person.prototype.greet = function () {
//   console.log(`Hello, I am ${this.name}`);
// };

// const person1 = new Person("Neel");
// person1.greet(); // Hello, I am Neel

//? Question 8:

// class Student{
//     constructor(name, marks){
//         this.name = name;
//         this.marks = marks;
//     }
//     getGrade()
//     {
//         if(this.marks >= 90)
//         {
//             return "A";
//         }
//         else if(this.marks >= 75)
//         {
//             return "B";
//         }
//         else if(this.marks >= 60)
//         {
//             return "C";
//         }
//         else
//         {
//             return "F";
//         }
//     }
// }

// const student1 = new Student("Neel", 85);
// console.log(student1.getGrade()); // B

// const student2 = new Student("Ritik", 92);
// console.log(student2.getGrade()); // A

//? Question 9 — Employee Inheritance

// class Employee{
//     constructor(name, salary){
//         this.name = name;
//         this.salary = salary;
//     }
//     work(){
//         console.log(`${this.name} is working.`);
//     }
// }

// class Developer extends Employee{
    //     constructor(name, salary){
    //     super(name, salary);
    // }
//     code(){
//         console.log(`${this.name} is coding.`);
//     }
// }

// const emp1 = new Employee("Neel", 50000);
// emp1.work(); // Neel is working.

// const dev1 = new Developer("Ritik", 70000);
// dev1.work(); // Ritik is working.
// dev1.code(); // Ritik is coding.

//? Question 10 — Bank Account (InterviewLevel)

// class BankAccount{
//     #balance; // Private field
//     constructor(owner, balance){
//         this.owner = owner;
//         this.#balance = balance; // Private field
//     }
//     deposit(amount){
//         if(amount > 0){
//             this.#balance += amount;
//             console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
//         } else {
//             console.log("Deposit amount must be positive.");
//         }
//     }
//     withdraw(amount){
//         if(amount > 0 && amount <= this.#balance){
//             this.#balance -= amount;
//             console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
//         } else {
//             console.log("Invalid withdrawal amount.");
//         }
//     }
//     getBalance(){
//         return this.#balance;
//     }
// }

// const acc = new BankAccount("Neel", 1000);
// acc.deposit(1000);
// acc.withdraw(300);
// console.log(acc.getBalance());

//? Question 11 — Library Management System

// class Book {
//     constructor(title, author, borrowed = false) {
//         this.title = title;
//         this.author = author;
//         this.borrowed = borrowed;
//     }
// }

// class Library {
//     constructor() {
//         this.books = [];
//     }
//     addBook(book) {
//         this.books.push(book);
//     }
//     borrowBook(title) {
//         const book = this.books.find(b => b.title === title);
//         if (book && !book.borrowed) {
//             book.borrowed = true;
//             console.log(`You borrowed "${book.title}" by ${book.author}.`);
//         }
//         else {
//             console.log(`Sorry, "${title}" is not available.`);
//         }
//     }
//     returnBook(title) {
//         const book = this.books.find(b => b.title === title);
//         if (book && book.borrowed) {
//             book.borrowed = false;
//             console.log(`You returned "${book.title}".`);
//         }
//         else {
//             console.log(`Sorry, "${title}" was not borrowed.`);
//         }
//     }
// }

// const library = new Library();
// library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
// library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));