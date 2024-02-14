function heldelKeyPress(event) {
  const userKey = event.key
  if(userKey === "Escape")
  {
     return gameOver()
    
  }
  console.log(userKey);
  const currentletterElement = document.getElementById("display")
  const currentletter = currentletterElement.innerText
  const neededLetter = currentletter.toLocaleLowerCase();
  

  if (userKey === neededLetter) {
    removeBgColor(neededLetter);
    const point =getValueById("point")
  const updatedPoint = point + 1;

  setValueById("point", updatedPoint);
    continueGame()
  }else{
    alert("You press worng key")
    const life =getValueById("life")
    const updatedLife = life - 1;
    
    setValueById("life", updatedLife);

    if (updatedLife === 0) {
      gameOver()
    }
  }
}
document.addEventListener("keyup",heldelKeyPress)

function continueGame() {
  letter = randomLetter();
  // console.log("your random letter", letter);
  const display = document.getElementById("display");
  display.innerText = letter;
  setBgColor(letter);
}

function play() {
  hideElementById("home");
  hideElementById("scoreSection");
  showElementById("playGround");

  setValueById("life", 5)
  setValueById("point", 0)
  continueGame();
};

function gameOver() {
  hideElementById("playGround");
  showElementById("scoreSection");
  //  const finalScore = getValueById("updatedPoint")
  //  console.log(finalScore);
  const lastScore = getValueById("point")
  setValueById("finalScore", lastScore) 


  const message = document.getElementById("message")

  if(lastScore >= 100){
    message.innerText = "I can do everything"
  }

  const lastLetter = getElementTextById("display");
  removeBgColor(lastLetter)
  
}
