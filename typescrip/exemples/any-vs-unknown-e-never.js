"use strict";
let valor;
valor = 'Max';
let nome;
if (typeof valor === 'string') {
    nome = valor;
}
let valorAny;
valorAny = true;
valorAny = 10;
nome = valorAny;
function geradorDeErro(mensagem, codigoDeErro) {
    throw { message: mensagem, errorCode: codigoDeErro };
}
geradorDeErro('Um erro ocorreu!', 500);
