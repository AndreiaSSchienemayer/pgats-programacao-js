/*
Forma antiga que era utilizada (bastante usada até 2020):
Sintaxe CommonJS: 
    module.exports={} / require('')

Forma mais usada recentemente: 
ESM - Ecmascript Standard Modules
    export{} / import

*/
const nomePet='Pitoco'

function exibirNomePet(nomePet){
    console.log (`O nome do pet é ${nomePet}`)
}
exibirNomePet('Pitoco')
exibirNomePet('Pantera')
exibirNomePet('Pantera')

//export{} / import
export{
    exibirNomePet
}
//Se tiver mais funções para exportar é só exportar a função separada por vírgula (pode exportar somente as que desejar)