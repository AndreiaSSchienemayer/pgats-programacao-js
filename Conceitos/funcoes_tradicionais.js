
//função nomeada, com parametro, sem retorno
function exibirNomeDoDog(nome){
    console.log(nome)
}


//função nomeada, com parametro + valor default, sem retorno
function exibirPorteDoDog(porte='ND'){
    console.log(porte)
}


//função nomeada, com parametro, com retorno
function obterNomeDoDogFormatado(nome){
    return nome.toUpperCase()
}


//função com retorno de objeto
function obterObjetoDog(){
    return{
        nome: 'Bailey Maria',
        peso:11.5
    }
}


//função com retorno de lista
function listarDeNomesDeDog(){
   return[
        'Pituca',
        'Marea',
        'Paquito'
    ]
}


exibirNomeDoDog("Pipoca")
exibirPorteDoDog()
console.log(obterNomeDoDogFormatado("Bailey Maria"))
console.log(obterObjetoDog())
console.log(listarDeNomesDeDog()) 