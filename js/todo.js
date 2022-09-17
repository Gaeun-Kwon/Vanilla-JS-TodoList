const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
function deleteTodo(event){
    //클릭된 버튼의 list 화면에서 제거 후, 다시 추가해 화면에서 밑으로 내려간 것처럼 표현
    const li = event.target.parentElement;
    const done = event.target.nextElementSibling.innerText;
    const doneTodoObj = { 
        text: done,
        id: li.id
    };
    li.remove();
    paintTodo(doneTodoObj);

    //filter 이용해서 클릭된 버튼의 list 포함x인 array, 포함o인 array 만든 후
    //concat 함수로 합쳐 todos 에 저장
    const temp = todos.filter(todo => todo.id !== parseInt(li.id));
    const doneArr = todos.filter(todo => todo.id == parseInt(li.id));
    todos = temp.concat(doneArr);
    saveTodos();
}
function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; 
    const span = document.createElement("span");
    span.innerText = newTodo.text; 
    const blank = document.createElement("span");
    blank.innerText = " ";
    const button = document.createElement("button");
    button.innerText = "완료";
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);
} 

function handleTodoSubmit(event){
    event.preventDefault();    
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = { 
        text: newTodo,
        id: Date.now() 
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj); 
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);


const savedTodos = localStorage.getItem(TODOS_KEY); 

if (savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}

