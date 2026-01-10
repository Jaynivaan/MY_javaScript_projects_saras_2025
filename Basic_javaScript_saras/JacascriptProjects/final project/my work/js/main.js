

//get the span where  the current year to be displayed.
const year = document.getElementById("year");
//insert the current year into the footer
year.textContent = new Date().getFullYear();


//get the contact modal element
const modal = document.getElementById("contactModal");


//open the contactModal
function openContact() {
    modal.style.display = "grid";
    modal.setAttribute("aria-hidden", false); // htis make the modal accessible..
}

//close the contactModal
function closeContact() {
    modal.style.display="none";
    modal.setAttribute("aria-hidden", true);    
}

//close modal when clicking ooutside
//ie, if user clicks outside the form window then modal will close
modal.addEventListener("click", function(event){
    if (event.target===modal){
        closeContact();
    }
});

//close modal with esc key
document.addEventListener("keydown", function(event) {
    if( event.key==="Escape"){
        closeContact();
    }
});

//hero gif auto slideshow

//Get the hero background image element
const heroGif = document.getElementById("heroGif");

//list of all the hero gifs stored inside the assets
const heroGifs= [

    "assets/bandw_prism_waves.gif",
    "assets/dream.gif",
    "assets/elevator_well_illusion.gif",
    "assets/gelloinsideview.gif",
    "assets/skate_slope_illusion.gif",
    "assets/time.gif",
    "assets/wave.gif"  

]

//keep track of which gif is currently shown
let heroIndex = 0;

//change the hero gif every four seconds
setInterval(function(){
    //safety check: if the image element does exist stop.
    if (!heroGif) return;
    //move to the next gif
    heroIndex++;
    //if we reach the end of the array, start again from the first gif
    if  (heroIndex >= heroGifs.length) {
        heroIndex = 0;
    }
    //update the image source to the next gif
    heroGif.src= heroGifs[heroIndex]

},4000);