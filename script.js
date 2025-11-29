// Wait for the DOM to fully load before running any code
document.addEventListener('DOMContentLoaded', function () {
	// Select DOM elements
	const addButton = document.getElementById('add-task-btn');
	const taskInput = document.getElementById('task-input');
	const taskList = document.getElementById('task-list');

	// Function to load tasks from Local Storage and render them
	function loadTasks() {
		const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
		storedTasks.forEach(function (taskText) {
			// 'false' indicates not to save again to Local Storage while loading
			addTask(taskText, false);
		});
	}

	// Function to add a new task to the list
	function addTask(taskText, save = true) {
		// If taskText is not provided, read it from the input field
		if (typeof taskText === 'undefined') {
			// Get and trim the text from the input field
			taskText = taskInput.value.trim();
		}

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
		removeButton.classList.add('remove-btn');

		// When the remove button is clicked, remove the li element from taskList
		removeButton.onclick = function () {
			// Remove from DOM
			taskList.removeChild(li);
			// Also remove from Local Storage
			const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
			const updatedTasks = storedTasks.filter(function (t) {
				return t !== taskText;
			});
			localStorage.setItem('tasks', JSON.stringify(updatedTasks));
		};

		// Append the remove button to the li element, then append the li to taskList
		li.appendChild(removeButton);
		taskList.appendChild(li);

		// Save the task to Local Storage if requested
		if (save) {
			const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
			storedTasks.push(taskText);
			localStorage.setItem('tasks', JSON.stringify(storedTasks));
		}

		// Clear the task input field
		taskInput.value = '';
	}

	// Add an event listener to addButton that calls addTask when clicked
	addButton.addEventListener('click', function () {
		addTask();
	});

	// Add an event listener for the 'keypress' event to allow adding tasks with Enter
	taskInput.addEventListener('keypress', function (event) {
		if (event.key === 'Enter') {
			addTask();
		}
	});

	// Load tasks from Local Storage when the page loads
	loadTasks();
});

