 import { Shape } from './shape.js';
export class L extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells);
        this.template = [
            [1, 0],
            [1, 0],
            [1, 1]
        ]
        this.color = 'orange';
    }
}