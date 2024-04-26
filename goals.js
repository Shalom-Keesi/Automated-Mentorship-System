function addGoal() {
    const input = document.getElementById("goals");
    const secondInput = document.getElementById("mygoals");

    const taskName = input.value;
    const goalName = secondInput.value;

    if (taskName === "" && goalName==="") {
    alert("Please enter a goal.");
    return;
    }
    input.value = "";
    const list = document.getElementById("todo-list");
    const li = document.createElement("li");
    li.textContent = taskName;
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
    list.removeChild(li);
    };
    li.appendChild(deleteButton);
    list.appendChild(li);
    }