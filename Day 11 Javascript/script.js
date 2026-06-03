//! Synchronous and Asynchronous

//? Synchronous - order me chalta hai, ek ke baad ek
//? Asynchronous - order me nahi chalta, ek ke baad ek nahi chalta, kuch time ke baad chalta hai

//! setTimeout - is a function that takes two arguments, a callback function and a time in milliseconds. It executes the callback function after the specified time has passed.

//? 1000 milliseconds = 1 second
//? 5000 milliseconds = 5 seconds


// console.log("Start");

// setTimeout(() => {
//   console.log("This is a setTimeout function");
// }, 2000);

// console.log("End");

//! setInterval - is a function that takes two arguments, a callback function and a time in milliseconds. It executes the callback function repeatedly after the specified time has passed.

// console.log("Start");

// setInterval(() => {
//   console.log("This is a setInterval function");
// }, 2000);

// console.log("End");

//? setInterval will keep executing the callback function every 2 seconds until we stop it. We can stop it using clearInterval() function.

//* Browser - is a software application that allows us to access and interact with the web. It is responsible for rendering web pages, executing JavaScript code, and providing a user interface to interact with the web page.

//! JS Engine - is a program that executes JavaScript code. It is responsible for parsing, compiling and executing JavaScript code. It is also responsible for managing memory and garbage collection.

//TODO: this below are things wrapped in window object, which is the global object in the browser. We can access these APIs using the window object. For example, we can access the console API using window.console, but we can also access it directly using console.

//! Web APIs - are the APIs that are provided by the browser to interact with the web page. They are not part of the JavaScript language, but they are available to use in JavaScript code. Some of the commonly used Web APIs are:
//- console
//- DOM API
//- Location
//- History API
//- Fetch API
//- SetTimeout
//- LocalStorage
//- URL

// window object me sari wrapped value this 2 type used

//! but this is not need to write window before setTimeout, because setTimeout is a global function and it is available in the global scope. So we can directly use setTimeout without writing window before it.
// window.setTimeout(() => {
//   console.log("This is a setTimeout function");
// }, 2000);

//! easily we can use setTimeout without window, because it is a global function and it is available in the global scope. So we can directly use setTimeout without writing window before it.
// setTimeout(() => {
//   console.log("This is a setTimeout function");
// }, 2000);

//! clearInterval - is a function that takes one argument, the interval ID returned by setInterval() function. It stops the execution of the callback function that was set to execute repeatedly by setInterval() function.

// const intervalId = setInterval(() => {
//   console.log("This is a setInterval function");
// }, 2000);

// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Interval stopped");
// }, 10000);

//! clearTimeout - is a function that takes one argument, the timeout ID returned by setTimeout() function. It stops the execution of the callback function that was set to execute after a specified time by setTimeout() function.

// const timeoutId = setTimeout(() => {
//   console.log("This is a setTimeout function");
// }, 2000);

// setTimeout(() => {
//   clearTimeout(timeoutId);
//   console.log("Timeout stopped");
// }, 1000);


//? setTimeout and setInterval are both asynchronous functions, but they are not the same. setTimeout executes the callback function once after the specified time has passed, while setInterval executes the callback function repeatedly after the specified time has passed until it is stopped using clearInterval() function.

//? setTimeout is used when we want to execute a function after a certain amount of time, while setInterval is used when we want to execute a function repeatedly at a certain interval of time.

//? setTimeout and setInterval are both part of the Web APIs provided by the browser, and they are not part of the JavaScript language itself. They are available to use in JavaScript code because they are wrapped in the window object, which is the global object in the browser.

//? In summary, setTimeout and setInterval are both asynchronous functions that allow us to execute code after a certain amount of time or repeatedly at a certain interval of time. They are part of the Web APIs provided by the browser and can be accessed using the window object.

//? Event Loop - is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks to the browser and executing them asynchronously. It is responsible for managing the execution of code, handling events, and performing tasks in the background without blocking the main thread of execution. The event loop continuously checks for tasks in the event queue and executes them when the call stack is empty. This allows JavaScript to handle multiple tasks concurrently without freezing the user interface.

