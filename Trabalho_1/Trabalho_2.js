/* Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata. O texto de entrada conterá apenas letras minúsculas e/ou espaços. 
Letras acentuadas não fazem parte deste desafio. 
*/

function contarVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
  
    for (let letra of texto) {
      if (vogais.includes(letra)) {
        contador++;
      }
    }
  
    return contador;
    
}
  

const texto = "Ola, hoje e dia 01 de maio de 2025";
const resultado = contarVogais(texto);
console.log(`A frase informada foi: ${texto}. Nela foram encontradas ${resultado} vogais.`);


/*  
const texto = "Olá, hoje é dia 01 de maio de 2025";
const resultado = contarVogais(texto);
console.log(`A frase informada foi: ${texto}. Nela foram encontradas ${resultado} vogais.`);
*/