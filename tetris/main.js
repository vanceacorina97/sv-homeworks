import { Grid } from './grid.js';
import { L } from './shapes/l-shape.js';
import { O } from './shapes/o-shape.js';
import { J } from './shapes/j-shape.js';
import { T } from './shapes/t-shape.js';
import { Z } from './shapes/z-shape.js';
import { S } from './shapes/s-shape.js';
import { I } from './shapes/i-shape.js';
import { Movement } from './movement.js';

export const rows = 20;
const columns = 10;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();

const lShape = new L(0, 0, grid.cells);
const oShape = new O(0, 2, grid.cells);
const jShape = new J(2, 4, grid.cells);
const tShape = new T(0, 6, grid.cells);
const zShape = new Z(4, 1, grid.cells);
const sShape = new S(6, 5, grid.cells);
const iShape = new I(8, 4, grid.cells);
const moveShape = new Movement(lShape);
drawAll();


document.addEventListener("keydown", event => {
    switch (event.key) {
        case 'ArrowUp':
            grid.draw();
            moveShape.moveUp();
            drawAll();
            break;
        case 'ArrowDown':
            grid.draw();
            moveShape.moveDown();
            drawAll();
            break;
        case 'ArrowLeft':
            grid.draw();
            moveShape.moveLeft();
            drawAll();
            break;
        case 'ArrowRight':
            grid.draw();
            moveShape.moveRight();
            drawAll();
            break;
    }
});

document.addEventListener("keypress", event => {
    switch (event.key) {
        case 'Enter':
            changeColor(lShape);
            break;
    }
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(shape) {
    shape.color = getRandomColor();
    shape.draw();
}

function drawAll() {
    lShape.draw();
    oShape.draw();
    jShape.draw();
    tShape.draw();
    zShape.draw();
    sShape.draw();
    iShape.draw();
}

setInterval(() => {
    grid.draw();
     moveShape.moveDown();
        drawAll();
}, 500);


