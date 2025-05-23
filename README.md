# JSL04

## Kanban Task Manager

## Overview

The **Kanban Task Manager** is a **dynamic web application** designed to help users track tasks visually across different statuses: **TODO, DOING, and DONE**. Built using **HTML, Tailwind CSS, and JavaScript**, this project focuses on **responsive UI, interactive task management, and dynamic updates**.

## Key Objectives

### **Dynamic Task Display & Interaction**

✅ **Dynamically display tasks** from the given initial data  
✅ **Ensure tasks are placed in the correct columns** ("TODO", "DOING", "DONE")  
✅ **Clicking a task opens a modal** displaying task details  
✅ The modal includes:

- **Editable input fields** for the task title and description
- **A select dropdown** for updating the task status
- **A save button** to save updated task
- **A close button** to exit the modal

### **Design & Responsiveness**

✅ **Backdrop effect on modal** for better focus  
✅ **Fully responsive layout** on desktop & mobile

### **Code Structure & Maintainability**

✅ **Modular JavaScript functions** for better organization  
✅ **Meaningful variable and function names** for clarity  
✅ **JSDoc comments** for documentation and maintainability

## Technologies Used

- **HTML** – Structuring the page layout
- **Tailwind CSS** – Styling with utility-first approach
- **JavaScript** – Handling dynamic updates and event interactions

## How to Use

1. **Add a Task** – Click `+`, input details, and select a status.
2. **Edit a Task** – Click on a task to open the modal and update details.
3. **Change Task Status** – Selecting a new status moves the task to the correct column.
4. **View Completed Tasks** – Open the console to see logged "done" tasks.

## Future Enhancements

🔹 **Local Storage Integration** – Save tasks across sessions  
🔹 **Task Prioritization** – Add priority levels with color coding  
🔹 **Collaborative Features** – Multi-user access with authentication

---

### **Setup**

1. **Clone or Download the Repository**
   ```sh
   git clone <your-repo-url>
   cd kanban-task-manager
   ```

**_Or download manually and extract the files_**

2. **Open the Project in a Code Editor**
   Recommended: VS Code or another preferred editor.

3. **Start a Local Server (Optional)**

   - Install Live Server extension in VS Code.
   - Open index.html in your browser.

4. **Check Dependencies**

   - Ensure src/output.css is correctly linked.
   - Confirm Tailwind CSS and Google Fonts load properly.

5. **Test the Functionality**
   - Open index.html in a browser.
   - Verify tasks load dynamically from the array.
   - Click a task to open the modal and edit details.
   - Modify title, description, or status, then save changes.
   - If status is changed, ensure task moves to the correct column.
   - Open the console (Ctrl + Shift + J in Chrome) to view completed tasks.
