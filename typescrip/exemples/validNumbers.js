console.log('Hello World');

let button = document.getElementById('btn');
let input = document.getElementById('input1');
let input2 = document.getElementById('input2');

function somaNumeros (numero1, numero2) {
    return (Number(numero1) + Number(numero2));
}

button.addEventListener('click', function () {
    console.log(somaNumeros(input.value, input2.value));
}
);
