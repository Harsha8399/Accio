const submit = document.getElementById("submit")
const game = document.querySelector(".game")
const details = document.querySelector(".details")
const message = document.querySelector(".message-header")

let player1 = ''
let player2 = ''
let playGame = true
let activePlayer = 0

function showMessage(msg){
    message.innerHTML = `<h3>  ${msg}</h3>`
}
function initializeGame(){
    player1 = document.getElementById("player1").value
    player2 = document.getElementById("player2").value
    activePlayer = 0
    details.style.display = 'none'
    game.style.display = 'flex'

    for(let i=1;i<=9;i++){
        const div = document.createElement("div")
        div.id = i
        div.classList.add("game-slot")
        showMessage(`${activePlayer===0 ? player1 : player2}, you're up`)
        

        div.addEventListener("click",function(){
            div.innerText = activePlayer ===0 ? 'x':'o';
        })
        game.appendChild(div)

    }
}

submit.addEventListener("click",initializeGame)