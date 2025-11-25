//dictionary assignment\
//a dictionary is a collection of keyvalue  pairs (KVPs).
//Here, each key reveals one aspect of divine creation.

//Step 1: Create the dictionary Object:
function my_DictionaryFunction() {
    var Creation ={              
        Sun: "Illumination",
        Moon: "Reflection",
        Fire: "Transformation",
        Water: "Purity",
        Air: "Movement",
        Earth: "Stability",
        Ether:  "Awareness"
    };

    //step 2 : Randomly reveal a key for that we creating var Keys and var randomKey ,, var randomKey is computed usngi var Key aiding hte fo
    var Keys = Object.keys(Creation);
    var randomKey =Keys[Math.floor(Math.random() * Keys.length)];

    //Step 3: Access he corresponding value using dot or bracket notation.
    var message = 
        "Key: " + randomKey + "\n" +
        "Value: " + Creation[randomKey] + "\n\n" +
        "Transformation is the act  of awareness turning matter into absolute. ";

    //Step 4: Display it onthe webpage
    document.getElementById("Dictionary").innerText = message;
    document.getElementById("Dictionary").style.color="crimson";
    document.getElementById("Dictionary").style.text
    document.getElementById("Dictionary").style.transition ="color 3s ease";



}

function delete_Last_Item() {
    //step1: Create a symbolic dictionary
    const elements ={
        fire: "Transformation",
        Water: "Purity",
        Air: "Movement",
        Earth: "Stability",
        Ether: "Awareness"
    };

    //step 2: Get all keys Object properties..
    const keys = Object.keys(elements);

    //step3: Identify the last key to delete
    const lastKey = keys[keys.length-1];
    const deletedValue= elements[lastKey];

    //step4: perform the deletion
    delete elements[lastKey];

    //step5: create message showing deletion and whats left..
    let message =`Deleted Key: ${lastKey}\nValue was: ${deletedValue}\n\n`;
    message += "Remaining Elements: \n";

    for (let key in elements) {
        message+= `${key} => ${elements[key]}\n`;

    }
    //step 6: display result on screen
    const display = document.getElementById("del");
    display.innerText = message;

    //step 7: addd simplay visual effect
    display.style.transition ="all  1.5s ease";
    display.style.color= "crimson";
    display.style.fontSize = "18px";
    display.style.textShadow = "0 0 10px red";

    ///step8: fade and reappear
    display.style.opacity = "0.3";
    setTimeout(() =>{
        display.style.opacity ="1";
        display.style.color ="#00ffb3";
        display.style.textShadow = "0 0 15px #00ffaa";

    },1500);
}