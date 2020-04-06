const fraze = [
    "Quisque faucibus ipsum id nibh egestas bibendum.",
    "Phasellus tincidunt sapien nec est tempus lacinia.",
    "Curabitur ac elit at turpis ultrices hendrerit at et tellus.",
    "Praesent a magna a ligula gravida sodales eu ut erat.",
    "Ut eleifend velit vitae ipsum mattis viverra."
];

$("#btnChange").on("click", function () {
    let value = $("#inputCurrency").val();
    let currency = $("#selectCurrency option:selected").val();
    switch (currency) {
        case '1':
            $("#result").val(transformRONinEUR(value));
            break;
        case '2':
            $("#result").val(transformRONinHUF(value));
            break;
        case '3':
            $("#result").val(transformRONinUSD(value));
            break;
    }
});

function transformRONinEUR(value) {
    return (value / 4.82).toFixed(2);
}
function transformRONinHUF(value) {
    return (value * 75.56).toFixed(2);
}
function transformRONinUSD(value) {
    return (value * 0.22).toFixed(2);
}

function getTypeOfValue(value) {
    return `Tipul lui ${value} este: ${typeof value}`;
}

function getFirstLetterFromWords(phrase) {
    let arrayPhrase = phrase.split(' ');
    let resultPhrase = "";
    for (let i = 0; i < arrayPhrase.length; i++) {
        resultPhrase += arrayPhrase[i].charAt(0).toUpperCase();
    }
    return resultPhrase;
}

function exerciseThree() {
    for (let i = 0; i < fraze.length; i++) {
        console.log(getFirstLetterFromWords(fraze[i]));
    }
}

class Shape {

    constructor(culoare, laturi) {
        this.culoare = culoare;
        this.laturi = laturi;
    }

    perimetru() {
        let result = 0;
        for (let i = 0; i < this.laturi.length; i++) {
            result += this.laturi[i];
        }
        return result.toFixed(2);
    }

    semiperimetru() {
        return (this.perimetru() / 2).toFixed(2);
    }

    tipulPoligonului() {
        switch (this.laturi.length) {
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
        console.log(`Perimetru: ${this.perimetru()}`);
        console.log(`Semiperimetru: ${this.semiperimetru()}`);
    }
}


class TriunghiEchilateral extends Shape {

    constructor(color, latura) {
        super(color, new Array(latura, latura, latura));
        this.latura = latura;
    }

    aria() {
        return ((Math.pow(this.latura, 2) * Math.sqrt(3)) / 4).toFixed(2);
    }

    afiseaza() {
        super.afiseaza();
        console.log(`Aria ${this.tipulPoligonului()}ului este: ${this.aria()}`);
    }
}


class Patrat extends Shape {

    constructor(color, latura) {
        super(color, new Array(latura, latura, latura, latura));
        this.latura = latura;
    }

    aria() {
        return (Math.pow(this.latura, 2)).toFixed(2);
    }

    afiseaza() {
        super.afiseaza();
        console.log(`Aria ${this.tipulPoligonului()}ului este: ${this.aria()}`);
    }
}



console.log("-----------------Rezolvare-----------------");
console.log("----------------Exercitiu 2----------------");
console.log(getTypeOfValue(true));
console.log("----------------Exercitiu 3----------------");
console.log(getFirstLetterFromWords("Universitatea Tehnica Cluj Napoca"));
console.log("----------------Exercitiu 3----------------");
exerciseThree();
console.log("-----------------Exercitiu 4-----------------");
const myShape = new Shape("verde", new Array(3, 2, 5));
myShape.afiseaza();
console.log("-----------------Exercitiu 5-----------------");
console.log("------------Clasa TriunghiEchilateral--------")
let triunghi = new TriunghiEchilateral("mov", 3);
triunghi.afiseaza();
console.log("-----------------Clasa Patrat----------------")
let patrat = new Patrat("albastru", 3);
patrat.afiseaza();
