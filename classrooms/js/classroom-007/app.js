let umaStrind = 'Uma String!';
let outraString = "Outra String!";
let maisUmaString = `Mais uma String`;
let olocoMaisUmaString = "Vamos comer um MC Donald's!"
let olocoDenovoString = 'Vamos de Mc Donald\'s?';
let meuIrmaoChegadeString = `Bora logo comer esse Mc Donald's?`

console.log(`>>>>>> ${umaStrind} <<<<<<`);
console.log(`>>>>>> ${outraString} <<<<<<`);
console.log(`>>>>>> ${maisUmaString} <<<<<<`);
console.log(`>>>>>> ${olocoMaisUmaString} <<<<<<`);
console.log(`>>>>>> ${olocoDenovoString} <<<<<<`);
console.log(`>>>>>> ${meuIrmaoChegadeString} <<<<<<`);
console.log(`>>>>>>Com um espaçamento \t ${umaStrind} <<<<<<`);
console.log(`>>>>>>Com dois espaçamento \t\t ${umaStrind} <<<<<<`);
console.log(`>>>>>>Com um espaçamento \t ${umaStrind} <<<<<<`);
console.log(`>>>>>>Com um espaçamento + exibição de uma barra \\\t ${umaStrind} <<<<<<`);
console.log(`>>>>>>Com um espaçamento + exibição de duas barra \\\\ \t ${umaStrind} <<<<<<`);

/**
     * Além da forma regular, de caracteres de impressão, caracteres especiais podem ser codificados usando a escape notation (notação com barra invertida):

    Código	Saida
    \0	o caractere NULL
    \'	aspas simples
    \"	aspas duplas
    \\	barra invertida
    \n	nova linha
    \r	carriage return
    \v	tab vertical
    \t	tab
    \b	backspace
    \f	form feed
    \uXXXX	unicode codepoint
    \xXX	the Latin-1 character

 */

//--  STRINGS SÃO ITERÁVEIS -- //

console.log(umaStrind[0]);
console.log(umaStrind[1]);
console.log(umaStrind[2]);
console.log(umaStrind[3]);
console.log(umaStrind[4]);
console.log(umaStrind[5]);
console.log(umaStrind[6]);
console.log(umaStrind[7]);
console.log(umaStrind[8]);
console.log(umaStrind[9]);
console.log(umaStrind[10]);
console.log(umaStrind[11]); //-- Undefined --//
console.log(umaStrind[-1]); //-- Undefined --//

//-- FUNÇÕES RAIZ DO JAVASCRIPT PARA STRING --//
// Existem N... funções para usar com strings no JS.

