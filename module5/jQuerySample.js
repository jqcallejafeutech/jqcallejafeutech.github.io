$(document).ready(function () {

    // Add Task
    $("#addBtn").click(function () {

        const taskText = $("#taskInput").val().trim();

        // Validation
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create list item
        const newTask = `
            <li>
                <span>${taskText}</span>
                <div>
                    <button class="completeBtn">✔</button>
                    <button class="deleteBtn">✖</button>
                </div>
            </li>
        `;

        $("#taskList").append(newTask);

        $("#taskInput").val("");
    });

    // Event Delegation
    $("#taskList").on("click", ".deleteBtn", function () {
        $(this).closest("li").remove();
    });

    $("#taskList").on("click", ".completeBtn", function () {
        $(this).closest("li").find("span").toggleClass("completed");
    });

});
