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
