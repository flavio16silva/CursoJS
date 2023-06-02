function contar() {
  //Criando as variaveis que pegarão os valores de acordo "id"
  let inicio = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')

    //Verificando se estão faltando os dados - preenchidos.  
  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    
    res.style.textAlign = 'center' //Trabalhando com Estilo no JS
    res.style.fontWeight = '700'   //Trabalhando com Estilo no JS
    res.innerHTML = ('Não consigo contar!')
    //window.alert('[ERRO] FALTAM INFORMAÇÕES!')
    
  } else {
    //alert('INFORMAÇÕES CORRETAS!')
    res.innerHTML = 'Contando: ... <br>'

      /* === Criando 3 variaveis númericas === */
    let i = Number(inicio.value) //Convertendo os valores das variaveis acima
    let f = Number(fim.value)
    let p = Number(passo.value)

    /* === Para zero e negativos não serem considerados === */
    if (p <= 0) {
      window.alert('Valor do passo inválido! Considerando PASSO = 1')
      p = 1
    }

    if (i < f) {
      //Contagem Crescente
      for(let c = i; c <= f ; c += p){
        res.style.textAlign = 'center'
        res.innerHTML += ` ${c} ` /* Unicode só funcina com Crases. */
        
  }
    } else {
      //Contagem Decrescente
        for(let c = i; c >= f; c -= p){
          res.style.textAlign = 'center'
          res.innerHTML += ` ${c} \u{27A1}  `
         
        }
    }
     res.innerHTML += `\u{2705} ` 
     
  }

}
