// Snow

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
initGraphics(600, 850);

// Arrays
let xVal = []; // x value of snow
let yVal = []; // y value of snow
let rVal = []; // snow radius
let sVal = []; // random speed

// Creating Snow
let snowAmount = 10;
function snow() {
    xVal.push(Math.randomDec(0, cnv.width));
    yVal.push(Math.randomDec(0, cnv.height));
    rVal.push(Math.randomDec(1, 7));
    sVal.push(Math.randomDec(1, 5));
}
for (let i = 0; i < snowAmount; i++) {
    snow();
}


// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Snowflake
    for (let i = 0; i < xVal.length; i++) {
        ctx.fillStyle = "white";
        ctx.fillCircle(xVal[i], yVal[i], rVal[i]); // randomize snow x, y, r

         // random speed (teleport to random spot on canvas once it reaches end of canvas)
        if (yVal[i] < 850) {
            yVal[i] += rVal[i];
        } else {
            yVal[i] = (Math.randomDec(-10, 0));
        }
    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// Implement the ability to add and remove snowflakes on mouse or key events.

// Key Events
let keyCodes = [];

document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    // Add current keycode to end of array
    keyCodes.push(event.code);
    if (keyCodes.length > 4) {
        keyCodes.shift();
    }

    if (keyCodes.join() == ["KeyS", "KeyN", "KeyO", "KeyW"].join()) {
        for (let i = 0; i < 99; i++) {
            snow();
        }
    }

    if (event.code == "KeyR") {
        xVal = [];
        yVal = [];
        rVal = [];
        sVal = [];
    }
}

