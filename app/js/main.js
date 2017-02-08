// var Tasks = {
//   tasks: ["Taak 1 oplossen", "Modular javascript"],
//   init: function(){
//     this.cacheDom();
//     this.render();
//     this.bindEvents();
//   },
//
//   cacheDom: function(){
//     this.addForm = document.querySelector("#add-input");
//     this.addButton = this.addForm.querySelector("button");
//     this.addInput = this.addForm.querySelector("#add");
//     this.taskList = document.querySelector(".tasks");
//   },
//
//   bindEvents: function(){
//     this.addButton.addEventListener("click", this.addTask.bind(this));
//     this.addInput.addEventListener("keypress", (e) => {
//       if(e.keyCode === 13){
//         e.preventDefault();
//         this.addTask();
//       }
//     });
//     this.taskList.addEventListener("click", (e) => {
//       if(e.target && e.target.matches("span") || e.target.matches("svg") || e.target.matches("path")){
//         this.deleteTask(e);
//       }
//     });
//   },
//
//   addTask: function(value){
//     if(this.addInput.value === "" && !value) return;
//     this.tasks.push(value || this.addInput.value);
//     this.render();
//     this.addInput.value = "";
//   },
//
//   deleteTask: function(e){
//     let remove = e.target.closest(".task").dataset.id;
//     this.tasks.splice(remove, 1);
//     this.render();
//   },
//
//   render: function(){
//     this.taskList.innerHTML = this.tasks.map((task, i) => `<li class="task" data-id="${i}">${task}<span><svg style="width:24px;height:24px" viewBox="0 0 24 24">
//     <path class="x" fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
//     </svg></span></li>`).join("");
//   }
// }
//
// Tasks.init();

let Tasks = (function(){
  let tasks = ["Taak 1 maken", "Modular javascript"];

  //cacheDom
  const addForm = document.querySelector("#add-input");
  const addButton = addForm.querySelector("button");
  const addInput = addForm.querySelector("#add");
  const taskList = document.querySelector(".tasks");

  //bindEvents
  addButton.addEventListener("click", addTask);
  addInput.addEventListener("keypress", (e) => {
    if(e.keyCode === 13){
      e.preventDefault();
      addTask();
    }
  });
  taskList.addEventListener("click", (e) => {
    if(e.target && e.target.matches("span") || e.target.matches("svg") || e.target.matches("path")){
      deleteTask(e);
    }
  });

  _render();

  function _render(){
    taskList.innerHTML = tasks.map((task, i) => `<li class="task" data-id="${i}">${task}<span><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path class="x" fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg></span></li>`).join("");
  }

  function addTask(value){
    if(addInput.value === "" && !value) return;
    tasks.push(value || addInput.value);
    _render();
    addInput.value = "";
  }

  function deleteTask(e){
    let remove = e.target.closest(".task").dataset.id;
    tasks.splice(remove, 1);
    _render();
  }

  return{
    addTask: addTask,
    deleteTask: deleteTask
  };

})();
