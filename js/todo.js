const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const DONE_TODOS_KEY = "doneTodos";
const DONE_CLASSNAME = "done";

let todos = [];
let doneArr = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
function saveDoneTodos(){
    localStorage.setItem(DONE_TODOS_KEY, JSON.stringify(doneArr));
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
    paintDoneTodo(doneTodoObj);

    //filter 이용해서 클릭된 버튼의 list 포함x인 array, 포함o인 array 만든 후
    //concat 함수로 합쳐 todos 에 저장
    const temp = todos.filter(todo => todo.id !== parseInt(li.id));
    
    doneArr = doneArr.concat(todos.filter(todo => todo.id == parseInt(li.id)));
    //todos = temp.concat(doneArr);
    todos = temp;
    saveTodos();
    saveDoneTodos();
}
function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; 
/*
    doneArr.forEach(item => {
        if(item.id === li.id){
            console.log(1);
            li.classList.add(DONE_CLASSNAME);
        }
    });
*/
    const span = document.createElement("span");
    span.innerText = newTodo.text; 
    const button = document.createElement("button");
    button.innerText = "완료";
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);
} 

function paintDoneTodo(doneTodo){
    const li = document.createElement("li");
    li.id = doneTodo.id; 
    li.classList.add(DONE_CLASSNAME);

    const span = document.createElement("span");
    span.innerText = doneTodo.text; 
    /*
    const button = document.createElement("button");
    button.innerText = "완료";
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);
    */
    li.appendChild(span);
    todoList.appendChild(li);
} 
/*
function paintaddTodo(addTodo) {
    const li = document.createElement("li");
    li.id = addTodo.id; 
    const span = document.createElement("span");
    span.innerText = addTodo.text; 
    const button = document.createElement("button");
    button.innerText = "완료";
    button.addEventListener("click", deleteTodo);

    li.appendChild(button);
    li.appendChild(span);

    todoList.appendChild(li);  
    //todoList.insertBefore(li, todoList.childNodes[[(temp.length)]]);  
}
*/
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
const savedDoneTodos = localStorage.getItem(DONE_TODOS_KEY);

if (savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    const parsedDoneTodos = JSON.parse(savedDoneTodos);

    todos = parsedTodos;
    doneArr = parsedDoneTodos;

    //console.log(parsedTodos);
    //console.log(parsedDoneTodos);
    parsedTodos.forEach(paintTodo);
    parsedDoneTodos.forEach(paintDoneTodo);
}

