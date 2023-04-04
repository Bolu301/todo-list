`use strict`;

const nameInput = document.querySelector("#name");
const username = localStorage.getItem("username") || "";
nameInput.value = username;
nameInput.addEventListener("change", (e) => {
  localStorage.setItem("username", e.target.value);
});

const inputVal = document.getElementsByClassName("form-control")[0];

const addTaskBtn = document.getElementsByClassName("btn")[0];

addTaskBtn.addEventListener("click", function () {
  if (inputVal.value.trim() != 0) {
    let localItems = JSON.parse(localStorage.getItem("localItem"));
    if (localItems === null) {
      taskList = [];
    } else {
      taskList = localItems;
    }
    taskList.push(inputVal.value);
    localStorage.setItem("localItem", JSON.stringify(taskList));
  }
  inputVal.value = ``;
  showItem();
});

inputVal.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementsByClassName("btn")[0].click();
  }
});

function showItem() {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }

  let html = "";
  let itemShow = document.getElementById("list");
  taskList.forEach((data, index) => {
    html += `
      <div class="todoList">
      <input class = "pText" value = "${data}" readonly>
      <div>
        <button class="editTask" onClick="editItem(${index})"><i class="fa-solid fa-pen fa-xs"></i></i></button>
        <button class="deleteTask" onClick="deleteItem(${index})"><i class="fa-solid fa-trash fa-xs"></i></button>
      </div>
      </div>
      `;
  });
  itemShow.innerHTML = html;
}
showItem();

function editItem(index) {
  const input = document.getElementsByClassName("pText")[index];
  input.removeAttribute("readonly");
  input.focus();
  input.addEventListener("blur", (e) => {
    input.setAttribute("readonly", true);
    taskList[index] = e.target.value;
    localStorage.setItem("localItem", JSON.stringify(taskList));
    showItem();
  });
}

function deleteItem(index) {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  taskList.splice(index, 1);
  localStorage.setItem("localItem", JSON.stringify(taskList));
  showItem();
}
