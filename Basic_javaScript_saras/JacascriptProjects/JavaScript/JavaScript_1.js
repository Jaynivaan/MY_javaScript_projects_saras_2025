function mood_Function() {
    var mood = document.getElementById("Mood_Input").value;
    var message;

    switch(mood){
        case "angry": 
            message = "Pause. Breathe deeply.Awareness watches the flame not the fuel.";
            break;
        case "tired" :
            message = "Rest in stillness , Even stillness is sacred action service";
            break;
        case "grateful":
            message = "Gratitude expands awareness.Offer it to all beings..";
            break;
        case "lost":
            message = "You are never lost. Awareness was never bound to a path.";
            break;
        case "calm": 
            message = "Remain the ocean not the wave - awareness is your true nature.";
            break;
        default: 
            message: "Unknown Mood. Observe it without naming. Awareness holds even this.";
            
    }
    document.getElementById("Output").innerHTML = message;
}

//getElementByClassName lesson 
function shiftAwareness() {
    //Collect all elements with the class name "awareness".
    let layers = document.getElementsByClassName("awareness");

    //loop through each one and update its inner text..
    for (let i = 0; i< layers.length; i++) {
        layers[i].innerHTML = "i am pure awareness - witnessing all forms dancing or not dancing.";

    }
}

//canvas  element lesson 
//access the canvas
const canvas = document.getElementById("awarenessCanvas");
const ctx = canvas.getContext("2d");

//Draw a glowing circle (symbol of awareness)
ctx.beginPath();
ctx.arc(250, 125, 80, 0, 2 * Math.PI);
ctx.strokeStyle = "#00ffff";
ctx.lineWidth = 5;
ctx.shadowBlur = 20;
ctx.shadowColor = "#00ffff";
ctx.stroke();

//add inner text
ctx.font ="20px sans-serif";
ctx.fillStyle ="#ffffff";
ctx.textAlign ="center";
ctx.fillText("I am Awareness" , 250, 130);


