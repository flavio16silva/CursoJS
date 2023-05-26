 var idade = 12
  console.log(`Você tem ${idade} anos.`)
 if (idade < 16) {
  console.log('Não vota')
 } else if (idade < 18 || idade > 65 ) { // (idade >= 16 && idade < 18), Se a "idade < 16" automaticamente a idade será >= 16, pode tirar pois já cabe na condição.
     console.log('Voto opcional')
 } else { //if (idade >= 18) - Pela condição acima podemos entender que todos maiores que 18 irão votar. 
      console.log('Voto Obrigatório')
 }