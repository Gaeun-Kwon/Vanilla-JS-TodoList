const logout = document.querySelector("#logout");
/*
const USERNAME_KEY = "username";
const TODOS_KEY = "todos";
const DONE_TODOS_KEY = "doneTodos";
*/

function handleLogout(event) {
  const result = confirm("DB 연결이 되어있지 않아 모든 데이터가 삭제됩니다.\n로그아웃 하시겠습니까?");
  if (result) {
    /*
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(TODOS_KEY);
    localStorage.removeItem(DONE_TODOS_KEY);
    */
    localStorage.clear();
    location.replace('login.html');
  }
}
logout.addEventListener("click", handleLogout);