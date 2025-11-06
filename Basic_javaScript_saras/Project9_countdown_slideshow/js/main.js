//countdown to silence
///kindly imagine each tick of timer is symboizing one thought dissolving..
//when timer reaches 0.. mind meets stillness..

function countdown() {
    let time = parseInt(document.getElementById("seconds").value);
    const timer = document.getElementById("timer");
    const reflection = document.getElementById("reflection");

    if( isNaN(time) || time <= 0) {
        timer.textContent = "Enter a valid number of  seconds.";
        return;
    }
    reflection.textContent= "sir, Kindly focus inward.. each second fades like a wave returning to the Ocean.";
    const interval = setInterval(() => {
        timer.textContent = `${time} second${time===1 ? "" : "s"} remaining... `;
        
        //when reaches zero
        if(time <= 0) {
            clearInterval(interval);
            timer.textContent = "Silence reached - Time dissolved.";
            reflection.innerHTML = "When time ceases, awareness alone remains . ";
            document.body.style.background = "radial-gradient(circle at center, #010, #000 )";
        }
        time--;
    },1000);
}