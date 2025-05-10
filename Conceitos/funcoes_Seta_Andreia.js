
/*Função de seta com parâmetros.*/

const soma = (a, b) => a + b;
console.log(soma(5, 3)); // Saída: 8


/* Função de seta com um único argumento:
*/
const dobro = x => x * 2;
console.log(dobro(4)); // Saída: 8


/*
Função de seta em um callback.
*/
const numeros = [1, 2, 3, 4, 5];
    const quadrados = numeros.map(numero => numero * numero);
    console.log(quadrados); // Saída: [1, 4, 9, 16, 25]