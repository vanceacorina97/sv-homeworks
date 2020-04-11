class Shape {

    constructor(culoare, coordonate, context) {
        this.culoare = culoare;
        this.coordonate = coordonate;
        this.context = context;
    }

    tipulPoligonului() {
        switch (this.coordonate.length) {
            case 3: return "Triunghi"; break;
            case 4: return "Patrulater"; break;
            case 5: return "Pentagon"; break;
            case 6: return "Hexagon"; break;
            default: return "WORK IN PROGRESS";
        }
    }

    afiseaza() {
        console.log(`Tipul poligonului: ${this.tipulPoligonului()}`);
        console.log(`Culoarea:  ${this.culoare}`);
    }

    draw() {
        this.context.beginPath();
            this.context.moveTo(this.coordonate[0].x, this.coordonate[0].y);
            for(let i=1; i< this.coordonate.length; i++){
                this.context.lineTo(this.coordonate[i].x, this.coordonate[i].y);
            }
            this.context.closePath();
            this.context.stroke();
            this.context.fillStyle = this.culoare;
            this.context.fill()
    }



}
