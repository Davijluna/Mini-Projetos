Algoritmo "sequência de fibonacci"

Var
   C, n1, n2, soma: inteiro


Inicio
   n1 <- 0
   n2 <- 1
   escreva(n1)
   escreva(n2)

   para C <- 3 ate 15  faca
      soma <- n1 + n2
      escreva(soma)

      n1 <- n2
      n2 <- soma
   fimpara
Fimalgoritmo