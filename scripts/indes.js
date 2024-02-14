const playBtn = document.getElementById("playbtn");
const home = document.getElementById("home")
const playGround = document.getElementById("playGround");
const display = document.getElementById("display")
const letterString ="abcdefghijklmnopqrstuvwxyz"
const letterArray = letterString.split("")
const index = Math.floor(Math.random()*25)
const letter = letterArray[index]


display.innerText = letter

playBtn.addEventListener("click",function(){
    home.classList.add("hidden")
    playGround.classList.remove("hidden")
})



