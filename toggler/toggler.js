const toggles= document.querySelectorAll(".toggle")

const age = document.querySelector("#age")
const health = document.querySelector('#health')
const wealth = document.querySelector('#wealth')

toggles.forEach((toggle)=>toggle.addEventListener("change",(event)=>{
    console.log(event.target)
    transitionFunc(event.target)
}))

function transitionFunc(toggledOption){
    if(age.checked && health.checked && wealth.checked){
        if(age===toggledOption){
            wealth.checked=false
        }
        if(health===toggledOption){
            age.checked=false
        }
        if(wealth===toggledOption){
            health.checked=false
        }
    }
}