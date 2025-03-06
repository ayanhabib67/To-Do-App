let list = document.getElementById("list")
let todoValue = document.getElementById("todoValue")

function addTodo(){

    list.innerHTML +=`<li>
     <input class="todo-input" type="test" value ="${todoValue.value}" disabled  />
    <button onclick="editTodo()"> edit </button> 
     <button onclick="deleteTodo()"> Delete </button>  </li>`

    todoValue.value = ""
}

function editTodo(){
   let target = event.target;
   let oldValue = target.parentNode.childNodes[1]
   let editButton = target.parentNode.childNodes[3]

   if(editButton.innerText == "Edit"){
       editButton.innerText = "Updated"
       oldValue.disabled =false
       oldValue.focus()
   } else{
    editButton.innerText = "Edit"
    oldValue.disabled =true
   }
    
}

function deleteTodo(){
    event.target.parentNode.remove()
}

function  deleteAll(){
    list.innerHTML= ""
}