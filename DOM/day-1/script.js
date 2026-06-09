//! selection of elements


//only selects the first h1 element on the page
//? if there are multiple h1 elements, only the first one will be selected and modified
var h1 = document.querySelector("h1");

//? selects all h2 elements on the page and returns a NodeList (similar to an array)
var h2 = document.querySelectorAll("h2");

//? selects the element with the id "my-id"
var myId = document.querySelector("#my-id");

//? selects all elements with the class "my-class" and returns a NodeList
var myClass = document.querySelectorAll(".my-class");

//? selects the first element with the class "my-class"
var firstMyClass = document.querySelector(".my-class");

//! modifying elements  

h1.textContent = "Hello World!";