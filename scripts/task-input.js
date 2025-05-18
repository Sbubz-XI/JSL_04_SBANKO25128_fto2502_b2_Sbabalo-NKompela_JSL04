const MAX_TASKS = 6;
const Tasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description: "Gain practical experience",
    status: "done",
  },
];

const doneTasks = Tasks.filter((task) => task.status === "done");

let taskId = Tasks.length + 1;

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

console.log("All tasks:      ", Tasks);
console.log("Completed tasks:", doneTasks);
