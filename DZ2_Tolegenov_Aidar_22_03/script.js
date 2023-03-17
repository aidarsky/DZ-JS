// //////////////////////////////////////Рекурсия
const smallSquare = document.querySelector(".small-square");
let angle = 0;

function moveSquare() {
    const radius = 225;
    const x = radius + radius * Math.cos(angle * Math.PI / 180);
    const y = radius + radius * Math.sin(angle * Math.PI / 180);
    smallSquare.style.transform = `translate(${x}px, ${y}px)`;
    angle += 1;
    if (angle >= 360) {
        angle = 0;
    }
    requestAnimationFrame(moveSquare);
}

moveSquare();
////////////////////////////////