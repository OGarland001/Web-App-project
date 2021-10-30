const todos = document.querySelectorAll(".todo");

todos.forEach(todo =>{
    todo.addEventListener("click", () =>{
        todo.classList.toggle("active");
    })
})
