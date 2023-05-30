// criando os 2 objetos - var (msg e img)

function carregar () { 
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date() //Pegando a data do dia
var hora = data.getHours() // Pegando a hora atual
var min = data.getMinutes()
var segundo = data.getSeconds()
//var hora = 23
msg.innerHTML = `Agora são ${hora} horas  ${min} minutos e ${segundo} segundos.`


if (hora >= 0 && hora < 12) {
  //Bom dia 
  img.src = 'manha.jpg'
  document.body.style.background = '#c0d8e2' //cor do background 
  mensagem.innerHTML = "Bom dia!" //Mensagem do dia
} else if (hora >= 12 && hora <= 18) {
  //Boa tarde
  img.src = 'tarde.jpg'
  document.body.style.background = '#be8666'
  mensagem.innerHTML = "Boa tarde!" //Mensagem da tarde
} else {
  //Boa noite
  img.src = 'noite.jpg' //Trazendo a imagem 
  document.body.style.background = '#763762' //Mudando a cor de fundo
  mensagem.innerHTML = "Boa noite!" //Mensagem da noite
}



}




/* O Construtor  new Date()  retorna um OBJETO de DATA com: DIA da SEMANA, DATA, HORA ATUAL e FUSO HORÁRIO. Ex:
Fri Nov 04 2022 08:30:47 GMT-0300 (Horário Padrão de Brasília)

  Por ser um Construtor,  new Date()  permite-nos criar OBJETOS de DATA ESPECÍFICOS A PARTIR DELE. Para fazer isto, primeiramente, para facilitar, guarda-se o new Date() dentro de uma variável, desta forma:
  data = new Date() 


E depois você pode usar algum destes MÉTODOS:

data.getFullYear()         Retorna o ANO atual (yyyy)
data.getMonth()	           Retorna o MÊS atual (0-11)
data.getDate()	           Retorna o DIA atual (1-31)
data.getDay()	             Retorna o DIA da SEMANA atual como um NÚMERO (0-6) *0 = domingo; 6 = sábado.
data.getHours()	           Retorna a HORA atual (0-23)
data.getMinutes()          Retorna os MINUTOS atuais (0-59)
data.getSeconds()          Retorna os SEGUNDOS atuais (0-59)
data.getMilliseconds()     Retorna os MILISSEGUNDOS atuais (0-999)
data.getTime()	           Retorna os MILISSEGUNDOS desde o dia 1 de Janeiro de 1970 (WTF? xD)
*/
