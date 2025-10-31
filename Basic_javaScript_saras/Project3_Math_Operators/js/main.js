//project3- MathOperators Assignment
//purpose: To show that even in numbers, unity underlies multiplicity-theAbsoluteTruth.

function addition_Function() {
    //simple additon operation
    var result = 2+2;

    //deeper reflection to allign absolute reality;
    var message = 
        "2 + 2 = " + result +"\n\n" +
        "Just as numbers combine to form a new whole, " +
        "so too does every perception arise from the same source - pure awareness."
    //Display result and insight
    document.getElementById("Add").innerText = message;
    document.getElementById("Add").style.color = "red";
    document.getElementById("Add").style.transitions = "color 2s ease";

}

function subtraction_Function() {
    //simple arithmeatic subtraction operation example;
    var result = 10 - 4;

    //inner reflection- detachment as a necessary practice..
    var message = 
        "10 - 4 = " + result + "\n\n" +
        "When something is taken away, it isnot loss but it is just simply AMPLIFIED SIMPLIFICATION.\n" +
        "subtraction in truth is purification - a blessed peeling away just to see what IS...\n" +
        "when considering Absolute reality - the less you hold is more clearer you see..";

        //display both result and insight 
        document.getElementById("Subtract").innerText = message;
        //style springle
        document.getElementById("Subtract").style.color = "violet";
        document.getElementById("Subtract").style.transitions = "color 1s ease";
}

//multiplication is the expansion of conciousness

function multiplication_Function() {
    var result = 3 * 3;

    var message = 
        "3 x 3 = " + result +  "\n\n" +
        "When one expands onto many ,the infinite play as creation.\n" +
        "Multiplication is the dance of Manifestation- awareness expressing itself through countless forms.";

        document.getElementById("Multiply").innerText = message ;

        document.getElementById("Multiply").style.color = "gold";
        document.getElementById("Multiply").style.transitions = "color 2s ease";
        
}

//Balance and equanimity

function division_Function() {
    var result= 12 / 3 ;

    var message =
        "12 ÷ 3 = " + result + "\n\n"  +
        "Division is not separation but distribution- the sharing act of one single essence as onto many.\n" +
        "considering the nature of Absolute truth of reality .. \n" +
        "Balance is achieved only when the one self is seen equally in all positions .";

    document.getElementById("Divide").innerText = message;

    document.getElementById("Divide").style.color = "brown";
    document.getElementById("Divide").style.transitions = "color 1s ease";


}

function multiOperation_Function() {
    //perform multiple operations
    var result = (1 + 2 ) * 10 / 2 - 5; //=>((1+2)=3 => 3X10=30 => 30/2=15 => 15-5=10)

    //INNER REFLECTION;everything is just one process..

    var message =
        "(( 1 + 2 ) x 10 ÷  2 )- 5 = " + result + "\n\n"+
        "in reality  addition, subtraction, multiplication and division are not different .\n"+
        "they are motions of the same intelligence seeing balance. \n" +
        "The self alone performs every calculation, yet remains unchanged.\n"+
        "Thus all this rough equations resolve backk to the stillness - thevoid beyond numerals.";

    //display
    document.getElementById("Multiop").innerText = message;
    document.getElementById("Multiop").style.color = "purple";
    document.getElementById("Multiop").style.transitions = "color 1s ease";

    

}

function modulus_Operator() {
    //simple modulus calculation
    var remainder = 25 % 4 ;

    //inner wisdom
    var message = 
        "25 % 4 = " + remainder + "\n\n"+
        "The remainder is what stays after division- like karma after  an action. \n"+
        "No action is complete until its impression dissolves in awareness.\n"+
        "When realization dawns, even this remainder the subtlest trace -fades into the infinite";

        //display
    document.getElementById("Modulus").innerText= message;
    document.getElementById("Modulus").style.color = "orange";
    document.getElementById("Modulus").style.transitions="color 1s ease";

}

