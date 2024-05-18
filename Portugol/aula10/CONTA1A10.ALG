Algoritmo "Conta1a10"

Var
   cont, N, R: inteiro
Inicio
      cont <- 1
     // N <- 7
      escreval("Quer ver a tabuada de qual numero?")
      leia(N)
      repita
            R <- N * cont
            escreval(N," X ",cont, " = ", R)
            cont <- cont + 1
      ate (cont > 10)


Fimalgoritmo