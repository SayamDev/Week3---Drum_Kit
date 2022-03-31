
//button
const tom = document.getElementById("tom");
const tink = document.getElementById("tink");


//Music
const soundTom = document.getElementById("musicTom");
const soundTink = document.getElementById("musicTink");

//keydown = sound and color being generated

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
        soundTink.src = "sounds/snare.wav";
        snare.style.background = "#FCA311";
        p_3.style.fontSize = "12px";
        h2_3.style.fontSize = "30px";
        
    } 
});







//keyup = no color being generated

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
    

})