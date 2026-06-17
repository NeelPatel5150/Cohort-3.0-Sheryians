localStorage.setItem("Name","Neel_Patel")

let name = localStorage.getItem("Name")
console.log(name);

localStorage.removeItem("Name")

//! localstorage
//? localStorage is a web storage object that allows you to store key-value pairs in a web browser. It provides a way to persist data across sessions, meaning the data will remain even after the browser is closed and reopened.

//? localStorage.setItem("Name","Neel_Patel") // This line stores the key "Name" with the value "Neel_Patel" in localStorage.

//? let name = localStorage.getItem("Name") // This line retrieves the value associated with the key "Name" from localStorage and assigns it to the variable 'name'.

//? console.log(name); // This line logs the value of 'name' to the console, which will output "Neel_Patel".

//? localStorage.removeItem("Name") // This line removes the key "Name" and its associated value from localStorage.

//? In summary, localStorage allows you to store data in the browser that persists across sessions, and you can set, get, and remove items using the provided methods.

//! sessionStorage
//? sessionStorage is similar to localStorage, but it only persists data for the duration of the page session. Once the browser tab is closed, the data stored in sessionStorage is cleared.

//? sessionStorage.setItem("Name","Neel_Patel") // This line stores the key "Name" with the value "Neel_Patel" in sessionStorage.

//? let name = sessionStorage.getItem("Name") // This line retrieves the value associated with the key "Name" from sessionStorage and assigns it to the variable 'name'.

//? console.log(name); // This line logs the value of 'name' to the console, which will output "Neel_Patel".

//? sessionStorage.removeItem("Name") // This line removes the key "Name" and its associated value from sessionStorage.

//! In summary, sessionStorage allows you to store data in the browser that persists only for the duration of the page session, and you can set, get, and remove items using the provided methods.

//! fetch vs axios
//? fetch is a built-in JavaScript function that allows you to make HTTP requests. It returns a Promise that resolves to the Response object representing the response to the request.

//? axios is a popular third-party library that simplifies making HTTP requests. It provides a more user-friendly API and additional features compared to fetch, such as automatic JSON parsing, request cancellation, and interceptors for handling requests and responses.

//? In summary, fetch is a native JavaScript function for making HTTP requests, while axios is a third-party library that provides a more convenient and feature-rich way to handle HTTP requests in JavaScript.

