let task=[];
let list=document.getElementById("todo-list");
function addTodo(){
    let Input=document.getElementById("todo-input");
    if(Input.value !== ""){
        task.push(Input.value);
        Input.value="";
        showTasks();
    }
}
function deleteTask(index){
    task.splice(index, 1);
    showTasks();
}
function showTasks(){
    list.innerHTML="";
    for(let i=0;i<task.length;i++){
        let li=document.createElement("li");
        li.innerHTML=task[i];
        let delBtn=document.createElement("button");
        delBtn.innerText="Delete";

        delBtn.onclick=(function(index){
            return function(){
                deleteTask(index);
            };
        })(i);
        li.appendChild(delBtn);
        list.appendChild(li);
    }
}