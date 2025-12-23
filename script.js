// Get elements
let taskInput = document.getElementById('taskInput');
let taskDate = document.getElementById('taskDate');
let taskTime = document.getElementById('taskTime');
let addBtn = document.getElementById('addBtn');
let taskList = document.getElementById('taskList');

// Function to add a new task
addBtn.addEventListener('click', function() {
    let taskText = taskInput.value.trim();
    let date = taskDate.value;
    let time = taskTime.value;

    if(taskText === '') {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    let li = document.createElement('li');
    li.className = 'task-item';

    let taskContent = document.createElement('span');
    taskContent.textContent = taskText + (date ? ` | ${date}` : '') + (time ? ` ${time}` : '');

    li.appendChild(taskContent);

    // Buttons
    let completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'completeBtn';
    li.appendChild(completeBtn);

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'editBtn';
    li.appendChild(editBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteBtn';
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // Clear inputs
    taskInput.value = '';
    taskDate.value = '';
    taskTime.value = '';

    // Complete task
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Edit task
    editBtn.addEventListener('click', function() {
        let newTask = prompt("Edit your task:", taskText);
        if(newTask !== null && newTask.trim() !== '') {
            taskContent.textContent = newTask + (date ? ` | ${date}` : '') + (time ? ` ${time}` : '');
            taskText = newTask.trim();
        }
    });

    // Delete task
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });
});

// Allow Enter key to add task
taskInput.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        addBtn.click();
    }
});
