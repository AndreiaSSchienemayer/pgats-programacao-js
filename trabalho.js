

export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}


export function verificarSePodeSerAdotado(idade, porte) {
  const idadeMinima = {
    'P':3,
    'M': 1,    
    'G': 0.2
  };

  return idade >= idadeMinima[porte];
}


export function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}  



export function decidirTipoDeAtividadePorPorte(porte) {
  let atividade;

  switch (porte.toLowerCase()) { 
    case 'pequeno':
      atividade = 'brincar dentro de casa';
      break;
    case 'medio':  
      atividade = 'caminhada leve'; 
      break;
    case 'grande':
      atividade = 'correr no parque';
      break;
    default:
      atividade = 'porte inválido';
  }

  return atividade;
}



export async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pipoca');
    }, 100);
  });
}
