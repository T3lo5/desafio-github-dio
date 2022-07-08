let button = document.getElementById('btn');
let input = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function addNumero(numero1: number, numero2: number, devprint: boolean, frase: string): number {
    let result = numero1 + numero2;
    if (devprint) {
        console.log(frase + result);
    }

    return numero1 + numero2;
}

let devprint = true;
let frase = "O valor da soma é: ";

if (button) {
    button.addEventListener('click', function () {
        let numero1 = parseInt(input.value);
        let numero2 = parseInt(input2.value);
        let resultado = addNumero(Number(numero1), Number(numero2), devprint, frase);
        alert(resultado);
    }
    );
}