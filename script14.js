let quantidadeIngressos // entrada - input
let valorUnitario // entrada - input
let montanteArrecadado // saída - output

quantidadeIngressos = prompt("Informe a quantidade de ingressos vendidos:");
valorUnitario = prompt("Informe o valor unitário do ingresso:");

quantidadeIngressos = parseFloat(quantidadeIngressos);
valorUnitario = parseFloat(valorUnitario);

montanteArrecadado = parseFloat(quantidadeIngressos) * parseFloat(valorUnitario);

alert("O montante arrecadado com a venda dos ingressos é de R$ " + montanteArrecadado);