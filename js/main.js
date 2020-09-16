// TITLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
initGraphics(600, 850);

let xVar = [];
let yvar = [];

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Snow
    ctx.fillStyle = "white";
    ctx.fillCircle(100, 100, 20);

    // Request another Animation Frame
    requestAnimationFrame(draw);
}