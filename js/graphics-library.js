// DRAW FUNCTIONS
// needs a global cnv and ctx variable

function initGraphics(width, height) {
    cnv.width = width;
    cnv.height = height;

    // DRAW FUNCTIONS
    ctx.fillTriangle = function (x1, y1, x2, y2, x3, y3) {
        // Draw a filled triangle with vertices (x1, y1), (x2, y2), (x3, y3)
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.fill();
    }

    ctx.strokeTriangle = function (x1, y1, x2, y2, x3, y3) {
        // Draw an outlined triangle with vertices (x1, y1), (x2, y2), (x3, y3)
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath()
        ctx.stroke();
    }

    ctx.fillCircle = function (x, y, r) {
        // Draw a filled circle with center (x, y) and radius (r)
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
    }

    ctx.strokeCircle = function (x, y, r) {
        // Draw an outlined circle with center (x, y) and radius (r)
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
    }

    ctx.line = function (x1, y1, x2, y2) {
        // Draw a line segment from (x1, y1) to (x2, y2)
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
}
