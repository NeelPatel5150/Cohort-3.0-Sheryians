//! Case 1: Normal Function Call (Non-Strict Mode)

// function showThis() {
//   console.log(this);
// }

// showThis();

// - Since the function is called directly, JavaScript applies default binding and this refers to the global object.

//? Case 2: Normal Function Call (Strict Mode)

// function showThis() {
//   "use strict";
//   console.log(this);
// }

// showThis();

// - Because strict mode is enabled, JavaScript does not automatically bind this to the global object. Therefore, this becomes undefined.

//! Problem 2: Object Method Context

// const user = {
//   name: "Anubhav",
//   greet() {
//     console.log(`Hello ${this.name}`);
//   },
// };

// user.greet();

// const greetFn = user.greet;

// greetFn();

//! Problem 3: Arrow Function vs Regular Function

// const user = {
//   name: "Rahul",
//   regularMethod() {
//     console.log("Regular:", this.name);
//   },

//   arrowMethod: () => {
//     console.log("Arrow:", this.name);
//   },
// };

// user.regularMethod(); // Regular: Rahul
// user.arrowMethod(); // Arrow: undefined (or empty string in browsers) - because arrow functions do not have their own this and inherit it from the surrounding scope, which is the global scope in this case.

//! Problem 4: Nested Callback Problem

// const user = {
//   name: "Rahul",
//   hobbies: ["Coding", "Gaming", "Reading"],
//   showHobbies() {
//     this.hobbies.forEach((hobby) => {
//       console.log(`${this.name} likes ${hobby}`);
//     });
//   },
// };

// user.showHobbies();

//! Problem 5: Event Handler Simulation

// const button = {
//   text: "Submit",

//   regularHandler: function () {
//     console.log("Regular:", this.text);
//     console.log("Regular this:", this);
//   },

//   arrowHandler: () => {
//     console.log("Arrow:", this.text);
//     console.log("Arrow this:", this);
//   },
// };

// button.regularHandler(); // Regular: Submit
// button.arrowHandler(); // Arrow: undefined (or empty string in browsers) - because arrow functions do not have their own this and inherit it from the surrounding scope, which is the global scope in this case.

//! Problem 6: Borrow a Method using call()

// const person1 = { name: "Anubhav" };
// const person2 = { name: "Rahul" };

// function introduce() {
//   console.log(`Hi, I am ${this.name}`);
// }

// introduce.call(person1);
// introduce.call(person2);

//! Problem 7: apply() with Array Arguments

// const person = {
//   name: "Rahul",
// };

// function introduce(city, country) {
//   console.log(`I am ${this.name} from ${city}, ${country}`);
// }

// introduce.apply(person, ["Indore", "India"]);

//! Problem 8: bind() for Delayed Execution

// const user = {
//   name: "Rahul",
// };

// function showName() {
//   console.log(`User: ${this.name}`);
// }

// const boundShowName = showName.bind(user);

// setTimeout(boundShowName, 2000);

//! Problem 9: Custom Calculator

// const calculator = {
//   value: 100,
// };

// function add(num1, num2) {
//   console.log(this.value + num1 + num2);
// }

//* Using call()
// add.call(calculator, 10, 20);

//* Using apply()
// add.apply(calculator, [10, 20]);

//* // Using bind()
// const boundAdd = add.bind(calculator);
// boundAdd(10, 20);

//! Problem 10: Prototype Lookup

// const person = {
//     name: "Rahul"
//   };

//   console.log(person.hasOwnProperty("name")); // true

//   console.log(person.hasOwnProperty("hasOwnProperty")); // false

//   console.log(person.__proto__ === Object.prototype); // true

//   console.log(Object.prototype.hasOwnProperty); // [Function: hasOwnProperty]

//! Problem 11: Create a Custom Prototype Method

// Array.prototype.sum = function () {
//   return this.reduce((total, current) => total + current, 0);
// };

// console.log([1, 2, 3, 4].sum());

// [1,2,3,4]
//      │
//      ▼
// Array.prototype
//      │
//      ├── push()
//      ├── pop()
//      ├── map()
//      ├── filter()
//      ├── sum()   ← Our Custom Method
//      │
//      ▼
// Object.prototype
//      ▼
// null

//! Problem 12: Object.create()

// const animal = {
//   eat() {
//     console.log("Eating...");
//   },

//   sleep() {
//     console.log("Sleeping...");
//   },
// };

// const dog = Object.create(animal);

// dog.eat();
// dog.sleep();

//! Problem 13: Prototype Inheritance

// const vehicle = {
//   start() {
//     console.log("Vehicle started");
//   },

//   stop() {
//     console.log("Vehicle stopped");
//   },
// };

// const car = Object.create(vehicle); // car → vehicle → Object.prototype → null
// const bike = Object.create(vehicle);
// const truck = Object.create(vehicle);

// car.start();
// bike.start();
// truck.start();

// car.stop();
// bike.stop();
// truck.stop();

// console.log(Object.getPrototypeOf(car) === vehicle);
// console.log(Object.getPrototypeOf(bike) === vehicle);
// console.log(Object.getPrototypeOf(truck) === vehicle);

//* Prototype Chain Visualization

// car   ─┐
// bike  ─┼──► vehicle
// truck ─┘      │
//               ├── start()
//               └── stop()
//                    │
//                    ▼
//            Object.prototype
//                    ▼
//                   null

