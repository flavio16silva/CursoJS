//Criação dos 3 componentes básicos
let num = document.getElementById('txtnum')
let lista = document.querySelector('select#valor')
let res = document.querySelector('div#res')

// VETOR - Criação global de um vetor vazio que será usado para analisar os dados.  
let valores = [] 

//Verificando se (n) é um número
function aNumero(n) { //Recebendo um número
  if (Number(n) >= 1 && Number(n) <= 100) {
      return true
  } else {
      return false
  }
}

//Verificando se o número tá na lista
function iLista(n, l) { //Recebendo um número e uma lista
  if (l.indexOf(Number(n)) != -1){ //O -1 indica que o valor não foi encontrado na lista.
      return true 
  } else {
      return false 
  }
}


function adicionar() { //Analisando "Se será um número e senão estiver em lista - (!)".
    if(aNumero(num.value) && !iLista(num.value, valores)) { //passando o valor e a lista - valores
          //window.alert ('Tudo certo!')
          valores.push(Number(num.value)) //Valores é o indice. Push, iremos adicionar um elemento no vetor
          let item = document.createElement('option')     //Adicionando valores no select/Criando uma tag = options
          item.text = `O Valor ${num.value} foi adicionado.` //String com condições de interpolação
          lista.appendChild(item)                         //Adicionando na lista
    }else {
      window.alert('Valor errado ou encontrado na lista!')
    }
}