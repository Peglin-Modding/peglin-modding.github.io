import yay from "/assets/img/yay.gif";
import ded from "/assets/img/ded.gif";
import angel from "/assets/img/angel.gif";

const gifs = [yay, ded, angel]

window.addEventListener('load', ev => {
    document.getElementById("footer-gif").src = gifs[Math.floor(Math.random() * gifs.length)]
})