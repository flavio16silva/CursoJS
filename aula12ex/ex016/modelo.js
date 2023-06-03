function calcular() {
  var numero = document.getElementById('txtnum') //Pegando os valores pelo "id"
  var tab = document.getElementById('stab')
  
  if (numero.value.length == 0) {
    window.alert('Digite um número válido!') //Em caso de valor vazio
  }else {
    var n = Number(numero.value) //Convertendo o 'número' que será digitado em: 'txtnum' de texto para número
    var c = 1
    tab.innerHTML = ``           //Antes de começar a tabuada, a area será limpa.

    while (c <= 10){ //Enquanto o contador for >= 10
      let item = document.createElement('option') //adicionando elementos 'options' como no HTML
      item.text = `${n} x ${c} = ${n*c}` //Inserindo os valores dentro do options - Uso da Template String
      tab.appendChild(item)              // Aparecer o valor, ou seja, adicionar um elemento filho
      c++                                //Incrementando o valor de 'c' para gerar a contagem
    }
  }
    
  
}