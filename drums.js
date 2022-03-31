
//button-----------------------------------------
const tom = document.getElementById("tom");
const tink = document.getElementById("tink");
const snare = document.getElementById("snare");
const ride = document.getElementById("ride");
const openhat = document.getElementById("openhat");
const kick = document.getElementById("kick");


//Music
const soundTom = document.getElementById("musicTom");
const soundTink = document.getElementById("musicTink");
const soundSnare = document.getElementById("musicSnare");
const soundRide = document.getElementById("musicRide");
const soundOpenhat = document.getElementById("musicOpenhat");
const soundKick = document.getElementById("musicKick");

//keydown = sound and color being generated----------------------------

//keyA
document.addEventListener("keydown", (event) => {
    if (event.key == "a" || event.key == "A") {
        soundTom.src = "sounds/tom.wav";
        tom.style.background = "#FCA311";
        p.style.fontSize = "12px";
        h2.style.fontSize = "30px";
       
    } 
});

//keyS
document.addEventListener("keydown", (event) => {
    if (event.key == "s" || event.key == "S") {
        soundTink.src = "sounds/tink.wav";
        tink.style.background = "#FCA311";
        p_2.style.fontSize = "12px";
        h2_2.style.fontSize = "30px";
        
    } 
});


//KeyD
document.addEventListener("keydown", (event) => {
    if (event.key == "d" || event.key == "D") {
        soundSnare.src = "sounds/snare.wav";
        snare.style.background = "#FCA311";
        p_3.style.fontSize = "12px";
        h2_3.style.fontSize = "30px";
        
    } 
});


//KeyF
document.addEventListener("keydown", (event) => {
    if (event.key == "f" || event.key == "F") {
        soundRide.src = "sounds/ride.wav";
        ride.style.background = "#FCA311";
        p_4.style.fontSize = "12px";
        h2_4.style.fontSize = "30px";
        
    } 
});


//KeyG
document.addEventListener("keydown", (event) => {
    if (event.key == "g" || event.key == "G") {
        soundOpenhat.src = "sounds/openhat.wav";
        openhat.style.background = "#FCA311";
        p_5.style.fontSize = "12px";
        h2_5.style.fontSize = "30px";
        
    } 
});



//KeyH
document.addEventListener("keydown", (event) => {
    if (event.key == "h" || event.key == "H") {
        soundKick.src = "sounds/kick.wav";
        kick.style.background = "#FCA311";
        p_6.style.fontSize = "12px";
        h2_6.style.fontSize = "30px";
        
    } 
});

//----------------------------------------------------------------





//keyup = no color being generated---------------------------------------

document.addEventListener("keyup", () => {
    //KeyA
    h2.style.fontSize = "1.5em";
    p.style.fontSize = "1.2rem";
    tom.style.background = "#E5E5E5";
    //KeyS
    h2_2.style.fontSize = "1.5em";
    p_2.style.fontSize = "1.2rem";
    tink.style.background = "#E5E5E5";
    //KeyD
    h2_3.style.fontSize = "1.5em";
    p_3.style.fontSize = "1.2rem";
    snare.style.background = "#E5E5E5";
    //KeyF
    h2_4.style.fontSize = "1.5em";
    p_4.style.fontSize = "1.2rem";
    ride.style.background = "#E5E5E5";
    //KeyG
    h2_5.style.fontSize = "1.5em";
    p_5.style.fontSize = "1.2rem";
    openhat.style.background = "#E5E5E5";
    //KeyH
    h2_6.style.fontSize = "1.5em";
    p_6.style.fontSize = "1.2rem";
    kick.style.background = "#E5E5E5";
    

})