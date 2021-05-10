var addTask = document.getElementById('add-task');
var taskCount = document.getElementById('task-count')
var numTasksLeft = taskCount.innerText;
addTask.addEventListener('click', function(){
    add_task();
    numTasksLeft++;
    taskCount.innerText = numTasksLeft;
});



// adding task
function add_task(){
    var newTask = document.createElement('li');
    var content = document.getElementById('input-task').value;
    var textNode = document.createTextNode(content);
    newTask.appendChild(textNode);
    newTask.setAttribute("id", content);
    var closeButton = document.createElement('button');
    closeButton.innerText = "Close";
    closeButton.setAttribute("id", content);
    closeButton.addEventListener('click', function(e){
        close_task(e);
        numTasksLeft--;
        taskCount.innerText = numTasksLeft;
    });
    newTask.appendChild(closeButton);
    // console.log(task);
    document.querySelector('ul').appendChild(newTask);
    newTask.style.width = "100%";
    newTask.style.display = "flex";
    newTask.style.justifyContent = "space-between";
    newTask.style.fontSize = "1.5rem";
    newTask.addEventListener('click', function(e){
        e.target.style.textDecoration = "line-through";
    });
}

// closing task
function close_task(e){
    var taskID = e.target.id;
    var taskToClose = document.getElementById(taskID);
    taskToClose.remove();
}