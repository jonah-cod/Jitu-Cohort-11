

const todos_list = [
      { id: 1, title: "wash dishes", is_complete: false },
      { id: 2, title: "wash clothes", is_complete: false },
      { id: 3, title: "cook lunch", is_complete: false }]


// selecting using tag name
// we get an array of all the elements with tag

let heading = document.getElementsByTagName("h4");

// selecting using id // we get a single element
let input_field = document.getElementById("todo-input")


// select the todos container
let todos = document.getElementsByClassName("todos")[0]

// creating html elements
for (let i = 0; i< todos_list.length; i++) {
      createTodo(todos_list[i])
}

let btn = document.getElementById("btn");



btn.onclick = function () {
      let date = new Date()
      let todo = {id: date.getTime(), title: input_field.value, is_complete: false}
      createTodo(todo)
      input_field.value = ""
}




function createTodo(task){
      let todo = document.createElement("div");

      // creating a psan for the title
      let todo_text = document.createElement("span");
      //assigning the title
      todo_text.innerText = task["title"];

      //creating an input
      let todo_check = document.createElement("input");
      //changing it's type attribut
      todo_check.setAttribute("type", "checkbox")

      //implementation of addEventListener
      todo_check.addEventListener("click", (e)=>completeTask(e))

      //adding elements to dom
      todo.appendChild(todo_text);
      todo.appendChild(todo_check);
      // setting classes
      todo.classList.add("todo");
      todo.id = task.id

      // adding a single tod to their todos container
      todos.appendChild(todo)
}

function completeTask(e){
      let task = e.target.previousSibling;
      task.style.textDecoration = "line-through"
      task.style.color = "blue"
}