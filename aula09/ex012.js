var agora = new Date()
var diaSem = agora.getDay() //getDay irá pegar o Dia da semana
/*
Para o JS os dias da semana são dessa forma: 
Domingo = 0, Segunda = 1, Terça = 2, Quarta = 3, Quinta = 4, Sexta = 5 e sábado = 6 */

//console.log(diaSem)
//diaSem = 8 - inserindo o dia manualmente para testar todas as opções 
switch(diaSem) {
  case 0:
      console.log('Domingo')
      break
  case 1:
      console.log('Segunda')
      break
  case 2:
      console.log('Terça') 
      break
  case 3:
      console.log('Quarta')
      break
  case 4:
      console.log('Quinta')
      break
  case 5:
      console.log('Sexta')                   
      break
  case 6:
      console.log('Sabado')
      break
  default:
      console.log('[ERRO] Dia Inválido')
      break          
}    

/*
Estrutura Condicional Aninhada: IF/ELSE IF/ELSE (se/senão se/senão)

Se (if) condição1 for VERDADEIRA, execute o Bloco A.
Senão (else), se (if) condição2 for VERDADEIRA, execute o Bloco B.
Senão (else), execute o Bloco C.

  Ilustração:
if (condição1) {
    Bloco A
} else if (condição2) {
    Bloco B
} else {
    Bloco C
}
____________________________

  Estrutura Condicional Múltipla: SWITCH (expressão)
*tradução: switch = escolha; 
           case = caso

ESCOLHA a EXPRESSÃO1 (switch (expressão1)) como REFERÊNCIA.
EXECUTE o BLOCO do CASO que CORRESPONDA à EXPRESSÃO1.

No exemplo da aula, escolheu-se a variável  "DiaSem"  como REFERÊNCIA. Esta variável representa o DIA da SEMANA em forma de NÚMERO, onde 0 = domingo; 6 = sábado.
Depois criou-se um CASO para cada DIA, onde cada um têm seu próprio VALOR, este CAPAZ de ser CORRELACIONADO com algum DIA, e BLOCO de CÓDIGOS.
Quando a estrutura SWITCH é LIDA, CORRELACIONA-SE o VALOR da EXPRESSÃO (DiaSem) com o VALOR de cada CASO. Aquele CASO que COINCIDIR, terá o seu BLOCO EXECUTADO.

  Ilustração:
switch(diaSem) {
    case 0:
        console.log ('Domingo')
        break
    case 1:
        console.log ('Segunda-feira')
        break
    case 2:
        console.log ('Terça-feira')
        break
    case 3:
        console.log ('Quarta-feira')
        break
    case 4:
        console.log ('Quinta-feira')
        break
    case 5:
        console.log ('Sexta-feira')
        break
    case 6:
        console.log ('Sábado')
    default:
        console.log ('[ERRO] - DIA INVÁLIDO')
}

*O  break  serve para QUEBRAR, PARAR a EXECUÇÃO dentro do BLOCO. Caso não utilize-o, os PRÓXIMOS CASOS serão EXECUTADOS, mesmo que não haja a correlação do VALOR da EXPRESSÃO com o VALOR do CASO. Isto irá ocorrer até que se encontre um  break. Não é NECESSÁRIO utilizar o  break no ÚLTIMO CASO dado que, por ser o último, este já irá PARAR a EXECUÇÃO de qualquer forma (mas se quiser usar, pode usar, só não irá fazer diferença).

*O  default:  serve para, se NENHUM dos CASOS SERVIR, executa-se o  default:. Caso o  default:  esteja por ÚLTIMO, também não é necessário pôr o break. Entretanto, caso esteja, por exemplo, em 1°, é NECESSÁRIO pôr o break  pois, senão, ele irá executar os PRÓXIMOS CASOS até encontrar um break.
*A estrutura  switch() é um pouco limitada pois, no VALOR de cada CASO, só é possível utilizar "NÚMEROS INTEIROS e STRINGS".


*/
