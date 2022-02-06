const container = document.querySelector(".balloon-container")
const resetGame = document.querySelector("button")


const numBallons=25
let popped = 0
for(let i=1;i<=numBallons;i++){
    const divE1 = document.createElement("div")
    divE1.classList.add("balloon")
    divE1.innerText = "POP!"
    const randcolor = getColor()
    divE1.style.backgroundColor = `${randcolor}`
    divE1.style.color = `${randcolor}`

    divE1.addEventListener("mouseenter",function(){
        if(divE1.style.backgroundColor!=='transparent'){
            popped++;
        }
        divE1.style.backgroundColor = "transparent"
        checkAllPopped()
    })
    container.appendChild(divE1)
}

function getColor(){
    function color(){
        let hex = random(150).toString(16)
        return hex.padStart(2,"0")
    }
    return "#"+color()+color()+color()
}

function checkAllPopped(){
    if(popped===25){
        let message = document.querySelector(".zero-balloon")
        message.style.display = "block"
        container.innerHTML = ''
    }
}

function random(number){
    let val = Math.floor(Math.random()*number)
    return val;
}


resetGame.addEventListener("click",function(){
    location.reload()
})