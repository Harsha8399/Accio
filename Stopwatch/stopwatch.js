const stopwatch = document.getElementById("display")

const playbutton = document.getElementById("Playbutton")
const pausebutton = document.getElementById("Pausebutton")
const resetbutton = document.getElementById("Stopbutton")

function startStopwatch(){
    showButton("PAUSE")
}
function stopStopwatch(){
    showButton("PLAY")
}

function resetStopwatch(){

}

function showButton(buttonKey){
    let buttonToshow,buttonTohide;

    if(buttonKey==="PLAY"){
        buttonToshow = playbutton
        buttonTohide = pausebutton
    }
    else{
        buttonToshow = pausebutton
        buttonTohide = playbutton
    }
    buttonToshow.style.display = "block";
    buttonTohide.style.display = "none";
}

playbutton.addEventListener("click",startStopwatch)
pausebutton.addEventListener("click",stopStopwatch)
resetbutton.addEventListener("click",resetStopwatch)
