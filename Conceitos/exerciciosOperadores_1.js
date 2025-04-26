/*
Exerícios: 
Validor de idade mínima para adoção.
Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, 
exemplo, 2 anos.

Use os operadores adequados e exiba: 
- Nome do dog
- Idade
- Se está apto ou não para adoção

Extra: Aplique uma regra com operaçdor lógico para permitir que se o cão for de pequeno porte, pode ser adotado
independente da idade

Exemplos: 
mínimo=2
idade 1 + porte M = Não
idade 2 + porte M = Sim pela idade
idade 2 + porte P = Sim pela idade
idade 1 + porte P = Sim pelo porte

*/

//Minha correção
const nomeDog='Thor'
const idadeDog=1
const idadeMinimaAdocao=2
const porte='P'

const adocao=idadeDog>=idadeMinimaAdocao || porte ==='P'
console.log(`O cachorro ${nomeDog} possui ${idadeDog} anos e porte ${porte}. Permite adoção = ${adocao}`)


//Correção do professor

const nome = 'Ada'
const idade = 0
const porte = 'P'

const idadeMinima = 2

const adocao = idade >= idadeMinima 
                ? 'sim'
                : porte === 'P' 
                ? 'sim'
                : 'não'

const adocaov2 = idade >= idadeMinima || porte === 'P'

console.log(adocao)
console.log(adocaov2)

function verificarSePodeSerAdotado(idade, porte) {
  const adocao = idade >= idadeMinima 
                ? 'sim'
                : porte === 'P' 
                ? 'sim'
                : 'não'

  // return adocao
  console.log(adocao)
}

// idade 1 + porte M = nao
// idade 2 + porte M = sim, pela idade
// idade 2 + porte P = sim, pela idade
// idade 1 + porte P = sim, pelo porte

verificarSePodeSerAdotado(1, 'M')
verificarSePodeSerAdotado(2, 'M')
verificarSePodeSerAdotado(2, 'P')
verificarSePodeSerAdotado(1, 'P')

