const moodForm = document.getElementById("moodForm");

moodForm.addEventListener("submit", handleMoodFormSubmit)

function handleMoodFormSubmit(e) {
  e.preventDefault();
  
  console.log(e.target)
}