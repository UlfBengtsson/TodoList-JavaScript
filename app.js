//Select DOM 
var todoIdCounter = 0;

// "Step 1"
// "Grabb the todo-input"
var todoInput = document.getElementsByClassName("todo-input")[0];
// "Grabb the todo-button"
var todoButton = document.getElementsByClassName("todo-button")[0];
// "Grabb the todo-list"
var todoList = document.getElementsByClassName("todo-list")[0];
// "Grabb the filter-todo"
var filterTodo = document.getElementsByClassName("filter-todo")[0];

//Event Listeners

//Step 2 Add Eventlistners here like add todo
todoButton.addEventListener("click", () => addTodo(event));

//Functions // Step 3 create your li
function addTodo(event) {
    //console.log("addTodo triggerd");
    // Prevent form from submitting or reloading Step 4
    event.preventDefault();

    // Create li                                 Step 4
    const todoLi = document.createElement('li');
    todoLi.id = "todo" + (++todoIdCounter);
    todoLi.className = "todo";

    // Create a todo div-> and add todo          Step 4
    const todoDiv = document.createElement('div');
    todoDiv.innerHTML = todoInput.value;
    todoDiv.className = "todo-item";

    // Create Completed Button
    const todoCompletBtn = document.createElement('button');
    todoCompletBtn.className = "complete-btn";
    todoCompletBtn.innerHTML = '<i class="fas fa-check"></i>';

    // Create trash button
    const todoTrashBtn = document.createElement('button');
    todoTrashBtn.className = "trash-btn";
    todoTrashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoTrashBtn.addEventListener("click", deleteTodo);

    // assemble li with div-btn-btn
    todoLi.appendChild(todoDiv);
    todoLi.appendChild(todoCompletBtn);
    todoLi.appendChild(todoTrashBtn);
    //console.log("todoLi:", todoLi);

    // attach final Todo
    todoList.appendChild(todoLi);
}

function deleteTodo(event) {
    //console.log("event", event);
    //console.log("parentElement",event.target.parentElement);
    event.target.parentElement.remove();
}

function filterTodo(event) {

}
// use switch here as we have all, completed and uncompleted