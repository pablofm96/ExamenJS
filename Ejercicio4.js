
function ejercicio4(filas, columnas, color, id){

    
    let tabla = "<table border-collapse: collapse;>";
    for (let i=1; i<=filas; i++){
        if (i % 2 == 0){
            tabla += "<tr>";
        }else{
            tabla += "<tr bgcolor="+color+">";
        }
        for (let j=0; j<columnas; j++){
            tabla += "<td>Examen</td>";
        }
        tabla += "</tr>";
    }

    tabla += "</table>"

    id.innerHTML = tabla;
}


let tabla = document.getElementById("tabla");
let div = document.getElementById("tabla");



function borrar(){
    var x = document.getElementsByTagName('td');
    for (var i=0;i<x.length;i++) {
        x[i].onclick = function(){ this.innerHTML = ''; }
    }

    return true;
    
}
ejercicio4(3, 5, "red", div);


