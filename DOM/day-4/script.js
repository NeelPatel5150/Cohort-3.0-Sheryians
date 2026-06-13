//? Today we are learning Events and delegation

// there are multiple types of events in JS, we will learn about click event today

//! 1) Mouse Events --> dblclick, mouseover, mouseout, mouseenter, mouseleave, mousedown, mouseup

//! 2) Pointer Events --> pointerdown, pointerup, pointermove, pointerover, pointerout


//! 3) Keyboard Events  --> keydown, keyup, keypress

//! 4) INPUT Events --> change, input, focus, blur, select


//! 5) Submit Events --> submit

// const btn = document.querySelector("button");

// window.addEventListener("keypress", function (events) {
//   console.log(events);
// });

//! Event Propogation --> Event Bubbling and Event Capturing

// window --> DOCKTYPE --> html --> body --> Main --> div --> button (target element)

//? top to bottom --> Event Capturing
//? bottom to top --> Event Bubbling

// TODO: Example of Event Bubbling

// const btn = document.querySelector("button");
// const div = document.querySelector("div");
// const main = document.querySelector("main");
// const body = document.querySelector("body");

// btn.addEventListener("click", function (events) {
//   console.log("Button Clicked");
// },{capture: true}); //! This will make the event listener to be executed in the capturing phase

// div.addEventListener("click", function (events) {
//   console.log("Div Clicked");
// },{capture: true}); //! This will make the event listener to be executed in the capturing phase

// main.addEventListener("click", function (events) {
//   console.log("Main Clicked");
// },{capture: true});

// body.addEventListener("click", function (events) {
//   console.log("Body Clicked");
// },{capture: true});

//? if we click button then both the capturing and bubbling phase will be executed, but at that time show only one event

//! Event Delegation --> It is a technique in which we add event listener to a parent element instead of adding it to the target element. It is used to handle events on dynamically added elements.

const form = document.querySelector("form");
let users = document.querySelector(".users");
let name = document.querySelector("#name");
let email = document.querySelector("#email");

form.addEventListener("submit", function (events) {
    events.preventDefault(); //! This will prevent the default behavior of the form which is to reload the page
    console.log(events);

    //? We can access the form data using the events object
    // console.log(events.target[0].value); //! This will give us the value of the name input field
    // console.log(events.target[1].value); //! This will give us the value of the email input field

    //? another way using input selector
    // const name = document.querySelector("#name");
    // const email = document.querySelector("#email");
    // console.log(name.value);
    // console.log(email.value);

    

    users.innerHTML += `<div class="user-card">
    <div class="text">
        <h2>${name.value}</h2>
        <p>${email.value}</p>
    </div>
</div>`;

    //? reset the form after submission
    form.reset();


    console.log("Form Submitted");
});

//! Steps: 

//? 1) we create from including 3 input fields and a submit button

//? 2) select the form and add an event listener to it for the submit event

//? 3) after form submit automatically the page willbe refresh isuee obervee

//? 4) prevent the default behavior of the form which is to reload the page

//? 5) access the form data using the events object and display it in the users div

//? 6) reset the form after submission

//? 7) Make Ui and show the data in a card format

//? 8) Add Edit and Delete button to each card

