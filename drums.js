
//button
const buttonTom = document.getElementById("tom")


//Music
const soundTom = document.getElementById("musicTom");

//keydown
document.addEventListener("keydown", (event) => {
    if (event.key == "a" || "A") {
        soundTom.src = "sounds/tom.wav"
    }
})