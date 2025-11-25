//constructor: defines the structure of a ride decision;
function Ride (height) {
    this.height = height;
    this.check = function() {
        return (this.height<52)
        ? "congratulations sir, You are shorter than eligible height for the ride..awareness is actievely grounding..kindly enjoy other rides that suit appropriately sir.."
        : "sir , you are tall enough .. awareness ready enough to rise through the ride..congratulations";
    };
}

function checkRide() {
    let height = document.getElementById("Height").value;
    let ride = new Ride(height);//object created from constructor
    let message = ride.check(); //call method

    const el = document.getElementById("Ride");
    el.innerHTML=message;
    el.style.transition = "color 1.5s ease, text-shadow 1.5s ease";

    if (height >= 52) {
        el.style.color = "#00ff66";
        el.style.textShadow= "0 0 15px #00ff99";


    }else{
        el.style.color = "#ff4444";
        el.style.textShadow = "0 0 15px #ff0000";
    }
    el.animate([{opacity: 0.6},{opacity: 1}],{duration: 1200, iterationss: 1});

}

///
function checkAwareness() {
    let age = document.getElementById("Age").value;

//ternary operator
    let message = (age < 18)
        ? "you are still growing  - Observe, learn,  and prepare with patience."
        : "you are mature enough to act to vote responsibility.";
    const el = document.getElementById("voterE");
    el.innerHTML = message;

//simple glow 
    el.style.transition = "color 1.2s ease , text-shadow 1.2s ease";
    if (age >= 18) {
        el.style.color = "#00ff66";
        el.style.textShadow="0 0 15px #00ff99";
    } else {
        el.style.color = "#ff4444";
        el.style.textShadow = "0 0 15px #ff0000";
    }
            el.animate([{opacity: 0.7},{opacity: 1}], {duration: 1200, iterations: 1 });
}

//keywords and constructors

//constructor function
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

//creating new objects using  the "new" keyword
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "TrailHawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//function to display Eriks details:
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year +"from maker "+ Erik.Vehicle_Make +".";
}

//New keyword assignment function
//first constructor then function
//constructor
function AwarenessState(name, color, essence) {
    this.name = name;
    this.color = color;
    this.essence = essence;
    
    this.describe = function() {
        return `A new Awareness arises -"${this.name}" radiating ${this.color} light, carrying the essence of  ${this.essence}.  `;        
    };
}

//fuction triggered on button onclick
// this function will create an awareness
function newKeywordAssignmentFunction() {
    const names = ["Peace", "Focus", "Surrender", "Joy", "Compassion"];
    const colors = ["Golden", "Silver", "Emerald", "Indigo", "Rose"];
    const essences = ["clarity", "stillness", "gratitude", "freedom", "truth"];

    const randomName = names[Math.floor(Math.random()*names.length)];
    const randomColor = colors[Math.floor(Math.random()*colors.length)];
    const randomEssence = essences[Math.floor(Math.random()*essences.length)];

    const state = new AwarenessState(randomName,randomColor,randomEssence);
    const el = document.getElementById("New_and_this");

    el.innerHTML = state.describe();
    el.style.color ="#00ffaa";
    el.style.transition = "color 2s ease, text-shadow 1.2s ease";
    el.style.testShadow = "0 0 15px #00ff99";    

}

//nested functon

function meditate() {//the main outer function that reflects the journey.
    //GET THE ELEMENTS  WE 'LL UPDATE THAT THEN LATER..
    //el = button we click ( we will change its text and animate it.)
    //trace = the output area where we print the each step

    const el = document.getElementById("Nested_Function");
    const trace = document.getElementById("trace");

    //defensive check so to make errors friendly even when ids are wrong
    if (!el || !trace) {
        console.warn("Missing #Nested_Function or #trace in the HTML.");
        return;
    }else {
        console.log("*gam*");
    };

    ////set the noise level ==ie, how many layers until calm.
    //total is kept so to show the progress eg: 2/7, 3/7 etc..
    let agitation = 7; // 
    const total = agitation;

    //2. oneline in line animation setup no extrenal css here
    //plan is to animate the transform/color and shadow on each step.
    el.style.transition = "transform .35s ease, color .35s ease, text-shadow .35s ease";

    //define  a ((((nested function)))) inside the meditate();
    //because it is nested, it can see el, trace , total etc..
    //this function is also recursive it calls itself with a smaller level..

    function reflect(level) {
        //calculate progress ffor the crrentlevel.
        //cleared = how many layers already dissolved...
        const cleared = total - level;

        //build simple visual bars
        //noisebar shows the remaining noise; calm bar shows the cleared space..
        const noiseBar ="🖤".repeat(Math.max(level, 0));
        const calmBar = "💛".repeat(Math.max(cleared, 0));
        //update the button text(current depth + a mini bar)
        el.innerHTML = ` Depth ${cleared}/${total} - noise: ${noiseBar} calm: ${calmBar} `;

        //append a traceline (so uou can read the journey...)
        //\n keeps each step on its line..

        trace.textContent += `step ${cleared}: witnessing..\n`;

        //little animation pulse plus color swap on each step
        el.style.transform  = `scale(${1 + level * 0.02})`;
        el.style.color = level % 2 ? "#ff9f43" : "#7dd3fc";
        el.style.textShadow = level % 2 ? "0 0 12px rgba(255, 159, 67, .5)" :"0 0 12px rgba(125, 211, 252, .5)";

        //BASECASE= WHEN LEVEL HIT ZERO WE STOP TO STILLNESS;
        if (level <= 0) {
            el.innerHTML ="🕊️ Stillness (silence Observed)";
            el.style.transform = "scale(1)";
            el.style.color = "#a7f3d0";
            el.style.textShadow = "0 0 14px rgba(167, 243, 208, .6)";
            trace.textContent += "➡️quiet.\n";
            return;
        }
        //recursive step wait a moment so that you can see the change, 
        // then call the same function with level -1    .
        //this is the heart of nested recursion .. smaller problem but same function.
        setTimeout(() => reflect(level -1 ), 450);
    }
    //reset the trace area and start the innertrip
    trace.textContent = ""; // clean slate for a fresh run
    reflect(agitation); //first call that calls the chain..
    
}