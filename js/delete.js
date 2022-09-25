const deleteBtn = document.getElementById("deleteBtn");

function handleDeleteAll() {
  localStorage.removeItem("doneTodos");
  location.reload();
}
deleteBtn.addEventListener("click", handleDeleteAll);