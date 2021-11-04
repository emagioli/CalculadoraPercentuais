let inputBanca = document.getElementById("banca");
let inputSaldo = document.getElementById("saldo");
let inputComissao = document.getElementById("comissao");

function calcular(){
      
    let valorBanca = parseFloat(inputBanca.value.replace(',','.'));
    let valorSaldo = parseFloat(inputSaldo.value.replace(',','.'));
    let percentualComissao = parseInt(inputComissao.value.replace('%',''));

    imprimirResultados(valorBanca, valorSaldo, percentualComissao);
}



function imprimirResultados(valorBanca, valorSaldo, percentualComissao) {

    resultados.innerHTML = "<h2>Resultado:</h2>";

    let rendimento = (valorSaldo - valorBanca);
    let percentualDoRendimento = (rendimento / valorBanca).toLocaleString("pt-br", {style: "percent", minimumFractionDigits: 2});
    resultados.innerHTML += `<p>Rendimento: ${rendimento.toLocaleString("pt-br", { style: 'currency', currency: 'BRL' })} (${percentualDoRendimento} de rendimento)</p>`;
    
    let valorComissao = (rendimento / 100) * percentualComissao;
    resultados.innerHTML += `<p>Valor da Comissão: ${valorComissao.toLocaleString("pt-br", { style: 'currency', currency: 'BRL' })}</p>`;
    
}





// let inputAdultos = document.getElementById("adultos");
// let inputCriancas = document.getElementById("criancas");
// let inputDuracao = document.getElementById("duracao");
// let resultados = document.getElementById("resultados");

// var duracao = inputDuracao.value;

// function calcular() {
//     let adultos = inputAdultos.value;
//     let criancas = inputCriancas.value;
//     duracao = inputDuracao.value;

//     carne = calcularCarneEmGramas(adultos) + calcularCarneParaCriancas(criancas);
//     cerveja = calcularCervejaEmMililitros(adultos);
//     refri = calcularRefriEmMililitros(adultos) + calcularRefriParaCriancas(criancas);

//     imprimirResultados(carne, cerveja, refri);
// }


// let maisDeSeisHoras = (duracaoEmHoras) => duracaoEmHoras > 6;


// let calcularCarneEmGramas = (numeroDePessoas) =>
//     maisDeSeisHoras(duracao) ? numeroDePessoas * 650 : numeroDePessoas * 400;

// let calcularCarneParaCriancas = (qtdCriancas) => calcularCarneEmGramas(qtdCriancas) / 2;


// let calcularCervejaEmMililitros = (numeroDeAdultos) =>
//     maisDeSeisHoras(duracao) ? numeroDeAdultos * 3000 : numeroDeAdultos * 1800;


// let calcularRefriEmMililitros = (numeroDePessoas) =>
//     maisDeSeisHoras(duracao) ? numeroDePessoas * 1500 : numeroDePessoas * 1000;

// let calcularRefriParaCriancas = (qtdCriancas) => calcularRefriEmMililitros(qtdCriancas) / 2;


// function imprimirResultados(gramasDeCarne, MililitrosDeCerveja, MililitrosDeRefri) {

//     resultados.innerHTML = "<h2>Você vai precisar de:</h2>";

//     let kgDeCarne = gramasDeCarne / 1000;
//     resultados.innerHTML += `<p>${kgDeCarne}kg de Carne 🥩</p>`;

//     let latasDeCerveja = Math.ceil(MililitrosDeCerveja / 355);
//     resultados.innerHTML += `<p>${latasDeCerveja} latas de Cerveja (355ml) 🍻</p>`;

//     let litrosDeRefri = Math.ceil(MililitrosDeRefri / 2000);
//     resultados.innerHTML += `<p>${litrosDeRefri} garrafas de refrigerante (2l) 🥤</p>`
// }