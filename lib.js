// Função para exibir uma mensagem de alerta
function exibirMensagem(mensagem) {
    alert(mensagem);
  }
  
  // Função para adicionar uma classe a um elemento HTML
  function adicionarClasse(elemento, classe) {
    elemento.classList.add(classe);
  }
  
  // Função para remover uma classe de um elemento HTML
  function removerClasse(elemento, classe) {
    elemento.classList.remove(classe);
  }

  export async function registerCustomer(params) {
    //Chamada para api.consigmais.com.br

    try {
        return await axios.post('https://test.api.consigmais.com.br/server', params);    
    } catch(e) {
        console.log('Axios Error')
        console.log(e);
    }
 
}