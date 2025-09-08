//alert('Conectado com sucesso!');

console.log('Arquivo app.js carregado com sucesso! <3');

// VARIÁVEIS

let nome = 'João';
const idade = 25;
let altura = 1.75;
let isStudent = true;
let sobrenome; // undefined
let peso = null; // null
let simbolo = Symbol('simbolo');
let bigInt = 9007199254740991n;
let objeto = { nome: 'Maria', idade: 30 };
let array = [1, 2, 3, 4, 5];
let funcao = function() { return 'Olá, Mundo!'; };
let funcaoArrow = () => 'Olá, Mundo!';
let data = new Date();

//--

console.log(nome, idade, altura, isStudent, sobrenome, peso, simbolo, bigInt, objeto, array, funcao(), funcaoArrow(), data);

console.log(" ");
console.log("Aula 02 - JavaScript Básico");
console.log(`Idade value: ${idade}, type: ${typeof idade}`);
console.log(`Nome value: ${nome}, type: ${typeof nome}`);
console.log(`Altura value: ${altura}, type: ${typeof altura}`);
console.log(`isStudent value: ${isStudent}, type: ${typeof isStudent}`);
console.log(`Sobrenome value: ${sobrenome}, type: ${typeof sobrenome}`);
console.log(`Peso value: ${peso}, type: ${typeof peso}`);
console.log(`Simbolo value: ${simbolo.toString()}, type: ${typeof simbolo}`);
console.log(`BigInt value: ${bigInt}, type: ${typeof bigInt}`);
console.log(`Objeto value: ${JSON.stringify(objeto)}, type: ${typeof objeto}`);
console.log(`Array value: ${array}, type: ${typeof array}`);
console.log(`Função value: ${funcao()}, type: ${typeof funcao}`);
console.log(`Função Arrow value: ${funcaoArrow()}, type: ${typeof funcaoArrow}`);
console.log(`Data value: ${data}, type: ${typeof data}`);

// NÃO É PERMITIDO CRIAR VARIÁVEIS COM PALAVRAS RESERVADAS
// let let = 10; // Erro
// let function = 20; // Erro
// let if = 30; // Erro

// NÃO É PERMITIDO CRIAR VARIÁVEIS COM NÚMEROS NO INÍCIO
// let 1nome = 'João'; // Erro
// let 2idade = 25; // Erro

// NÃO É PERMITIDO CRIAR VARIÁVEIS COM ESPAÇOS OU HÍFENS
// let nome completo = 'João Silva'; // Erro
// let nome-completo = 'João Silva'; // Erro

// NÃO É PERMITIDO CRIAR VARIÁVEIS COM CARACTERES ESPECIAIS (EXCETO _ E $)
// let @nome = 'João'; // Erro
// let #idade = 25; // Erro

// BOAS PRÁTICAS PARA NOMES DE VARIÁVEIS
// 1. Utilizar nomes descritivos e significativos
let nomeCompleto = 'João Silva';
let idadeUsuario = 25;

// 2. Utilizar camelCase para nomes de variáveis compostas
let numeroDeAlunos = 30;
let valorTotalCompra = 150.75;

// 3. Utilizar letras minúsculas para nomes de variáveis
let cidade = 'São Paulo';
let estado = 'SP';

// 4. Evitar abreviações, a menos que sejam amplamente reconhecidas
let telefone = '1234-5678'; // Bom
let tel = '1234-5678'; // Ruim

// 5. Utilizar constantes (const) para valores que não irão mudar
const PI = 3.14159;
const TAXA_DE_JUROS = 0.05;
//const PI = 3.58963258974; //ERROR!

// 6. Evitar o uso excessivo de variáveis globais
// 7. Comentar o código quando necessário para explicar o propósito de uma variável

// FIM DAS BOAS PRÁTICAS

console.log("-> ", PI);
console.log("Fim do arquivo app.js");
console.log(" ");