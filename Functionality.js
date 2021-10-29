const todos = document.querySelectorAll(".todo");
const toggle =document.getElementById("toggle");
const exit =document.getElementById("close");
const submit =document.getElementById("modal");
const add =document.getElementById("open");
const tagEl=document.getElementById("tags")
const taskinput=document.getElementById("task")
const submitbutton =document.getElementById("sub")
var myArr = [];


function addelement(){
    var inputtask = document.getElementById('text').value;

    myArr.push(inputtask); 
    var pval ="";

    for(i =0; i<myArr.length; i++) 
    {
        pval = pval + myArr[i] ;
    }

    let list = document.getElementById("todos")
    myArr.forEach((item) => {
        
        let li = document.createElement("li")

        li.innerText = item;
        li.classList.add("todo")
        li.classList.add("todos")
        list.appendChild(li);
       
        myArr.shift()
      });
    
    document.getElementById('form-modal').reset();
    

}


//toggle navigation 
toggle.addEventListener('click', () => document.body.classList.toggle("show-nav"));

//show modal 

add.addEventListener('click',() => modal.classList.add("show-modal")) 

exit.addEventListener('click',() => modal.classList.remove("show-modal"))
submitbutton.addEventListener('click',() => modal.classList.remove("show-modal"))

todos.forEach(todo =>{
    todo.addEventListener("click", () =>{
        todo.classList.toggle("active");
    })
})


    
    


