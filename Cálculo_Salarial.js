//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Função útil para o calculo do imposto (baseado nas aliquotas).


const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());


// TODO: utilizando as funções úteis abaixo, calcule e imprima a saída conforme o enunciado.


function calcularPorcentagem(valor, percentual) {
  return valor * (percentual / 100);
}


function pegarAliquota(salario) {
  if (salario >= 0 && salario <= 1100) {
    return 5;
  } else if (salario >= 1100.01 && salario <= 2500.00) {
    return 10;
 
  } else {
    return 15;
  }


}
const aliquotaImposto = pegarAliquota(valorSalario);


const valorImposto = calcularPorcentagem(valorSalario, aliquotaImposto);


const valorATransferir = valorSalario - valorImposto + valorBeneficios;

print(valorATransferir.toFixed(2));
