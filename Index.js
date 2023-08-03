let count = 0;

document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length === 0) {
    alert("Kindly Enter Task Name!!!!");
  } else {
    count++;
    if (count <= 5) {
      document.querySelector("#task").innerHTML += `
        <div class="task">
          <span id="taskname">
            ${document.querySelector("#newtask input").value}
          </span>
          <button class="delete">
            Remove
          </button>
        </div>
      `;
    }
    if (count > 5) {
      alert("Maximum number of tasks reached!");
      count--;
    }
    
    document.querySelector("#newtask input").value = "";
    var current_tasks = document.querySelectorAll(".delete");
    
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        if (count >1) {
          this.parentNode.remove();
          count--;
        } else {
          alert("At least one tasks must remain!");
        }
      };
    }
    console.log(count)
  }
};
