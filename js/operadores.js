export const somar = function soma(n1, n2) {
    return n1 + n2;
}

export const subt = function sub(n1, n2) {
    return n1 - n2;
}

export const multp = function mult(n1, n2) {
    return n1 * n2;
}

export const dvsa = function dvs(n1, n2) {
    if (n2 === 0) {
        return "Erro";
    }
    return n1 / n2;
}

export const resto = function mdc(n1, n2) {
    return n1 % n2;
}