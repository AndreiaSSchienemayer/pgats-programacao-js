/*
Classificador de porte automático

Muitos tutores não fazem idéia do porte de seu Dog.
Crie um script que classifique com base no peso de forma simplificada, sendo: 
- Até 10KG Pequeno, acima disso, Médio

Use o operador ternário para determinar o porte. Exiba: 
- Nome
- Peso 
- Porte classificado

Extra: transforme a lógica em uma função (da forma que conseguir)
*/
 
const nome ='Ada'
const pesoDoDog=5.5
const porteDoDog = pesoDoDog <= 10
? `pequeno`
: `médio`
console.log(`O peso do ${nome} é ${pesoDoDog} kg e seu porte é ${porteDoDog} porte`)


//EXTRA

function classificarPortePorPeso(nome,pesoDoDog){
const porteDoDog = pesoDoDog <= 10
? `pequeno`
: `médio`
console.log(`O peso do ${nome} é ${pesoDoDog} kg e seu porte é ${porteDoDog} porte`)
}

classificarPortePorPeso('Paquito', 14.5)
classificarPortePorPeso('Sheik', 1.5)
classificarPortePorPeso('Panterra', 8)
classificarPortePorPeso('Pelé', 30)





