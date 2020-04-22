import { rows } from './main.js';
export class Movement {
    constructor(shape){
        this.shape = shape;
    }
    moveUp() {
        this.shape.row--;
    }

    moveDown() {
         if(this.shape.row <= rows - (this.shape.template.length + 1)){
            this.shape.row++;
         }
    }

    moveLeft() {
        this.shape.column--;
    }

    moveRight() {
        this.shape.column++;
    }
}