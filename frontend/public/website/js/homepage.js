const words = ["Stream.", "Read.", "Game.", "Shop.", "Connect.", "Listen.", "Pull.", "Watch.", "Discover.", "Build.", "Travel.", "Share.", "Learn."];
let index = 0;
const span = document.getElementById("word");

setInterval(() => {
    span.classList.remove("fade-in");
    span.classList.add("fade-out");

    setTimeout(() => {

    index = (index + 1) % words.length;
    span.textContent = words[index];
    span.classList.remove("fade-out");
    span.classList.add("fade-in");
    }, 400);
}, 5000);