import { somar, multp, subt, dvsa, resto } from './operadores.js';

const display = document.getElementById('display');

window.append = function(valor) {
    display.value += valor;
};

window.AC = function() {
    display.value = '';
};

window.C = function() {
    display.value = display.value.slice(0, -1);
};

window.calculate = function() {
    const expressao = display.value;
    
    if (expressao.includes('+')) {
        const numeros = expressao.split('+');
        display.value = somar(Number(numeros[0]), Number(numeros[1]));
    } else if (expressao.includes('-')) {
        const numeros = expressao.split('-');
        display.value = subt(Number(numeros[0]), Number(numeros[1]));
    } else if (expressao.includes('*')) {
        const numeros = expressao.split('*');
        display.value = multp(Number(numeros[0]), Number(numeros[1]));
    } else if (expressao.includes('/')) {
        const numeros = expressao.split('/');
        display.value = dvsa(Number(numeros[0]), Number(numeros[1]));
    } else if (expressao.includes('%')) {
        const numeros = expressao.split('%');
        display.value = resto(Number(numeros[0]), Number(numeros[1]));
    }

};
