var Tasks = {
  tasks: ["Taak 1 oplossen", "Modular javascript"],
  init: function(){
    this.cacheDom();
    this.render();
    this.bindEvents();
  },

  cacheDom: function(){
    this.addForm = document.querySelector("#add-input");
    this.addButton = this.addForm.querySelector("button");
    this.addInput = this.addForm.querySelector("#add");
    this.taskList = document.querySelector(".tasks");
  },

  bindEvents: function(){
    this.addButton.addEventListener("click", this.addTask.bind(this));
    this.addInput.addEventListener("keypress", (e) => {
      if(e.keyCode === 13){
        e.preventDefault();
        this.addTask();
      }
    });
    this.taskList.addEventListener("click", this.deleteTask.bind(this));
  },

  addTask: function(){
    if(this.addInput.value === "") return;
    this.tasks.push(this.addInput.value);
    this.render();
    this.addInput.value = "";
  },

  deleteTask: function(e){
    if(e.target && e.target.matches("span") || e.target.matches("svg") || e.target.matches("path")){
      console.log("kruiske");
    }
  },

  render: function(){
    this.taskList.innerHTML = this.tasks.map((task) => `<li class="task">${task}<span><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path class="x" fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg></span></li>`).join("");
  }
}

Tasks.init();
