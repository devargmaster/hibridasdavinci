 function esPrimo(numero) {
    if (numero<=1) return false;
    if (numero<=3) return true;
    for (let i = 2;i*i <=numero;i++){
        if(numero% i == 0) return false;
    }
    return true;
}

module.exports = esPrimo;