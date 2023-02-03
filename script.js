const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const alertText = document.querySelector("#alertText")
const todos = JSON.parse(localStorage.getItem('todosave')) || [];

if(todos.length > 0){
    for(let i = 0;i<todos.length; i++){
       
        createTodo(todos[i].text,todos[i].checked);
    }
}


document.querySelector("form").onsubmit = (e)=>{
 e.preventDefault();
  if(!todoInput.value.trim()){
    alertText.innerHTML = 'Please, fill this area!'
        alertText.setAttribute('class' , '  alert alert-danger');
} 

else{
    const todoLocal = {
            text : todoInput.value.trim(),
            checked : false
        }
        todos.push(todoLocal);
    localStorage.setItem('todosave', JSON.stringify(todos));
   createTodo(todoInput.value.trim(),false) 
}
    
    }
    

function createTodo(value, checked){
    alertText.innerHTML = ''
    alertText.setAttribute('class' , '');

 const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");
        if(checked === true){
            todoDiv.classList.add("check-line")
        }
        todoList.appendChild(todoDiv);

        const newTodo = document.createElement("li");
        newTodo.innerHTML = value;
        todoDiv.appendChild(newTodo);
        

        const completedButton = document.createElement("button");
        completedButton.classList.add("complete-btn");
        completedButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
        todoDiv.appendChild(completedButton);


   const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
      trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        todoDiv.appendChild(trashButton);
         todoInput.value = "";

 completedButton.onclick=(e)=>{
 const deleteBtn = e.target;
todoDiv.classList.add("check-line");


let index = Array.from(deleteBtn.closest(".todo-list").children).indexOf(deleteBtn.closest(".todo"));
console.log(index);
todos[index].checked = true;

    localStorage.setItem('todosave', JSON.stringify(todos));



  
}



trashButton.onclick = (e) =>{

    const trashBtn = e.target;
      let index = Array.from(trashBtn.closest(".todo-list").children).indexOf(trashBtn.closest(".todo")); 
      todos.splice(index, 1);
todoDiv.style.display= "none" ;
          localStorage.setItem('todosave', JSON.stringify(todos));
 

  
}
         
}




























