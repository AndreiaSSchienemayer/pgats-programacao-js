
//FUNÇÕES DE FLEXA
/* Sintaxe
()=>{

}
    */



//função nomeada, com parametro, sem retorno

const exibirNomeDoDog = (nome)=>{
    console.log(nome)
}


//função nomeada, com parametro + valor default, sem retorno
const exibirPorteDoDog=(porte='ND')=>{
    console.log(porte)
}



//função nomeada, com parametro, com retorno
const obterNomeDoDogFormatado=(nome)=>{
    return nome.toUpperCase()
}


//função com retorno de objeto
const obterObjetoDog=()=>{
    return{
        nome: 'Bailey Maria',
        peso:11.5
    }
}

//função com retorno de lista
const listarDeNomesDeDog=()=>{
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