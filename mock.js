let usernames = []
async function posts(){
    const response =  await fetch("https://jsonplaceholder.typicode.com/users")        
    const data = await response.json();
    console.log(data)

    data.forEach(element => {
        // usernames.push(JSON.stringify(element.name))
        const usernames = document.createElement("div")
        usernames.innerText = element.name
        document.body.appendChild(usernames)
    });
    return JSON.stringify(usernames)
}


usernames.addEventListener("mouseover",function(){
    const details = document.createElement("details")
    details.innerText = 
    
})






// async function Write(){
//     const ids =   await posts()
//     const p = document.querySelector("p")
//     // p.innerText = ids
//     p.innerHTML = ids
// }
// Write()

// const p = document.querySelector("p")
// async function names(){
//     p.innerText = await (posts())    
// }


posts()
// names()
