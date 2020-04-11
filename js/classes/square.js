class Square{
    constructor(row, column){
        this.row = row;
        this.column = column;
        this.color = "green";
    }

    // daca difera contextul.
    draw(context){
        new Cell(this.row, this.column, this.color, context).draw();
    }
}