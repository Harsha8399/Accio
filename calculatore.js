var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")
var operator = document.getElementById("operator")
var result = document.getElementById("result")
var button = document.getElementById("btn")

function calculate(){

    if(num1.value===''){
        alert("enter num1")
    }
    if(num2.value===''){
        alert("enter num2")
    }

    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var op = operator.value
    if(operator.value==="+"){
        result.value = parseInt(num1.value)+parseInt(num2.value)
    }else if(op==="-"){
        result.value = n1-n2
    }else if(op==="*"){
        result.value=n1*n2
    }
    else{
        result.value=n1/n2
    }

}
button.addEventListener("click",calculate)