/* Distribuidor de Petiscos
Você tem uma lista de câes: Pantera, Luna e Thor
Crie um script que "entregue" 1 petisco para cada cão da lista
Exiba uma mensagem como: Entregando petisto para Pantera

Mantenha os dados e funções em arquivos separados, use a modularização para organizar. 
*/

function entregarPetisco(lista) {
    lista.forEach(function(dog) {
        console.log(`Entregando petisco para ${dog}`);
    });
    console.log("Todos os petiscos foram entregues!");
}

export { entregarPetisco };