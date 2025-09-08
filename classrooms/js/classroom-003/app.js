// exercício - mod 03 - let e const //

const nome = 'João';
const sobrenome = 'Silva';
let idade = 38;
let peso = 99;
let altura = 1.89;
let planoDeSaude = true;
let imc = peso / Math.pow(altura, 2);

console.log(`Meu nome é ${nome}`);
console.log(`Meu sobrenome é ${sobrenome}`);
console.log(`Minha idade é ${idade}`);
console.log(`Meu peso é ${peso}`);
console.log(`Minha altura é ${altura}`)
console.log(`Possuo plano de saúde: ${planoDeSaude}`);
console.log(`Mei IMC é ${imc.toFixed(2)}`);
//-------------------------------------------------------------
// BOAS PRÁTICAS PARA NOMES DE VARIÁVEIS
// 1. Utilizar nomes descritivos e significativos
// 2. Evitar o uso de palavras reservadas
// 3. Evitar abreviações
// 4. Utilizar letras minúsculas para nomes de variáveis
// 5. Utilizar _ ou $ para separar palavras, se necessário
// 6. Evitar o uso de variáveis globais
// 7. Declarar variáveis no escopo mais restrito possível
// 8. Utilizar const por padrão, e let quando for necessário reatribuir o valor
// 9. Comentar o código quando necessário para explicar o propósito de uma variável

//-------------------------------------------------------------
console.log(">>>>> VAMOS USAR TODAS AS VARIÁVEIS JUNTAS NO MESMO CONSOLE <<<<<");

console.log(`Meu nome completo é ${nome} ${sobrenome}, tenho ${idade} anos, peso ${peso} kg, tenho ${altura} m de altura, possui plano de saúde ${planoDeSaude} e meu IMC é de ${imc.toFixed(2)}`);