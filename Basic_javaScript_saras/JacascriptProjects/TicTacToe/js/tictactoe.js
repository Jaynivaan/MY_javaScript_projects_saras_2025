//tictactoe.js

let activePlayer = "X"; // active player tells whose turn it is..
let selectedSquares = [];//this array stores an array of moves. we use this to determine the win conditions..






function placeXorO(squareNumber) {
    if(!selectedSquares.some(element => element.includes(squareNumber))){//this condition ensures the square hasnt been selected already..
        //some() method is used to check each element of the selectSquare array.
        //to see if the it contains the squares number clicked on.
        //this variable retrieves the html elementid htat was clicked..
        let select = document.getElementById(squareNumber);
        //this condition checks whos turn it is..
        if(activePlayer === "X") {
            //if active player is equal to X , the x.png is placed in html
            select.style.backgroundImage = 'url("images/x.png")';
            //active player may only be x or o so, if not x it must be o.
        } else {
            //if active player is equal to o, the o.png is placed in the html..
            select.style.backgroundImage = 'url("images/o.png")';
        }

        //squreNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check any winning conditions.
        checkWinConditions();
        //this condition is for changing the active player.
        if(activePlayer === 'X') {
            //if active player is x change it to "o"
            activePlayer = 'O';
            //if active player is anything other than x
        }else{
            //change the active player to x
            activePlayer = 'X';
        }

        //this function plays placement sound.
        audio('./media/place.mp3');
        //this condition checks to see if it is the computers turn.
        if(activePlayer === 'O'){
            //this function disables clicking for computers turn.
            disableClick();
            //This function waits 1 second before computer places  an image and enables click.
            setTimeout(function(){ computersTurn(); }, 1000);
        }
        // returning true is needed for our computersTurn() to work.
        return true;    

    }
    //this function results in a random square  being selected by the computer.
    function computersTurn() {
        // this boolean is needed for our while loop
        let success = false;
        //this variable stores a random number 0-8;
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already.
        while(!success) {
            //random number between 0-8 is selected
            pickASquare = String(Math.floor(Math.random()*9));
            //if the random number evaluated returns true the square hasnt been selected  yet. 
            if (placeXorO(pickASquare)) {
                //this line calls the functions
                placeXorO(pickASquare);
                //this changes out boolean and ends the loop 
                success = true;
            };
        }
    }
}