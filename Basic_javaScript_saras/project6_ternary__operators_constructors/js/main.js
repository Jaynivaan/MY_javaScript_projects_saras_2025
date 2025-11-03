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