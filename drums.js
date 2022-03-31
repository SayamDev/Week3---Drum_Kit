
//button
const tom = document.getElementById("tom");
const tink = document.getElementById("tink");


//Music
const soundTom = document.getElementById("musicTom");
const soundTink = document.getElementById("musicTink");

//keydown = sound and color being generated
document.addEventListener("keydown", (event) => {
    if (event.key == "a" || event.key == "A") {
        soundTom.src = "sounds/tom.wav";
        tom.style.background = "#FCA311";
        p.style.fontSize = "12px";
        p.style.color = "#000000"; 
        h2.style.color = "#000000";
        h2.style.fontSize = "30px";
       
    } 
});

document.addEventListener("keydown", (event) => {
    if (event.key == "s" || event.key == "S") {
        soundTink.src = "sounds/tink.wav";
        tink.style.background = "#FCA311";
        p_2.style.fontSize = "12px";
        p.style.color = "#000000";  
        h2_2.style.color = "#000000";
        h2_2.style.fontSize = "30px";
        
    } 
});

//keyup = no color being generated

document.addEventListener("keyup", () => {
    h2.style.fontSize = "1.5em";
    p.style.fontSize = "1.2rem";
    tom.style.background = "#E5E5E5";
    h2_2.style.fontSize = "1.5em";
    p_2.style.fontSize = "1.2rem";
    tink.style.background = "#E5E5E5";
    

})