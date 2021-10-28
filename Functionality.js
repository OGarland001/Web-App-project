const todos = document.querySelectorAll(".todo");
const toggle =document.getElementById("toggle")
const exit =document.getElementById("close")
const submit =document.getElementById("modal")
const add =document.getElementById("open")

//toggle navigation 
toggle.addEventListener('click', () => document.body.classList.toggle("show-nav"));

//show modal 

add.addEventListener('click',() => modal.classList.add("show-modal")) 

exit.addEventListener('click',() => modal.classList.remove("show-modal"))


todos.forEach(todo =>{
    todo.addEventListener("click", () =>{
        todo.classList.toggle("active");
    })
})