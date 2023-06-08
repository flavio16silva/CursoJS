//Função Recursiva - é quando uma função chama ela mesma, dentro da função.
//Calculando o Fatorial

function fat(n) {             //Uma função fatorial (fat) que tem uma chamada para ela mesma  
    if ( n == 1) {           // Se estou calculando o fatorial de 1
        return 1
    } else {                 //Senão for o calculo do fatorial de 1   
        return n * fat(n-1)  //Sendo chamada pela própria função (fat)
    }
}

console.log(fat(5))


/* 
5! = 5 x 4 x 3 x 2 x 1
 Podemos dizer também que o fatorial de 5! é:
 5! = 5 x 4!

 n! = n x (n-1) - O fatorial de um numero é: "o numero, vezes o fatorial deste número menos 1"
 1! = 1
*/