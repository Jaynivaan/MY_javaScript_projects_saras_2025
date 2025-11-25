//functions assignment//
//jsFunctions project2
//created by jayakrishnanParameswaranKutty

//step1: Define the function.
function changeText() {
    //step 2 create two variables
    let part1 = "this is the first part of message, ";
    let part2 = "this is the second part !";
    //step 3 combine the two parts..
    let fullMessage =part1 + part2;
    //setp4 Display the message inside hte paragraph element
    document.getElementById("paragraph").innerHTML=fullMessage;

    document.getElementById("paragraph").style.color="blue";
    
}

function joinText() {
    //step1: create a variable with a sentence
    var text = "I am learning";

    //step2 : use += operator to add more text
    text+= "javaScript step by step. ";
    text+= "Each concept is becoming clear!"

    //step3: display the combined string inside the paragraph element that we point using id.
    document.getElementById("result").innerHTML = text;
    document.getElementById("result").style.color = "blue";
    document.getElementById("result").style.transition = "color 1s ease";
}