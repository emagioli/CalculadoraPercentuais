let inputBanca = document.getElementById("banca");
let inputSaldo = document.getElementById("saldo");
let inputComissao = document.getElementById("comissao");

function calcular() {

    let valorBanca = parseFloat(inputBanca.value.replace(',', '.'));
    let valorSaldo = parseFloat(inputSaldo.value.replace(',', '.'));
    let percentualComissao = parseInt(inputComissao.value.replace('%', ''));

    imprimirResultados(valorBanca, valorSaldo, percentualComissao);
}


function imprimirResultados(valorBanca, valorSaldo, percentualComissao) {

    resultados.innerHTML = "<h2>Resultado:</h2>";

    let rendimento = (valorSaldo - valorBanca);
    let percentualDoRendimento = (rendimento / valorBanca).toLocaleString("pt-br", { style: "percent", minimumFractionDigits: 2 });
    resultados.innerHTML += `<p>Rendimento: ${rendimento.toLocaleString("pt-br", { style: 'currency', currency: 'BRL' })} (${percentualDoRendimento} de rendimento)</p>`;

    let valorComissao = (rendimento / 100) * percentualComissao;
    resultados.innerHTML += `<p>Valor da Comissão: ${valorComissao.toLocaleString("pt-br", { style: 'currency', currency: 'BRL' })}</p>`;

}