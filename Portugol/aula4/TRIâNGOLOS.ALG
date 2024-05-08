Algoritmo "triângolos"
// Data atual  : 08/05/2024
Var

l1, l2, l3 : real

EQ, ES, TRI : logico
Inicio
      escreva("Digite o primeiro lado: ")
      leia(l1)
      escreva("Digite o segundo lado: ")
      leia(l2)
      escreva("Digite o terceiro lado: ")
      leia(l3)
      TRI <- (l1 < l2 + l3) e (l2 < l1 + l3) e (l3 < l2 + l1)
      EQ <- (l1 = l2) e (l2 = l3)
      ES <- (l1 <> l2)  e (l2 <> l3) e (l1 <> l3)
      escreval("O triângulo é Equilatero: ", EQ)
      escreval("O triângulo é Escaleno: ", ES)
      escreval("Pode formar um triângulo: ", TRI)

Fimalgoritmo