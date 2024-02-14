function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function randomLetter() {
  const letterString = "abcdefghijklmnopqrstuvwxyz";
  const letterArray = letterString.split("");
  const index = Math.round(Math.random() * 25);
  const letter = letterArray[index];

  return letter;
}

function setBgColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
