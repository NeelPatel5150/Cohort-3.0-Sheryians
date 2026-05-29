//! JS Is single threaded, meaning it can only execute one task at a time. However, it can handle asynchronous operations using callbacks, promises, and async/await. This allows JS to perform tasks like fetching data from an API without blocking the main thread, enabling a smoother user experience.

//? when js run then create a global execution context and push it to the call stack. The global execution context is the default context where all the code runs. When a function is called, a new execution context is created for that function and pushed to the call stack. Once the function finishes executing, its execution context is popped from the stack, and control returns to the previous context. This process allows JS to manage function calls and execute code in an organized manner.

// - JS uses an event loop to handle asynchronous operations. When an asynchronous operation is initiated, it is offloaded to the browser's Web APIs (like setTimeout, fetch, etc.). Once the operation is complete, a callback function is added to the task queue. The event loop continuously checks the call stack and the task queue. If the call stack is empty, it takes the first callback from the task queue and pushes it onto the call stack for execution. This mechanism allows JS to perform non-blocking operations while still maintaining a single-threaded environment.

// in this total 2 phase

//? 1. memory createion phase : In this phase, JS engine allocates memory for variables and functions. It also creates a global object (like window in browsers) and sets up the scope chain. During this phase, variables are initialized with undefined, and functions are stored in memory as function objects.

//? 2. code execution phase : In this phase, JS engine executes the code line by line. It assigns values to variables, executes functions, and performs operations as defined in the code. During this phase, the actual logic of the program is executed, and the results are produced based on the instructions provided in the code.


//! this all are works on call stack {LIFO} (Last In First Out) data structure. The call stack is used to keep track of function calls and their execution contexts. When a function is called, it is added to the top of the call stack, and when it finishes executing, it is removed from the stack. This allows JS to manage function calls and execute code in an organized manner.

// -! when a function is called, it is added to the call stack. The call stack is a data structure that keeps track of the execution context of functions. When a function finishes executing, it is removed from the call stack, and control returns to the previous function in the stack. This process allows JS to manage function calls and execute code in an organized manner.

//! lexical scope : variable apne parent function ke andar access kar sakta hai but parent function apne child function ke variable ko access nahi kar sakta hai. This is because of the way JS handles scope and variable resolution. When a variable is accessed, JS looks for it in the current scope first, then in the parent scope, and so on until it reaches the global scope. If the variable is not found in any of these scopes, it will result in a ReferenceError. This is why child functions can access variables from their parent functions, but parent functions cannot access variables from their child functions.