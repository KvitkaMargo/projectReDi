// Task class for object-oriented approach
class Task {
    constructor(description) {
      this.description = description;
      this.isCompleted = false;
    }
  }
  // Array to store tasks
  let tasks = [];
  // Function to render tasks on the page
  const renderTasks = () => {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the list
    tasks.forEach((task, index) => {
      // Create task container
      const taskDiv = document.createElement("div");
      taskDiv.className = "task";
      // Task description
      const taskText = document.createElement("span");
      taskText.textContent = task.description;
      // Remove button
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.className = "remove";
      removeButton.addEventListener("click", () => removeTask(index));
      // Append elements to the task div
      taskDiv.appendChild(taskText);
      taskDiv.appendChild(removeButton);
      // Append task to the list
      taskList.appendChild(taskDiv);
    });
    // Log tasks for debugging
    console.log("Current tasks:", tasks);
  };
  // Function to add a task
  const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const taskDescription = taskInput.value.trim();
    if (taskDescription) {
      const newTask = new Task(taskDescription); // Create a new task
      tasks.push(newTask); // Add task to the array
      taskInput.value = ""; // Clear input field
      renderTasks(); // Re-render tasks
    }
  };
  // Function to remove a task
  const removeTask = (index) => {
    tasks = tasks.filter((_, i) => i !== index); // Remove task by index
    renderTasks(); // Re-render tasks
  };
  // Add event listener to "Add Task" button
  document.getElementById("addTask").addEventListener("click", addTask);




















