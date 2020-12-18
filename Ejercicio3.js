



function ejercicio3(numeros, n){
    if (n == 0){
        return numeros[n];
    }else{
        return(numeros[n]*ejercicio3(numeros, n-1));
    }
}



console.log(ejercicio3([1, 2, 3, 4, 5], 4));