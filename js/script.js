let id = 1;
let tasks = [];

function addTask(){
    //getting the value from the textarea
    let task = document.getElementById('task-text').value;
    if(task === ""){
        alert("Please add a task");
    }else{
        displayTask(task);
        document.getElementById('task-text').value = ""; //clear
    }
}

function deleteTask(id){
   tasks.splice(id,1);
   for(j=0;j<tasks.length;j++){
    console.log(tasks[j] + " " + j);
   }
   document.getElementById(id).remove();
}

function displayTask(task){
    id++;
    tasks.push(task);
    let color = document.getElementById('select-color').value;
    document.getElementById('tasks').innerHTML += `<div id ="${id}" style="background-color:${color}" class="box"> <p>${task}</p> <button onclick="deleteTask(${id})" class="btn-remove"><i class="fa-solid fa-circle-minus"></i></button></div>`;
}