function negation_Operator() {
    var x = 10;//a positive number..
    var result = -x;// negation turns a positive into a negative value..

    //Spiritual Reflection -and essence of negation..
    var message = 
        "x = " + x + ", applying negation gives " + result +"\n\n"+
        "Negation doesnot destroy; it reveals the opposite side.\n" +
        "In the path of wisdom, this is neti--neti state of beingness.. which means not this , not that. \n"+
        "Through negating Illusions, awareness find what truly IS -the self beyond opposites..";

    document.getElementById("Nethi").innerText = message;
    document.getElementById("Nethi").style.color ="green";
    document.getElementById("Nethi").style.transitions= "color 2s ease";    


}

function increment_Operator() {
    //start value
    var result = 5;
    //increment
    result++;

    //growth in awareness is possible by ongoingly obtaining wisdom..
    var message = 
        "Initial value: 5\n " +
        "After increment(++): " +result + "\n\n" +
        "Increment is the natural ascent of awareness- evolution through experience. \n" +
        "Every +1 in consciousness is not about gain, but expression of clarity. \n" +
        "As awareness increases, it rises  above ignorance- yet remains the same infinite self.";

    //display with color and transition
    document.getElementById("Incre").innerText = message;
    document.getElementById("Incre").style.color ="blue";
    document.getElementById("Incre").style.transitions = "color 2s ease";


}

function decrement_Operator() {
    //start value
    var result = 5;

    //decrement
    result--;

    //reflection: returning back to stillness
    var message =
        "Initial value : 5\n" +
        "After decrement (--): " + result + "\n\n"+
        "Decrement is not a fall , but a surrender- returning to simplicity and eventually stillness..\n"+
        "In Absolute reality , each -1 is purification - a peeling away of illusion.\n"+
        "What remains after reduction is essence- the silent awareness beyond numbers.";

    //display with color and transitions
    document.getElementById("Decre").innerText = message;
    document.getElementById("Decre").style.color ="silver";
    document.getElementById("Decre").style.transition = "color 2s ease";

}

function random_NumberOp() {
    //Generate a random number between 0 and 100
    var illusion = Math.random() * 100;
    var result = illusion. toFixed(2); //keeping it neat with two decimals..

    //spiritual reflection
    var message = 
        "A random number appears: " + result + "\n\n" +
        "It seems without pattern- yet it arises from  the source. \n" +
        "Such is Maya too .. - the apparent chaos with in the perfectorder of consciousness.\n"+
        "Behind randomness lies the rhythm; behind unpredictability lives the pure awareness.";

    document.getElementById("Random").innerText = message;
    document.getElementById("Random").style.color= "indigo";
    document.getElementById("Random").style.transition = "color 2s ease";

}

function math_Object() {
    //how universal order exists behind apparent randomness
    //Rta or the cosmiclawof order governs even the smallest number..

    //here  using different math-object methods
    var randomNum = Math.random() * 100; //the random number function
    var roundedNum = Math.round(randomNum);//rounding to the nearest integer to depict (balance in perception)
    var squareRoot = Math.sqrt(roundedNum);//this will reveal the essence to deliver clarity of perception..
    var sineValue = Math.sin(randomNum); //to show the wave nature of existence..of self and its percieved duality.
    var piConstant = Math.PI;//infinte constant the symbol of devine protection...

    //reflection on order behind numbers
    var message = 
        "Generated random number:  " + randomNum.toFixed(2) + "\n" +
        "Rounded (balance restored): " +roundedNum + "\n"+
        "Square Root (clarity from depth ): " + squareRoot.toFixed(3) + "\n"+
        "Sine wave value (motion of life): " + sineValue.toFixed(3) + "\n"+
        "Pi Constant (infinite perfection): " + piConstant + "\n\n"+
        "Even within randomness , patterns breathes - the Law of Rta.\n"+
        "Every number bows to order, every fluctuation to harmony.\n" +
        "Thus, Math itself  whispers the eternal rhythm of consciousness.";

    //display
    document.getElementById("Rta").innerText = message;
    document.getElementById("Rta").style.color = "darkorange";
    document.getElementById("Rta").style.transition = "color 2s ease";


}