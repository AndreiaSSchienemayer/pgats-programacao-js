/* Exceções:

tentar {
    //conexão com o banco (exemplo)
} pegar (erro/exceção){
    //salvar a exceção em algum lugar
    //exibir 
}

throw = lançar: Uso isso para lançar erro para testar e já deixar tratado se acontecer o erro. Ai no catch eu posso exibir só o nome, bloco total como este exemplo, 
dentro do Error() posso colocar uma mensagem, exemplo: Error(``Pet não quis comer). Desta forma posso já deixar tratado, esse erro x acontece por x motivo, então mnostra x mensagem.
Ele é a última coisa que vai ser executado dentro de um try

finally bloco que sempre será executado independente do try ou cath. Pode ser usado por exemplo para fechar a conexão com o banco depois de usar, então, independente se der certo ou não
vai fechar a conexão com o banco ao finalizar
*/

try{
    console.log(`Tentando alimentar o pet...`)
    //throw new Error() //para simular erro descomentar esta linha
} catch (excecao){
    console.log(excecao)
}finally{
    console.log(`Sempre serei executado`)
}