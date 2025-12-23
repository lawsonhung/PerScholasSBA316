const newActivityForm = document.getElementById("newActivityForm");
const nameInput = document.getElementById("nameInput");
const descriptionInput = document.querySelector("#descriptionInput");
const locationInput = document.querySelector("#locationInput");

newActivityForm.addEventListener("submit", handleNewActivityFormSubmit);

function handleNewActivityFormSubmit(e) {
  e.preventDefault();

  console.log(e.target);
  const name = nameInput.value;
  const description = descriptionInput.value;
  const location = locationInput.value;

  console.log(name, description, location);
}