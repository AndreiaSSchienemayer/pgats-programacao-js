
/* Entregador de brinquedos para os dogs
Dado que você tenha uma lista de brinquedos com: Bola, Osso, Corda, Sino
Crie um script que passe pela lista de brinquedos e entregue um por vez.
Use a estrutura de repetição forEach. 
Extra: transforme a lógica em uma função (da forma que conseguir)

*/



//Resolução simples: 
const brinquedos = ['Bolinha Verde', 'Osso', 'Bolinha Vermelha', 'Sino', 'Ossinho','Petisco','Pato de Borracha','Cachorro de Borracha'];

brinquedos.forEach(function(brinquedo, index) {
    console.log(`Brinquedo ${index + 1} ${brinquedo}: Entregue.`);
})
    console.log("Todos os brinquedos foram entregues!");
;



/* 
//Resolução com função:

function entregarBrinquedos(lista) {
    lista.forEach(function(brinquedo, index) {
        console.log(`Entregando o brinquedo ${index + 1}: ${brinquedo}`);
    });
    console.log("Todos os brinquedos foram entregues!");
}

const brinquedos = ['Bolinha Verde', 'Osso', 'Bolinha Vermelha', 'Sino', 'Ossinho','Petisco','Pato de Borracha','Cachorro de Borracha'];
entregarBrinquedos(brinquedos);
*/