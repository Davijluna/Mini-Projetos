Algoritmo "fatorial"

Var
     total, C, N: inteiro
     R : caractere
Inicio
      repita
        escreva("Digite um numero: ")
        leia(N)
        C <- N
        total <- 1
        repita
              escreval(C)
              total <- total * C
              C <- C - 1
        ate(C < 1)
        escreval(total)
        escreval("Quer continuar? : [S/N]")
        leia(R)
        limpatela
      ate (R = "N")
Fimalgoritmo