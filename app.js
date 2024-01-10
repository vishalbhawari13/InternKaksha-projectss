document.addEventListener("DOMContentLoaded", function () {
    const newTaskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const taskText = newTaskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            `;

            taskList.appendChild(li);
            newTaskInput.value = "";
        }
    }

    function deleteTask(btn) {
        const listItem = btn.parentNode;
        taskList.removeChild(listItem);
    }

    window.addTask = addTask;
    window.deleteTask = deleteTask;
});
