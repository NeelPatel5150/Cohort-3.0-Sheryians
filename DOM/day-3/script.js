//! attributes and properties
//* - setAttribute , getAttribute , removeAttribute , hasAttribute 
//? createing inserting and removing element from DOM

let title = document.getElementById("title");

let titleId = title.getAttribute("id"); //? get the value of id attribute

console.log(titleId);

title.setAttribute("width", "400px"); //? set the value of class attribute

let titleClass = title.getAttribute("class"); //? get the value of class attribute

console.log(titleClass);

title.removeAttribute("width"); //? remove the width attribute

let hasWidth = title.hasAttribute("width"); //? check if width attribute is present or not

console.log(hasWidth);

let input = document.querySelector("input")
let btn = document.querySelector("button")

btn.addEventListener("click",()=>{
    console.log(input.value); //give the current value of input field
    console.log(input.getAttribute("value")); //give the value of attribute not the current value of input field
})

//? createing inserting and removing element from DOM

//1. createElement

// insertion -- appendchild --> this is old version //only one element can be appended at a time
// append -- this is new version  // multiple element can be appended at a time


let main = document.querySelector("main")
let footer = document.createElement('footer')
let span = document.createElement('span')
console.log(footer);

span.textContent = "Sheryians Coding School"

// document.body.appendChild(footer)
// document.body.appendChild(span)

// main.append(span , footer)

main.insertBefore(span , title) //? this will insert span before title element

// main.removeChild(footer) //? this is old version of removing element from DOM

// span.remove() //? this is new version of removing element from DOM

//? prepend() --> this will insert the element at the beginning of the parent element

// main.prepend(span) //? this will insert span at the beginning of main element

//? before() --> this will insert the element before the reference element

//! span.before(title) //? this will insert title before span element

//? after() --> this will insert the element after the reference element

//! span.after(title) //? this will insert title after span element

//? replaceWith() --> this will replace the reference element with the new element

//! span.replaceWith(title) //? this will replace span with title element