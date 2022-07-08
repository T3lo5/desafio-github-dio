"use strict";
function adicionar(n1, n2) {
    return n1 + n2;
}
let resultado;
resultado = adicionar(1, 4);
function adicionarNumeros(n1, n2) {
    return n1.toString() + n2;
}
function adicionarExplicitamenteNumber(n1, n2) {
    return n1 + n2;
}
resultado = adicionarExplicitamenteNumber(1, 4);
function printarValor(num) {
    console.log('O valor é ' + num);
}
printarValor(3);
function multiplicarValorPor2(numero) {
    return numero * 2;
}
function adicionarETratar(n1, n2, callback) {
    resultado = n1 + n2;
    callback(resultado);
}
adicionarETratar(1, 5, printarValor);
console.log(adicionarETratar(1, 5, multiplicarValorPor2));
