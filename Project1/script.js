const quote_api = "http://api.quotable.io/random"

const timerbox = document.getElementById('timer')
const quoteDisplaybox = document.getElementById('quote-display')
const quoteInputbox = document.getElementById('quoteInput')

async function randomQuote(){
    const response = await fetch(quote_api)
    const data = await response.json()
    return data.content
}



async function newQuote() {
    const quote =  await randomQuote()
    quoteDisplaybox.innerHTML = ''
    quote.split('').forEach(char => {
        const charspan = document.createElement('span')
        charspan.innerText = char
        quoteDisplaybox.appendChild(charspan)
    }) 
    quoteInputbox.value = null
    startTime()
}

// quoteDisplaybox.addEventListener('click',function(){
//     newQuote()
//     this.disabled = true
//     quoteDisplaybox.focus()
// })
quoteInputbox.addEventListener('input',() => {
    if(!counter){
        startTime()
        counter=true
    }
    const arrayQuote = quoteDisplaybox.querySelectorAll('span')
    const inputChar = quoteInputbox.value.split('')
    let correct = true

    arrayQuote.forEach((span,index)=>{
        const character = inputChar[index]
        if(character == null){
            span.classList.remove('correct')
            span.classList.remove('Incorrect')
            correct=false
        }
        else if(character === span.innerText){
            span.classList.add('correct')
            span.classList.remove('Incorrect')
        }
        else{
            span.classList.remove('correct')
            span.classList.add('incorrect')
            correct = false
        }
    })
    if(correct){
        stopTimer()
        newQuote()
    }
})

let counter
function startTime(){
    timerbox.innerText = 0
    counter = new Date()
    setInterval(() => {
        timerbox.innerText = time()
    },1000)
}

function time(){
    return Math.floor((new Date() - counter)/1000)
}

function stopTimer(){
    clearInterval(time);
}

newQuote()






