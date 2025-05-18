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

const doneTasks = Tasks.filter((task) => task.status === "done");

let taskId = Tasks.length + 1;

//Function to add Task details
// This function is called when the user clicks the "+" button
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
  console.log("Completed tasks:", doneTasks);

  return task;
};

// Function to add Task to the board
// This function is called when the user clicks the "+" button
let addTask = () => {
  let task = addTaskDetails();

  let taskElementHTML = `
    <div class="bg-white rounded-lg hover:bg-[#E4EBFA] hover:scale-101 transition-all duration-300 mb-5 py-4 px-4 font-bold shadow-md grid grid-rows-2">
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

// conssole.logs all Tasks and Completed tasks
console.log("All tasks:      ", Tasks);
console.log("Completed tasks:", doneTasks);
