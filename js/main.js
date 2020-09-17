// TITLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
initGraphics(600, 850);

let xVal = [];
let yVal = [];
let rVal = [];
for (let i = 0; i < 10; i++) {
    xVal.push(Math.randomDec(0, cnv.width));
    yVal.push(Math.randomDec(0, cnv.height));
    rVal.push(Math.randomDec(1, 7));
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Snowflake
    for (let i = 0; i < xVal.length; i++) {
        ctx.fillStyle = "white";
        ctx.fillCircle(xVal[i], yVal[i], rVal[i]);

        if (yVal < 850) {
            yVal++;
        } else {
            yVal = (Math.randomDec(0, cnv.height));
        } 
    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// Each snowflake should have its own location, size and speed.
// When a snowflake goes off the bottom of the canvas it should teleport to a random location above the canvas.
// Implement the ability to add and remove snowflakes on mouse or key events.