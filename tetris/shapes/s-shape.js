import {Shape} from './shape.js';
 export class S extends Shape{
    constructor(row, column, cells) {
       super(row, column, cells)
        this.template = [
            [0, 1, 1],
            [1, 1, 0]
        ]
        this.color = 'red';
    }
}