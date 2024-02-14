const playBtn = document.getElementById("playbtn");
const home = document.getElementById("home")
const playGround = document.getElementById("playGround");
playBtn.addEventListener("click",function(){
    home.classList.add("hidden")
    playGround.classList.remove("hidden")
})