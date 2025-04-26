

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

});