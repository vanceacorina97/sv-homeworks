class Circle {
    constructor(x, y, radius, color, context, width, height) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.context = context;
        this.width = width;
        this.height = height;
        this.dx = 1;
        this.dy = 1;
        this.currentColor = color;
    }
    draw() {
        this.context.beginPath();
        this.context.arc(
            this.x,
            this.y,
            this.radius,
            0,
            2 * Math.PI
        );
        this.context.stroke();
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();
    }

    move(stepX, stepY) {
        this.changeDirectionIfExceededBounds();
        this.changeColorAndSize();
        this.x += stepX * this.dx; 
        this.y += stepY * this.dy;
        this.draw();
    }

    changeColorAndSize() {
        if (this.dx != -1) {
            this.radius += 0.5;
            this.color = this.currentColor;
        } else {
            this.radius -= 0.5;
            this.color = "red";
        }
    }

    changeDirectionIfExceededBounds() {
        if (this.x >= this.width - this.radius) {
            this.dx = -1;
        }
        if (this.x <= this.radius) {
            this.dx = 1;
        }
    }
}