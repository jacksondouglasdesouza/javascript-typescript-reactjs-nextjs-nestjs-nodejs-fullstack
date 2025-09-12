// OPERADORES ARITMÉTICOS - SOMA (+), SUBTRAÇÃO (-), MULTIPLICAÇÃO (*), DIVISÃO (/), MÓDULO (%) //
// --- ATRIBUIÇÃO E INCREMENTO --- //

console.log('Arquivo app.js carregado com sucesso! <3');

let value01 = 10;
let value02 = 20;
let value03 = 30;
let value04 = 40;
let value05 = 50;

let soma = value01 + value02;
let subtracao = value03 - value04;
let multiplicacao = value01 * value05;
let divisao = value02 / value01;
let potenciacao = value01 ** value01;
let restode = value05 % value02;
let ordemPrecedencia01 = (value01 + value02) * value01 / value04;
let ordemPrecedencia02 = value01 + value02 * value01 / value04;
let ordemPrecedencia03 = value01 + (value02 * value01) / value04;

console.log(typeof(subtracao),`${value03} - ${value04}`, 'Resultado é: ', subtracao);
console.log(typeof(soma), `${value01} + ${value02}`, 'Resultado é: ', soma);
console.log(typeof(multiplicacao), `${value01} * ${value05}`, 'Resultado é: ', multiplicacao);
console.log(typeof(divisao),`${value02} / ${value01}`, 'Resultado é: ', divisao);
console.log(typeof(potenciacao), `${value01} ^^ ${value01}`, 'Resultado é: ',potenciacao);
console.log(typeof(restode), `${value05} % ${value02}`, 'Resultado é: ', restode);
console.log(typeof(ordemPrecedencia01), `(${value01} + ${value02}) * ${value01} / ${value04}`, 'Resultado é: ', ordemPrecedencia01);
console.log(typeof(ordemPrecedencia02), `${value01} + ${value02} * ${value01} / ${value04};`,  'Resultado é: ', ordemPrecedencia02);
console.log(typeof(ordemPrecedencia03), `${value01} + (${value02} * ${value01}) / ${value04}`, 'Resultado é: ', ordemPrecedencia03);

//---

console.log(value01);
console.log(value02);
let incremento01 = ++value01;
let incremento02 = value01++;
let incremento03 =+ value01;

let decremento01 = value02--;
let decremento02 = --value02;
let decremento03 = value02 - value01;

//--

console.log("----------------------------");

console.log(`Valor = ${incremento01}`);
console.log(`Valor = ${incremento02}`);
console.log(`Valor = ${incremento03}`);
console.log(`Valor = ${decremento01}`);
console.log(`Valor = ${decremento02}`);
console.log(`Valor = ${decremento03}`);
console.log(value01);
console.log(value02)

//--

console.log("--------------------------")
let contador = 0;
let passo = 5;
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);

//-------------------
console.log('-----------')
contador *= passo;
console.log(contador);
contador *= passo;
console.log(contador);
contador *= passo;
console.log(contador);
contador *= passo;
console.log(contador);
contador *= passo;
console.log(contador);
contador *= passo;
console.log(contador);
contador *= passo;
console.log(contador);
contador *= passo;
console.log(contador);
contador *= passo;
console.log(contador);
contador *= passo;
console.log(contador);

console.log('-------------');

contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador -= passo;
console.log(contador);

console.log('------------------------');

contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);contador /= passo;
console.log(contador);
console.log("------------------------------")

