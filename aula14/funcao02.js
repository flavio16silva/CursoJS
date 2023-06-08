function soma(n1, n2) {
  return n1 + n2
}

console.log(soma(2, 5))

//Caso não haja outro parametro passado na soma, podemos inserir os parametros predefinidos ou opcionais n1=0, n2=0.

function soma(n1=0, n2=0) {
  return n1 + n2
}

console.log(soma(8))