/*
    ====================================================================
    | LISTA DE MÉTODOS E PROPRIEDADES NATIVAS DE STRING EM JAVASCRIPT  |
    ====================================================================

    --- Acessando Caracteres e Valores ---

    charAt(index): Retorna o caractere no índice especificado.
        Ex: 'abc'.charAt(1) -> 'b'

    charCodeAt(index): Retorna o valor numérico Unicode (UTF-16) do caractere no índice especificado.
        Ex: 'abc'.charCodeAt(1) -> 98

    codePointAt(index): Retorna o valor Unicode completo do ponto de código no índice especificado (útil para caracteres fora do BMP, como emojis).
        Ex: '😄'.codePointAt(0) -> 128516

    [index]: Acesso direto ao caractere no índice especificado (somente leitura).
        Ex: 'abc'[1] -> 'b'


    --- Busca e Verificação ---

    includes(searchString, position?): Verifica se a string contém a 'searchString'. Retorna true ou false. O segundo argumento opcional define a posição inicial da busca.
        Ex: 'Olá mundo'.includes('mun') -> true

    startsWith(searchString, position?): Verifica se a string começa com a 'searchString'. Retorna true ou false. O segundo argumento opcional define a posição inicial da verificação.
        Ex: 'Olá mundo'.startsWith('Olá') -> true

    endsWith(searchString, length?): Verifica se a string termina com a 'searchString'. Retorna true ou false. O segundo argumento opcional define o comprimento da string a ser considerada.
        Ex: 'Olá mundo'.endsWith('mundo') -> true

    indexOf(searchValue, fromIndex?): Retorna o índice da primeira ocorrência de 'searchValue'. Retorna -1 se não encontrar.
        Ex: 'banana'.indexOf('na') -> 2

    lastIndexOf(searchValue, fromIndex?): Retorna o índice da última ocorrência de 'searchValue'. Retorna -1 se não encontrar.
        Ex: 'banana'.lastIndexOf('na') -> 4

    search(regexp): Procura por uma correspondência entre uma expressão regular e a string. Retorna o índice da correspondência ou -1.
        Ex: 'Onde está Wally?'.search(/Wally/) -> 10


    --- Extração e Divisão ---

    slice(beginIndex, endIndex?): Extrai uma seção da string e a retorna como uma nova string, sem modificar a original. Índices podem ser negativos.
        Ex: 'Mozilla'.slice(1, 4) -> 'ozi'

    substring(indexStart, indexEnd?): Similar ao slice(), mas não aceita índices negativos. Se indexStart > indexEnd, os valores são trocados.
        Ex: 'Mozilla'.substring(1, 4) -> 'ozi'

    substr(start, length?): (Obsoleto, mas ainda funciona) Extrai uma parte da string a partir de um 'start' com um 'length' definido.
        Ex: 'Mozilla'.substr(1, 3) -> 'ozi'

    split(separator, limit?): Divide a string em um array de substrings, usando um 'separator' para determinar onde fazer as divisões.
        Ex: 'a-b-c'.split('-') -> ['a', 'b', 'c']


    --- Modificação e Criação de Novas Strings ---

    concat(string2, ...): Concatena uma ou mais strings à string atual. O operador '+' é geralmente preferido.
        Ex: 'Olá'.concat(' ', 'mundo') -> 'Olá mundo'

    repeat(count): Retorna uma nova string contendo o número especificado de cópias da string original.
        Ex: 'a'.repeat(3) -> 'aaa'

    replace(searchValue, newValue): Substitui a primeira ocorrência de 'searchValue' (pode ser string ou regex) por 'newValue'.
        Ex: 'Gato e gato'.replace('gato', 'cachorro') -> 'Gato e cachorro'

    replaceAll(searchValue, newValue): Substitui todas as ocorrências de 'searchValue' (pode ser string ou regex com flag 'g') por 'newValue'.
        Ex: 'gato e gato'.replaceAll('gato', 'cachorro') -> 'cachorro e cachorro'

    toLowerCase(): Converte a string inteira para letras minúsculas.
        Ex: 'TEXTO'.toLowerCase() -> 'texto'

    toUpperCase(): Converte a string inteira para letras maiúsculas.
        Ex: 'texto'.toUpperCase() -> 'TEXTO'

    trim(): Remove espaços em branco do início e do fim da string.
        Ex: '  olá  '.trim() -> 'olá'

    trimStart() / trimLeft(): Remove espaços em branco apenas do início da string.
        Ex: '  olá  '.trimStart() -> 'olá  '

    trimEnd() / trimRight(): Remove espaços em branco apenas do fim da string.
        Ex: '  olá  '.trimEnd() -> '  olá'

    padStart(targetLength, padString?): Preenche o início da string com outra string ('padString') até que a string resultante atinja o 'targetLength'.
        Ex: '5'.padStart(3, '0') -> '005'

    padEnd(targetLength, padString?): Preenche o final da string com outra string ('padString') até que a string resultante atinja o 'targetLength'.
        Ex: '5'.padEnd(3, '0') -> '500'


    --- Métodos Relacionados a Expressões Regulares ---

    match(regexp): Retorna um array com os resultados da correspondência entre a string e uma expressão regular. Retorna null se não houver correspondência.
        Ex: 'A1 B2 C3'.match(/\d/g) -> ['1', '2', '3']

    matchAll(regexp): Retorna um iterador de todos os resultados de correspondência de uma expressão regular (com a flag 'g' obrigatória).
        Ex: const matches = 'A1 B2'.matchAll(/\w(\d)/g); -> Iterador com [['A1', '1'], ['B2', '2']]


    --- Outros Métodos ---

    normalize(form?): Retorna a Forma de Normalização Unicode da string (NFC, NFD, NFKC, NFKD). Útil para comparar strings com acentos.
        Ex: '\u006E\u0303'.normalize() -> 'ñ'

    localeCompare(compareString, locales?, options?): Compara duas strings levando em conta a localidade (ordenação alfabética correta, acentos, etc.).
        Ex: 'é'.localeCompare('f') -> -1 (vem antes)

    toString(): Retorna o valor primitivo do objeto String.
        Ex: new String('abc').toString() -> 'abc'

    valueOf(): Retorna o valor primitivo do objeto String (geralmente chamado internamente).
        Ex: new String('abc').valueOf() -> 'abc'


    --- Propriedades ---

    length: Retorna o número de unidades de código (caracteres) na string.
        Ex: 'Olá'.length -> 3

*/

console.log("----------------");
console.log(umaStrind);
console.log(umaStrind.length);
console.log(umaStrind.charAt(8));
console.log(umaStrind[8]);

console.log(umaStrind.charCodeAt(8));
console.log(umaStrind.codePointAt(8));

console.log(umaStrind.indexOf('String'));
console.log(umaStrind.indexOf('string')); //-- Case Sensitive --//
console.log(umaStrind.includes('String'));
console.log(umaStrind.includes('string')); //-- Case Sensitive --//

console.log(umaStrind.startsWith('Uma'));
console.log(umaStrind.startsWith('uma')); //-- Case Sensitive --//

console.log(umaStrind.endsWith('!'));
console.log(umaStrind.endsWith('.'));

console.log(umaStrind.slice(4, 10));
console.log(umaStrind.slice(4));
console.log(umaStrind.slice(-6, -1));
console.log(umaStrind.slice(-6));

console.log(umaStrind.substring(4, 10));
console.log(umaStrind.substring(10, 4));
console.log(umaStrind.substring(4));
console.log(umaStrind.substring(-6, -1));

let oRato = "O rato roeu a roupa do rei de Roma.";
console.log(oRato);
console.log(oRato.replace('rato', 'gato'));
console.log(oRato.replaceAll('r', 'l'));
console.log(oRato.replace(/r/g, 'l')); //-- Usando Regex --//
console.log(oRato.toLowerCase());
console.log(oRato.toUpperCase());
console.log(oRato.trim());
let oRato2 = "        O rato roeu a roupa do rei de Roma.        ";
console.log(oRato2);
console.log(oRato2.trim());
console.log(oRato2.trimStart());
console.log(oRato2.trimEnd());

console.log(oRato.length);
console.log(oRato.padStart(55, '.'));
console.log(oRato.padEnd(150, '.'));

console.log(oRato.slice(2, 6));
console.log(oRato.slice(-6));
console.log(oRato.slice(-6, -2));
console.log(oRato.split('r'));
console.log(oRato.split(' '));
console.log(oRato.split(' ', 4 ));

console.log(oRato.match(/r/g));
console.log(oRato.match(/R/g));
console.log(oRato.match(/r/gi));

console.log(oRato.toLowerCase());
console.log(oRato.toUpperCase());

console.log(oRato.normalize());