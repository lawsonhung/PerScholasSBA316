const newActivityForm = document.getElementById("newActivityForm");
const nameInput = document.getElementById("nameInput");
const descriptionInput = document.querySelector("#descriptionInput");
const locationSelect = document.querySelector("#locationSelect");
const weatherSelect = document.querySelector("#weatherSelect");
const costInput = document.querySelector("#costInput");

const adventureList = document.querySelector("#adventureList");

newActivityForm.addEventListener("submit", handleNewActivityFormSubmit);

function handleNewActivityFormSubmit(e) {
  e.preventDefault();

  console.log(e.target);
  const name = nameInput.value;
  const description = descriptionInput.value;
  const location = locationInput.value;

  console.log(name, description, location);

  addAdventure();
}

function addAdventure() {
  const adventureToAdd = document.createDocumentFragment();
  const liToAdd = document.createElement("li");

  const name = nameInput.value;
  const description = descriptionInput.value;
  const location = locationSelect.value;
  const weather = weatherSelect.value;
  const cost = costInput.value;

  const nameEl = document.createElement("p");
  const summaryEl = document.createElement("p");
  const descriptionEl = document.createElement("p");

  nameEl.textContent = name;
  summaryEl.textContent = `Going to ${location} on a ${weather} day will cost us $${cost}`;
  descriptionEl.textContent = description;

  liToAdd.appendChild(nameEl);
  liToAdd.appendChild(summaryEl);
  liToAdd.appendChild(descriptionEl);

  adventureToAdd.appendChild(liToAdd);
  adventureList.appendChild(adventureToAdd);
}