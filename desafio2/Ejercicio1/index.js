import esPrimo from './esPrimo.cjs';

import('dotenv').then(dotenv => {
    dotenv.config();
});

const valor = process.env.NUMERO_A_PROBAR;

console.log(esPrimo(valor));



