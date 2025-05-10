
//async - assíncrono
async function exibirNomeDogFormatado(nome){
    return nome.toUpperCase()
}

//sem o await - esperar
console.log(exibirNomeDogFormatado(`Pipoca`))
//com o await - esperar
console.log(await exibirNomeDogFormatado(`Pipoca`))

// Para o await funcionar eu preciso usar o async