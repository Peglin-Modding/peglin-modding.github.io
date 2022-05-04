const gifs = [
    "assets/img/ded.gif",
    "assets/img/yay.gif",
    "assets/img/angel.gif"
]

window.addEventListener('load', ev => {
    document.getElementById("footer-gif").src = gifs[Math.floor(Math.random() * gifs.length)]
})