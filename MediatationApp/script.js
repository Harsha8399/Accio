    const song=document.querySelector(".song")
    const play=document.querySelector(".play")
    const outline=document.querySelector(".moving-outline circle")
    const video=document.querySelector(".vid-container video")

    //sounds

    const sounds=document.querySelectorAll('.sound-picker button')
    //Time display

    const timeDisplay=document.querySelector(".time-display")
    const timeSelect=document.querySelectorAll(".time-select button")
    //get the length of outline
    const outlineLength=outline.getTotalLength();
    //console.log(outlineLength)
    //Duration
    let fakeDuration = 600;

    outline.style.strokeDasharray=outlineLength;
    outline.style.strokeDashoffset=outlineLength;

    //pick diff sounds
    sounds.forEach(sound =>{
        sound.addEventListener('click',function(){
            song.src=this.getAttribute('data-sound')
            video.src=this.getAttribute('data-video')
             checkPlaying(song)
        })
    })

    //Play sounds

    play.addEventListener('click',()=>{
        checkPlaying(song)
    })
//select sound

timeSelect.forEach(option=> {
    option.addEventListener('click',function(){
        fakeDuration = this.getAttribute('data-time')
        timeDisplay.textContent=`${Math.floor(fakeDuration/60)}:${Math.floor(fakeDuration%60)}`
    })
})

    //stop and play
    const checkPlaying=song => {
        if(song.paused){
            song.play();
            video.play();
            play.src="icons/pause.svg"
        }else{
            song.pause();
            video.pause();
            play.src="icons/play.svg"
        }
    }
//Animate circle
song.ontimeupdate=() => {
    let currentTime=song.currentTime;
    let elapsed = fakeDuration-currentTime;
    let seconds=Math.floor(elapsed % 60);
    let minutes=Math.floor(elapsed /60);

    //animate circle
    let progress=outlineLength-(currentTime/fakeDuration) * outlineLength;
    outline.style.strokeDashoffset=progress

    //Animate text
    timeDisplay.textContent=`${minutes}:${seconds}`
    if(currentTime>=fakeDuration){
        song.pause();
        song.currentTime=0;
        play.src="icons/play.svg"
    }
}