//! Problem 14: Constructor Function + Prototype

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// const person1 = new Person("Rahul", 22);

// person1.greet();

//! Problem 15: Prototype Chain Investigation

const arr = [];

console.log(arr.__proto__); // [Array.prototype] - This is the prototype of the array instance, which contains methods like push, pop, map, filter, etc.
console.log(arr.__proto__.__proto__); // [Object.prototype] - This is the prototype of the Array.prototype, which contains methods like hasOwnProperty, toString, etc.
console.log(arr.__proto__.__proto__.__proto__); // [null] - This is the end of the prototype chain

//! Visual Representation

// arr = []

//       arr
//        │
//        ▼
// Array.prototype
//   │
//   ├── push()
//   ├── pop()
//   ├── map()
//   ├── filter()
//   │
//   ▼
// Object.prototype
//   │
//   ├── hasOwnProperty()
//   ├── toString()
//   ├── valueOf()
//   │
//   ▼
// null

// | Expression                          | Output             |
// | ----------------------------------- | ------------------ |
// | `arr.__proto__`                     | `Array.prototype`  |
// | `arr.__proto__.__proto__`           | `Object.prototype` |
// | `arr.__proto__.__proto__.__proto__` | `null`             |

//? Final Conclusion

//* The prototype chain of an array is:

// arr
//  ↓
// Array.prototype
//  ↓
// Object.prototype
//  ↓
// null

//! Problem 16: Basic Class

class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }

  introduce() {
    console.log(`I am ${this.name} and I study ${this.course}`);
  }
}

const student1 = new Student("Anubhav", "MERN Stack");
student1.introduce();

//! Problem 17: Employee Management

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  increaseSalary(amount) {
    this.salary += amount;
  }

  showSalary() {
    console.log(`Salary: ${this.salary}`);
  }
}

const emp1 = new Employee("Rahul", 50000);

emp1.showSalary(); // Salary: 50000

emp1.increaseSalary(5000);

emp1.showSalary(); // Salary: 55000

//! Problem 18: Bank Account System

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: ₹${amount}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance!");
      return;
    }

    this.balance -= amount;
    console.log(`Withdrawn: ₹${amount}`);
  }

  checkBalance() {
    console.log(`Current Balance: ₹${this.balance}`);
  }
}

// Usage
const account = new BankAccount(1000);

account.checkBalance();
account.deposit(500);
account.withdraw(300);
account.withdraw(1500); // Not allowed
account.checkBalance();

//! Problem 19: Inheritance Challenge

class Animal {
  eat() {
    console.log("Animal is eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking");
  }
}

const dog = new Dog();

dog.eat(); // Inherited from Animal
dog.bark(); // Dog's own method

//! Problem 20: Multi-Level Inheritance

class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  work() {
    console.log(`${this.name} works in ${this.department} department`);
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  manageTeam() {
    console.log(`${this.name} manages a team of ${this.teamSize} employees`);
  }
}

const manager = new Manager("Anubhav", "Engineering", 10);

manager.introduce();
manager.work();
manager.manageTeam();

//! Problem 21: Math Utility Class

class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
}

// Using static methods without creating an object
console.log(MathHelper.add(10, 5));
console.log(MathHelper.subtract(10, 5));
console.log(MathHelper.multiply(10, 5));
console.log(MathHelper.divide(10, 5));

//? Problem 22: User Counter

class User {
  static count = 0;

  constructor(name) {
    this.name = name;
    User.count++; // Increase count whenever a new user is created
  }

  static showTotalUsers() {
    console.log(`Total Users: ${User.count}`);
  }
}

const user1 = new User("Rahul");
const user2 = new User("Anubhav");
const user3 = new User("Neel");
const user4 = new User("Aman");
const user5 = new User("Priya");

User.showTotalUsers();

//! Problem 23: Full Name Getter

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("Anubhav", "Singh");

console.log(person1.fullName);

//! Problem 24: Email Validation Setter

class User {
  constructor() {
    this._email = "";
  }

  set email(value) {
    if (value.includes("@") && value.includes(".")) {
      this._email = value;
    } else {
      console.log("Invalid Email");
    }
  }

  get email() {
    return this._email;
  }
}

const user = new User();

user.email = "anubhav@gmail.com";
console.log(user.email);

user.email = "invalidemail";

//! Problem 25: Secure Bank Account

class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient Balance");
      return;
    }

    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);

account.deposit(500);
account.withdraw(300);

console.log(account.getBalance()); // 1200

// ❌ Not Allowed
console.log(account.#balance);

//! Problem 26: Student Grades System

class Student {
  #marks;

  constructor() {
    this.#marks = 0;
  }

  setMarks(marks) {
    if (marks >= 0 && marks <= 100) {
      this.#marks = marks;
    } else {
      console.log("Marks should be between 0 and 100");
    }
  }

  getMarks() {
    return this.#marks;
  }
}

const student = new Student();

student.setMarks(85);
console.log(student.getMarks());

// ❌ Not Allowed
// console.log(student.#marks);

//* Encapsulation
//---> Data (#marks) ko direct access se hide karna aur methods ke through control karna Encapsulation kehlata hai.

// Student
//  ├─ #marks (private)
//  ├─ setMarks()
//  └─ getMarks()