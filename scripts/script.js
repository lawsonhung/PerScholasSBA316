const newActivityForm = document.getElementById("newActivityForm");

newActivityForm.addEventListener("submit", handleNewActivityFormSubmit);

function handleNewActivityFormSubmit(e) {
  e.preventDefault();

  console.log(e.target);
}