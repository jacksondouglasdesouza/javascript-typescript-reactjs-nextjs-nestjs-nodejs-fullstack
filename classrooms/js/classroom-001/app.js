    console.log("Hello World"); // Quem nunca usou? Não vai ser programador!

    var nome = "Gustavo";
    var idade = 21;
    var idade2 = 10;
    var frase = "Japão é o melhor time do mundo";
    console.log("Bem vindo " + nome + " você tem " + idade + " anos");
    console.log(idade + idade2);
    console.log(nome);


    //---------


    var nomeNome01 = 'Jackson';
    var nomeNome02 = "Gustavo";
    var nomeNome03 = `Gustavo Jackson`; //template string 

    console.log('Meu nome é: ', nomeNome01);
    console.log("Meu nome é: ", nomeNome02);
    console.log(`Meu nome é: ${nomeNome03}`); //template string


    //---------


    console.log(35, 35.3535, -35, -35.3535, true, false, 'Meu nome Completo é: ', `${nomeNome03}`, 1+1, "1" + "a", '<<<< Vai concatenat 1 com A');


    //---------


    console.log('Meu nome é McDonald\'s e adoro comer o big mac feliz as', 22, ':', 35, 'Horas em São Paulo'); //escape aspas simples
    console.log("Meu nome é McDonald's e adoro comer o big mac feliz! ", '22:35', 'Horas em São Paulo'); //sem escape aspas duplas
    console.log(`Meu nome é McDonald's e adoro comer o big mac feliz! `, 22, ':', 35, 'Horas em São Paulo'); //sem escape template string

    //--------- // <<<<<<<< COMENTÁRIO SIMPLES >>>>>>>>>>

    // COMENTÁRIO EM BLOCO 
    /**Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    *Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    *Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    *Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    */

    // ----------

    // -- COMENTÁRIO DE DOCUMENTAÇÃO
    /**
     * Adiciona dois números.
     * @param {number} a - O primeiro número.
     * @param {number} b - O segundo número.
     * @return {number} A soma dos dois números.
     * @example
     * // Adiciona 5 e 3
     * const resultado = adicionar(5, 3);
     * console.log(resultado); // 8
     * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript|Documentação do JavaScript}
     * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number|Documentação do Number}
     * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String|Documentação do String}
     * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Boolean|Documentação do Boolean}
     * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array|Documentação do Array}
     * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object|Documentação do Object}
     * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function|Documentação do Function}
     * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math|Documentação do Math}
     * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date|Documentação do Date}
     * 
     * @todo Implementar validação de entrada.
     * @todo Adicionar suporte para mais de dois números.
     * 
     * @deprecated Esta função será removida em futuras versões. Use a função `somar` em vez disso.
     */
    function adicionar(a, b) {
        return a + b;
    }

    //--

    console.log('Resultado: ', adicionar(5, 3)); // 8
    console.log('Resultado: ', adicionar(10, 20)); // 30
    console.log('Resultado: ', adicionar(-5, 5)); // 0

    ///-------------------

