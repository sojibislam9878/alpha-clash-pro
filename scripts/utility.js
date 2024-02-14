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

function removeBgColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getValueById(elementId) {
  const element = document.getElementById(elementId);
  const valueText = element.innerText;
  const value = parseInt(valueText);
  return value;
}

function setValueById(elementId , value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId){
  const element =document.getElementById(elementId);
  const text = element.innerText;
  return text;
}