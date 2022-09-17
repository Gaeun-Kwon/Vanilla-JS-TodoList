const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    location.replace('index.html');
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //show the form
    loginForm.addEventListener("submit", onLoginSubmit); 
} else {
    //go to index.html
    location.replace('index.html');
}