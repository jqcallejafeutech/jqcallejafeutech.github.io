document.addEventListener("DOMContentLoaded", () => {

    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    // Add Task
    addBtn.addEventListener("click", () => {

        const taskText = taskInput.value.trim();

        // Validation
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create elements
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="completeBtn">&#10003;</button>
                <button class="deleteBtn">&#x2715;</button>
            </div>
        `;

        taskList.appendChild(li);

        taskInput.value = "";
    });

    // Event Delegation
    taskList.addEventListener("click", (event) => {

        if (event.target.classList.contains("deleteBtn")) {
            event.target.closest("li").remove();
        }

        if (event.target.classList.contains("completeBtn")) {
            const taskText = event.target.closest("li").querySelector("span");
            taskText.classList.toggle("completed");
        }

    });

});
