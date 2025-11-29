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

		// Create a remove button for the task
		const removeButton = document.createElement('button');
		removeButton.textContent = 'Remove';
		removeButton.className = 'remove-btn';

		// When the remove button is clicked, remove the task from the list
		removeButton.onclick = function () {
			taskList.removeChild(li);
		};

		// Append the remove button to the list item, then add the item to the list
		li.appendChild(removeButton);
		taskList.appendChild(li);

		// Clear the input field after adding the task
		taskInput.value = '';
	}

	// Add event listener to the Add Task button
	addButton.addEventListener('click', addTask);

	// Allow adding tasks by pressing the Enter key in the input field
	taskInput.addEventListener('keypress', function (event) {
		if (event.key === 'Enter') {
			addTask();
		}
	});

	// Invoke addTask on DOMContentLoaded as per instructions
	// (This runs once when the page loads; since the input is empty,
	// it will simply show an alert asking the user to enter a task.)
	addTask();
});

