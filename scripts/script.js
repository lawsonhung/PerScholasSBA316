const newActivityForm = document.getElementById("newActivityForm");
const nameInput = document.getElementById("nameInput");
const descriptionInput = document.querySelector("#descriptionInput");
const locationSelect = document.querySelector("#locationSelect");
const weatherSelect = document.querySelector("#weatherSelect");
const costInput = document.querySelector("#costInput");

const totalCostEl = document.getElementById("totalCost");

const adventureListAside = document.querySelector("#adventureListAside");
const adventureListEl = document.querySelector("#adventureList");

newActivityForm.addEventListener("submit", handleNewActivityFormSubmit);
totalCostEl.addEventListener("click", handleTotalCostElClick);
adventureListAside.addEventListener("mouseup", () => adventureListAside.style.backgroundColor = "#FFE5D9");

let adventureListArray = [];
let totalCost;

function handleNewActivityFormSubmit(e) {
  e.preventDefault();

  console.log(e.target);
  const name = validateName();
  if (!name) return false;

  addAdventure();

  updateTotalCost();
}

function validateName() {
  if (nameInput.value == "") {
    alert("You forgot to give a name to your adventure!");
    nameInput.focus();
    return false;
  }
  return nameInput.value;
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

  liToAdd.addEventListener("mousedown", highlightAdventureList)

  adventureToAdd.appendChild(liToAdd);
  adventureList.appendChild(adventureToAdd);

  pushAdventureToArray(name, description, location, weather, cost);
  styleAdventureListBorders()
}

function highlightAdventureList() {
  adventureListAside.style.backgroundColor = "#D8E2DC";
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

function styleAdventureListBorders() {
  adventureListEl.firstChild.style.borderTop = "none";
  adventureListEl.lastChild.style.borderBottom = "none";
}

function updateTotalCost() {
  let tempTotalCost = 0;

  for (adventure of adventureListArray)
    tempTotalCost += adventure.cost;
  
  totalCostEl.innerText = `This is going to cost us $${tempTotalCost}!`;
  totalCost = tempTotalCost;
}

function handleTotalCostElClick() {
  let alertMsg = "";

  for (adventureIndex in adventureListArray) {
    const adventure = adventureListArray[adventureIndex];
    alertMsg += `$${adventure.cost}`;
    if (adventureIndex < adventureListArray.length - 1) 
      alertMsg += " + ";
  }

  alertMsg += ` = ${totalCost}`;

  window.alert(alertMsg);
}