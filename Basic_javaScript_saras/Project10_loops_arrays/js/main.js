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