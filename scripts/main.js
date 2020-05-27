// Add Current Date and Time
(function getDateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var month = currentTime.getMonth() + 1; // January is month 0
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();

  // get element to display date
  var display_date = document.getElementById("display-date");
  // append date to element
  display_date.innerHTML =
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    " " +
    day +
    "/" +
    month +
    "/" +
    year;
})();

// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions

function addTodo(event) {
  // Prevent form for submitting
  event.preventDefault();
  // To do Divd
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Checked mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Checked trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // Append to List
  todoList.appendChild(todoDiv);
  // Clear todo input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // Delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // Animation
    todo.classList.add("fall");
    todo.addEventListener("transitioned", function () {
      todo.remove();
    });
  }

  // Check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

// Display the filtered list if it is completed or uncompleted
function filterTodo(e) {
  const todos = todoList.childNodes;

  todos.forEach(function (todo) {
    //ignore text and other non-element nodes
    if (todo.nodeType === Node.ELEMENT_NODE) {
      // console.log(e.target.value);
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    }
  });
}
