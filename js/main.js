function sumatoria(numero){
    suma = 0;
    for (let i=1; i<=numero; i++){
        suma += i;
    }
    return suma;
};
console.log(sumatoria(3));