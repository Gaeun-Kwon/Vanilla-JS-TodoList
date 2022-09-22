//const loginForm = document.querySelector("#login-form");
//const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.innerText = `${username}`;
    //greeting.classList.remove(HIDDEN_CLASSNAME);    
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //go to login.html
    location.replace('login.html');
} else {
    //show the greeting
    paintGreetings();
}
