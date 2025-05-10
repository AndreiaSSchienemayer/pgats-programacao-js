/*
Crie um script que avise quand o Dog já passeou o suficiente. Para saber, vamos considerar que ele se sentirá satistfeito somente a partir da 5 volta na quadra.
Use a estrutura de repetição whilw. 

Exiba: 
- Qual o número da volta atual
- Quando o dog estiver satisfeito

Extra: transforme a lógica em função (da forma que conseguir)

*/
/* Sem função
let nVolta = 1
let voltasParaDogFicarSatisfeito = 5

while(nVolta<=voltasParaDogFicarSatisfeito){
    console.log(`Volta de número ${nVolta} com o Pitoco`)
    nVolta++
}
console.log(`Acaboouuu o passeio, Pitoco!`)

*/


//Usando função
function verificarSeEstaSatisfeito(){
    let nVolta = 1
    let voltasParaDogFicarSatisfeito = 5 

    while(nVolta<=voltasParaDogFicarSatisfeito){
        console.log(`Volta de número ${nVolta} com o Pitoco`)
        nVolta++

}
    console.log(`Acaboouuu o passeio, Pitoco!`)
}
verificarSeEstaSatisfeito(10)