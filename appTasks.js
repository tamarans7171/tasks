import TaskClass from "./taskClass.js";
import { declareEvents } from "./declareEvents.js";
let tasks = [];
let cnt_id = 1;

const init = () => {
  checkLocal();
  declareEvents();
  createAllProducts();
};

const checkLocal = () => {
  if (localStorage["tasks"]) {
    // parse -> מתרגם סטרינג לג'ייסון אם יכול
    console.log(JSON.parse(localStorage["tasks"]));
    tasks = JSON.parse(localStorage["tasks"]);
    if (tasks.length > 0) cnt_id = tasks[tasks.length - 1].id;
  }
};

const createAllProducts = () => {
  document.querySelector("#id_parent").innerHTML = "";
  tasks = _.sortBy(tasks, "hour")
  tasks.forEach(function (item) {
    let task = new TaskClass(item.task, item.hour, "#id_parent", item.id);
    task.render();
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
};

function addToList(item) {
  let newTask = new TaskClass(item.task, item.hour, "#id_parent", cnt_id);
  cnt_id++;
  tasks.push(newTask);
  console.log(newTask);
  createAllProducts();
}

const removeTask = (idTaskToRemove) => {
    if(confirm(`🤔האם אתה בטוח שברצונך למחוק את משימה ${idTaskToRemove}?`)) {
          tasks = tasks.filter((task) => task.id != idTaskToRemove);
  createAllProducts();
    }
};

const clearTasks = () => {
  if (confirm("🤔האם אתה בטוח שברצונך למחוק את כל המשימות?")) {
    tasks = [];
    createAllProducts();
  }
};

init();
export { addToList, removeTask, clearTasks };
