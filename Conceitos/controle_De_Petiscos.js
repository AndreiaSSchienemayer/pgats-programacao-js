/* Controle de Petiscos
Crie um script que receba uma quantidade de petiscos e dê uma por vez até o dog estiver satisfeito.
Use a estrutura de repetição for contado. 
Exiba: 
- Cada vez ue um petisco for entregue
- Quando o dog estiver satisfeito (que é quando terminar os petiscos)
Extra: Transforme a lógica em uma função (da forma que conseguir)
*/




/* Resolução simples sem função

let quantidadePetiscos = 10; 

for (let petisco = 1; petisco <= quantidadePetiscos; petisco++) {
    console.log(`Petisco número ${petisco} entregue ao dog`);
}

console.log("Chegaa... o dog está satisfeito!");

*/




//Resolução com função
let quantidadePetiscos

function alimentarDog(quantidadePetiscos) {
    for (let petisco = 1; petisco <= quantidadePetiscos; petisco++) {
        console.log(`Petisco número ${petisco} entregue ao dog`);
    }
    console.log("Chegaa... o dog está satisfeito! \n");
}

//posso passar vários valores, inclusive com o zero conforme exemplo abaixo
alimentarDog(3);
alimentarDog(2); 
alimentarDog(5); 
alimentarDog(0); 
alimentarDog(50); 