const newActivityForm = document.getElementById("newActivityForm");
const nameInput = document.getElementById("nameInput");
const descriptionInput = document.querySelector("#descriptionInput");
const locationSelect = document.querySelector("#locationSelect");
const weatherSelect = document.querySelector("#weatherSelect");
const costInput = document.querySelector("#costInput");

const totalCostEl = document.getElementById("totalCost");

const adventureListEl = document.querySelector("#adventureList");

newActivityForm.addEventListener("submit", handleNewActivityFormSubmit);

let adventureListArray = [];

function handleNewActivityFormSubmit(e) {
  e.preventDefault();

  console.log(e.target);
  const name = nameInput.value;
  const description = descriptionInput.value;
  const location = locationInput.value;

  console.log(name, description, location);

  addAdventure();

  updateTotalCost();
}

function addAdventure() {
  const adventureToAdd = document.createDocumentFragment();
  const liToAdd = document.createElement("li");

  liToAdd.classList.add("adventureItem");

  const name = nameInput.value;
  const description = descriptionInput.value;
  const location = locationSelect.value;
  const weather = weatherSelect.value;
  const cost = costInput.value;

  const nameEl = document.createElement("p");
  const summaryEl = document.createElement("p");
  const descriptionEl = document.createElement("p");

  nameEl.textContent = name;
  summaryEl.textContent = `This trip to ${location} on a ${weather} day will cost us $${cost}`;
  descriptionEl.textContent = description;

  liToAdd.appendChild(nameEl);
  liToAdd.appendChild(summaryEl);
  liToAdd.appendChild(descriptionEl);

  liToAdd.addEventListener("mousedown", () => highlightAdventureList(liToAdd))

  adventureToAdd.appendChild(liToAdd);
  adventureList.appendChild(adventureToAdd);

  pushAdventureToArray(name, description, location, weather, cost);
}

function highlightAdventureList(li) {
  li.parentNode.style.backgroundColor = "#D8E2DC";
  li.parentNode.addEventListener("mouseup", () => adventureListEl.style.backgroundColor = "#FFE5D9");
}

function pushAdventureToArray(name, description, location, weather, cost) {
  const adventure = {
    name: name,
    description: description,
    location: location,
    weather: weather,
    cost: Number(cost)
  }

  adventureListArray.push(adventure);
}

function updateTotalCost() {
  let totalCost = 0;

  for (adventure of adventureListArray)
    totalCost += adventure.cost;
  
  totalCostEl.innerText = `This is going to cost us $${totalCost}!`;
}