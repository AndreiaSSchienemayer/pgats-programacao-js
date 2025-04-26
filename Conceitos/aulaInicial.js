
/*
console.log("Aula Inicial Andreia JS")
console.error("Erro: Falha na execução!!!")
console.warn("Atenção")
console.table([{
  nome: 'Andreia',
  turma:'02',
  disciplina: 'Prog JS'
},
{
  nome: 'Samuel',
  turma:'02',
  disciplina: 'Prog JS'
},
{
  nome: 'Lucas',
  turma:'02',
  disciplina: 'Prog JS'
}
])

const irmaos=["Thor","Hela"]
console.table(irmaos)


const numeroAula="03"
const turma="02"
let data="05 de Abril"
console.log(data.length)

const nomesDeAlunos="Andreia Goku Lucas Samuel"
const nomesDeAlunosSplit=nomesDeAlunos.split(" ")
console.log(nomesDeAlunosSplit)

console.log(nomesDeAlunos.toLocaleLowerCase())
console.log(nomesDeAlunos.toUpperCase())

console.log (nomesDeAlunos.includes("Andreia"))
console.log (nomesDeAlunos.includes("Denis"))


const nomesDeAlunos="Andreia Goku Lucas Samuel"
console.log(nomesDeAlunos.replaceAll('a','i'))

const conceitosLogica="    inteiro real cadeia de caracteres     "
console.log(conceitosLogica.trim())


let dataParaCortar="05 de abril"
console.log(dataParaCortar.slice(0,2))

const cpf="70541051091"
console.log(cpf.slice(0,3))





Tentativa minha: 

const nomes=[
  "sheik", "THOR", "PITOco", "pELE", "PanTERRA Negra"
];

nomes.forEach(nomesOriginal => {

//limpar espaços e transformar tudo em minúsculas. 
const nomesLimpos=nomesOriginal.trim().toLowerCase();

//Deixar a primeira letra em maíuscula e o restante em minúsculo
const nomesFormatados=nomesLimpos.charAt(0).toUpperCase()+nomesLimpos.slice(1);

//Exibir Resultado
console.log (`Nome Original: "${nomesOriginal}" | Nome Formatado: "${nomesFormatados}"`);

});*/

//Corrigindo com o professor


/**

Validador de nomes para as tags

Alguns donos estão registrando os dogs com nomes mal formatados. Crie um script para limpar e padronizar os nomes.

Aplique as formatações e exiba:
- O nome original, como foi cadastrado
- O nome formatado

Extra: aplique uma regra que confira se o nome informado possui apenas uma palavra. Exiba se o nome é válido ou não.

Exemplos:

  - nomes válidos
    - Pipoca
    - Guaraná
    - Paçoca
  - nomes inválidos
    - Peggy Carter
    - Pantera Negra

 */

const nomeDog = "tHoR@!%  "
//const nomeDog = '   Ba!ley Mari@    '

let nomeFormatado = nomeDog.trim()
nomeFormatado = removerCaracteresEspeciais(nomeFormatado)
nomeFormatado = tornarAPrimeiraLetraMaiuscula(nomeFormatado)

const valido = verificarSeONomeEValido(nomeFormatado)

console.log(nomeDog)
console.log(nomeFormatado)
console.log(valido)

function removerCaracteresEspeciais(nome) {
  // return nome.replace(/[^a-zA-ZÀ-ÿ]/g, "");
  return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}

function removerEspacosEntreAPalavra(nome) {
  return nome.replace(/\s+/g, "")
}

function tornarAPrimeiraLetraMaiuscula(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase()
}

function verificarSeONomeEValido(nome) { 
  return nome.split(" ").length === 1
}