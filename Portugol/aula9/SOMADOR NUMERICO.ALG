Algoritmo "somador numerico"

Var
   cont, s, n, maior: inteiro
Inicio
      cont <- 1
      s <- 0
      enquanto (cont <= 5) faca
               escreva("Digite o ", cont, "o. valor : ")
               leia(n)
               se (n > maior) entao
                  maior <- n
               fimse
               s <- s + n
               cont <- cont + 1
      fimenquanto
                 escreval("A soma de todos os valores foi ", s)
                 escreval("O maior valor digitado foi ", maior)
Fimalgoritmo
