`use strict`;

const inputVal = document.getElementsByClassName("form-control")[0];

const addTaskBtn = document.getElementsByClassName("btn")[0];

showItem();

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

  showItem();
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
      <p class="pText">${data}</p>
      <button class="deleteTask" onClick="deleteItem(${index})">x</button>
      </div>
      `;
  });
  itemShow.innerHTML = html;
}

function deleteItem(index) {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  taskList.splice(index, 1);
  localStorage.setItem("localItem", JSON.stringify(taskList));
  showItem();
}

function clearTask() {
  localStorage.clear();
  showItem();
}
