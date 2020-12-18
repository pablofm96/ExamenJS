
function ejercicio2(arrayFechas, fechaInicio, fechaFin){
    fechaInicio = Date.parse(fechaInicio);
    fechaFin = Date.parse(fechaFin);
    let fecha;
    for (let i=0; i<arrayFechas.length; i++){
        fecha = Date.parse(arrayFechas[i]);
        if (fecha > fechaInicio && fecha < fechaFin){
            console.log(arrayFechas[i]);
        }
    }
}

let arrayFechas = ["02/05/2019", "10/01/2018", "01/03/2016", "02/03/2021"];
let fechaInicio = "01/01/2018";
let fechaFin = "01/01/2020";

ejercicio2(arrayFechas, fechaInicio, fechaFin);