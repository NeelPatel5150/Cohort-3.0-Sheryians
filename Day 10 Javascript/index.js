//! OOPS

//! 1. Class
//! 2. Object
//! 3. Constructor

//! Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.greet = function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }
    
}

//! Object
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.greet(); // Hello, my name is Alice and I am 30 years old.
person2.greet(); // Hello, my name is Bob and I am 25 years old.

//! Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        console.log(`${this.name} is studying.`);
    }   
}

const student1 = new Student("Charlie", 20, "A");
student1.greet();

student1.study(); // Charlie is studying.

//! Encapsulation
class BankAccount {
    #balance; // private property
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        }
    }
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // 1300

//! Polymorphism
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}
class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
const cat = new Cat();
dog.speak(); // Dog barks
cat.speak(); // Cat meows



function Makestudents(fname,lname,contact,isVerified)
{
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
    this.isVerified = isVerified;
}
let showprofile = function () {
  if (this.isVerified) {
    console.log(`Student Name:${this.fname + this.Animallname} Contact:${this.contact} `);
  } else {
    console.log("User Not Verified");
  }
};

Makestudents.prototype.showprofile = showprofile;

let s1 = new Makestudents("Neel","Patel",9985741585,true);
console.log(s1)
s1.showprofile();

class Makestudents{
    constructor(fname,lname,contact,isVerified)
    {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
        this.isVerified = isVerified;
        this.showprofile = function ()
        {
            if(this.isVerified)
            {
                console.log(`Student Name:${this.fname} ${this.lname} Contact:${this.contact} `)
            }
            else{
                console.log("User Not Verified");
            }
        }
    }
    
}


let s1 = new Makestudents("Neel","Patel",9985741585,true);
console.log(s1);

s1.showprofile();