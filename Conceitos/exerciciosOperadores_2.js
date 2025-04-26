/*
Calculadora de ração diária

Crie um script que receba ao peso do dog em kg + estoque atual de ração em gramas. Calcule a quantidade diária de ração com base na seguinte fórmula: Gramas por dia = peso x 30 gramas.Calcule

Exiba: 
Nome do dog
Peso
Quantidade de ração recomendada por dia
Quantos dias o estoque atual vai durar
*/

//Minha resposta

const nomeDog='Sheik'
const pesoDog=10
const estoqueRacao=5000 

const qtdDia=pesoDog*30
const duraRacao=estoqueRacao/qtdDia
console.log(`O cachorro ${nomeDog} possui ${pesoDog} kg, a quantidade diária de ração sugerida para ele é ${qtdDia} gramas por dia, logo, ainda tem ração para ${duraRacao.toFixed(2)} dias`)




//Resposta do Professor/colegas
//Ficou praticamente igual, só mudou os nomes das variáveis. Mas tem uma segunda sugestão com função.

const nomeDog='Sheik'
const pesoDog=10
const estoqueRacao=5000 

function calcularConsumoDeRacao(nomeDog, pesoDog, estoqueRacao){
const qtdDia=pesoDog*30
const duraRacao=estoqueRacao/qtdDia
console.log(`O cachorro ${nomeDog} possui ${pesoDog} kg, a quantidade diária de ração sugerida para ele é ${qtdDia} gramas por dia, logo, ainda tem ração para ${duraRacao.toFixed(2)} dias`)

}
calcularConsumoDeRacao('Ada',1,2000)
calcularConsumoDeRacao('Thor',2,2000)
calcularConsumoDeRacao('Paquito',10,2000)
calcularConsumoDeRacao('Sheik',15,2000)
