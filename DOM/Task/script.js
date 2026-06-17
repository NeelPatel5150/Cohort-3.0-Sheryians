const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskContainer = document.getElementById("taskContainer");
const themeBtn = document.getElementById("themeBtn");
const attributeBtn = document.getElementById("attributeBtn");

const total = document.getElementById("total");
const completed = document.getElementById("completed");
const pending = document.getElementById("pending");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (!taskText) return;

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  tasks.push(task);

  saveTasks();
  renderTasks();

  taskInput.value = "";
});

function renderTasks() {
  taskContainer.innerHTML = "";

  tasks.forEach((task) => {
    const card = document.createElement("div");
    card.className = "task-card";

    card.innerHTML = `
      <p class="${task.completed ? "completed" : ""}">
        ${task.text}
      </p>

      <div class="task-actions">
        <button class="complete-btn" data-id="${task.id}">
          Complete
        </button>

        <button class="edit-btn" data-id="${task.id}">
          Edit
        </button>

        <button class="delete-btn" data-id="${task.id}">
          Delete
        </button>
      </div>
    `;

    taskContainer.appendChild(card);
  });

  updateCount();
}

function updateCount() {
  total.textContent = tasks.length;

  const completedTasks = tasks.filter((task) => task.completed).length;

  completed.textContent = completedTasks;

  pending.textContent = tasks.length - completedTasks;
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

taskContainer.addEventListener("click", (e) => {
  const id = Number(e.target.dataset.id);

  if (e.target.classList.contains("delete-btn")) {
    tasks = tasks.filter((task) => task.id !== id);

    saveTasks();
    renderTasks();
  }

  if (e.target.classList.contains("complete-btn")) {
    const task = tasks.find((task) => task.id === id);

    task.completed = !task.completed;

    saveTasks();
    renderTasks();
  }

  if (e.target.classList.contains("edit-btn")) {
    const task = tasks.find((task) => task.id === id);

    const updatedTask = prompt("Edit Task", task.text);

    if (updatedTask) {
      task.text = updatedTask;

      saveTasks();
      renderTasks();
    }
  }
});

attributeBtn.addEventListener("click", () => {
  console.log("Attribute:", taskInput.getAttribute("value"));

  console.log("Property:", taskInput.value);
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

/* EVENT PROPAGATION */

const grand = document.getElementById("grand");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grand.addEventListener("click", () => console.log("Grand Capturing"), true);

parent.addEventListener("click", () => console.log("Parent Capturing"), true);

child.addEventListener("click", () => console.log("Child Capturing"), true);

grand.addEventListener("click", () => console.log("Grand Bubbling"));

parent.addEventListener("click", () => console.log("Parent Bubbling"));

child.addEventListener("click", () => console.log("Child Bubbling"));
