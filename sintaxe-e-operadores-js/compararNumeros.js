function compare(a, b) {
    if (a == b) {
        return "Os números são iguais";
    
    }
    else {
        return ("Os números são diferentes");
    }
} 

function compraraSoma (a , b) {
    let soma = a + b;

    if (soma > 10) {
        return  " Os números " + a + " e " + b + " são iguais. Sua soma " + soma + " é maior que 10";
    }
    if (soma < 20) {
        return " Os números " + a + " e " + b + " são iguais. Sua soma " + soma + " é menor que 20";
    }
    if (soma < 10) {
        return " Os números " + a + " e " + b + " são iguais. Sua soma " + soma + " é menor que 10";
    }
    if (soma > 20) {
        return " Os números " + a + " e " + b + " são iguais. Sua soma " + soma + " é maior que 20";
    }
    else {    
        return " Os números " + a + " e " + b + " são iguais. Sua soma " + soma + " é igual a 10 ou 20";
    }
}

function final (a, b ) {
    const init = compare(a, b);
    const final = compraraSoma(a, b);

    return `${init} e${final}`;
}

console.log(final(10, 10));


