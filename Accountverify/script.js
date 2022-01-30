const codes = document.querySelectorAll(".code")

codes[0].focus()

codes.forEach((code,idx)=>{
    code.addEventListener("keydown",(e)=>{
        const keyPressed = e.key

        if(keyPressed>=0 && keyPressed<=9){
            codes[idx].value=''
            setTimeout(()=>codes[idx+1].focus(),10)
            // codes[idx+1].focus()
        }else if(keyPressed==="Backspace"){
            setTimeout(()=>codes[idx+1].focus(),10)
        }
    })
})