/* paraCada (forEach)

listaDeAlunos
Matheus
Renata
Leandro
Ana
Lucas

paraCada (item da) listaDeAlunos
//dar uma nota aleatória 
//passa em cada aluno, quando acabar ele termina o loop.






Exemplo prático 1: 

const listaDeAlunos=[
'Matheus',
'Renata',
'Leandro',
'Ana',
'Lucas'
]

listaDeAlunos.forEach(aluno => {
    console.log(aluno)    
});

*/

//Agora em um segundo exemplo, onde além de ter só o nome tenho também a nota, e uso ainda uma condição, neste caso ficará assim:

const listaDeAlunosENotas=[
    {
        nome: 'Matheus',
        nota: 7
    },
    {
        nome: 'Renata',
        nota: 8
    },
    {
        nome: 'Leandro',
        nota: 2
    },
    {
        nome: 'Ana',
        nota: 6
    },
    {
        nome: 'Lucas',
        nota: 10
    }]
    
listaDeAlunosENotas.push({
    nome:'Andreia',
    nota: 10
})

listaDeAlunosENotas.forEach(aluno => {
    //console.log(`O aluno ${aluno.nome} possui a nota ${aluno.nota}`) Opção 1
    if(aluno.nota >= 7){
        console.log(`O aluno ${aluno.nome} foi aprovado com nota ${aluno.nota} `)
    } else{
        console.log(`O aluno ${aluno.nome} foi reprovado com nota ${aluno.nota} `)
    }
       
})
;









/*Terceiro exemplo, neste caso é possível incluir um conjunto de informações e validar no final se ficou correto. 

const dadosDeTeste = [
  {
    nomePet: 'Pipoca',
    peso: 12.6,
    porte: 'M'
  },
  {
    nomePet: 'Sheik',
    peso: 3.6,
    porte: 'P'
  }
];

dadosDeTeste.forEach(pet => {
  console.log(`O pet ${pet.nomePet} possui ${pet.peso} kgs e é do porte ${pet.porte}.`);
});
*/