//


function type_Of_Operator_Function() {
    //step1: create variable s of diffenent types;
    let name ="Narayana";//string data type
    console.log(name);
    let age = 33;//number data type
    let awakened = true; //boolean data type 
    let knowledge = {path:"Jnana", stage: "Vichara"}; //object
    let elements = ["Fire", "Water", "Air"]; //array



    //step2: build the message
    let message = "knowing the essence through the typeof \n\n";
    message+= `name => ${typeof name}\n`;
    message+= `age => ${typeof age}\n`;
    message+= `awakened => ${typeof awakened}\n`;
    message+= `knowledge => ${typeof knowledge}\n`;
    message+= `elements => ${typeof elements}\n`;
    message+="Awareness identifies forms , yet remains beyond all forms and types..";

    //step3: display dynamically
    const display = document.getElementById("typeCheck");
    display.innerText = message;



    //step4: js animation
    display.style.transition= "all 2s ease";
    display.style.color= "#00ffff";
    display.style.textShadow= "0 0 15px #00ffcc";


}


//show infinity function:

function showP_Infinity() {
    //step 1 : create a number larger than javascript can handle.
    let infiniteValue = 2E310;//this means 2 x 10^310, which is beyond js world.

    // step 2: create the message..
    let message = 
        `The result is ${infiniteValue}\n\n `+
        `Explanation: \n` +
        `Javascript uses floating point numbers. \n`+
        `When a number is too large it becomes Infinity.\n`+
        `Infinity means a value beyond measureable limit.`

    //step3: display it on the page .
    const output = document.getElementById("positiveInf");
    output.innerText = message;

    //step 4: animate..(noNO just color style..)
    output.style.color = "#00ffcc";
    output.style.textShadow = "0 0 20px #00ffff";



}

function showN_Infinity() {
    //step 1 : create a number larger than javascript can handle.
    let negativeinfiniteValue = -3E310;//this means 2 x 10^310, which is beyond js world.

    // step 2: create the message..
    let message = 
        `The result is ${negativeinfiniteValue}\n\n `+
        `Explanation: \n` +
        `Javascript uses floating point numbers. \n`+
        `When a number is too small, it becomes negative-Infinity.\n`+
        `Negative Infinity means a value endlessly decreasing beyond measure.`

    //step3: display it on the page .
    const output = document.getElementById("negativeInf");
    output.innerText = message;

    //step 4: animate..(noNO just color style..)
    output.style.color = "#ff4444";
    output.style.textShadow = "0 0 15px #ff2222";
}

//function to show a true result:
function showTrueResult() {
    let comparison = 10 > 2; // true statement because 10 is technically greater than 2;
    let explanation = comparison
        ? "True - 10 is greater than 2."
        : "False - this should not be  happening if i am living in this dream..";

    const result = document.getElementById("trueResult");
    result.innerText = `Result : ${comparison}\n${explanation}`;

    //display
    result.style.transition = "color 1.5s ease, text-shadow 2s ease";
    result.style.color = "#00ff66";
    result.style.textShadow = "0 0 15px #00ff99";
    result.animate([{opacity: 0.7},{opacity: 1}],{duration: 1200, iterations: 1 });


}
//function to show a false result:
function showFalseResult() {
    let comparison = 5 > 15; // false because 5 is less than 15 //
    let explanation = comparison
        ? "True - the statement is not true at all ."
        : "False - this is a false statement as 5 is less than 15.";

    const result = document.getElementById("falseResult");
    result.innerText = `Result : ${comparison}\n${explanation}`;

    //display
    result.style.transition = "color 1.5s ease, text-shadow 2s ease";
    result.style.color = "#ff4444";
    result.style.textShadow = "0 0 15px #ff0000";
    result.animate([{opacity: 0.7},{opacity: 1}],{duration: 1200, iterations: 1 });

}

//console.log
//builtin method to send message to browser console mainly for debugging the code..
console.log(2+2);
console.log(3+3);
console.log(name);
let name1 = "gam";
console.log(name1);


function runConsoleDemo() {
    console.log("hello from absolute");
    console.log("Lets do few calculations");

    //math 
    console.log("2 + 2 =  ", 2+2);
    console.log("5 * 3 = ", 5*3 );

    //boolean comparison
    console.log( " 10 greater than 2 true or false???", 10>2);
    
    //variables
    let name2 ="phi";
    console.log("the name stored  to display here for this part of the test is : ", name2);

    //a mini conditional
    let score = 8;
    if (score > 5) {
        console.log("passed the test");        
    }
    else {
        console.log("failed");
    }

    //final friendly message
    console.log("All console messages printed successfully by your grace!!!");

}

function checkEEETrue() {
    console.log("checkEEETrue");
    let comparison = (10 + 5) == 15; //true because 15 == 15;
    const result = document.getElementById("trueEEEresult");
    
    result.innerText =`Result: ${comparison}\n 10 + 5 == 15.`;
    result.style.color = "#00ff66";
    result.style.textShadow = "0 0 15px #00ff99";
    result.animate([{opacity:0.7},{opacity: 1}],{duration: 1200, iterations: 1});

}

function checkEEEFalse() {
    console.log("checkEEEFalse");
    let comparison = (3 == 11);// false statement as 3 is not equal to 11 in this false world..
    const result = document.getElementById("falseEEEresult");

    result.innerText =  `Result: ${comparison}\n 3 == 11 is false as absolutely 3 and 11 hold distinct values and one cannot become to equal to other in this contextual fake world..*gam*..`;
    result.style.color = "#ff4444";
    result.style.textShadow = "0 0 15px #ff0000";
    result.animate([{opacity: 0.7}, {opacity: 1}], {duration: 1200, iterations: 1});

}