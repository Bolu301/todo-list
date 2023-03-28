"use strict";

const add = document.getElementById("add");
const input = document.getElementById("inputField");
const list = document.getElementById("list");

add.addEventListener("click", addd);

input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    addd();
  }
});

function addd() {
  const input_value = input.value;
  const tasks = document.createElement("div");
  tasks.classList.add("tasks");

  const cont = document.createElement("div");
  cont.classList.add("cont");

  const input_task = document.createElement("input");
  input_task.classList.add("text", "text-break");
  input_task.type = "text";
  input_task.value = input_value;

  tasks.appendChild(cont);
  cont.appendChild(input_task);

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const del = document.createElement("button");
  del.classList.add("delete", "btn", "btn-danger");
  del.innerText = "Delete";

  tasks.appendChild(actions);
  actions.appendChild(del);
  list.appendChild(tasks);

  del.addEventListener("click", () => {
    list.removeChild(tasks);
  });
}
