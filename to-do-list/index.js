document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const desc = document.getElementById("task").value;
    const taskElement = document.createElement("span");

    const task = document.createElement("p");
    task.innerHTML = desc;
    
    const completeTask = document.createElement("button");
    completeTask.innerHTML = "✅";
    completeTask.addEventListener("click", function() {
        task.style.textDecoration = task.style.textDecoration === "line-through" ? "" : "line-through";
    });

    const deleteTask = document.createElement("button");
    deleteTask.innerHTML = "␡";
    deleteTask.addEventListener("click", function() {
        taskElement.remove();
    });

    taskElement.appendChild(task);
    taskElement.appendChild(completeTask);
    taskElement.appendChild(deleteTask);

    document.getElementById("taskList").appendChild(taskElement);
});
