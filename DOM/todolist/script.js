const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-form input');
const todoList = document.querySelector('.todo-list');

function renderTodoItem(taskText) {
	const item = document.createElement('div');
	item.className = 'todo-item';

	const title = document.createElement('h3');
	title.textContent = taskText;

	const actions = document.createElement('div');
	actions.className = 'todo-item-actions';

	const editButton = document.createElement('button');
	editButton.type = 'button';
	editButton.className = 'edit-btn';
	editButton.textContent = 'Edit';

	const deleteButton = document.createElement('button');
	deleteButton.type = 'button';
	deleteButton.className = 'delete-btn';
	deleteButton.textContent = 'Delete';

	editButton.addEventListener('click', () => {
		const updatedTask = prompt('Edit task', title.textContent);
		if (updatedTask && updatedTask.trim()) {
			title.textContent = updatedTask.trim();
		}
	});

	deleteButton.addEventListener('click', () => {
		item.remove();
	});

	actions.append(editButton, deleteButton);
	item.append(title, actions);
	todoList.appendChild(item);
}

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const taskText = input.value.trim();
	if (!taskText) {
		return;
	}

	renderTodoItem(taskText);
	input.value = '';
	input.focus();
});
