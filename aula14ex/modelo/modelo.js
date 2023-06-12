// ==================== 1º PARTE ============================
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

// ======================== 2º PARTE ====================================
function adicionar() { //Analisando "Se será um número e senão estiver em lista - (!)".
    if(aNumero(num.value) && !iLista(num.value, valores)) { //passando o valor e a lista - valores
          //window.alert ('Tudo certo!')
          valores.push(Number(num.value)) //Valores é o indice. Push, iremos adicionar um elemento no vetor
          let item = document.createElement('option')     //Adicionando valores no select/Criando uma tag = options
          item.text = `O Valor ${num.value} foi adicionado.` //String com condições de interpolação
          lista.appendChild(item)                         //Adicionando números na lista
          res.innerHTML = ''                          //Ao inserir um novo número, limpar. 
    }else {
      window.alert('Valor incorreto ou encontrado na lista!')
    }
    //Para apagar o valor após digitado
    num.value = '' //começar vazio
    num.focus()    // manter o cursor do mouse para digitar novo número
}


// ======================== 3º PARTE ====================================
function finalizar() {
  if (valores.length == 0) {
    window.alert('Insira valores antes de finalizar!')
  } else {
    let total = valores.length                  //Recebendo total de valores na lista
    let maior = valores[0]                      //Recebendo o primeiro valor
    let menor = valores[0]                      //Recebendo o primeiro valor
    let soma = 0                                //Recebendo a soma
    let media = 0                               //Recebendo a média

    //Laço de percurso para percorrer todo o array
    for (let pos in valores) {                   //Para cada posição dentro de: valores
      soma += valores[pos]                      //soma dos valores dentro do laço: for
    if (valores[pos] > maior) {
      maior = valores[pos]
    } else {
      menor = valores[pos] 
    }
     media = soma / total                       //media dos valores
  }
    res.innerHTML = '' 
    res.innerHTML += `<p>Temos ao todo ${total} números cadastrados. </p>`
    res.innerHTML += `<p>Na lista temos como maior valor o número: ${maior}. </p>`
    res.innerHTML += `<p>Na lista temos como menor valor o número: ${menor}. </p>`
    res.innerHTML += `<p>Na lista a soma dos valores é igual a: ${soma}. </p>`
    res.innerHTML += `<p>A média dos valores na lista é: ${media}. </p>`

  }
}