//? Call Stack - is a data structure that keeps track of the function calls in a program. It is used to manage the execution of code and to keep track of the current function being executed. When a function is called, it is added to the call stack, and when it returns, it is removed from the call stack. The call stack operates in a last-in-first-out (LIFO) manner, meaning that the most recently added function is the first one to be executed. If the call stack becomes too large, it can lead to a stack overflow error.

//! Event Loop and Call Stack are two important concepts in JavaScript that work together to manage the execution of code and handle asynchronous operations. The event loop continuously checks for tasks in the event queue and executes them when the call stack is empty, allowing JavaScript to perform non-blocking operations and handle multiple tasks concurrently without freezing the user interface. The call stack keeps track of the function calls in a program and manages the execution of code in a last-in-first-out manner.

//? In summary, the event loop and call stack are essential components of JavaScript's asynchronous programming model. They allow JavaScript to handle multiple tasks concurrently and perform non-blocking operations, making it a powerful language for building interactive web applications. Understanding how the event loop and call stack work together is crucial for writing efficient and responsive JavaScript code.

let response = fetch("https://jsonplaceholder.typicode.com/todos/1");

console.log(response);

// -> Promise 
// pending
// resolved
// rejected


//todo: Microtask Queue - is a queue that holds the tasks that are scheduled to be executed after the current task is completed. It is used to handle the tasks that are scheduled using Promise.then() and Promise.catch() methods. The microtask queue has a higher priority than the event queue, which means that the tasks in the microtask queue will be executed before the tasks in the event queue. This allows JavaScript to handle asynchronous operations more efficiently and ensures that the tasks scheduled using Promises are executed as soon as possible after the current task is completed.

//* Task Queue (callback queue) - is a queue that holds the tasks that are scheduled to be executed after the current task is completed. It is used to handle the tasks that are scheduled using setTimeout() and setInterval() functions. The task queue has a lower priority than the microtask queue, which means that the tasks in the task queue will be executed after the tasks in the microtask queue. This allows JavaScript to handle asynchronous operations more efficiently and ensures that the tasks scheduled using setTimeout() and setInterval() functions are executed after the tasks scheduled using Promises.


//? starvation - is a situation where a task is waiting for a long time to be executed because there are other tasks that are being executed before it. This can happen when there are too many tasks in the microtask queue or the task queue, and the event loop is not able to keep up with the demand. This can lead to a poor user experience and can cause the application to become unresponsive. To avoid starvation, it is important to manage the tasks in the microtask queue and task queue efficiently and ensure that they are executed in a timely manner.

//? make diagram of event loop, call stack, microtask queue and task queue and starvation.

//* Call Stack
//- function1
//- function2
//- function3

//* Microtask Queue
//- Promise.then()
//- Promise.catch()

//* Task Queue
//- setTimeout()
//- setInterval()

//? Event Loop
//- continuously checks for tasks in the microtask queue and task queue(callback queue) and executes them when the call stack is empty
//- executes tasks in the microtask queue before tasks in the task queue
//- allows JavaScript to handle multiple tasks concurrently without freezing the user interface

//? Starvation
//- occurs when a task is waiting for a long time to be executed because there are other tasks that are being executed before it
//- can lead to a poor user experience and can cause the application to become unresponsive
//- can be avoided by managing the tasks in the microtask queue and task queue efficiently and ensuring that they are executed in a timely manner.

//? In summary, understanding the event loop, call stack, microtask queue, task queue, and starvation is crucial for writing efficient and responsive JavaScript code. By managing the tasks in the microtask queue and task queue efficiently, we can ensure that our applications remain responsive and provide a good user experience.

//! priority of execution in JavaScript is as follows:
//1. Synchronous code (code that is executed immediately)
//2. Microtasks (tasks scheduled using Promise.then() and Promise.catch())
//3. Tasks (tasks scheduled using setTimeout() and setInterval())
//4. Rendering (updating the user interface)

let count = 0;
let intervalId = setInterval(() => {
    console.log(count);
    count++;
}, 500);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped");
}, 5000);

