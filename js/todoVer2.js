const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const DONE_TODOS_KEY = "doneTodos";
const DONE_CLASSNAME = "done";

let todos = [];
let doneArr = [];
let lastTodoId = ""; //lastTodoId 전역변수 설정
let lastTodoList = null;

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
    //남은 todos / 완료한 doneArr 로 구분해 저장
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    doneArr = doneArr.concat(doneTodoObj);
    saveTodos();
    saveDoneTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; 
    const span = document.createElement("span");
    span.innerText = newTodo.text; 
    const button = document.createElement("button");
    button.innerText = "완료";
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);
} 

function addPaintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; 
    const span = document.createElement("span");
    span.innerText = newTodo.text; 
    const button = document.createElement("button");
    button.innerText = "완료";
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);
    li.appendChild(span);

    const savedTodos = localStorage.getItem(TODOS_KEY); 
    const parsedTodos = JSON.parse(savedTodos);
    
    if (savedTodos === null) { //savedTodos 값 입력된 게 없는 처음 상태. todo 생성x 상태.
        todoList.appendChild(li); 
    } else if (parsedTodos.length === 0) { //todo 생성은 됐지만, 다 완료한 경우. 다 지운 경우.
        todoList.prepend(li);        
    } else { //if (savedTodos !== null)
        lastTodoId = parsedTodos[parsedTodos.length -1].id; //todos 맨 마지막 항목의 id 가져옴.
        lastTodoList = document.getElementById(`${lastTodoId}`); //id가 lastTodoId 값인 li 가져옴     
        lastTodoList.insertAdjacentElement('afterend',li); //lastTodoList 뒤에 li 삽입
    }
}

function paintDoneTodo(doneTodo){
    const li = document.createElement("li");
    li.id = doneTodo.id; 
    li.classList.add(DONE_CLASSNAME);
    const span = document.createElement("span");
    span.innerText = doneTodo.text; 
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
    addPaintTodo(newTodoObj); //addPaintTodo 함수 따로 생성
    saveTodos();
}
todoForm.addEventListener("submit", handleTodoSubmit);


const savedTodos = localStorage.getItem(TODOS_KEY); 
const savedDoneTodos = localStorage.getItem(DONE_TODOS_KEY);

if (savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
if (savedDoneTodos !== null) {
    const parsedDoneTodos = JSON.parse(savedDoneTodos);
    doneArr = parsedDoneTodos;
    parsedDoneTodos.forEach(paintDoneTodo);
}