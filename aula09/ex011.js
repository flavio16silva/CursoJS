//Buscando hora atual do sistema
var agora = new Date() //Cria a variavel agora
var hora = agora.getHours() //Variavel "hora" recebe o valor da variavel "agora", que é a quantidade de horas.
console.log(`Agora são ${hora} horas.`)
if (hora < 6) {
  console.log ('Boa madrugada')
} else if (hora < 12) {
  console.log('Bom dia')
}else if (hora <= 18) {
  console.log ('Boa tarde')
} else {
  console.log('Boa noite')
}