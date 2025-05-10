
/* Crie uma função que pega uma lista de inteiros e strings e retorna uma nva lista sem as strings */


function filtrarNumeros(lista) {
  return lista.filter(item => typeof item === 'number');
}

const entrada = [7, 'Andreia', 36, 'Arthur', 38, 'Ivonei', 49, 50, 'Manoel'];
const resultado = filtrarNumeros(entrada);
console.log(`Foi passado as seguintes informações na lista:  ${entrada}`); 
console.log(`Segue a lista contendo apenas os números: \n ${resultado.join('\n')} \n`); 
