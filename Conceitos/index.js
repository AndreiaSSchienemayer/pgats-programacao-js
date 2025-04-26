/*
* Console API

*/

console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção/alerta")
console.table([{
    nome:'Andreia',
    turma:'02',
    disciplina:'Prog JS'
},
{
    nome:'Arthur',
    turma:'02',
    disciplina:'Prog JS'
}])

/*
* Constantes e Variáveis
*/

//const - para informações que nunca mudam
//var ou let - para informações que podem mudar

//informações de um dog que nunca mudam
const nome = 'Loki'
const raca = 'Vira Lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
constPorte = 'M'

//informações de um dog que mudam
let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = 'M'


//hoisting --> içamento ou elevação
const irmaos=[{
    nome:"Thor", 
    idade: 2
},{
    nome:"Hela", 
    idade: 3
}]
console.table(irmaos)

/*
Tipos de dados: cadeia, inteiro, real, logico, vetor, matriz
funções (leia e escreva)

Portugol - JavaScript: 
cadeia - String
inteiro/real - Number
logico - Boolean
Vetor/Matriz - Array

undefined - esta variavel vai ter um valor mas ainda este valor não foi definido 
null - defino que a variavel está vazia
BigInt - Number para números extremamente grandes
Symbol - Identificador único para uma variavel

*/
const valor="50"
console.log(valor)

/*
Strings: 
Posso declarar ela com aspas simples (single quote) 'Turma 02 do PGATS'
Posso declarar ela com aspas duplas (double quote) "Turma 02 do PGATS"
Posso declarar ela com aspas com craze (template strings) `Turma 02 do PGATS`

*/
//concatenação de strings
const turma="02"
console.log("Aula 03 da Turma " + turma +" no sábado do dia 05 de abril ")

//interpolação de strings
console.log(`Aula 03 da Turma ${turma} no sábado do dia 05 de abril`)

numeroAula="03"
let data="05 de abril"

// lenght conta quantos caracteres tem dentro da variavel desejada
console.log(numeroAula.length)

// split - separar string. Depois do split entre parênteses e as informar o que será usado de separador, neste caso vamos indicar que é o espaço
const nomesDeAlunos ="Giuliana André Lucas Henrique"
const nomesDeAlunosSplit=nomesDeAlunos.split(" ")
console.log(nomesDeAlunosSplit)

//to.lowercase e toupercase: Passar todas as letras para minúsculo ou passar todas para maiúsculo 
//console.log(nomesDeAlunosSplit.toLowerCase()) 
//console.log(nomesDeAlunosSplit.toUpperCase())
//ver pq não aceita


//includes: permite procurar se determinada palavra ou nome consta na variavel que está sendo conferida. Se sim retorna True, senão False
console.log(nomesDeAlunos.includes("André"))



//Chai - É uma Biblioteca de asserção (asserção tudo que coloca para ver se teste passou, tem biblioteca pra isso)

//replace: usado para substituir um caracter por outro, neste caso vamos substituir a letra a pela letra i:
console.log(nomesDeAlunos.replaceAll('a','i'))

//trim - usado para tirar espaços do inicio e final, no exemplo abaixo, veja que no texto tem um monte de espaços no inicio e no final, quero tirar eles
const conceitosLogica="      inteiro real cadeia de caracteres.... "
console.log(conceitosLogica.trim())

//slice: serve para fazer um recorte em uma sting, dentro do parênteses indicar de qual posição até qual posição quer recortar para apegar, exemplo quero pegar o 05 da data
let dataParaCortar="05 de abril"
console.log(dataParaCortar.slice(0,2))
//posso usar também para pegar os 3 primeiros dígitos do CPF por exemplo, neste caso indico que deve pegar da posição 0,3

//substring: mesma função do slice






