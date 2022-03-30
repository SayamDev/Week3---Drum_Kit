
//button
const tom = document.getElementById("tom")


//Music
const soundTom = document.getElementById("musicTom");

//keydown
document.addEventListener("keydown", (event) => {
    if (event.key == "a" || event.key == "A") {
        soundTom.src = "sounds/tom.wav";
        tom.style.background = "#FCA311";
        h2Tom.style.color = "#000000";
        paraTom.style.color = "#000000";
    }
})