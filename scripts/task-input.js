const MAX_TASKS = 10;

// These are the default tasks that will be displayed on the board
const Tasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },

  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

// Funtion to get all "done" tasks.
function getDoneTasks() {
  return Tasks.filter((task) => task.status === "done");
}

// Funtion adds different ID for each task.
let taskId = Tasks.length + 1;

//Function to add Task details
// This function is called when the user clicks the "+" button
// It also is also equiped with a max tasks lengeth check
// It will alert the user if the max tasks length is reached
let addTaskDetails = () => {
  if (Tasks.length >= MAX_TASKS) {
    alert(
      "There are enough tasks on your board, please check them in the console."
    );
    console.log("Task limit reached! No more tasks can be added.");
    return null;
  }

  let title = prompt("Enter task title:").trim();
  let description = prompt("Enter task description:").trim();
  let status = prompt("Enter task status (TODO, DOING, DONE):")
    .trim()
    .toLowerCase();

  while (!["todo", "doing", "done"].includes(status)) {
    alert("Invalid status! Enter todo, doing, or done.");
    status = prompt("Enter task status (todo, doing, done):")
      .trim()
      .toLowerCase();
  }

  let task = { id: taskId++, title, description, status };
  Tasks.push(task);

  console.log(
    `Task Added - ID: ${task.id}, Title: "${task.title}", Status: "${task.status}"`
  );
  console.log("All tasks:      ", Tasks);
  console.log("Completed tasks:", getDoneTasks());

  return task;
};

// Function to add Task to the board
// This function is called when the user clicks the "+" button
let addTask = () => {
  let task = addTaskDetails();

  let taskElementHTML = `
    <div class="bg-white rounded-lg hover:bg-[#E4EBFA] hover:scale-101 transition-all duration-300 mb-5 py-4 px-4 font-bold shadow-md grid grid-rows-2 cursor-pointer">
      <h2 class="row-span-1 text-lg" >${task.title}</h2>
      <p class="row-span-1 text-md text-gray-800" >${task.description}</p>
    </div>
  `;

  let column = document.getElementById(`${task.status}-column`);
  if (column) {
    column.innerHTML += taskElementHTML;
  } else {
    console.warn(`No column found for status: ${task.status}`);
  }

  console.log("Task successfully added!");
};

// Function to open modal with task details
function openModal(taskId) {
  currentTaskId = taskId;
  let task = Tasks.find((t) => t.id === taskId);

  document.getElementById("modal-title").value = task.title;
  document.getElementById("modal-description").value = task.description;
  document.getElementById("modal-status").value = task.status;

  document.getElementById("task-modal").classList.remove("hidden");
}

// Function to close modal
function closeModal() {
  document.getElementById("task-modal").classList.add("hidden");
}

// Function to save changes
function saveTask() {
  let task = Tasks.find((t) => t.id === currentTaskId);

  task.title = document.getElementById("modal-title").value;
  task.description = document.getElementById("modal-description").value;
  task.status = document.getElementById("modal-status").value;

  updateTaskUI();
  closeModal();
}

// Function to update UI after editing
function updateTaskUI() {
  ["todo-column", "doing-column", "done-column"].forEach((columnId) => {
    document.getElementById(columnId).innerHTML = "";
  });

  Tasks.forEach((task) => {
    let taskElement = document.createElement("div");
    taskElement.className =
      "bg-white rounded-lg hover:bg-[#E4EBFA] hover:scale-101 transition-all duration-300 mb-5 py-4 px-4 font-bold shadow-md";
    taskElement.innerHTML = `<h2 class="text-lg">${task.title}</h2><p class="text-md text-gray-800">${task.description}</p>`;

    taskElement.addEventListener("click", () => openModal(task.id));
    document.getElementById(`${task.status}-column`).appendChild(taskElement);
  });
}

//loads up existing Tasks on startup
function loadTasksOnStartup() {
  Tasks.forEach((task) => {
    let taskElement = document.createElement("div");
    taskElement.className =
      "bg-white rounded-lg hover:bg-[#E4EBFA] hover:scale-101 transition-all duration-300 mb-5 py-4 px-4 font-bold shadow-md";
    taskElement.innerHTML = `<h2 class="text-lg">${task.title}</h2><p class="text-md text-gray-800">${task.description}</p>`;
    taskElement.addEventListener("click", () => openModal(task.id));

    let column = document.getElementById(`${task.status}-column`);
    if (column) {
      column.appendChild(taskElement);
    } else {
      console.warn(`No column found for status: ${task.status}`);
    }
  });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", loadTasksOnStartup);

// console.logs all Tasks and Completed tasks
console.log("All tasks:      ", Tasks);
console.log("Completed tasks:", getDoneTasks());
