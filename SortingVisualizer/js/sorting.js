let arraysize = document.querySelector("arr_size")

arraysize.addEventListener("input",() =>{
    createNewArray(parseInt(arraysize.value))
})

let array = []
createNewArray()
function createNewArray(noOfBars = 50){
    deleteChild()
    array = []
    for(let i=0;i<noOfBars ;i++){
        array.push(Math.floor(Math.random()*250)+1)
    }
    const bars = document.querySelector('#bars')
    for(let i=0;i<noOfBars;i++){
        const bar = document.createElement("div")
        bar.style.height = `${array[i]*2}px`
        bar.classList.add("bar")
        bar.classList.add("flex-item")
        bar.classList.add(`barNo${i}`)
        bars.appendChild(bar)
    }
}

function deleteChild(){
    const bars=document.querySelector('#bars')
    bars.innerHTML = ''
}

const newArray = document.querySelector('.newArray')

newArray.addEventListener('click',function() {
    enableSortingBtn()
    enableSizeSlider()
    createNewArray(arraysize.value)
})

let delay = 270;
let delayElement = document.querySelector('#speed_input')

delayElement.addEventListener('input',() => {
    delay = 320 - parseInt(delayElement.value)
})

function waitForme(milisec){
    return new Promise(resolve => {
        setTimeout(()=>{resolve('')},milisec)
    })
}

function swap(ele1,ele2){
    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height
    ele2.style.height = temp
}

function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true
    document.querySelector(".insertionSort").disabled = true
    document.querySelector(".mergeSort").disabled = true
    document.querySelector(".selectionSort").disabled = true
}

function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false
    document.querySelector(".insertionSort").disabled = false
    document.querySelector(".mergeSort").disabled = false
    document.querySelector(".selectionSort").disabled = false
}

function enableSizeSlider(){
    document.querySelector('#arr_size').disabled = false
}
function disableSizeSlider(){
    document.querySelector('#arr_size').disabled = true
}

function enableNewArrayBtn(){
    document.querySelector('.newArray').disabled = false
}
function disableNewArrayBtn(){
    document.querySelector('.newArray').disabled = true
}