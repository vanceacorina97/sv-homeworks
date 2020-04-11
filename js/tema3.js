const ex1 = document.getElementById('ex1');
const ex2 = document.getElementById('ex2');
const ex3 = document.getElementById('ex3');
const ex4 = document.getElementById('ex4');

const contextEx1 = ex1.getContext("2d");
const contextEx2 = ex2.getContext("2d");
const contextEx3 = ex3.getContext("2d");
const contextEx4 = ex4.getContext("2d");

const SIZE = 3;
const rows = 20;
const columns = 10;
const width = 30;
const height = 30;

// ----- exercitiul 1 -----
const gradient = contextEx1.createLinearGradient(0, 0, 0, 100);
gradient.addColorStop(0, "black");
gradient.addColorStop(1, "purple");

const drawLegionSymbol = (x, y, radius, z) => {

    contextEx1.beginPath();
    contextEx1.translate(x, y);
    contextEx1.moveTo(0, 0 - radius);
    for (var i = 0; i < SIZE; i++) {
        contextEx1.rotate(Math.PI / SIZE);
        contextEx1.lineTo(0, 0 - (radius * z));
        contextEx1.rotate(Math.PI / SIZE);
        contextEx1.lineTo(0, 0 - radius);
    }
    contextEx1.closePath();
    contextEx1.fillStyle = gradient;
    contextEx1.fill();

}

drawLegionSymbol(200, 170, 20, 10);

// ----- exercitiul 2 -----

const triunghi = new Shape("red", [new Punct(200, 100), new Punct(100, 300), new Punct(300, 300)], contextEx2);
triunghi.afiseaza();
triunghi.draw();

// ----- exercitiul 3 -----

const circle = new Circle(200, 200, 20, "blue", contextEx3, ex3.width, ex3.height);
circle.draw();
const animateCircle = ()  => {
    contextEx3.clearRect(0, 0, ex3.width, ex3.height);
    circle.move(10, 0);
}
setInterval(animateCircle, 50); // in tema este specificat 0.5 secunde -> 500 ms, am ales 50 ca sa fie animatia mai frumoasa :D 

// ----- exercitiul 4 -----
let grid = [];

const createGrid = () => {
    for (let row = 0; row < rows; row++) {
        grid[row] = [];
        for (let column = 0; column < columns; column++) {
            grid[row][column] = new Cell(row, column, (row + column) % 2 ? '#F0CDBB' : '#DC9F7E', contextEx4);
        }
    }
}

const drawGrid = () => {
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            grid[row][column].draw();
        }
    }
}

createGrid();
drawGrid();

// ---- exercitiul 5 -----

const square = new Square(2,3);
const square2 = new Square(5,7)
square.draw(contextEx4);
square2.draw(contextEx4);

