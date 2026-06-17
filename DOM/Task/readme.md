# DOM Explorer: Build an Interactive Task Manager Using Pure JavaScript

## Project Overview

This project is a Task Manager Application built using HTML, CSS, and Vanilla JavaScript.

The application allows users to:

- Add Tasks
- Edit Tasks
- Delete Tasks
- Mark Tasks as Completed
- Toggle Dark/Light Theme
- Save Data Using Local Storage

The main goal of this project is to demonstrate DOM Manipulation, Event Handling, Event Delegation, Event Propagation, Browser Rendering Pipeline concepts, and the difference between HTML Attributes and DOM Properties.

---

# Browser Rendering Pipeline

When a user opens a webpage, the browser follows a sequence of steps to convert code into a visible interface.

## 1. Parsing

Parsing is the process of reading HTML and CSS files and converting them into structures that the browser can understand.

Example:

```html
<h1>Hello World</h1>
```

The browser reads the code character by character and begins creating internal representations of the page.

---

## 2. Tokenization

Tokenization is the process of breaking source code into small meaningful units called tokens.

Example:

```html
<h1>Hello World</h1>
```

Generated Tokens:

- Opening Tag → `<h1>`
- Text Content → `Hello World`
- Closing Tag → `</h1>`

These tokens are later used to construct the DOM Tree.

---

## 3. DOM Tree

DOM stands for Document Object Model.

The browser converts HTML elements into a tree-like structure called the DOM Tree.

Example:

```html
<body>
    <h1>Hello</h1>
    <p>Welcome</p>
</body>
```

DOM Tree:

```
Body
├── H1
└── P
```

JavaScript uses the DOM Tree to access, update, remove, and create elements dynamically.

Example:

```javascript
document.querySelector("h1");
```

---

## 4. CSSOM Tree

CSSOM stands for CSS Object Model.

The browser parses CSS and creates another tree structure that contains styling information.

Example:

```css
h1 {
    color: red;
}
```

CSSOM Tree:

```
Stylesheet
└── h1
     └── color: red
```

The CSSOM Tree stores all styles applied to elements.

---

## 5. Render Tree

The browser combines:

- DOM Tree
- CSSOM Tree

to create the Render Tree.

The Render Tree contains only visible elements that need to be displayed on the screen.

Flow:

```
DOM Tree
     +
CSSOM Tree
     ↓
Render Tree
```

Hidden elements such as `display: none` are not included in the Render Tree.

---

## 6. Layout

After creating the Render Tree, the browser calculates:

- Width
- Height
- Position
- Margin
- Padding

for every visible element.

This process is called Layout.

Example:

```css
.card {
    width: 200px;
    height: 100px;
}
```

The browser determines where the element should appear on the screen.

---

## 7. Paint

Paint is the final step where pixels are drawn on the screen.

The browser paints:

- Text
- Colors
- Borders
- Images
- Shadows

After painting, the webpage becomes visible to the user.

---

# Event Propagation

Event Propagation describes how events travel through the DOM hierarchy.

There are two phases:

1. Event Capturing
2. Event Bubbling

---

## Event Bubbling

In Event Bubbling, the event starts from the target element and moves upward through its parent elements.

Example:

```html
<div id="grand">
    <div id="parent">
        <button id="child">Click Me</button>
    </div>
</div>
```

JavaScript:

```javascript
child.addEventListener("click", () => {
    console.log("Child");
});

parent.addEventListener("click", () => {
    console.log("Parent");
});

grand.addEventListener("click", () => {
    console.log("Grand");
});
```

Output:

```
Child
Parent
Grand
```

The event travels from the clicked element to its ancestors.

---

## Event Capturing

In Event Capturing, the event travels from the top ancestor toward the target element.

JavaScript:

```javascript
grand.addEventListener("click", () => {
    console.log("Grand");
}, true);

parent.addEventListener("click", () => {
    console.log("Parent");
}, true);

child.addEventListener("click", () => {
    console.log("Child");
}, true);
```

Output:

```
Grand
Parent
Child
```

The third parameter `true` enables capturing mode.

---

## Event Delegation

Event Delegation is a technique where a parent element handles events for its child elements using a single event listener.

Instead of attaching separate listeners to every button, a single listener is attached to the parent container.

Example:

```javascript
taskContainer.addEventListener("click", (e) => {

    if (e.target.classList.contains("delete-btn")) {
        console.log("Delete Task");
    }

});
```

### Benefits of Event Delegation

- Better Performance
- Less Memory Usage
- Cleaner Code
- Supports Dynamically Added Elements

In this project, Event Delegation is used for:

- Edit Task
- Delete Task
- Complete Task

using a single event listener attached to the task container.

---

# DOM Manipulation Used

The project uses the following DOM methods:

```javascript
document.getElementById()
document.querySelector()
document.createElement()
appendChild()
remove()
replaceWith()
innerHTML
textContent
classList.add()
classList.remove()
classList.toggle()
```

These methods allow dynamic creation, updating, and removal of tasks.

---

# Attributes vs Properties

HTML Attributes are defined in HTML markup.

Example:

```html
<input value="JavaScript">
```

Attribute:

```javascript
input.getAttribute("value");
```

Output:

```
JavaScript
```

Property:

```javascript
input.value;
```

Output:

```
Current Value Inside Input Field
```

### Difference

| Attribute | Property |
|------------|------------|
| Defined in HTML | Represents current state |
| Initial value | Dynamic value |
| Accessed using getAttribute() | Accessed directly using object properties |

---

# Local Storage

Local Storage is used to store task data and theme preferences.

Example:

```javascript
localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
);
```

Retrieve Data:

```javascript
const tasks =
JSON.parse(localStorage.getItem("tasks"));
```

Benefits:

- Data persists after refresh
- No backend required
- Easy client-side storage

---

# Features Implemented

- Add Task
- Edit Task
- Delete Task
- Complete Task
- Task Counter
- Theme Toggle
- Local Storage
- Dynamic DOM Rendering
- Event Delegation
- Event Bubbling
- Event Capturing
- Browser Rendering Pipeline Visualization
- Attributes vs Properties Demonstration

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

# Conclusion

This project demonstrates how modern web applications interact with the DOM using Vanilla JavaScript. It covers important browser concepts such as Parsing, Tokenization, DOM Tree, CSSOM Tree, Render Tree, Event Bubbling, Event Capturing, Event Delegation, and Local Storage while implementing a fully functional Task Manager Application.