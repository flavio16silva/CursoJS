// criando os 2 objetos - var (msg e img)

function carregar () { 
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date() //Pegando a data do dia
//var hora = data.getHours() // Pegando a hora atual
var min = data.getMinutes()
var segundo = data.getSeconds()
var hora = 22
msg.innerHTML = `Agora são ${hora} horas  ${min} minutos e ${segundo} segundos.`


if (hora >= 0 && hora < 12) {
  //Bom dia 
  img.src = 'manha.jpg'
  document.body.style.background = '#c0d8e2'
  mensagem.innerHTML = "Bom dia!"
} else if (hora >= 12 && hora <= 18) {
  //Boa tarde
  img.src = 'tarde.jpg'
  document.body.style.background = '#be8666'
  mensagem.innerHTML = "Boa tarde!"
} else {
  //Boa noite
  img.src = 'noite.jpg' //Trazendo a imagem 
  document.body.style.background = '#763762' //Mudando a cor de fundo
  mensagem.innerHTML = "Boa noite!"
}



}
