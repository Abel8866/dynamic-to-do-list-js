// Wait for the DOM to fully load before running any code
document.addEventListener('DOMContentLoaded', function () {
	// Select DOM elements
	const addButton = document.getElementById('add-task-btn');
	const taskInput = document.getElementById('task-input');
	const taskList = document.getElementById('task-list');

	// Function to add a new task to the list
	function addTask() {
		// Get and trim the text from the input field
		const taskText = taskInput.value.trim();

		// If the input is empty, alert the user
		if (taskText === "") {
			alert('Please enter a task.');
			return;
		}

		// Create a new list item for the task
		const li = document.createElement('li');
		li.textContent = taskText;

		// Create a new button element for removing the task
		const removeButton = document.createElement('button');
		removeButton.textContent = 'Remove';
		removeButton.className = 'remove-btn';

		// When the remove button is clicked, remove the li element from taskList
		removeButton.onclick = function () {
			taskList.removeChild(li);
		};

		// Append the remove button to the li element, then append the li to taskList
		li.appendChild(removeButton);
		taskList.appendChild(li);

		// Clear the task input field
		taskInput.value = '';
	}

	// Add an event listener to addButton that calls addTask when clicked
	addButton.addEventListener('click', addTask);

	// Add an event listener for the 'keypress' event to allow adding tasks with Enter
	taskInput.addEventListener('keypress', function (event) {
		if (event.key === 'Enter') {
			addTask();
		}
	});

	// Invoke the addTask function on DOMContentLoaded (per instructions)
	// Note: when the page first loads, input is empty so this will show an alert.
	addTask();
});

