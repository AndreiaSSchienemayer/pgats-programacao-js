
/*
describe -> agrupador de testes
it -> implementação do teste


Sintaxe padrão pra usar com o mocha
describe('Testes do Projeto', ()=>{

    it('primeiro teste',()=>{
        
    })

    TDD - Desenvolvimento orientado a teste
    crio o teste
    vejo o teste falhar
    crio a implementação para o teste passar
    rodo o teste de novo
    refatoro o código para melhorar 
    rodo o teste novamente


    //Assertion/Asserção: Verificar se um valor ou um comportamento está de acordo com o esperado. 

})

*/
import{exibirNomeDogFormatado} from '../Conceitos/testesUnidade.js'
import assert from 'node:assert' //importa a biblioteca de asserção do node para poder fazer a comparação se o valor atual está de acordo com o valor esperado.
//import { test, expect } from '@playwright/test';



//Sintaxe padrão de teste usando o mocha
describe('Testes do Projeto', ()=>{
    it('deve exibir o nome do dog com letras maiúsculas',()=>{
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'),'MIMOSA') //quer dizer, verifique se: <valor atual> É IGUAL <valor esperado>

    })

    it('primeiro teste',()=>{

    })

    it ('segundo teste',()=>{
      // throw new Error() //ao ativar este comando ele simula erro, ou seja, não vai passar o teste.
        
    })    


})

