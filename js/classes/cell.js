class Cell {
    constructor(x, y, color, context) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.context = context;
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(this.y * 30, this.x * 30, 30, 30);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }
}