$(document).ready(function () {
    const PI = 3.14159;
    var raza = 10;
    var arrayFilme = ['Parazit', 'Joker', 'La cutite', 'Frozen 2', 'Captain Marvel'];
    var arrayNumbers = [5, 3, "1", 7, "9", 30, "45", 7];
    var min = arrayNumbers[0];
    var max = arrayNumbers[0];
    $('#razaCerc').append(PI * Math.pow(raza, 2));
    for (var i = 0; i < arrayFilme.length; i++) {
        $('#filme').append(`<li class='list-group-item d-flex justify-content-between align-items-center'>\
                                ${arrayFilme[i]}\
                             <span class='adge badge-primary badge-pill'>Pozitie: ${i}</span>\
                             </li>`);
    }
    for (var i = 0; i < arrayNumbers.length; i++) {
        if (min >= parseInt(arrayNumbers[i])) {
            min = arrayNumbers[i];
        } else if(max <= parseInt(arrayNumbers[i]) ) {
            max = arrayNumbers[i];
        }
    }
    $('#nrMinMax').append(`Numarul minim este ${min} si nu numarul maxim este: ${max}`);
});