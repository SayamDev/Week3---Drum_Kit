
//button
const tom = document.getElementById("tom")


//Music
const soundTom = document.getElementById("musicTom");

//keydown = sound and color being generated
document.addEventListener("keydown", (event) => {
    if (event.key == "a" || event.key == "A") {
        soundTom.src = "sounds/tom.wav";
        tom.style.background = "#FCA311";
        p.style.fontSize = "12px";
        h2.style.color = "#000000";
        h2.style.fontSize = "30px";
        p.style.color = "#000000";
        
    }
});

//keyup = no color being generated

document.addEventListener("keyup", () => {
    h2.style.fontSize = "1.5em";
    p.style.fontSize = "1.2rem";
    tom.style.background = "#E5E5E5";

})