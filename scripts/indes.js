const playBtn = document.getElementById("playbtn");

function continueGame() {
  letter = randomLetter();
  console.log("your random letter", letter);
  const display = document.getElementById("display");
  display.innerText = letter;

  setBgColor(letter);
}

playBtn.addEventListener("click", function play() {
  hideElementById("home");
  showElementById("playGround");
  continueGame();
});
