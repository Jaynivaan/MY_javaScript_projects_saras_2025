//loop

function call_Loop() {
    var text = "";
    var i = 1; ///starting point
    
    while ( i <= 10) {//condition: repeated until i >10
        text += "iteration number:  " + i + "<br>";
        i++;//increment by 1
    }
    document.getElementById("loop").innerHTML = text;
}

let text= "lekshmisnair";
let length = text.length;
console.log(text);
console.log(length);

function showLength() {
    let message = "conciousness coding brings awareness.";
    let lengthOfMessage = message.length;

    document.getElementById("lengthDisplay").innerHTML =
        "The string is : <em>" + message + "</em><br>" +
        "It has <strong>"+ lengthOfMessage + "</strong> characters.";
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content ="";
var Y ;
function for_Loop () {
    for (Y = 0; Y<Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";        
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//array
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating" ;
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

//const 
 function constant_function() {
    //step 1: Create an object with the const keyword.
    const Musical_Instrument = {
        type: "guitar",
        brand: "Fender",
        color: "black"

    };
    //Step2: Change a property value
    Musical_Instrument.color = "blue"; //the color property is hereby changed from black to blue.

    //Step3: Add a new Property
    Musical_Instrument.price = "$900";

    //Step4: Display combined info 
    document.getElementById("Constant").innerHTML = 
        "The " + 
        Musical_Instrument.color + 
        " " +
        Musical_Instrument.brand +
        " " +
        Musical_Instrument.type +
        " costs " + 
        Musical_Instrument.price + ".";

 }

 //Let 

 function let_function() {
    //Declare a variable using var
    var X = 10;
    document.getElementById("Let").innerHTML = "Outside block: X " + X;

    //creating a block using curly braces
    {
        let X = 25; // new variable, very locally scoped to this curly code block.
        document.getElementById("Let").innerHTML += "<br>Inside block: X = " + X;        
    }

    //After the block, original 'X' still holds its old value
    document.getElementById("Let").innerHTML += "<br> Outside Again: X = " + X;
 }


 //return function
 function return_Name() {
    var name = lekshmi;
    return "hello" + name + Math.PI + " "+ "welcome to awareness zone.!!!";  
    document.getElementById("return").innerHTML = return_Name();
   
 }
 

 //core object : one seeker in programe
 let seeker = {
    name: "Jay",
    programe: 66,
    day:1,
    breaths: 0,
    trialsAccepted: 0,
    temptationsRejected: 0,
    practices: ["Fumigation walk", "VBT breath", "yoga-sutra focus"],

    //method: produce a human digestable summary;\
    summary: function () {
        return `${this.name} . Day ${this.day}/${this.programe}
    Breaths: ${this.breaths}
    Accepted trials: ${this.trialsAccepted}
    Rejections : ${this.temptationsRejected}`;
    }
 };
 //Task1 : display summary (uses the object's method + return)
 function showSummary() {
    document.getElementById("obj").innerText = seeker.summary();    
 }

 //Task 2: update state with let + simple arithmetic
 function addBreaths(n) {
    let add = Number(n);
    seeker.breaths += add;
    showSummary();
 }
 //Task 3: model "trial" choices (accept or reject)
 function toggleTrial(kind) {
    if (kind === "accept") seeker.trialsAccepted++;
    if (kind === "reject") seeker.temptationsRejected++;
    showSummary();
 }

 //task 4: loop over an array and show count (length property)
 function showPractices() {
    let txt = "Practices (" + seeker.practices.length +"): ";
    //while /for -use any;  here a simple for loop
    for(let i = 0; i < seeker.practices.length; i++) {
        txt += (i ? "." : "") + seeker.practices[i];        
    }
    document.getElementById("log").innerText = txt;
 }

 //break point lesson 
 function awarenessScan() {
    let thoughts = ["Peace", "Gratitude", "Clarity", "Calm", "Anger", "Focus", "Joy", "Ego Surge", "Silence", "Love"];
    let log = "Begining morning awareness cycle...\n";

    for (let i=0;
         i < thoughts.length; 
         i++) {
            let current = thoughts[i];

            //skip "Anger" -continue statement
            if (current === "Anger") {
                log += "Skipping reactive thought: " + current + "\n";
                continue;
            }

            // stop completely at "Ego Surge" - break statement
            if (current === "Ego Surge") {
                log += "Awareness cut off - Ego surge detected. Practice ended.\n";
                break;
            }

            log += "Observing: " + current + "\n";
    }

    log+= "\n Scan completed with awareness intact.";
    document.getElementById("output").innerText =  log;
 }