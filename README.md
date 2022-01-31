Esse é um projeto considerado simples, porém, muito bom para quem está iniciando nas 
tecnologias de desenvolvimento HTML e CSS, e também na linguagem de programação javascript.
O HTML, apresenta algumas tags sintáticas pouco utilizadas ou conhecidas, que são respectivamente 
as tags: <table>, <tr> e <td>. São essas tags que vão formar praticamente minha 
calculadora, pois dentro dessas tags serão adicionados os botões(button) da minha 
calculadora.

        <table>
          <tr>
            <td><button></button></td>
            <td><button></button></td>
            <td><button></button></td>
            <td><button></button></td>
          </tr>
        </table>
       
E assim serão feitas cinco colunas da minha tabela, contendo todos os botões correspondentes 
da minha calculadora. Outrossim, será a esstilização da mesma com o CSS, logo, as tabelas
vão se alinhar da devida forma, como está representado no arquivo "Style.css", dentre outras 
estilizações.

    *{
      margin:0;
      padding:0;
      box-sizing: border-box;
     }
     
     .contaneir-principal{
       ...
      }
      
E por fim teremos as interações da minha calculadora com javascript, para adicionar os botões
a minha caixa "resultado", fazer o cálculo da operações, deletar por inteiro ou 
parcialmente meus digítos. Ademais, para que ocorra as devidas funções, temos que 
adicionar eventos aos meus botões para ocorrer as interações de acordo com o que eu quero.

  function include(num){
    var numero = document.getBylementId("resultado").innerHTML
    document.getBylementId("resultado").innerHML = numero + num
  }
  
  function dell(){
    var apagar = document.getBylementId("resultado")
    
    apagar.innnerHTML = ""
  }
  
  function clean(){
    var r = document.getBylementId("resultado").innerHTML
    document.getBylementId("resultado").innerHTML = r.subString(0, r.length -1)
  }
  
  function calcular(){
    var call = document.getBylementId("resultado").innerHTML
    if(call){
      document.getBylementId("resultado").innerHTML = eval(call)
    }
    else{
      window.alert("[ERRO] Preencha a caixa.")
    }
  }
  
Observe que a primeira função obteve um parâmetro "num", isso porque foi aplicada 
uma mesma função para mais de botão.
