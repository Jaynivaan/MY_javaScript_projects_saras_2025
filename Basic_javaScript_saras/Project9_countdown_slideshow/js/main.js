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

//////////////////////////////////==slide==show///////////////////////////////////////////////////
let slideIndex = 1;
showSlides(slideIndex);

//next/prev controls//
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
//core slide show function

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1 }
    if (n < 1) {slideIndex = slides.length}

    //hide all the slides initially
    for (i=0; i < slides.length; i++) {
        slides[i].style.display ="none";
    }

    //remove is-active from all the dots
    for (i = 0 ; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("is-active", "");
    }
    //show the current slide 
    slides[slideIndex - 1 ].style.display ="block";
    dots[slideIndex - 1].className += " is-active";
}