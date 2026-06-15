//! Event Delegation
//? Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of attaching multiple event listeners to individual child elements. This allows you to manage events more efficiently, especially when dealing with dynamic content.

//? The main idea behind event delegation is that events bubble up through the DOM tree. When an event occurs on a child element, it propagates up to its parent elements. By attaching an event listener to a common ancestor, you can capture events from all of its child elements without needing to attach individual listeners to each one.

//? Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of attaching multiple event listeners to individual child elements. This allows you to manage events more efficiently, especially when dealing with dynamic content.

//? The main idea behind event delegation is that events bubble up through the DOM tree. When an event occurs on a child element, it propagates up to its parent elements. By attaching an event listener to a common ancestor, you can capture events from all of its child elements without needing to attach individual listeners to each one.

//? Benefits of Event Delegation:
//? 1. Improved Performance: By attaching a single event listener to a parent element, you reduce the number of event listeners in your application, which can improve performance, especially when dealing with a large number of child elements.
//? 2. Dynamic Content Handling: Event delegation allows you to handle events for dynamically added elements without needing to attach new event listeners. As long as the new elements are children of the parent element with the event listener, they will be able to trigger the event.
//? 3. Simplified Code: Managing events through a single listener can lead to cleaner and more maintainable code, as you can centralize your event handling logic in one place.

//? Example of Event Delegation:
// HTML Structure:
// <ul id="myList">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

// JavaScript Code:
const myList = document.getElementById('myList');
myList.addEventListener('click', function(event) {
  if (event.target && event.target.nodeName === 'LI') {
    console.log('Clicked on:', event.target.textContent);
  }
});

// In this example, we attach a single click event listener to the parent <ul> element. When any <li> item is clicked, the event bubbles up to the <ul>, and we check if the event target is an <li> element. If it is, we log the text content of the clicked item. This way, we can handle clicks on all <li> items with just one event listener.

//? In summary, event delegation is a powerful technique in JavaScript that allows you to manage events efficiently by attaching a single event listener to a parent element. It takes advantage of event bubbling to capture events from child elements, making it especially useful for handling dynamic content and improving performance.

//! settimeout and setInterval
//? setTimeout and setInterval are two commonly used functions in JavaScript for scheduling tasks to be executed after a certain delay or at regular intervals.

//? setTimeout is used to execute a function once after a specified delay. It takes two arguments: the function to be executed and the delay in milliseconds. For example:
setTimeout(function() {
  console.log('This will be logged after 2 seconds');
}, 2000);

//? setInterval, on the other hand, is used to execute a function repeatedly at specified intervals. It also takes two arguments: the function to be executed and the interval in milliseconds. For example:
setInterval(function() {
  console.log('This will be logged every 3 seconds');
}, 3000);

//! Math Object

Math.random()