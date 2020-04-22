export class Shape{
    constructor(row, column, cells) {
        this.row = row;
        this.column = column;
        this.cells = cells;
    }

    draw() {

        for (let row = 0; row < this.template.length; row++) {
            for (let column = 0; column < this.template[row].length; column++) {
                if (this.template[row][column] === 1) {
                    this.cells[this.row + row][this.column + column].draw(this.color);
                }
            }
        }
    }

}