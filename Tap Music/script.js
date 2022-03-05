window.addEventListener('load',() => {
    const sounds = document.querySelectorAll('.sound')
    const pads = document.querySelectorAll(".pads div")
    const balls = document.querySelector(".balls")
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];
    pads.forEach((pad, index) => {
        pad.addEventListener("click",function(){
            sounds[index].currentTime = 0
            sounds[index].play();
            createBalls(index)
            // resume(index)
        });
    });

    const createBalls = index => {
        const Ball = document.createElement('div');
        balls.appendChild(Ball)

        Ball.style.backgroundColor = colors[index];
        Ball.style.animation = `jump 1s ease`;
        Ball.addEventListener("animationend",function(){
            balls.removeChild(this);
        })

    }
    function resume(index){
        pads.forEach((pad, index) => {
            pad.addEventListener("click",function(){
                sounds[index].currentTime = 0
                sounds[index].play();
                createBalls(index)
                resume(index)
            })
    
   
    });
}
})