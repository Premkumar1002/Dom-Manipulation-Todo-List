function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || { "todoList": [] };
    console.log(todos);
    return todos;
}

function addTodoToLocalStorage(todoText) {
    const todos = loadTodos();
    todos.todoList.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function appendTodoInHtml(todoText) {
    const todoList = document.getElementById("todoList");

    const todo = document.createElement("li");
    todo.textContent = todoText;

    todoList.appendChild(todo);
}

document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todoInput");
    const submitbutton = document.getElementById("addTodo");

    const todoList = document.getElementById("todoList");

    submitbutton.addEventListener("click", (event) => {
        const todoText = todoInput.value.trim(); 
        if (todoText === '') {
            alert("Please write something for todo");
        } else {
            addTodoToLocalStorage(todoText); 
            todoInput.value = ''; 
            appendTodoInHtml(todoText);

        }
    });

    todoInput.addEventListener("change", (event) => {
        const todoText = event.target.value.trim();
        event.target.value = todoText;
        console.log(todoText);
    });

    const todos = loadTodos();
    todos.todoList.forEach(todo => {
        const newTodoItem = document.createElement("li");
        newTodoItem.textContent = todo;
        todoList.appendChild(newTodoItem);
        
    });
});
