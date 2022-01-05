let tasks = [],
    taskInput = document.querySelector(".input-area .task-add-area .task-input"),
    addBtn = document.querySelector(".input-area .task-add-area .add-btn");


if (window.localStorage.tasks) {
  let tasksParse = JSON.parse(window.localStorage.tasks);
  tasks = tasksParse;
}





function addtasksToLocalStorage() {
  let taskValue = "";
  taskInput.addEventListener("input", _=> {
    taskValue = taskInput.value;
  })
  addBtn.addEventListener("click", _=> {
    if (taskInput.value.length > 0) {
      taskInput.value = ""
      let id = new Date().getTime();
      tasks.push({id: id, task: taskValue})
      let tasksStri = JSON.stringify(tasks)
      window.localStorage.tasks = tasksStri;
    }
  })
}

addtasksToLocalStorage()


function addTasksToPage(tasks) {
  for (let i = 0; i < tasks.length; i++) {
    let taskArea = document.querySelector(".task-area");
    let taskBox = document.createElement("div");
    taskBox.className = "task-box";
    let taskText = document.createElement("div");
    taskText.className = "task-text";
    taskText.innerHTML = tasks[i].task;
    let removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    let removeBtnIcon = document.createElement("i");
    removeBtnIcon.className = "fas fa-trash";
    removeBtn.appendChild(removeBtnIcon);
    taskBox.appendChild(taskText);
    taskBox.appendChild(removeBtn);
    taskArea.appendChild(taskBox);
  }
}

addTasksToPage(tasks)