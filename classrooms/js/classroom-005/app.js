//alert('OK TA FUNCIONANDO LEGAL!');
//console.log('OK TA FUNCIONANDO LEGAL!');

const entrada01 = prompt("Digite o primeiro número:");
const entrada02 = prompt("Digite o segundo número:");
const entrada03 = prompt("Digite o seu nome: ");


const numero01 = Number(entrada01);
const numero02 = Number(entrada02);

const soma = numero01 + numero02;
const subtracao = numero01 - numero02;
const multiplicacao = numero01 * numero02;
const divisao = numero01 / numero02;
const modulo = numero01 % numero02;

console.log('Soma: ' + soma);
console.log('Subtração: ' + subtracao);
console.log('Multiplicação: ' + multiplicacao);
console.log('Divisão: ' + divisao);
console.log('Módulo: ' + modulo);

alert(
	' '+ entrada03 + ', aqui estão os resultados:\n\n' +
	"Soma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao +
    "\nMódulo: " + modulo
);
