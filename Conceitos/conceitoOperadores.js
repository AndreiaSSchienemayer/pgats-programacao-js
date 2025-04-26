/*

OPERADORES
Servem para comparar, fazer comparações lógicas e aritmética. 

OPERADORES DE COMPARAÇÃO: 

> Maior que: 
*/
console.log(`10>5=${10>5}`)//verdadeiro=true
console.log(`10>20=${10>20}`)//falso=false


/*
>= Maior ou igual

*/
console.log(`10>=5=${10>=5}`)//verdadeiro=true
console.log(`10>=9=${10>=9}`)//verdadeiro=true


/*
< Menor que

*/
console.log(`10<5=${10<5}`)//falso
console.log(`10<20=${10<20}`)//verdadeiro


/*
<= Menor ou igual

*/
console.log(`10<=5=${10<=5}`)//verdade
console.log(`10<=20=${10<20}`)//falso


/*
== (dois iguais) Compara dois valores (coersão de tipo)
Ex: VARIAVEL A possui o mesmo valor que a VARIAVEL B
No javascript o exemplo abaixo é igual, pois é linguagem fracamento tipada, o mesmo não acontece para true=="true" por exemplo

*/
console.log(`10 é igual "10"=${10=="10"}`)//true
console.log(`True é igual "10"=${true=="10"}`)//false
console.log(`False é igual "10"=${false=="10"}`)//false
console.log(`null é igual undefined =${null==undefined}`)//true


/*
!= Diferença de valores

*/
console.log(`10 é diferente de "10"=${10!="10"}`)//true
console.log(`1 é diferente de 2=${1!=2}`)//true


/*
=== (três iguais) Estritamente igual, compara tanto o tipo quanto o conteúdo se é igual
Ex: VARIAVEL A possui o mesmo valor E possui o mesmo tipo que a VARIAVEL B
Neste caso como confere o tipo também, dai é falso pois eles são de tipos diferentes.
Como o JavaScript é fracamente tipado é aconselhado usar essa forma pois já confirma que está fazendo a comparação de maneira mais segura.
*/
console.log(`10 é igual "10" e do mesmo tipo=${10==="10"}`)//false
console.log(`True é igual "10" e do mesmo tipo=${true==="10"}`)//false
console.log(`False é igual "10" e do mesmo tipo=${false==="10"}`)//false
console.log(`null é igual undefined e do mesmo tipo=${null===undefined}`)//false





//******************************************************************************************************************************************************************************************************************
/*
OPERADORES LÓGICOS

Servem para fazer comparação entre expressões de valor boleando. 

&& - E / AND
*/
//console.log(`true E true=${true&&true}`)
const nomeDog="Pipoca"
const nomePossuiUmaPalavra=nomeDog.split(" ").length===1
const nomePossuiAteDezCaracteres=nomeDog.length<=10
//console.log(nomePossuiUmaPalavra&&nomePossuiAteDezCaracteres)//true
console.log(`Nome possui uma palava e o nome possui até 10 caracteres=${nomePossuiUmaPalavra&&nomePossuiAteDezCaracteres}`)

/*

|| - OU / OR

*/
const dog={
adotado:false,
peso: 5.3
}
//console.log(dog.adotado || dog.peso<10)//verdadeiro
console.log(`O cachorro é adotado OU o peso é menor que 10=${dog.adotado || dog.peso<10}`)
//console.log(true||true)//verdadeiro
console.log(`true OU true=${true||true}`)
//console.log(true||false)//verdadeiro
console.log(`true OU false=${true||false}`)
//console.log(false||true)//verdadeiro
console.log(`false OU true=${false||true}`)
//console.log(false||false)//falso
console.log(`false OU false=${false||false}`)


/*
! - NÃO / NOT
Se colocar o ! na frente ele inverte o valor
*/

console.log(true)//verdadeiro
console.log(!true)



//*************************************************************************************************************************************************************************************
/*
OPERADORES ARITMÉTICOS
+ ADICÃO
- SUBTRAÇÃO
* MULTIPLICAÇÃO
/ DIVISÃO
% RESTO
** EXPONENCIAL
*/

console.log(1+1)//2
console.log(10-7)//3
console.log(2*2)//4
console.log(11/2)//2
console.log(11%2)//Divide em duas partes iguais e apresenta o resto que sobrou
console.log(4**4)//256
console.log(1+1*2)//precedencia, é a ordem que o cálculo será feito, neste caso 1+1 depois *2. Usar os parênteses para organizar o cálculo como é feito normalmente. 


console.log(11 / 2) // 5.5
console.log(parseInt(11 / 2)) // 5.5 -> 5

// arredondamento

// arredonda para baixo
console.log(Math.floor(5.8))

// arredonda para cima
console.log(Math.ceil(5.8))

// arredonda para o mais próximo
console.log(Math.round(5.8))
console.log(Math.round(5.4))
console.log(Math.round(5.5))

// 
const valorDecimal = 2.123123
console.log(valorDecimal.toFixed(3))




/*
OPERADORES ADICIONAIS

-- Decremento: Diminui em 1 o valor de uma variável numérica
*/
let pesoDog=10
console.log(pesoDog)
pesoDog++
console.log(pesoDog)


/*
++ Incremento: Aumenta em 1 o valor de uma variável numérica
*/
let pesoTutor=100
console.log(pesoTutor)
pesoTutor--
console.log(pesoTutor)


/*
? Ternário: É uma condição para ser usada quando a condição é pequena, que eu possa usar na mesma linha por exemplo, abaixo segue um exemplo.
<condicao> ? <acao se verdadeiro> : <acao se falso>

*/
//Exemplo 1:
const porte = pesoDog <= 10 
              ? 'pequeno'
              : 'médio'
console.log(porte)

//Exemplo 2 mas já é mais complexo, não é aconselhável
const porteDoOperadorTernario = pesoDog <= 10 
              ? 'pequeno'
              : pesoDog <=20
              ? 'médio'
              : 'grande'
console.log(porteDoOperadorTernario)







