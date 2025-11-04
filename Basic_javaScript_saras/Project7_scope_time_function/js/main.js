//global variables- universal awareness
var awareness = "I am aware of all functions";

function showGlobalScope() {
    const output = document.getElementById("output");
    output.textContent="";
    output.textContent += `Global Thoughts Access: \n\n`;
    //both inner funcitons can see the global variable;;
    output.textContent +=  `Function 1 sees: "${awareness}"\n`;

    function innerReflection() {
        output.textContent += `Function 2  also sees : "${awareness}"\n`;
    }
    innerReflection();
    output.textContent += `\n BECAUSE AWARENESS WAS DECLARED OUTSIDE ALL THE FUNCTIONS, ITS SO GLOBAL.`;
}

//LOCAL VARIABLE- EXIST ONLY WITHIN ITS MIND(FUNCTION)
function showLocalScope() {
    const output  = document.getElementById("output");
    output.textContent = "";

    output.textContent += `Local Thoughts Access: \n\n`;
    //
    function ego() {
        let egoThought = "I am Thinking...";
        output.textContent += `Inside ego(): ${egoThought}\n`;        
    }
    ego();

    try{
        //trying to access local variables outside its scope
        output.textContent += `Outside ego(): {$egoThought}\n`;
    }catch(error) {
        output.textContent += `Cannot Access 'egoThought' outside - Error: ${error.message}\n`;
    }
    output.textContent += `\n The 'egoThought' is private; \nit dissappears once the ego identity vanishes.. \n it is solely based on  the desires and tendencies \n which are \n tied to that ego identity..`;    
}

//intentional error + console debugging

function showErrorScope() {
    const output = document.getElementById("output");
    output.textContent = "";
    output.textContent += `Debugging with console.log():\n\n `;
    try{
        console.log(10 + notDefinedVar); //Intentional reference error        
    } catch(error) {
        output.textContent += `Caught error: ${error.message}\n`;        
    }
    output.textContent += `\n Open DevTools (F12 ➡️console tab) to see detailed trace.\n`;
    console.log("Debugging: attempting to add 'notDefinedVar' which doesnt exist*gam*.");
}