let displayf = document.getElementById("display")

let buttonsx = Array.from(document.getElementsByClassName("btn"))

// function clickonx(btnx){
//     btnx.addEventListener("click",(x)=>{
//         switch(x.target.innerText){
//             case 'C':
//                 displayf.innerText = ""
//                 break
//             case '+':
//                 displayf.innerText = displayf.innerText.slice(0,-1)
//                 break
//             case '=':
//                 displayf.innerText = eval(displayf.innerText)
//                 break
//             default:
//                 displayf.innerText = display.innerText+x.target.innerText
//         }
//     })
    
// }
// console.log(buttonsx)

// buttonsx.map(abc=>clicklonx(abc))

function firstFunction(btnx){
    btnx.addEventListener("click",(x)=>{
        console.log(x)
        switch(x.target.innerText){
            case 'C':
                displayf.innerText = ""
                break
            case '':
                displayf.innerText = displayf.innerText.slice(0,-1)
                break
            case '=':
                try{
                    displayf.innerText = eval(displayf.innerText)
                }
                catch{
                    displayf.innerText="error"
                }
                break
            default:
                displayf.innerText = displayf.innerText + x.target.innerText
                break
        }
    })
}

console.log(buttonsx)

function isOpx(opx){
    if(opx === "+" || opx==="-" || opx==="*" || opx==="/")
        return true
    return false
}

function clickingx(clickedx){
    if(displayf.innerText===''){
        if(clickedx!=0){
            displayf.innerText = displayf.innerText+clickedx
        }
    }
    else{
        var innerTextx = displayf.innerText
        var lenx = innerTextx.length

        var lastcharx = innerTextx[lenx-1]

        if(isOpx(lastcharx)===true){
            if(clickedx!='0'){
                if(isOpx(clickedx)===true){
                    displayf.innerText = displayf.innerText.slice(0,-1)
                }
                displayf.innerText = displayf.innerText+clickedx
                }
            }
            else{
                displayf.innerText = displayf.innerText+clickedx
            }
        
    }
}

function evalx(){
    try{
        displayf.innerText = eval(displayf.innerText)
    }
    catch(err){ 
        console.log(err)

    }
}

function clearx(){
    displayf.innerText = ""
}

function backx(){
    displayf.innerText = displayf.innerText.slice(0,-1)
}





