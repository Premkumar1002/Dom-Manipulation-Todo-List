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

document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todoInput");
    const submitbutton = document.getElementById("addTodo");

    submitbutton.addEventListener("click", (event) => {
        const todoText = todoInput.value.trim(); 
        if (todoText === '') {
            alert("Please write something for todo");
        } else {
            addTodoToLocalStorage(todoText); 
            todoInput.value = ''; 
        }
    });

    todoInput.addEventListener("change", (event) => {
        const todoText = event.target.value.trim();
        event.target.value = todoText;
        console.log(todoText);
    });
});
