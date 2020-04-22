export class Cell {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.canvas = document.getElementById('canvasId');
        this.context = this.canvas.getContext("2d");
        this.width = 30;
        this.height = 30;
    }

    draw(color) {
        this.context.beginPath();
        this.context.fillStyle = color || this.color;
        this.context.rect(this.y * this.height, this.x * this.width, this.width, this.height);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }
}