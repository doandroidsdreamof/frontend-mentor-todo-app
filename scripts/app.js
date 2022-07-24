const mainInput = document.getElementById("mainInput");
const mainCheck = document.getElementById("mainCheck");
const wrapper = document.getElementById("wrapper");
const clearCompleted = document.getElementById("clearCompleted");
const containerForSort = document.getElementById("container");

const itemsCounter = document.querySelector(".function__left");
const todoList = document.querySelector(".todolist");
const functionGroup = document.querySelectorAll(".function__group");
const wrapItem = document.querySelector(".wrapper");
const completedButton = document.querySelector(".function__button__clearcompleted");

let todoItem = document.createElement("div");
let removeButton = document.createElement("button");
let checkButton = document.createElement("input");
let todoText = document.createElement("p");

 const completedTasks = document.getElementsByClassName("trueActive");
 const activeTasks = document.getElementsByClassName("trueDeleted");

let itemsLeft = " items left";

var increaseId = 0;
var counter = 0;

const breakPoint = window.matchMedia("(min-width: 720px)")
const groupMobile = document.querySelector('.function__group__mobile')
function responsiveButton(){
 
  if (breakPoint.matches) { 
    groupMobile.classList.remove('function__group__mobile')

  }  
    if(!breakPoint.matches) { 
    groupMobile.classList.add('function__group__mobile')
  }
}
window.addEventListener('resize',responsiveButton)
window.onload = () =>{
  responsiveButton()
}
//Dom manipulation from one place as much as possible prevent for complexity
function ConstructorClass(wrap, item, checked, content, remove, container) {
  this.wrap = wrapper.appendChild(todoItem);
  this.container = containerForSort.appendChild(todoItem);
  this.item = todoItem.classList.add("todolist");
  this.item = todoItem.classList.add("sortablelist");
  this.item = todoItem.classList.add("trueActive");
  this.checked = checkButton.classList.add("todolist__checkbutton");
  this.checked = checkButton.setAttribute("type", "checkbox");
  this.checked = checkButton.setAttribute("id", "check");
  this.item = todoItem.setAttribute("id", "sort");
  this.item = todoItem.setAttribute("draggable", "true");
  this.item = todoItem.appendChild(todoText);
  this.remove = removeButton.classList.add("todolist__deletebutton");
  this.item = todoItem.appendChild(checkButton);
  this.item = todoItem.appendChild(removeButton);
  this.content = todoText.classList.add("todolist__text");
}

ConstructorClass.prototype.createDiv = function () {
  return (todoItem = document.createElement("div"));
};
ConstructorClass.prototype.createButton = function () {
  return (checkButton = document.createElement("input"));
};
ConstructorClass.prototype.createContent = function () {
  return (todoText = document.createElement("p"));
};
ConstructorClass.prototype.createRemoveButton = function () {
  return (removeButton = document.createElement("div"));
};
ConstructorClass.prototype.text = function () {
  return (todoText.textContent = mainInput.value);
};
ConstructorClass.prototype.remove = function () {
  return wrapper.remove();
};
ConstructorClass.prototype.lineThrough = function () {
  return todoText.style.textDecoration = "line-through";
};
function createAndCount() {
  increaseId += 1; // for sortable list
  itemsCounter.innerText = ++counter + itemsLeft;
  todoItem.setAttribute("data-id", `${increaseId}`);
  const createClass = new ConstructorClass();
  ConstructorClass.prototype.text();
  ConstructorClass.prototype.createDiv();
  ConstructorClass.prototype.createButton();
  ConstructorClass.prototype.createContent();
  ConstructorClass.prototype.createRemoveButton();
  mainInput.value = "";
}

//listing tasks and button functions
window.addEventListener("click", (e) => {
  e.stopPropagation();
  const target = e.target;
  const getCheckIntput = document.getElementsByClassName("todolist__checkbutton");
  for (var i = 0; i < getCheckIntput.length; i++) {
    if (getCheckIntput[i].checked == true) {
      getCheckIntput[i].parentNode.classList.add("trueDeleted");
    }
      if (getCheckIntput[i].checked == true || getCheckIntput[i].checked == false) {
        !getCheckIntput[i].checked ?  getCheckIntput[i].parentNode.style.textDecoration = "none" :   getCheckIntput[i].parentNode.style.textDecoration = "line-through";

      }
  

  if (target.matches(".todolist__deletebutton")) {
    target.parentElement.remove();
    !counter ? 0 : --counter; // check counter zero or negative
    itemsCounter.innerText = counter + itemsLeft;
  }
  if (target.matches(".todo__buttoncheck") && mainInput.value != "") {
    createAndCount();

  }
  }
});

function allTasksEvent() {
  const getCheckIntput = document.getElementsByClassName("todolist__checkbutton");
  for (var i = 0; i < getCheckIntput.length; i++) {
    getCheckIntput[i].parentNode.style.display = "flex";

  }
}

function activeTasksEvent() {
  const getCheckIntput = document.getElementsByClassName("todolist__checkbutton");
  for (var i = 0; i < getCheckIntput.length; i++) {
    if (getCheckIntput[i].checked == true) {
      getCheckIntput[i].parentNode.style.display = "none";
    }
    if (getCheckIntput[i].checked == false) {
      getCheckIntput[i].parentNode.style.display = "flex";
    }
  }
}
function completedTasksEvent() {
  const getCheckIntput = document.getElementsByClassName("todolist__checkbutton");
  for (var i = 0; i < getCheckIntput.length; i++) {
    if (getCheckIntput[i].checked == true) {
      getCheckIntput[i].parentNode.style.display = "flex";
    }
    if (getCheckIntput[i].checked == false) {
      getCheckIntput[i].parentNode.style.display = "none";
    }
  }
}

mainInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && mainInput.value != "") {
    createAndCount();
    //sorting list
    Sortable.create(containerForSort, {
      group: `data-id${increaseId}`,
      animation: 300,
      easing: "ease-in",
      draggable: ".sortablelist",
      ghostClass: "sortable-blue",
    });
  }
});

function clearAll() {
  removeFinished("trueDeleted");
}

function removeFinished(className) {
  const checked = document.getElementsByClassName(className);
  while (checked.length > 0) {
    checked[0].parentNode.removeChild(checked[0]);
    counter--;
    itemsCounter.innerText = counter + itemsLeft;
  }
}


 
