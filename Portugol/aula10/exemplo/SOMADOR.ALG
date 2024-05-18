Algoritmo "somador"
// USANDO O "ENQUANTO" PARA FAZER AS SOMAS

Var
  N, s, cont, rep : inteiro

Inicio
      escreva("Quantas vezes você quer que repita?")
      leia(rep)
      s <- 0
      cont <- 1
      
      enquanto (cont <= rep) faca
               escreva("Digite o ", cont, "O valor ==> ")
               leia(N)
               s <- s + N
               cont <- cont + 1
      fimenquanto
      escreval("A soma de todos os números é ", s)
      
Fimalgoritmo