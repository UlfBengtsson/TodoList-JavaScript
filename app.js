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
todoButton.addEventListener("click", addTodo);// older version todoButton.addEventListener("click", () => addTodo(event));
filterTodo.addEventListener("change", filterTodos);

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
    todoCompletBtn.addEventListener("click", completedTodo);

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

    //remove old value from input element to be ready for next todo to be added
    todoInput.value = '';
}

function completedTodo(event) {
    event.target.parentElement.classList.toggle('completed');
}

function deleteTodo(event) {
    //console.log("event", event);
    //console.log("parentElement",event.target.parentElement);
    event.target.parentElement.remove();
}

function filterTodos(event) {
    //console.log("event", event);
    //console.log("event.target", event.target);
    console.log("event.target.value", event.target.value);

    const liElments = document.getElementsByTagName('li');

    switch (event.target.value) {
        case 'all':
            console.log("all switch");
            for (let index = 0; index < liElments.length; index++) {
                liElments[index].style.display = 'flex';
            }
            break;
        case 'completed':
            showHideCompleted(liElments, true);
            break;
        case 'uncompleted':
            showHideCompleted(liElments, false);
            break;

        default:
            console.log("filter switch default was triggerd");
            break;
    }
}
// use switch here as we have all, completed and uncompleted
function showHideCompleted(liElements, showOrHide) {
    for (let index = 0; index < liElements.length; index++) {
        if (liElements[index].classList.contains('completed') == showOrHide) {
            liElements[index].style.display = 'flex';
        }
        else {
            liElements[index].style.display = 'none';
        }
    }
}